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

	// create each choice in the DOM
	this.question.choices.forEach(choice => {
	  choicesContainer.appendChild(new ChoiceElement(this.question, choice, this.scoreCounter).mount());
	});

	return questionContainer;
  }
}

class ChoiceElement {
  constructor(parentQuestion, choice, scoreCounter) {
	this.parentQuestion = parentQuestion;
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
    if (e.currentTarget.value == 'true') {
	  console.log(e.currentTarget.scoreCounter.prototype);
	  e.currentTarget.scoreCounter.addScore();
    }
    else {
   	  e.currentTarget.scoreCounter.removeScore();
    }
  }
}

function load(questions) {

  // main objects
  const scoreCounter = new ScoreCounter(questions.length);
  const questionsList = new QuestionsList(questions, scoreCounter).mount();

  document.querySelector('div#score').appendChild(scoreCounter.mount());
  document.querySelector('div#questions').appendChild(questionsList);
}

load(questions);