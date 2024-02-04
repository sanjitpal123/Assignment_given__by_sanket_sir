class complexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary + 'i';
    }

    multiply(anotherComplex) {
        const resultReal = this.real * anotherComplex.real - this.imaginary.slice(0, -1) * anotherComplex.imaginary.slice(0, -1);
        const resultImaginary = this.real * anotherComplex.imaginary.slice(0, -1) + this.imaginary.slice(0, -1) * anotherComplex.real;
        return new complexNumber(resultReal, resultImaginary);
    }
    addition(anotherComplex) {
        const resultReal = this.real + anotherComplex.real - this.imaginary.slice(0, -1) + anotherComplex.imaginary.slice(0, -1);
        const resultImaginary = this.real + anotherComplex.imaginary.slice(0, -1) + this.imaginary.slice(0, -1) + anotherComplex.real;
        return new complexNumber(resultReal, resultImaginary);
    }

}

const complexNumber1 = new complexNumber(2, 3);
const complexNumber2 = new complexNumber(4, 5);

const result = complexNumber1.multiply(complexNumber2);
const result2=complexNumber1.addition(complexNumber2);
console.log("Multiple of two");
console.log(result.real);         
console.log(result.imaginary);   
console.log("Sum of two complex ");
console.log(result2.real);         
console.log(result2.imaginary);   