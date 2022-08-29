
import { quizData } from '../data.js';

export const reviewResult=()=>{
    const element = document.createElement('div')

    if(quizData.currentQuestionIndex > quizData.questions.length-1){
        element.innerHTML=`Quiz is completed`

    }
return element    

}