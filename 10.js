function concat(...args) {
    let arr1=[...args]
    let arr=[]
    for (let i=0;i<arr1.length;i++){
      arr.push(...arr1[i])
    }
    return  arr
  }
  