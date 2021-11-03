//importing the class so we can create objects
import MortgageCalculator from "./MortgageCalculator.js";

/* allows the DOM content to load without waiting for CSS or other factors to be read */
document.addEventListener("DOMContentLoaded", function() {
    /* creates principal variable from the user input in "principal" text field */
    var principal = parseInt(document.getElementById("principal").value);
    /* creates interestRate variable from the user input in "interestRate" text field */
    var interestRate = parseInt(document.getElementById("interestRate").value);
    /* creates duration variable from the user input in "duration" text field */
    var duration = parseInt(document.getElementById("duration").value);
    /* creates payments variable for the "payments" text field */
    var payments = document.getElementById("payments");
    /* creates button variable from the "Calculate Monthly Payments" button */
    var button = document.querySelectorAll("input")[3];


    /* adds click event listener to the "Calculate Monthly Payments" button to perform mortgage calculation on click */
    button.addEventListener("click", function() {
        /* refreshes principle variable to make sure it's updated and turns the String value into an integer*/
        principal = parseInt(document.getElementById("principal").value);
        /* refreshes interestRate variable to make sure it's updated and turns the String value into a float with 2 decimal places*/
        interestRate = parseInt(document.getElementById("interestRate").value);
        /* refreshes duration variable to make sure it's updated and turns the String value into an integer*/
        duration = parseInt(document.getElementById("duration").value);
        /* creats a new MortgageCalculator object and stores it in the caclculator variable */
        var calculator = new MortgageCalculator(principal, duration, interestRate);
        /* performs the caculateMortgage function and displays it to the user in the "payments" ext field */
        payments.value = "$" + parseFloat(calculator.calculateMortgage().toFixed(2));
    });

});

