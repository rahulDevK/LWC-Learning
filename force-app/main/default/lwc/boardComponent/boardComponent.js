import { api, LightningElement, track } from 'lwc';

export default class BoardComponent extends LightningElement {
    winWord = ''
    gridSize
    result

    @track wordList
    @api gameModeValue = '';
    columns;
    totalMoves;
    movesLeft;
    boardDisabled = false;

    @api starNewGame() {
        this.result = ''
        this.boardDisabled = false;
        ({ column: this.columns, totalMoves: this.totalMoves } = this.getGameParameters(this.gameModeValue));
        this.wordList = this.getWordList();
        this.wordList = this.randomizeArray(this.wordList);
        this.wordList = this.wordList.slice(0, this.columns * this.columns);
        this.winWord = this.getWinword(this.wordList);
        this.wordList = this.wordList.map(w => ({ 'word': w, 'open': false }))
        this.gridSize = 12 / this.columns;
    }

    getWordList() {
        return [
            "expansion",
            "grandfather",
            "nappy",
            "oranges",
            "beds",
            "quack",
            "achiever",
            "yell",
            "hospital",
            "winter",
            "understood",
            "squalid",
            "merciful",
            "reaction",
            "wipe",
            "fearless",
            "tiresome",
            "introduce",
            "planes",
            "drum",
            "muddle",
            "capable",
            "canvas",
            "route",
            "enchanted",
            "quirky",
            "switch",
            "apparatus",
            "loss",
            "agreement",
            "substance",
            "back",
            "oafish",
            "expand",
            "aromatic",
            "quarrelsome",
            "free",
            "useful",
            "raspy",
            "drown",
            "ring",
            "lush",
            "numberless",
            "embarrass",
            "shrill",
            "rice",
            "ice",
            "crow",
            "pumped",
            "sparkle",
            "instruct",
            "girl",
            "glass",
            "frog",
            "murky",
            "impolite",
            "crabby",
            "pin",
            "grade",
            "upbeat",
            "linen",
            "flaky",
            "side",
            "unknown",
            "cactus",
            "round",
            "busy",
            "grab",
            "crush",
            "faithful",
            "mother",
            "clean",
            "unhealthy",
            "event",
            "absent",
            "thoughtless",
            "icy",
            "prefer",
            "charge",
            "confuse",
            "clam",
            "dress",
            "snake",
            "evasive",
            "unit",
            "flow",
            "annoying",
            "gusty",
            "possessive",
            "rhetorical",
            "rule",
            "frantic",
            "farm",
            "poor",
            "possess",
            "men",
            "pleasant",
            "zoom",
            "sidewalk",
            "reply"
        ];
    }

    getGameParameters(gameMode) {
        let gameParams = {}
        if (gameMode === 'easy') {
            gameParams.column = 3
            gameParams.totalMoves = 3
        } else if (gameMode === 'medium') {
            gameParams.column = 4;
            gameParams.totalMoves = 6;
        } else if (gameMode === 'hard') {
            gameParams.column = 6;
            gameParams.totalMoves = 8;
        } else if (gameMode === 'tough') {
            gameParams.column = 6;
            gameParams.totalMoves = 12;
        }
        return gameParams;
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

    openWord(event) {
        let wordOpened = event.detail.word;
        this.wordList.find(item => item.word === wordOpened).open = true;
        this.totalMoves--;
        if (wordOpened === this.winWord) {
            this.result = 'You Win';
            this.boardDisabled = true;
            this.updateResultToParent(this.result, this.totalMoves);
        } else if (this.totalMoves === 0) {
            this.result = 'You Lose';
            this.boardDisabled = true;
            this.updateResultToParent(this.result, this.totalMoves);
        }
    }

    get resultClass() {
        let cl = 'slds-text-heading_medium';
        // return (this.result === 'You Win') ? `${cl} slds-text-color_success` : (this.result === 'You Lose') ? `${cl} slds-text-color_destructive` : cl;
        return (this.result === 'You Win') ? `${cl} slds-text-color_success` : `${cl} slds-text-color_destructive`;
    }

    updateResultToParent(resultValue, movesLeft) {
        let resultEvent = new CustomEvent('result',
            {
                detail:
                {
                    resultValue,
                    movesLeft
                }
            });
        this.dispatchEvent(resultEvent);
    }

    @api reshuffleBoard() {
        this.wordList = this.randomizeArray(this.wordList);
        ({ column: this.columns, totalMoves: this.totalMoves } = this.getGameParameters(this.gameModeValue));
        this.boardDisabled = false;
    }
}