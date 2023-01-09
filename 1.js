const s1 = parseInt(prompt('Enter side 1: '));
const s2 = parseInt(prompt('Enter side 2: '));
const s3 = parseInt(prompt('Enter side 3: '));
// calculate the semi-perimeter
const s = (s1 + s2 + s3) / 2;
//calculate the area
const area = Math.sqrt(
  s * (s-s1) * (s-s2) * (s-s3)
);
console.log(
  `The area of the triangle = ${area}`
);