//create a class template so mortgage calculation objects can be created easily
class MortgageCalculator {
  //using a constructor to populate the necessary fields for each calculation  
  constructor(principal, length, interestRate) { 
    //this is where the loan amount will be stored
    this.principal = principal; 
    //this is the duration of the loan converted to months
    this.length = length * 12; 
    //this is the interest rate coverted to decimal and then to a monthly rate
    this.interestRate = interestRate / 100 / 12; 
  }
  
  //this method will calculate the monthly mortgage payments using the formula M = P [i (1 + i) ^ n] / [(1 + i) ^ n – 1]
  calculateMortgage() { 
    //saving interest rate + 1 to variable firstInterest, 1 + i
    let firstInterest = this.interestRate + 1; 
    //using the Math.pow function to do exponent calculation of fristInterest raised to length, (1 + i) ^ n
    let interestRaisedToLength = Math.pow(firstInterest, this.length); 
    //this stores the first half of the formula by multiplying principal * rate * rate raised to length, P [i (1 + i) ^ n]
    let firstPart = this.principal * this.interestRate * interestRaisedToLength; 
    //this stores the second part of the formula, (1 + i) ^ n – 1
    let secondPart = interestRaisedToLength - 1; 
    //finally, the result is achieved by dividing the first part by the second part, P [i (1 + i) ^ n] / [(1 + i) ^ n – 1]
    return firstPart / secondPart; 
  }
}

//exporting the class so it can be used in the script file
export default MortgageCalculator; 
