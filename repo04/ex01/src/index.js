function main (numOne, numTwo){
   
   
    var quotient;
    if (numTwo === 0){
        quotient = 'Divide by 0! Cannot divide by zero!'
} else{
quotient = numOne/numTwo;

}

return quotient;
}

console.log(main(18, 9));
module.exports = main
