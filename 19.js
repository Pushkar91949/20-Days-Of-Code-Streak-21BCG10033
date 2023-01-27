function countVowels(str) {
    const Vowels = ['a','e','i','o','u']
    let sum = 0;
    for (let i = 0; i<str.length; i++){
      for (j of Vowels)
      {
        if (str[i] === j)
        {sum++}
      }
    }
          console.log(sum);
  }
  countVowels("daysofcodestreak");
  countVowels("thisisday19")