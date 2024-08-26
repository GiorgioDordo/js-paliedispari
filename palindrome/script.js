// take the elemnts from the dom
const wordField = document.getElementById('word');
const chooseWord = document.getElementById('button')

button.addEventListener('click', function(e) {
    e.preventDefault();
    const wordValue = wordField.value;

    console.log( `${wordValue}`, mirrorWord(wordField.value));
})



    
