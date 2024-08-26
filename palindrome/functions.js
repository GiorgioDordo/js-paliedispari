function mirrorWord(word) {
    const reversedWord = word.split('').reverse().join('');
    if (reversedWord === word) {
        return "it's palindrome";
    } else {
        return "it's not palindrome";
    }
}