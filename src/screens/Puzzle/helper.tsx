import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const getNumOfColumns = (): number => {
  const boxWidth = 40;
  const spaceBetweenBoxes = 10 + 20;
  const numColumns = Math.floor(
    (width - spaceBetweenBoxes) / (boxWidth + spaceBetweenBoxes),
  );
  return numColumns;
};

const shuffleWord = (word: string) => {
  const shuffled = [...word];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getGuestUserName = (num: number): string => {
  return `Guest_${num}`;
};

export {shuffleWord, getNumOfColumns, getGuestUserName};
