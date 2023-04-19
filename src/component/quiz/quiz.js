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
			questionText: 'Which of the following is the correct HTML code for adding an image to a web page?',
			answerOptions: [
				{ answerText: '<img href="image.jpg">', isCorrect: false },
				{ answerText: '<image src="image.jpg">', isCorrect: false },
				{ answerText: '<img src="image.jpg">', isCorrect: true },
				{ answerText: '<image href="image.jpg">', isCorrect: false },
			],
		},
		{
			questionText: 'Which HTML element is used for the largest heading?',
			answerOptions: [
				{ answerText: '<h6>', isCorrect: false },
				{ answerText: '<h5>', isCorrect: false },
				{ answerText: '<h2>', isCorrect: false },
				{ answerText: '<h1>', isCorrect: true },
			],
		},
		{
			questionText: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
			answerOptions: [
				{ answerText: ' alt', isCorrect: true },
				{ answerText: 'title', isCorrect: false },
				{ answerText: 'href', isCorrect: false },
				{ answerText: 'src', isCorrect: false },
			],
		},
		{
			questionText: 'Which HTML element is used to define a bullet list?',
			answerOptions: [
				{ answerText: '<list>', isCorrect: false },
				{ answerText: '<ul>', isCorrect: true },
				{ answerText: '<li>', isCorrect: false },
				{ answerText: '<ol>', isCorrect: false },
			],
		},
		{
			questionText: 'Which HTML element is used to define a table?',
			answerOptions: [
				{ answerText: '<tr>', isCorrect: false },
				{ answerText: '<tab>', isCorrect: true },
				{ answerText: '<table>', isCorrect: false },
				{ answerText: '<td>', isCorrect: false },
			],
		},
		{
			questionText: 'Which HTML attribute specifies a short hint that describes the input field?',
			answerOptions: [
				{ answerText: 'alt', isCorrect: false },
				{ answerText: 'value', isCorrect: false },
				{ answerText: 'placeholder', isCorrect: false },
				{ answerText: 'title', isCorrect: true },
			],
		},
		{
			questionText: 'Which HTML element is used to create a submit button?',
			answerOptions: [
				{ answerText: '<input type="submit">', isCorrect: true },
				{ answerText: ' <button type="submit">', isCorrect: false },
				{ answerText: '<button type="button">', isCorrect: false },
				{ answerText: '<input type="button">', isCorrect: false },
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