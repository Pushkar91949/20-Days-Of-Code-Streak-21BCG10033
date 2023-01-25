const uncensor = (string1, string2) => {
    let a = [];
    let b = string2;
    let c = 0;
    let d = "";
    for (let i = 0; i < string1.length; i++) {
      a.push(string1[i]);
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "*") {
        a[i] = string2[c];
        c += 1;
      }
    }
    for (let i = 0; i < a.length; i++) {
      d += a[i];
    }
    return d; 
  };
  
  console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
  console.log(uncensor("abcd", ""));
  console.log(uncensor("*PP*RC*S*", "UEAE"));
  console.log(uncensor("My n*m* *s P*shk*r J*sh*","aeiuaoi"));