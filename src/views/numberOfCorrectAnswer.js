import { quizData } from '../data.js';

export const getNumberOfCorrectAnswers = () => {
  const correctQuestions = quizData.questions.filter((question) => {
    return question.correct === question.selected;
  });

  return correctQuestions.length;
};
