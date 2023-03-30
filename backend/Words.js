const {v4: uuidv4} = require('uuid');

// complexity of puzzle(Easy - 1 points, Medium - 2 points, Hard - 3 points)

const words = [
  {
    id: uuidv4(),
    categoryId: '8f6aba43-f445-4449',
    puzzle: [
      {
        word: 'Singapore',
        description: 'Capital of Singapore?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
      {
        word: 'NewDelhi',
        description: 'Capital of India?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
      {
        word: 'AbuDhabi',
        description: 'Capital of United Arab Emirates?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    categoryId: '01f4185b-18e6-4ed5',
    puzzle: [
      {
        word: 'Ethiopia',
        description: 'Where does coffee originate from?',
        complexityLevel: 'Hard',
        complexityPoints: 3,
      },
      {
        word: 'Wheat',
        description: 'Lectin protein is found in?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
      {
        word: 'Mexico',
        description: 'Where does the Caesar salad originate from?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
    ],
  },
  {
    id: uuidv4(),
    categoryId: 'a3d3b490-e419-446f',
    puzzle: [
      {
        word: 'Giraffe',
        description: 'What animal has the highest blood pressure?',
        complexityLevel: 'Medium',
        complexityPoints: 2,
      },
      {
        word: 'Hippopotamus',
        description: 'What mammal has the most powerful bite?',
        complexityLevel: 'Hard',
        complexityPoints: 3,
      },
      {
        word: 'Bats',
        description: 'What is the only mammal capable of true flight?',
        complexityLevel: 'Easy',
        complexityPoints: 1,
      },
    ],
  },
  {
    id: uuidv4(),
    // categoryId: 'bb0acd16-eb7f-47e4',
    puzzle: [],
  },
  {
    id: uuidv4(),
    // categoryId: '8ab82232-3985-449f',
    puzzle: [],
  },
];

module.exports = words;
