import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  FlatList,
  TouchableHighlight,
  ListRenderItemInfo,
  Share,
} from 'react-native';
import useApi from '../../hooks/useApi';
import wordsApi from '../../api/wordsApi';
import PagerView from 'react-native-pager-view';
import {PuzzleScreenProps} from '../../navigation/types';
import Loader from '../../components/Loader';
import {IWords} from '../../types/words.types';
import AppText from '../../components/AppText';
import Button from '../../components/Button';
import {getGuestUserName, getNumOfColumns, shuffleWord} from './helper';
import {showAlert} from '../../utils/alertUtils';
import styles from './styles';
import {
  CORRECT_TEXT,
  EARN_TEXT,
  NEXT,
  NO_DATA_AVAILABLE,
  POINTS,
  SCORE_SUMMARY,
  SHARE,
  SKIP,
  TOTAL_SCORE,
  WRONG_TEXT,
} from '../../utils/constants';
import {UsersContext} from '../../contexts/usersData';

type IScoreStatus = {
  currentScore: number;
  totalScore: number;
  showResult: boolean;
};

const initialScoreStatus: IScoreStatus = {
  currentScore: 0,
  totalScore: 0,
  showResult: false,
};

const numColumns = getNumOfColumns();

const PuzzleScreen: React.FC<PuzzleScreenProps> = ({navigation, route}) => {
  const pagerViewRef = useRef<any>();

  const [words, setWords] = useState<Array<IWords>>([]);
  const [activePage, setActivePage] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<Array<string>>([]);
  const [selectedBoxes, setSelectedBoxes] = useState<Array<number>>([]);
  const [scoreStatus, setScoreStatus] =
    useState<IScoreStatus>(initialScoreStatus);

  const getWordsApi = useApi(wordsApi);
  const {users, setUsers} = useContext(UsersContext);

  useEffect(() => {
    const fetchWords = async () => {
      const {categoryId} = route.params;
      const wordsData = await getWordsApi.request(categoryId);
      if (wordsData) {
        setWords(wordsData);
        setCurrentWord(shuffleWord(wordsData?.[0]?.word ?? ''));
      }
    };
    fetchWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageScroll = ({nativeEvent}: any) => {
    setActivePage(nativeEvent.position);
  };

  const saveUserData = () => {
    setUsers([
      ...users,
      {
        name: getGuestUserName(users.length),
        totalScore: scoreStatus.totalScore,
      },
    ]);
    navigation.canGoBack() && navigation.goBack();
  };

  const shareScore = async () => {
    // to share score as a text
    await Share.share({
      message: `${TOTAL_SCORE} ${scoreStatus.currentScore} ${POINTS}`,
    });
  };

  const handleOnNext = (currIndex: number) => {
    const isLastPage = words.length - 1 === activePage;
    const {showResult, totalScore} = scoreStatus;

    // check to show puzzle result or not
    if (showResult) {
      if (isLastPage) {
        // to show total score result
        showAlert({
          title: SCORE_SUMMARY,
          singleButton: false,
          message: `${TOTAL_SCORE} ${scoreStatus.totalScore}`,
          negativeText: SHARE,
          positiveAction: () => saveUserData(),
          negativeAction: () => shareScore(),
        });
      } else {
        setScoreStatus({
          ...scoreStatus,
          currentScore: 0,
          showResult: false,
        });
        setSelectedBoxes([]);
        setCurrentWord(shuffleWord(words[currIndex + 1].word));
        pagerViewRef.current.setPage(currIndex + 1);
      }
    } else {
      // check to validate whether puzzle solved or not
      const {word, complexityPoints} = words[currIndex];
      let wordToMatch = '',
        wordLength = currentWord.length;
      selectedBoxes.forEach(idx => (wordToMatch += currentWord[idx]));
      if (word === wordToMatch) {
        // calculate score based on word length and complexity of the word
        const currScore = wordLength * 10 * complexityPoints;
        setScoreStatus({
          showResult: true,
          currentScore: currScore,
          totalScore: totalScore + currScore,
        });
      } else {
        setScoreStatus({
          ...scoreStatus,
          currentScore: 0,
          showResult: true,
        });
      }
    }
  };

  const renderUpperBox = useCallback(
    ({index}: ListRenderItemInfo<any>) => {
      return (
        <TouchableHighlight key={index} style={styles.box} onPress={() => {}}>
          <AppText style={styles.letter}>
            {selectedBoxes.length > index && currentWord[selectedBoxes[index]]}
          </AppText>
        </TouchableHighlight>
      );
    },
    [currentWord, selectedBoxes],
  );

  const renderBottomBox = useCallback(
    ({item, index}: ListRenderItemInfo<any>) => {
      const isBoxSelected = selectedBoxes.some(idx => idx === index);
      return (
        <TouchableHighlight
          key={index}
          style={[styles.box, isBoxSelected && styles.selectedBox]}
          onPress={() => {
            if (!isBoxSelected) {
              setSelectedBoxes([...selectedBoxes, index]);
            }
          }}>
          <AppText style={styles.letter}>{!isBoxSelected && item}</AppText>
        </TouchableHighlight>
      );
    },
    [selectedBoxes],
  );

  const renderDescription = useCallback((currWord: IWords) => {
    const {description, complexityLevel} = currWord;
    return (
      <>
        <AppText style={styles.descriptionText} numberOfLines={2}>
          {description}
        </AppText>
        <AppText numberOfLines={1} style={styles.complexityText}>
          {complexityLevel}
        </AppText>
      </>
    );
  }, []);

  const renderActionButton = useCallback(
    () => {
      const hasToDisable = !(
        selectedBoxes.length === 0 ||
        selectedBoxes.length === currentWord.length
      );
      const isBoxSelected = selectedBoxes.length !== 0;
      const isLastPage = activePage === words.length - 1;
      return (
        <Button
          style={hasToDisable ? styles.disableButton : styles.activeButton}
          disabled={hasToDisable}
          title={isBoxSelected ? NEXT : SKIP}
          onPress={() => {
            if (isBoxSelected || isLastPage) {
              handleOnNext(activePage);
            } else {
              setSelectedBoxes([]);
              setCurrentWord(shuffleWord(words[activePage + 1].word));
              pagerViewRef.current.setPage(activePage + 1);
            }
          }}
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activePage, scoreStatus, selectedBoxes, words],
  );

  return (
    <View style={styles.mainContainer}>
      <Loader visible={getWordsApi.loading} />
      {words.length > 0 ? (
        <>
          <PagerView
            style={styles.container}
            initialPage={0}
            scrollEnabled={false}
            orientation={'horizontal'}
            onPageScroll={onPageScroll}
            ref={pagerViewRef}>
            {words.map((currWord, currIndex) => {
              const numOfColumns = Math.min(currWord.word?.length, numColumns);
              const isScoreZero = scoreStatus.currentScore === 0;
              return (
                <View
                  key={currWord.word}
                  collapsable={true}
                  style={styles.itemStyle}>
                  <AppText>{`${currIndex + 1}/${words.length}`}</AppText>
                  {scoreStatus.showResult ? (
                    <View style={styles.resultContainer}>
                      <AppText
                        style={[
                          styles.resultText,
                          isScoreZero && styles.resultErrorText,
                        ]}>
                        {isScoreZero ? WRONG_TEXT : CORRECT_TEXT}
                      </AppText>
                      <AppText
                        style={[
                          styles.pointsText,
                          isScoreZero && styles.resultErrorText,
                        ]}>{`${EARN_TEXT} ${scoreStatus.currentScore} ${POINTS}`}</AppText>
                    </View>
                  ) : (
                    <>
                      <FlatList
                        data={[...currWord.word]}
                        numColumns={numOfColumns}
                        renderItem={renderUpperBox}
                        keyExtractor={(_, index) => index.toString()}
                        contentContainerStyle={styles.boxContainer}
                        ListFooterComponent={renderDescription(currWord)}
                      />
                      <FlatList
                        data={currentWord}
                        numColumns={numOfColumns}
                        renderItem={renderBottomBox}
                        keyExtractor={(_, index) => index.toString()}
                        contentContainerStyle={styles.boxContainer}
                      />
                    </>
                  )}
                </View>
              );
            })}
          </PagerView>
          {renderActionButton()}
        </>
      ) : (
        <>
          {!getWordsApi.loading && (
            <AppText style={styles.errorText}>{NO_DATA_AVAILABLE}</AppText>
          )}
        </>
      )}
    </View>
  );
};

export default PuzzleScreen;
