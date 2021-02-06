const words = {
    "NFL Teams": [
        'vikings', 'packers', 'bears', 'lions', 'rams', 'seahawks', 'niners', 'cardinals', 'cowboys', 'giants', 'eagles', 'washington football team', 'saints', 'bucaneers', 'panthers', 'falcons',
        'steelers', 'browns', 'ravens', 'bengals', 'chargers', 'chiefs', 'raiders', 'broncos', 'patriots', 'bills', 'dolphins', 'jets', 'texans', 'titans', 'jaguars', 'colts'
    ],
    "NBA Teams": [
        'warriors', 'lakers', 'clippers', 'suns', 'kings', 'trail blazers', 'thunder', 'jazz', 'timberwolves', 'spurs', 
        'mavericks', 'rockets', 'grizzlies', 'pelicans', 'nuggets', 'pistons', 'cavaliers', 'sixers', 'bulls', 'pacers',
        'wizards', 'nets', 'knicks', 'celtics', 'hornets', 'magic', 'heat', 'hawks', 'raptors', 'bucks'
    ],
    "TV Sitcoms": [
        'friends', 'seinfeld', 'how i met your mother', 'the office', 'the big bang theory', 'full house', 'scrubs', 'modern family',
        'two and a half men', 'malcolm in the middle', 'parks and recreation', 'fresh prince of belair', 'home improvement', 'family matters', 'cheers',
        'happy days', 'the brady bunch', 'fresh off the boat', 'roseanne', 'the golden girls'
    ],
    "Music Artists/Groups": [
        'eminem', 'katy perry', 'justin bieber', 'future', 'post malone', 'acdc', 'guns n roses', 'metallica',
        'dj khalid', 'chance the rapper', 'snoop dogg', 'iron maiden', 'nirvana', 'demi lovato', 'billy joel', 'def leopard',
        'the beatles', 'maroon five', 'bangtan boys', 'one direction', 'backstreet boys', 'nsync', 'spice girls', 'motorhead',
        'black sabbath', 'selena gomez', 'shawn mendes', 'wiz khalifa', 'drake', 'beyonce', 'kanye west', 'linkin park'
    ]
}

const categories = ["NFL Teams", "NBA Teams", "TV Sitcoms", "Music Artists/Groups"]

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

window.addEventListener('DOMContentLoaded', event => {          
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ]

    console.log(getWord())
    let alphabetContainer = document.getElementById('alphabet_container')
    
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

    
})