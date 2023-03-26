const {v4: uuidv4} = require('uuid');

const words = [
  {
    id: uuidv4(),
    categoryId: '8f6aba43-f445-4449',
    puzzle: [
      {
        word: 'Singapore',
        description: 'Capital of Singapore?',
      },
      {
        word: 'NewDelhi',
        description: 'Capital of India?',
      },
      {
        word: 'AbuDhabi',
        description: 'Capital of United Arab Emirates?',
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
      },
      {
        word: 'Wheat',
        description: 'Lectin protein is found in?',
      },
      {
        word: 'Mexico',
        description: 'Where does the Caesar salad originate from?',
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
      },
      {
        word: 'Hippopotamus',
        description: 'What mammal has the most powerful bite?',
      },
      {
        word: 'Bats',
        description: 'What is the only mammal capable of true flight?',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Science',
  },
  {
    id: uuidv4(),
    name: 'Maths',
  },
  {
    id: uuidv4(),
    categoryName: 'News',
  },
];

module.exports = words;
