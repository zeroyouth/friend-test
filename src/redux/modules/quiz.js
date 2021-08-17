// Actions

// 퀴즈 데이터 가져온다
const GET_QUIZ = "quiz/GET_QUIZ";
// 유저의 응답(퀴즈 답)을 추가한다
const ADD_ANSWER = "quiz/ADD_ANSWER";
// 응답을 초기화 해준다
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "영은이",
  score_texts: {
    60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
    80: "우와! 우리는 엄청 가까운 사이!",
    100: "둘도 없는 단짝이에요! :)",
  },
  answers: [],
  quiz: [
    { question: "영은이는 여월동에 살고 있다", answer: "O" },
    { question: "영은이는 24살이다.", answer: "O" },
    { question: "영은이는 현재 졸업을 했다.", answer: "X" },
    { question: "영은이 생일은 7월 27일이다.", answer: "X" },
    { question: "영은이 동생이름은 은영이다.", answer: "O" },
    { question: "영은이가 좋아하는 색은 흰색이다.", answer: "O" },
    { question: "영은이는 강아지보다 고양이를 좋아한다", answer: "O" },
    // { question: "르탄이는 6살이다.", answer: "O" },
    // { question: "르탄이는 7살이다.", answer: "O" },
    // { question: "르탄이는 8살이다.", answer: "O" },
    // { question: "르탄이는 9살이다.", answer: "O" },
    // { question: "르탄이는 10살이다.", answer: "O" },
    // { question: "르탄이는 11살이다.", answer: "O" },
  ],
};

// Action Creators
export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return {...state, answers: []};
    }

    default:
      return state;
  }
}
// // Actions

// // 퀴즈 데이터 가져온다
// const GET_QUIZ = "quiz/GET_QUIZ";
// // 유저의 응답(퀴즈 답)을 추가한다
// const ADD_ANSWER = "quiz/ADD_ANSWER";
// // 응답을 초기화 해준다
// const RESET_ANSWER = "quiz/RESET_ANSWER";

// const initialState = {
//   name: "르탄이",
//   score_texts: {
//     60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
//     80: "우와! 우리는 엄청 가까운 사이!",
//     100: "둘도 없는 단짝이에요! :)",
//   },
//   answers: [],
//   quiz: [
//     { question: "영은이는 21살이다.", answer: "O" },
//     { question: "영은이는 22살이다.", answer: "O" },
//     { question: "영은이는 23살이다.", answer: "O" },
//     { question: "영은이는 24살이다.", answer: "O" },
//     { question: "영은이는 25살이다.", answer: "O" },
//     // { question: "르탄이는 6살이다.", answer: "O" },
//     // { question: "르탄이는 7살이다.", answer: "O" },
//     // { question: "르탄이는 8살이다.", answer: "O" },
//     // { question: "르탄이는 9살이다.", answer: "O" },
//     // { question: "르탄이는 10살이다.", answer: "O" },
//     // { question: "르탄이는 11살이다.", answer: "O" },
//   ],
// };

// // Action Creators
// export const getQuiz = (quiz_list) => {
//   return { type: GET_QUIZ, quiz_list };
// };

// export const addAnswer = (answer) => {
//   return { type: ADD_ANSWER, answer };
// };

// export const resetAnswer = () => {
//   return { type: RESET_ANSWER };
// }

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     // do reducer stuff
//     case "quiz/GET_QUIZ": {
//       return { ...state, quiz: action.quiz_list };
//     }

//     case "quiz/ADD_ANSWER": {
//       return { ...state, answers: [...state.answers, action.answer] };
//     }

//     case "quiz/RESET_ANSWER": {
//       return {...state, answers: []};
//     }

//     default:
//       return state;
//   }
// }