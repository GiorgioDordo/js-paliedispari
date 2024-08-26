function mirrorWord(word) {
    const reversedWord = word.split('').reverse().join('');
    if (reversedWord === word) {
        console.log("it's palindrome");
    } else {
        console.log("it's not palindrome");
    }
    }
    
    console.log(mirrorWord('eye'));