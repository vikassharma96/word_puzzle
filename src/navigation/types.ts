import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Puzzle: {categoryId: string};
  Score: undefined;
  LeadersBoard: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type PuzzleScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Puzzle'
>;
export type ScoreScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Score'
>;
export type LeadersBoardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LeadersBoard'
>;
