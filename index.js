"use strict";

const question = [
	{
		question: "where is Ethiopia Located",
		a : "Asia",
		b : "Europe",
		c : "Africa",
		d : "South America",
		correct : "c"
	},
	{
		question: "How many countries in Africa",
		a : 65,
		b : 43,
		c : 29,
		d : 54,
		correct : "d"
	},
	{
		question: "what is the largest animal on land",
		a : "Elephant",
		b : "Hippopotamus",
		c : "Giraffe",
		d : "Ostrich",
		correct : "a"
	},
	{
		question: "most of the world's oxygen is produced by",
		a : "Aerobic Bacteria",
		b : "Oceanic Plankton",
		c : "Forests",
		d : "Algae",
		correct : "b"
	},
	{
		question: "what is the apex predator of the world",
		a : "Orca",
		b : "Lion",
		c : "Sharks",
		d : "Siberian Tiger",
		correct : "d"
	},
];


question.forEach(n => {
    console.log(n);
})

const startBtn = document.getElementsByClassName('start-btn')[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];

const questionContainer = document.getElementsByClassName('question-container')[0];
const questionElement = document.getElementsByClassName("question")[0];
const options = document.querySelectorAll(".choices");

let questionIndex = 0;
let score = 0;







startBtn.addEventListener('click', starQuiz);

function starQuiz() {
	questionIndex = 0;
	score = 0;
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide');
	loadQuiz();
}

function loadQuiz() {
	let currentQuestion = question[questionIndex];
	questionElement.innerHTML = currentQuestion.question;
}