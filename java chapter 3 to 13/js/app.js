           // ============chapter 3 started==========

// ========================================== Question 01========================================== 
// let myAge = 19;

// alert("I am " + myAge + " years old");

// ========================================== Question 02 ========================================== 
// let numberOfVisits = 0

// let numberOfVisit = localStorage.getItem("numberOfVisits");

// if (localStorage.getItem("numberOfVisits")) {
//     localStorage.setItem("numberOfVisits", parseInt(localStorage.getItem("numberOfVisits")) + 1);
//   } else {
//     localStorage.setItem("numberOfVisits", 1);
//   }
  
// alert("You have visited this site " + numberOfVisit + " times");

// ========================================== Question 03 ========================================== 
// let birthYear = 2003;

// document.write("My birth year is " + birthYear +"<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear));

// ========================================== Question 04 ========================================== 
// let userName = prompt("Enter your name:");

// let productTitle = prompt("What product do you want to buy?");

// let quantity = +prompt("How many products do you want to order?");

// document.write(userName + " ordered " + quantity + " " + productTitle + "(s) " + " on XYZ Clothing Store.")

                   // ===============chapter 3 completed ===============


                  // ===============chapter 4 started ===============


// ========================================== Question 01 ========================================== 
// let myName = "Areesha Abdul Wwaheed", myAge = 19, myBirthYear = 2003;

// ========================================== Question 02 ========================================== 
// // Legal
// let myName = "Areesha Abdul Wwaheed";
// let my_age = 19;
// let my$city = "Karachi";
// let myClass = 12;
// let $call = 0317-2075851;

// // Illegal
// let 8ty = 80;
// let user.name = "Areesha";
// let user name = "Areesha";
// let user#name = "Areesha";
// let var = variable;

// ========================================== Question 03 ========================================== 
// let eg = "$my_1stVariable";
// let eg1 = "$name";
// let eg2 = "_name";
// let eg3 = "name";

// let heading = "Rules for naming JS variables:";
// let stat1 = "1)" + " Variable names can only contain camelCase, underscore(_) sign, dollar($) sign and shall not contain spaces.";
// let stat2 = "For example: " + eg;
// let stat3 = "2)" + " Variable must begin with a $, _ or lowercase.";
// let stat4 = "For example: " + eg1 + ", " + eg2 + ", or " + eg3;
// let stat5 = "3)" + " Variable names are case sensitive.";
// let stat6 = "4)" + " Variable names should not be JS reserved keywords."; 

// document.write(heading + "<br>" + "<br>" + stat1 + "<br>" + stat2 + "<br>" + "<br>" + stat3 + "<br>" + stat4 + "<br>" + "<br>" + stat5 + "<br>" + "<br>" + stat6);

 
                // ===============chapter 4 completed ===============


               // ===============chapter 5 startted ===============

// ========================================== Question 01 ========================================== 
// let no1 = +prompt("Enter first number:");
// let no2 = +prompt("Enter second number:");
// let sum = no1 + no2

// document.write("The sum of " + no1 + " and " + no2 + " is " + sum);

// ========================================== Question 02 ========================================== 

// // // CAUTION: refresh 2 3 times after uncommenting the code to see the result

// // Subtraction
// let no1 = +prompt("Enter first number:");
// let no2 = +prompt("Enter second number:");
// let total = no1 - no2

// document.write("The result of " + no1 + " - " + no2 + " is " + total);

// // Multiplication
// let no1 = +prompt("Enter first number:");
// let no2 = +prompt("Enter second number:");
// let result = no1 * no2

// document.write("The result of " + no1 + " * " + no2 + " is " + result);

// // Division
// let no1 = +prompt("Enter first number:");
// let no2 = +prompt("Enter second number:");
// let result = no1 / no2

// document.write("The result of " + no1 + " / " + no2 + " is " + result);

// // Modulus
// let no1 = +prompt("Enter first number:");
// let no2 = +prompt("Enter second number:");
// let result = no1 % no2

// document.write("The remainder of " + no1 + " % " + no2 + " is " + result);  // // make sure to enter larger number in first prompt


// ========================================== Question 03 ========================================== 
// let number;

// document.write("Value after variable declaration is: " + number + "<br>");

// number = +prompt("Enter a number:");

// document.write("Initial value: " + number + "<br>");

// number++;

// document.write("Value after increment is: " + number + "<br>");

// number +=  7;

// document.write("Value after addition is: " + number + "<br>");

// number--;

// document.write("Value after decrement is: " + number + "<br>");

// number %= 3;

// document.write("The remainder is: " + number);

// ========================================== Question 04 ========================================== 
// let costOfTickets = 600;

// let noOfUserTicket = +prompt("How many tickets you want to buy???");

// let totalTicketCost = noOfUserTicket * costOfTickets;

// document.write("Total cost to buy " + noOfUserTicket + " tickets to a movie is " + totalTicketCost + " PKR");

// ========================================== Question 05 ========================================== 
// const table = +prompt("Enter the number of which you want the multiplication table:");

// document.write("Table of " + table + "<br>");

// for (let i=0; i<=20; i++){
//     document.write(table + " x " + i + " = " + table*i +"<br>");
// }

// ========================================== Question 06 ========================================== 
// let todayTempinCelsius  = +prompt("Enter a temperature in Celsius: ");
// const toFahrenheit = (todayTempinCelsius * 9/5) + 32 

// let todayTempinFahrenheit = +prompt("Enter a temperature in Fahreheit: ");
// const toCelsius = (todayTempinFahrenheit- 32) * 5/9  

// document.write(todayTempinCelsius + "°C  is " + toFahrenheit + "°F" + "<br>" + todayTempinFahrenheit + "°F is " + toCelsius + "°C");

// ========================================== Question 07 ========================================== 
// let heading = "Shopping Cart";
// document.write(heading + "<br>" + "<br>");

// let price1 = +prompt("Enter Price of item 1:");
// let quantity1 = +prompt("Quantity of item 1:");

// let price2 = +prompt("Enter price of item 2:");
// let quantity2 = +prompt("Quantity of item 2");

// let charges = 100;


// let totalCost = (price1 * quantity1) + (price2 * quantity2) + charges;

// document.write("Price of item 1 is " + price1 + " Rs <br>" + "Quantity of Item 1 is " + quantity1 + "<br>" + "<br>" + "Price of item 2 is " + price2 + " Rs <br>" + "Quantity of item 2 is " + quantity2 + "<br>" + "Shipping Charges " + charges + "<br>" + "<br>" + "<br>" + "Total cost of your order is " + totalCost)


// ========================================== Question 08 ==========================================
// let heading = "Mark Sheet";
// document.write(heading + "<br>" + "<br>" + "<br>" + "<br>")

// let totalMarks = +prompt("Enter Total Marks:");
// let marksObtained = +prompt("Enter Marks Obtained:");
// let percentage = (marksObtained/totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>" + "Marks Obtained: " + marksObtained + "<br>" + "Percentage: " + percentage + "%")

// ========================================== Question 09 ==========================================
// let heading = "Currency in PKR"
// document.write(heading + "<br>" + "<br>")

// let currencyInUS$ = 10;
// let currencyInRiyal = 25;

// let currencyInPKR = (currencyInUS$ * 104.80) + (currencyInRiyal * 28);

// document.write("Total Currency in PKR: " + currencyInPKR)

// ========================================== Question 10 ==========================================
// let num = +prompt("Enter a number:") + 5 * 10 / 2;

// document.write(num);

// ========================================== Question 11 ==========================================
// let heading = "Age Calculator"
// document.write(heading + "<br> <br>")

// let currentYear = 2023;
// let birthYear = +prompt("Enter your birth year:");

// let yourAge = currentYear - birthYear;

// document.write("Current Year: " + currentYear + "<br>" + "Birth Year: " + birthYear + "<br>" + "Your Age is: " + yourAge )

// ========================================== Question 12 ==========================================
// let heading = "The Geometrizer";
// document.write(heading + "<br> <br>")

// let radius = +prompt("Enter a value: ");
// let circum = 2 * 3.142 * radius;
// let area = 3.142 * radius ** 2

// document.write("Radius of a circle is: " + radius + "<br>" + "The circumference is: " + circum + "<br>" + "The area is: " + area) 

// ========================================== Question 13 ========================================== 
// let heading = "The Lifetime Supply Calculator";
// document.write(heading + "<br>" + "<br>");

// let myFavSnack = prompt("Your Favourite snack:");
// let myCurrentAge = +prompt("Your current age:");
// let estimatedMaxAge = +prompt("Estimated Maximum age: ");
// let amountPerDay = +prompt("How much would you consume it per day?");
// let total = (estimatedMaxAge - myCurrentAge) * amountPerDay;

// document.write("Favourite Snack: " + myFavSnack + "<br>" + "Current age: " + myCurrentAge + "<br>" + "Estimated Maximum Age: " + estimatedMaxAge + "<br>" + " Amount of snacks per day: " + amountPerDay + "<br>" + "You will need " + total + " " + myFavSnack + " to last you until the ripe old age of " + estimatedMaxAge);


              // ===============chapter 5 completed ===============


             // ===============chapter 6 to 9 started===============

// ========================================== Question 01 ========================================== 
// let a = 10;

// let heading = "Result:";

// document.write(heading + "<br> <br> <br> The value of a is: " + a + " <br> ................................. <br> <br>" + "The value of a++ is: " + ++a + "<br> Now the value of a is: " + a + "<br> <br> The value of a++ is: " + a++ + "<br> Now the value of a is: " + a + "<br> <br> The value of --a is: " + --a + "<br> Now the value of a is: " + a + "<br> <br> The value of a-- is: " + a-- + "<br> Now the value of a is: " + a)

// ========================================== Question 02 ========================================== 
// let a = 2;
// let b = 1;

// document.write("a is " + a + "<br>" + "b is " + b + "<br>" + "Steps: <br> ................................. <br>" + --a + "<br>" + (--a - --b) + "<br>" + (--a - --b + ++b) + "<br>" + "The result is: " +(--a - --b + ++b + b--));

// ========================================== Question 03 ========================================== 
// let userName = prompt("Enter your name:");

// alert("good morning " + userName);

// ========================================== Question 04 ========================================== 
// const table = +prompt("Enter the number of which you want the multiplication table:") || 5;

// document.write("Table of " + table + "<br>");

// for (let i=0; i<=20; i++){
//     document.write(table + " x " + i + " = " + table*i +"<br>");
// }

// ========================================== Question 05 ========================================== 
// uncomment the code in html

// let sub1 = prompt("Enter first subject:");
// let sub2 = prompt("Enter second subject:");
// let sub3 = prompt("Enter third subject:");

// let totalMarks = 100;

// let sub1ObtMarks = +prompt("Marks obtained in first subject:");
// let sub2ObtMarks = +prompt("Marks obtained in second subject:");
// let sub3ObtMarks = +prompt("Marks obtained in third subject:");

// let sub1Percentage = sub1ObtMarks/totalMarks + "%";
// let sub2Percentage = sub2ObtMarks/totalMarks + "%";
// let sub3Percentage = sub3ObtMarks/totalMarks + "%";

// const totalMaxMarks = totalMarks*3;
// const totalObtMarks = sub1ObtMarks + sub2ObtMarks + sub3ObtMarks;

// const totalPercentage = (totalObtMarks/totalMaxMarks)*100 + "%";

// document.getElementById("sub1").innerHTML = sub1;
// document.getElementById("sub2").innerHTML = sub2;
// document.getElementById("sub3").innerHTML = sub3;

// document.getElementById("totalMarks").innerHTML = totalMarks;
// document.getElementById("totalMarks1").innerHTML = totalMarks;
// document.getElementById("totalMarks2").innerHTML = totalMarks;
// document.getElementById("totalMaxMarks").innerHTML = totalMaxMarks;

// document.getElementById("sub1ObtMarks").innerHTML = sub1ObtMarks;
// document.getElementById("sub2ObtMarks").innerHTML = sub2ObtMarks;
// document.getElementById("sub3ObtMarks").innerHTML = sub3ObtMarks;
// document.getElementById("totalObtMarks").innerHTML = totalObtMarks;

// document.getElementById("sub1Percentage").innerHTML = sub1Percentage;
// document.getElementById("sub2Percentage").innerHTML = sub2Percentage;
// document.getElementById("sub3Percentage").innerHTML = sub3Percentage;
// document.getElementById("totalPercentage").innerHTML = totalPercentage;


// // console.log(totalMaxMarks);
// // console.log(totalObtMarks);
// // console.log(totalPercentage);


            // ===============chapter 6 to 9 completed ===============


// ===============chapter 9 to 11 started ===============

// ========================================== Question 01 ========================================== 
// let userCity = prompt("Enter your city:");

// if (userCity === "Karachi" || userCity === "karachi"){
//     alert("Welcome to the city of lights");
// }
// else {
//     alert("You are welcome");
// }

// ========================================== Question 02 ========================================== 
// let gender = prompt("Enter your Gender:", "Male or Female");

// if (gender === "Male" || gender === "male"){
//     alert("Good Morning Sir");
// }

// else if (gender === "Female" || gender === "female"){
//     alert("Good Morning Ma'am")
// }

// else {
//     alert("Good Morning")
// }

// ========================================== Question 03 ========================================== 
// var signalColor = prompt("Insert any traffic light color:", "Red, Yellow or Green");

// if (signalColor === "Red" || signalColor === "red") {
//     alert("Must Stop!");
// }

// else if (signalColor === "Yellow" || signalColor === "yellow") {
//     alert("Ready to move");
// }

// else if (signalColor === "Green" || signalColor === "green") {
//     alert("Move Now");
// }

// else {
//     alert("Make sure you've entered right color with right spelling; either capitalized or lowercased");
// }


// ========================================== Question 04 ========================================== 
// let remainingFuel = +prompt("How much fuel is left in your car");

// if(remainingFuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }

// else if (remainingFuel < 0){
//     alert("Make sure you have entered a possible value");
// }

// else {
//     alert("You are going great")
// }

// ========================================== Question 05 ========================================== 
// //a. 
// var a = 4;
// if (++a === 5){
// alert("given condit`ion for variable a is true");
// }
// //it worked

// //b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // condition would be true if either b=83 or ++b is written

// //c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // condition 2 and 4 are true

// //d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// //it worked

// //e. 
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // it worked

// //f. 
// if("car" < "cat"){
// alert("car is smaller than cat");
// }
// // it worked

// ========================================== Question 06 ========================================== 
// let userInput1 = +prompt("Enter your marks in first subject");
// let userInput2 = +prompt("Enter your marks in second subject");
// let userInput3 = +prompt("Enter your marks in third subject");

// let totalMarksObt = userInput1 + userInput2 + userInput3;
// let totalMarks = +prompt("What were the total marks?");

// let heading = "Mark Sheet";
// document.write(heading + "<br>" + "<br>" + "<br>" + "<br>")

// let percentage = (totalMarksObt/totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>" + "Marks Obtained: " + totalMarksObt + "<br>" + "Percentage: " + percentage + "% <br>")
// if (totalMarksObt >= 80){
//     document.write("Grade: A-one <br>");
//     document.write("Remarks: Excellent");
// }

// else if(totalMarksObt >= 70){
//     document.write("Grade: A <br>");
//     document.write("Remarks: Good");
// }
// else if(totalMarksObt >= 60){
//     document.write("Grade: B <br>");
//     document.write("Remarks: You need to improve");
// }
// else if(totalMarksObt < 60){
//     document.write("Grade: Fail <br>");
//     document.write("Remarks: Sorry");
// }

// ========================================== Question 07 ========================================== 
// let secretNum = 9;

// let userInp = +prompt("Guess a number from 1 to 10")

// if(userInp === secretNum){
//     alert("Bingo");
// }
// else if (userInp+1 === secretNum){
//     alert("You are close enough");
// }

// else {
//     alert("Better luck next time!");
// }

// ========================================== Question 08 ========================================== 
// let userNum = +prompt("Enter a number:");

// if(userNum%3 === 0){
//     alert("The number is divisible by 3")
// }
// else if(userNum%3 !== 0) {
//     alert("The number is not divisible by 3");
// }

// ========================================== Question 09 ========================================== 
// let userInpNum = +prompt("Enter a number:");

// if (userInpNum % 2 === 0) {
//     alert(userInpNum + " is even")
// }

// else {
//     alert(userInpNum + " is odd")
// }

// ========================================== Question 10 ==========================================
// let userTemp = +prompt("Enter today's temperature:");

// if(userTemp>=40){
//     alert("It is too hot outside");
// }
// else if (userTemp>=30){
//     alert("The weather today is normal");
// }
// else if(userTemp>=20){
//     alert("Today's weather is cool");
// }

// else if(userTemp>=10){
//     alert("OMG! Today's weather is so cool")
// }

// else if (userTemp<10){
//     alert("Try to stay at home!!!")
// }

// ========================================== Question 11 ==========================================
// let firstNum = +prompt("Enter the first number:");
// let secondNum = +prompt("Enter the second number:");
// let operator = prompt("Enter the operation you want to perform:", "+, -, *, /, %");

// if (operator === "+" || operator === "add" || operator === "addition" || operator === "sum") {
//     alert(firstNum + secondNum);
// }

// else if (operator === "-" || operator === "subtract" || operator === "subtraction" || operator === "difference") {
//     alert(firstNum - secondNum);
// }

// else if (operator === "*" || operator === "x" || operator === "multiply" || operator === "multiplication" || operator === "product") {
//     alert(firstNum * secondNum);
// }

// else if (operator === "/" || operator === "divide" || operator === "division") {
//     alert(firstNum / secondNum);
// }

// else if (operator === "%" || operator === "modulo") {
//     alert(firstNum % secondNum);
// }

// else {
//     alert("Make sure you've entered correct operator, either the sign or text in lowercase");
// }


             // ===============chapter 9 to 11 completed ===============


            // ===============chapter 12 to 13 started ===============

// ========================================= Question 01 =========================================
// let userInp = prompt("Enter a character:", "a or 1");

// if (userInp >= '0' && userInp <= '9') {
//   console.log('The character is a number.');
// } else if (userInp >= 'A' && userInp <= 'Z') {
//   console.log('The character is an uppercase letter.');
// } else if (userInp >= 'a' && userInp <= 'z') {
//   console.log('The character is a lowercase letter.');
// } else {
//   console.log('The character is not alphanumeric.');
// }

// ========================================= Question 02 =========================================
// let userNum = +prompt("Enter first number:");
// let userNum2 = +prompt("Enter second number:");

// if (userNum > userNum2){
//     console.log(userNum + " is greater");
// }
// else if( userNum2 > userNum){
//     console.log(userNum2 + " is greater");
// }
// else if (userNum===userNum2){
//     console.log("Both numbers are equal");
// }
// else {
//     console.log("Invalid input")
// }

// ========================================= Question 03 =========================================
// let userInput = +prompt("Enter either a positive number, a negative number or zero:")

// if(userInput>0){
//     console.log(userInput + " is a positive integer");
// }
// else if(userInput<0){
//     console.log(userInput + " is a negative integer");
// }
// else{
//     console.log(userInput + " is a zero")
// }

// ========================================= Question 04 =========================================
// let userCharacter = prompt("Enter an alphabet:");

// if(userCharacter==="a" || userCharacter==="e" || userCharacter==="i" || userCharacter==="o" || userCharacter==="u"){
//     console.log(true);
// }
// else{
//     console.log(false)
// }

// ========================================= Question 05 =========================================
// const passWord = "Honey";

// let userPassword = prompt("Enter your password:");

// if (userPassword===""){
//     alert("Please enter your password!");
// }
// else if (userPassword === passWord){
//     alert("Correct! The password you entered matches the original password.")
// }
// else {
//     alert("Incorrect password")
// }

// ========================================= Question 06 =========================================
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good Day";
// } // // this curly bracket was missing
// else {
//     greeting = "Good Evening";
// }

// ========================================= Question 07 =========================================
// let userTime = +prompt("Enter timein 24 hour format without :", "like this, 1900");

// if (userTime >= 0000 && userTime < 1200) {
//     alert("Good Morning!");
// }
// else if (userTime >= 1200 && userTime < 1700) {
//     alert("Good afternoon!");
// }
// else if (userTime >= 1700 && userTime < 2100) {
//     alert("Good evening!");
// }
// else if (userTime >= 2100 && userTime <= 2359) {
//     alert("Good night!");
// }
// else {
//     alert("Invalid input!!!");
// }



            // ===============chapter 12 to 13 completed ===============


            