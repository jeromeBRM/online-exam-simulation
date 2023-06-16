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

class QuestionsList {
  constructor(questions) {
    this.questions = questions;
  }

  mount() {

	// create the parent container of all questions in the DOM
	const questionsContainer = document.createElement('div');

	// create each question in the DOM
	this.questions.forEach(question => {
	  questionsContainer.appendChild(new QuestionElement(question).mount());
	});

	return questionsContainer;
  }
}

class QuestionElement {
  constructor(question) {
	this.question = question;
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
	  choicesContainer.appendChild(new ChoiceElement(this.question, choice).mount());
	});

	return questionContainer;
  }
}

class ChoiceElement {
  constructor(parentQuestion, choice) {
	this.parentQuestion = parentQuestion;
    this.choice = choice;
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
	choiceInput.name = this.parentQuestion.title;
	choiceContainer.appendChild(choiceInput);
	
	// create the label of the choice in the DOM
	const choiceLabel = document.createElement('label');
	choiceLabel.innerText = this.choice.title;
	choiceLabel.htmlFor = this.uniqueId;
	choiceContainer.appendChild(choiceLabel);

	return choiceContainer;
  }
}

function load(questions) {
  document.querySelector('div#questions').appendChild(new QuestionsList(questions).mount());
}

load(questions);