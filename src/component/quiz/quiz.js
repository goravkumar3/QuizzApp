import React,{useState} from "react";
import './../../css/quiz.css';
function QuizApp(){
    const [currentIndex,setcurrentIndex]=useState(0);
    const questions = [
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Home Tool Markup Language', isCorrect: false },
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
				{ answerText: 'Home Text Markup Language', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct HTML element for inserting a line break?',
			answerOptions: [
				{ answerText: '<br>', isCorrect: true },
				{ answerText: '<lb>', isCorrect: false },
				{ answerText: '<break>', isCorrect: false },
				{ answerText: '<ln>', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]
    const [quizFinished,setquizFinished]=useState(false);
    const [score,setScore]=useState(0);
const answerHandler=(Correct)=>{
    if(Correct){
        setScore((score)=>score+2);
    }
    if(currentIndex===questions.length-1){
        setquizFinished(true);
    }else{
    setcurrentIndex((index)=>index+1);
    }
}
    return(
        <div className="App">
                {quizFinished?(<div className="start">
                  <div>
                  <h1>quizFinished</h1>
                  <p>{score}/{questions.length*2}</p>
                  </div>
                </div>
              ):(
              <div className="start">
                <div>
                <h1>Question {currentIndex+1}/{questions.length}</h1>
                <p>{questions[currentIndex].questionText}</p>
                </div>
                <div className="ans">
                    {questions[currentIndex].answerOptions.map((ans)=>{
                        return(<button onClick={()=>answerHandler(ans.isCorrect)} key={ans.answerText} id="ansbtn">{ans.answerText}</button>)
                    })}
                </div>
              </div>
        )}
    </div>
    )
}
export default QuizApp