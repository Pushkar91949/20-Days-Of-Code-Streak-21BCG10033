const sevenboom = (arr) => {
    let a = [];
    let b = "NUmber 7 does not exist in the array.";
    for (let i = 0; i < arr.length; i++){
      a.push(arr[i].toString());
    }
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] == 7) {
          b = "Boom!, number 7 exists.";
        }
      }
    }
    return b;
  };
  
  console.log(sevenboom([5,9,6,57,63,4,7]));
  console.log(sevenboom([8, 6, 33, 100]));
  console.log(sevenboom([2, 55, 60, 9, 86]));
  console.log(sevenboom([2, 57, 60, 98,69,36, 86]));