/**
 * main.js
 * This file contains the main logic behind the program, including questions loading and score update.
 * The first called method is 'load(questions)' at the very bottom.
 *
 * @license CC0 1.0 Universal, https://creativecommons.org/publicdomain/zero/1.0/
 * @version 0.1
 * @author  Jérôme Braëms, https://github.com/jeromeBRM
 * @updated 16-06-2023
 *
 */

class QuestionsLoader {
  constructor(questions, amount) {
	this.questions = questions;
	this.amount = amount;
	this.loadIndex = 0;
  }
  
  load() {
	
	// clear old DOM elements
	document.querySelector('div#score').innerHTML = '';
	document.querySelector('div#questions').innerHTML = '';
	
	// reset objects to default
    const scoreCounter = new ScoreCounter(this.amount);
    const questionsList = new QuestionsList(this.questions.slice(this.loadIndex * this.amount, this.loadIndex * this.amount + this.amount), scoreCounter);

	// display new DOM elements
    document.querySelector('div#score').appendChild(scoreCounter.mount());
	document.querySelector('div#questions').appendChild(questionsList.mount());
	
	if (this.loadIndex * this.amount + this.amount > this.questions.length) {
	  this.loadIndex = 0;
	}
	else {
	  this.loadIndex++;
	}
  }
}

class ScoreCounter {
  constructor(max) {
    this.score = 0;
	this.max = max;
  }

  mount() {

	// create the parent container of the score in the DOM
	const scoreContainer = document.createElement('div');
	const scoreLabel = document.createElement('h4');
	scoreContainer.appendChild(scoreLabel);
	
	// register label as attribute of object
	this.scoreLabel = scoreLabel;

	// initilize score label
	this.updateScore();

	return scoreContainer;
  }
  
  addScore() {
	this.score++;
	this.updateScore();
  }
  
  removeScore() {
	this.score--;
	this.updateScore();
  }
  
  updateScore() {
	this.scoreLabel.innerText = ( this.score / this.max ) * 20 + '/20';
  }
}

class QuestionsList {
  constructor(questions, scoreCounter) {
    this.questions = questions;
	this.scoreCounter = scoreCounter;
  }

  mount() {

	// create the parent container of all questions in the DOM
	const questionsContainer = document.createElement('div');

	// create each question in the DOM
	this.questions.forEach(question => {
	  questionsContainer.appendChild(new QuestionElement(question, this.scoreCounter).mount());
	});

	return questionsContainer;
  }
}

class QuestionElement {
  constructor(question, scoreCounter) {
	this.question = question;
	this.scoreCounter = scoreCounter;
  }

  mount() {
	  
	// create the parent container of the question in the DOM
	const questionContainer = document.createElement('div');
	
	// create the title of the question in the DOM
	const questionTitle = document.createElement('h4');
	questionTitle.innerText = this.question.title;
	questionContainer.appendChild(questionTitle);
	
	// create the parent container of all choices in the DOM
	const choicesContainer = document.createElement('fieldset');
	questionContainer.appendChild(choicesContainer);

	// register choices container as attribute of object so all its child inputs can accessed in 'freeze()'
	this.choicesContainer = choicesContainer;

	// randomize order of choices
	this.shuffleChoices();

	// create each choice in the DOM
	this.question.choices.forEach(choice => {
	  choicesContainer.appendChild(new ChoiceElement(this.question, this, choice, this.scoreCounter).mount());
	});

	return questionContainer;
  }
  
  freeze() {
	this.choicesContainer.querySelectorAll('input').forEach((input) => {
	  input.disabled = true;
    });
  }
  
  shuffleChoices() {
    for (let i = this.question.choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.question.choices[i], this.question.choices[j]] = [this.question.choices[j], this.question.choices[i]];
    }
  }
}

class ChoiceElement {
  constructor(parentQuestion, questionElement, choice, scoreCounter) {
	this.parentQuestion = parentQuestion;
    this.questionElement = questionElement;
	this.choice = choice;
	this.scoreCounter = scoreCounter;
	
	this.uniqueId = this.parentQuestion.title + "/" + this.choice.title;
  }

  mount() {

	// create the parent container of the choice in the DOM
	const choiceContainer = document.createElement('div');

	// create the radio button of the choice in the DOM
	const choiceInput = document.createElement('input');
	choiceInput.type = 'radio';
	choiceInput.id = this.uniqueId;
	choiceInput.value = this.choice.correct;
	choiceInput.scoreCounter = this.scoreCounter;
	choiceInput.questionElement = this.questionElement;
	choiceInput.name = this.parentQuestion.title;
	choiceContainer.appendChild(choiceInput);
	
	// create the label of the choice in the DOM
	const choiceLabel = document.createElement('label');
	choiceLabel.innerText = this.choice.title;
	choiceLabel.htmlFor = this.uniqueId;
	choiceContainer.appendChild(choiceLabel);
	
	choiceInput.addEventListener('input', this.handleInput);

	return choiceContainer;
  }
  
  handleInput(e) {
	e.currentTarget.questionElement.freeze();
	
	const feedbackColor = e.currentTarget.value == 'true' ? '#c0ffc8' : '#ffc0c0' ;
	
    if (e.currentTarget.value == 'true') {
	  e.currentTarget.scoreCounter.addScore();
    }
    else {
   	  e.currentTarget.scoreCounter.removeScore();
    }
	
	e.currentTarget.parentNode.style.backgroundColor = feedbackColor;
  }
}

function main(questions) {
  const questionLoader = new QuestionsLoader(questions, 20);
  
  const loadButton = document.querySelector('button#loader');
  loadButton.questionLoader = questionLoader;
  
  loadButton.addEventListener('click', (e) => {
    e.currentTarget.questionLoader.load();
  });
  
  questionLoader.load();
}

main(questions);