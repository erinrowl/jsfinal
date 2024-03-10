// Base constructor for Cards

class Card {
    constructor(suit, name, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    
    }
}

// Base constructor for Players

class Player {
    constructor(name) {
        this.name = name; 
        this.points = 0;
        this.hands = [];
    }
}
//Constuctor for Card Deck

const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
const values = [ 'Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

class Deck {
    constructor() {
        this.deck = [];
        this.suit = [];
        this.cards = [];
        

    }
    
    createDeck() {
        console.log('Starting new Deck');
        for (let value in values) {
            this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
    }

    shuffledDeck() {
        console.log('Shuffling');
        const shuffledDeck = [];
        for (let i = 0; i < 52; i++) {
            let randomPosition = Math.floor((this.cards.length - i) * Math.random());
            let randomItem = this.cards.splice(randomPosition, 1);
            shuffledDeck.push(...randomItem);
        }
        return shuffledDeck;
    }

    freshDeck(players, shuffledCards) {
        console.log('Dealing Cards');
        let dealingCards1 = shuffledCards.splice(0, 26);
        for (let i = 0; i < dealingCards1.length; i++){
            players[0].hands.push(dealingCards1[i]);
        }
        let dealingCards2 = shuffledDeck.splice(0, 26);
        for (let i = 0; i < dealingCards2.length; i++){
            players[1].hands.push(dealingCards1[i]);
        }
    }
    
}
// Method used for Gameplay
class Game {
    constructor() {
        this.players = [];
    }
    
    start() {
        console.log('Play WAR', this.players);
        alert('Let the War begin...')

        let myDeck = new Deck();
        myDeck.createDeck();
        let shuffledDeck = myDeck.shuffledDeck();
    

        this.playGame();
        this.endGame();



        
    }
// use of pop method for cards and while loop
    playGame() {
        console.log('WAR');
        var player1 = this.players[0];
        let player2 = this.players[1];
        let turn = 0;
        let Winner = '';
        while (player1.hands.length!==0 && player2.hands.length !==0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
            if (player1Card.value > player2Card.value) {
                Winner = player1.name;
                player1.points += 1;
                console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 card:', player2Card.name, ' of ', player2Card.suit)
            }
        }

        if (player2Card.value > player1Card.value) {
            Winner = player2.name;
            player2.points += 1;
            console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', playerCard.suit, '\nPlayer 2 card: ', player2Card.name, ' of ', playerCard.suit)
        }
        else {
            console.log('Turn: ', (turn += 1), '\nPlayer 1 card: ', player1Card.name, ' of ', player1Card.suit, '\nPlayer 2 card: ', player2card.name, ' of ', player2card.suit)
        }
        

    }
// Winner is determined using if statement and is printed to the console
    endGame() {
        let gameWinner = '';
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        if(player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints = player1.points;
            alert(' The War is Over! ' + gameWinner + "Has Won!" + player1.name + ": " + player1.points + "\n" + player2.name + ' : ' + player2.points)
        } else if (player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert('GAME OVER' + gameWinner + "Has Won!" + player1.name + " :" + player1.points + "\n" + player2.name + ' : ' + player2.points)
        } else {
            alert('GAME OVER, TIE, Zero points for' + player1.name + player2.name)
        }
    }
}


let game = new Game();
game.start();

 