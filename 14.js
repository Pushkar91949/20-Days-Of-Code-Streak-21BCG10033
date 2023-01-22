const str="Hello my dear friends , how are you? , I hope everyone is fine .";
const idOdd = str => str.length % 2 === 1;
const reverseOddLetterWords = (str = '') => {
   const strArr = str.split(' ');
   return strArr.reduce((acc, val) => {
      if(idOdd(val)){
         acc.push(val.split('').reverse().join(''));
      return acc;
   };
   acc.push(val);
   return acc;
   }, []).join(' ');
};
console.log(reverseOddLetterWords(str));
console.log(reverseOddLetterWords("My name is Pushkar Joshi"));