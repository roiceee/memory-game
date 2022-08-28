import jackOfClubs from "../assets/jack_of_clubs2.png"
import jackOfDiamonds from "../assets/jack_of_diamonds2.png"
import jackOfHearts from "../assets/jack_of_hearts2.png"
import jackOfSpades from "../assets/jack_of_spades2.png"
import kingOfClubs from "../assets/king_of_clubs2.png"
import kingOfDiamonds from "../assets/king_of_diamonds2.png"
import kingOfHearts from "../assets/king_of_hearts2.png"
import kingOfSpades from "../assets/king_of_spades2.png"
import queenOfClubs from "../assets/queen_of_clubs2.png"
import queenOfDiamonds from "../assets/queen_of_diamonds2.png"
import queenOfHearts from "../assets/queen_of_hearts2.png"
import queenOfSpades from "../assets/queen_of_spades2.png"

const levelArr = [
    {
        "id": 1,
        "length": 4,
        "cards": [
            {
                "id": 0,
                "src": jackOfClubs,
                "isClicked": false
            },
            {
                "id": 1,
                "src": queenOfDiamonds,
                "isClicked": false
            },
            {
                "id": 2,
                "src": kingOfHearts,
                "isClicked": false
            },
            {
                "id": 3,
                "src": queenOfSpades,
                "isClicked": false
            },
        ]
    },
    {
        "id": 2,
        "length": 8,
        "cards": [{
            "id": 0,
            "src": jackOfClubs,
            "isClicked": false
        },
        {
            "id": 1,
            "src": queenOfDiamonds,
            "isClicked": false
        },
        {
            "id": 2,
            "src": kingOfHearts,
            "isClicked": false
        },
        {
            "id": 3,
            "src": queenOfSpades,
            "isClicked": false
        },
        {
            "id": 4,
            "src": kingOfClubs,
            "isClicked": false
        },
        {
            "id": 5,
            "src": kingOfDiamonds,
            "isClicked": false
        },
        {
            "id": 6,
            "src": jackOfHearts,
            "isClicked": false
        },
        {
            "id": 7,
            "src": kingOfSpades,
            "isClicked": false
        },]
    },
    {
        "id": 3,
        "length": 12,
        "cards": [{
            "id": 0,
            "src": jackOfClubs,
            "isClicked": false
        },
        {
            "id": 1,
            "src": queenOfDiamonds,
            "isClicked": false
        },
        {
            "id": 2,
            "src": kingOfHearts,
            "isClicked": false
        },
        {
            "id": 3,
            "src": queenOfSpades,
            "isClicked": false
        },
        {
            "id": 4,
            "src": kingOfClubs,
            "isClicked": false
        },
        {
            "id": 5,
            "src": kingOfDiamonds,
            "isClicked": false
        },
        {
            "id": 6,
            "src": jackOfHearts,
            "isClicked": false
        },
        {
            "id": 7,
            "src": kingOfSpades,
            "isClicked": false
        },
        {
            "id": 8,
            "src": queenOfClubs,
            "isClicked": false
        },
        {
            "id": 9,
            "src": jackOfDiamonds,
            "isClicked": false
        },
        {
            "id": 10,
            "src": queenOfHearts,
            "isClicked": false
        },
        {
            "id": 11,
            "src": jackOfSpades,
            "isClicked": false
        },]
    },   
]

function resetLevelArr() {
    levelArr.forEach((level,index) => {
        levelArr[index].cards.forEach((card, cardIndex) => {
            levelArr[index].cards[cardIndex].isClicked = false;
        })
    })
}

export {levelArr as default, resetLevelArr};