function triArea(){
  const base = parseInt(prompt('Enter Base length: '));
  const height= parseInt(prompt('Enter height: '));

  const area =( (1/2)*base*height);
  console.log(
`The area of the triangle = ${area}`);
}
triArea();
