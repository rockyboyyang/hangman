const words = {
    "NFL Team": [
        'vikings', 'packers', 'bears', 'lions', 'rams', 'seahawks', 'niners', 'cardinals', 'cowboys', 'giants', 'eagles', 'washington', 'saints', 'bucaneers', 'panthers', 'falcons',
        'steelers', 'browns', 'ravens', 'bengals', 'chargers', 'chiefs', 'raiders', 'broncos', 'patriots', 'bills', 'dolphins', 'jets', 'texans', 'titans', 'jaguars', 'colts'
    ],
    "NBA Team": [
        'warriors', 'lakers', 'clippers', 'suns', 'kings', 'trail blazers', 'thunder', 'jazz', 'timberwolves', 'spurs', 
        'mavericks', 'rockets', 'grizzlies', 'pelicans', 'nuggets', 'pistons', 'cavaliers', 'sixers', 'bulls', 'pacers',
        'wizards', 'nets', 'knicks', 'celtics', 'hornets', 'magic', 'heat', 'hawks', 'raptors', 'bucks'
    ],
    "TV Sitcom": [
        'friends', 'seinfeld', 'the office', 'full house', 'scrubs', 'modern family',
        'family matters', 'cheers',
        'happy days', 'the brady bunch', 'roseanne', 'the golden girls'
    ],
    "Music Artist/Group": [
        'eminem', 'katy perry', 'justin bieber', 'future', 'post malone', 'acdc', 'guns n roses', 'metallica',
        'dj khalid', 'snoop dogg', 'iron maiden', 'nirvana', 'demi lovato', 'billy joel', 'def leppard',
        'the beatles', 'maroon five', 'bangtan boys', 'one direction', 'nsync', 'spice girls', 'motorhead',
        'black sabbath', 'selena gomez', 'shawn mendes', 'wiz khalifa', 'drake', 'beyonce', 'kanye west', 'linkin park'
    ]
}

const categories = ["NFL Team", "NBA Team", "TV Sitcom", "Music Artist/Group"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getWord() {
    let length = categories.length
    let randomCategory = categories[getRandomInt(length)]
    let randomCategoryArrLen = words[randomCategory].length
    let randomWord = words[randomCategory][getRandomInt(randomCategoryArrLen)]

    return [randomWord, randomCategory]
}

function addToHangmanStick(wrongGuessCount) {
    // Add to hangman stick
    let hangmanPart = document.createElement('div')
    let partAddedOnTo;

    if (wrongGuessCount < 3) {
        partAddedOnTo = document.getElementById('hangman_pole')
    } else {
        partAddedOnTo = document.getElementById('body')
    }

    if (wrongGuessCount === 1) {
        hangmanPart.setAttribute('id', 'head')
    } else if (wrongGuessCount === 2) {
        hangmanPart.setAttribute('id', 'body')
    } else if (wrongGuessCount === 3) {
        hangmanPart.setAttribute('id', 'left_arm')
    } else if (wrongGuessCount === 4) {
        hangmanPart.setAttribute('id', 'right_arm')
    } else if (wrongGuessCount === 5) {
        hangmanPart.setAttribute('id', 'left_leg')
    } else if (wrongGuessCount === 6) {
        hangmanPart.setAttribute('id', 'right_leg')
    }

    partAddedOnTo.appendChild(hangmanPart)
}

function userWinOrLost(lostOrWin, wordToGuess) {
    let body = document.getElementsByTagName("body")[0]
    console.log(body[0])
    // creates modal div
    let modalDiv = document.createElement('div')
    modalDiv.setAttribute('id', 'modal')

    // creates inner modal-div
    let innerModalDiv = document.createElement('div')
    innerModalDiv.setAttribute('id', 'inner_modal')

    // creates text div
    let innerModalText = document.createElement('div')
    innerModalText.setAttribute('id', 'inner_modal_text')

    // creates button div
    let playAgainButton = document.createElement('div')
    playAgainButton.setAttribute('id', 'play_again_button')
    playAgainButton.innerHTML = 'Play Again'
    
    if(lostOrWin === 'win') {
        innerModalText.innerHTML = 'Congrats, you won!'
    } else {
        innerModalText.innerHTML = `Sorry, you lost.  The word is ${wordToGuess.toUpperCase()}`
    }
    
    innerModalDiv.appendChild(innerModalText)
    innerModalDiv.appendChild(playAgainButton)
    modalDiv.appendChild(innerModalDiv)
    body.prepend(modalDiv)

    playAgainButton.addEventListener('click', event => {
        location.reload();
    })
}

window.addEventListener('DOMContentLoaded', event => {          
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ]

    // Wrong Guess Counter
    let wrongGuessCount = 0;

    let alphabetContainer = document.getElementById('alphabet_container')
    let wordToGuessLettersContainer = document.getElementById('word_to_guess_letters')

    // word to guess
    let wordAndCategory = getWord()
    let wordToGuess = wordAndCategory[0]
    let wordLen = wordToGuess.length
    
    // Sets the category
    let category = document.getElementById('category') 
    category.innerHTML = `Category: ${wordAndCategory[1]}`

    // For loop will create divs for all letters in word to guess
    for(let i = 0; i < wordLen; i++) {
        let letter = wordToGuess[i]
        let letterDiv = document.createElement('div')
        if(letter === ' ') letterDiv.setAttribute('class', `letters_of_word_to_guess is_space`)
        else letterDiv.setAttribute('class', `letters_of_word_to_guess`)
        letterDiv.setAttribute('id', `letter_idx_${i}`)
        wordToGuessLettersContainer.appendChild(letterDiv)
    }

    // Sets the body-div into a variable
    let bodyDiv = document.getElementById('body_div')

    // This for loop creates all of my alphabet divs instead of creating
    // 26 divs inside my html file.
    for(let letter of alphabet) {
        let letterDiv = document.createElement('div')
        letterDiv.setAttribute('id', `letter_${letter}`)
        letterDiv.setAttribute('class', `letters_of_alphabet`)
        let letterDivText = document.createTextNode(letter)
        letterDiv.appendChild(letterDivText)
        alphabetContainer.appendChild(letterDiv)
    }

    // guess inside input box
    let guess = document.getElementById('input_container')

    // clickable divs
    let guessBtn = document.getElementById('guess_word')
    let clickableLetter = document.getElementsByClassName('letters_of_alphabet')
    

    guessBtn.addEventListener('click', e => {
        guessedWord = guess.value.toLowerCase()
        if(guessedWord !== wordToGuess) {
            wrongGuessCount ++
            addToHangmanStick(wrongGuessCount)

            // If lost, then freezes clicks
            if (wrongGuessCount === 6) {
                bodyDiv.style.pointerEvents = 'none'
                playAgainButton = userWinOrLost('lose', wordToGuess)
            }
        } else {
            // WIN CONDITION
            for(let i = 0; i < wordLen; i++) {
                let letter = wordToGuess[i]
                let letterDiv = document.getElementById(`letter_idx_${i}`)
                letterDiv.innerText = letter.toUpperCase()
            }
            bodyDiv.style.pointerEvents = 'none'
            playAgainButton = userWinOrLost('win', wordToGuess)
        }

        // Clears the textbox
        guess.value = ''
    })
    

    // Loops through HTMLCollection of elements
    for(let letter_box of clickableLetter) {
        letter_box.addEventListener('click', e => {
            let selectedLetter = letter_box.innerHTML.toLowerCase()
            if(!wordToGuess.includes(selectedLetter)) {
                wrongGuessCount ++
                addToHangmanStick(wrongGuessCount)

                // If lost, then freezes clicks
                if(wrongGuessCount === 6) {
                    bodyDiv.style.pointerEvents = 'none'
                    playAgainButton = userWinOrLost('lose', wordToGuess)
                }
            } else {
                for(let i = 0; i < wordLen; i++) {
                    let letter = wordToGuess[i]
                    if(letter === selectedLetter) {
                        let letterDiv = document.getElementById(`letter_idx_${i}`)
                        letterDiv.innerText = letter.toUpperCase()
                    }
                }
            }
            letter_box.style.pointerEvents = 'none'
        })
    }
})