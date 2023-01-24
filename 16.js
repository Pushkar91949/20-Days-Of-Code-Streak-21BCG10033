const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const chunk = (arr, size) => {
   return arr.reduce((acc, val, ind) => {
      const subIndex = ind % size;
      if(!Array.isArray(acc[subIndex])){
         acc[subIndex] = [val];
      } else {
         acc[subIndex].push(val);
      };
      return acc;
   }, []);
};
console.log(chunk(input, 3));
console.log();
console.log(chunk(input, 4));
console.log();
console.log(chunk(input, 9));