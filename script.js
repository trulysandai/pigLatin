const translateToPigLatin = () => {
  let oldWord = document.getElementById("wordInput").value;
  if (oldWord.match(/ /)) {
    oldWord = oldWord.toLowerCase().trim();
    let wordArr = oldWord.split(' ');
    let result = '';
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        result += ' ';
      }
      result += translate(wordArr[i]);
    }
    document.getElementById("showTranslation").innerHTML = result;
    return result;
  }
  return translate(oldWord);
}

const translate = (oldWord) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";
  if (vowels.indexOf(oldWord[0]) > -1){
    newWord = oldWord + "yay";
    document.getElementById("showTranslation").innerHTML = newWord;
    return newWord;
  } else {
    let firstLetter = oldWord.match(/[aeiou]/);
    let vowel = oldWord.indexOf(firstLetter[0]);
    newWord = oldWord.substring(vowel) + oldWord.substring(0, vowel) + "ay";
    document.getElementById("showTranslation").innerHTML = newWord;
    return newWord;
  }
}