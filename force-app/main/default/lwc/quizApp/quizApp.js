import { LightningElement, track } from 'lwc';

export default class QuizApp extends LightningElement {

    selectedOption = {} // To store the selected options
    totalCorrectAnswers = 0 // Store total correct answers
    isSubmitted = false; // To Check if form is submitted
    myQuestions = [
        {
            questionId: 'Question 1',
            question: 'Which of the following is not template loop ?',
            options: {
                a: 'for:each',
                b: 'iterator',
                c: 'while loop'
            },
            correctAnswer: 'c'
        },
        {
            questionId: 'Question 2',
            question: 'Which of the following is not Directive ?',
            options: {
                a: 'for:each',
                b: '@track',
                c: 'if:true'
            },
            correctAnswer: 'b'
        },
        {
            questionId: 'Question 3',
            question: 'Which of the following files in invalid in LWC component folder ?',
            options: {
                a: '.apex',
                b: '.js',
                c: '.svg'
            },
            correctAnswer: 'a'
        },
    ]

    onchangeHandler(event) {
        const { name, value } = event.target;
        this.selectedOption = { ...this.selectedOption, [name]: value };
    }

    submitHandler(event) {
        event.preventDefault();
        let correctAnswer = this.myQuestions.filter(item => item.correctAnswer === this.selectedOption[item.questionId]);
        this.totalCorrectAnswers = correctAnswer.length;
        this.isSubmitted = true;
    }

    resetHandler() {
        this.selectedOption = {};
        this.totalCorrectAnswers = 0;
        this.isSubmitted = false;
    }

    get isScoreFull() {
        return `slds-text-heading_large ${this.totalCorrectAnswers === this.myQuestions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }
}