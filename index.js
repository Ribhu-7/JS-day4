let c =3;
console.log(c);
console.log(++c);
console.log(c);
console.log(--c);
console.log(c);

console.log(2|3);
console.log(2&3);
console.log(2^3);
console.log(2<<3);
console.log(2>>3);

2>3?console.log("2 greater than 3"):console.log("2 less than 3");

let x =2;
let y =3;

x>y ? x++ : x-- ;

console.log(x);

let g = 3;

if(g>2)
{
    console.log(g);
}
else{
    console.log("else block");
}


if(g>4)
{
    console.log(g);
}
else if(g==3)
{
    console.log("3 is answer");
}
else{
    console.log("else block")
}

let number=3;

switch (number) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;

    default:
        console.log("greater than all")
        break;
}