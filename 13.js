const boomerangs = (arr) => {
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 2 ] && arr[i + 1] !== arr[i]) {
        (a.push(arr[i]));
        (a.push(arr[i + 1]));
        (a.push(arr[i + 2]));
        b.push(a);
        a = [];
      }
    }
    let c = b.length;
    return c;
  };
  console.log(boomerangs([3, 7, 3, 2, 1, 4, 7, 3, 5, 9, 1, 2, 2, -2, 2]));
  console.log(boomerangs([1, 7, 1, 7, 1, 7, 1]));
  console.log(boomerangs([9, 5, 9, 5, 1, 1, 1]));
  console.log(boomerangs([4, 4, 4, 9, 9, 9, 9, 5, 6, 5 ]));