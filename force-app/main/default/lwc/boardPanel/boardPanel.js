import { LightningElement, track } from 'lwc';

export default class BoardPanel extends LightningElement {
    gameModeValue = '';
    wordCount = '';
    gameModeSelected = false;
    totalMoves;
    reshuffleDisable = true

    get gameModes() {
        return [
            { label: 'Easy', value: 'easy' },
            { label: 'Medium', value: 'medium' },
            { label: 'Hard', value: 'hard' },
            { label: 'Tough', value: 'tough' },
        ];
    }

    modeChangeHandler(event) {
        this.gameModeValue = event.detail.value;
    }

    startGameHandler() {
        console.log(`Start game handler`);
        if (!this.gameModeValue || this.gameModeValue === 'easy') {
            this.gameModeValue = 'easy';
        }
        this.gameModeSelected = true;
        //this.template.querySelector('c-board-component').getListOfWords();
        setTimeout(() => this.template.querySelector('c-board-component').starNewGame());
    }

    randomizeArray(arr) {
        const randomArr = arr;
        // Randomize the array
        for (let i = randomArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = randomArr[i];
            randomArr[i] = randomArr[j];
            randomArr[j] = temp;
        }
        return randomArr;
    }

    getWinword(arr) {
        let wordIndex = Math.floor(Math.random() * arr.length);
        return arr[wordIndex];
    }

    reshuffleHandler() {
        this.reshuffleDisable = true;
        this.template.querySelector('c-board-component').reshuffleBoard();
    }

    resultHandler(event) {
        const { resultValue, movesLeft } = event.detail;
        this.reshuffleDisable = (resultValue === 'You Lose') ? false : true;
    }
}