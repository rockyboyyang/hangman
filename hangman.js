window.addEventListener('DOMContentLoaded', event => {
    let alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ]

    let alphabetContainer = document.getElementById('alphabet_container')

    // This for loop creates all of my alphabet divs instead of creating
    // 26 divs inside my html file.
    for(let letter of alphabet) {
        let letterDiv = document.createElement('div')
        let letterDivText = document.createTextNode(letter)
        letterDiv.appendChild(letterDivText)
        alphabetContainer.appendChild(letterDiv)
    }
})