// CODING CHALLENGE ONE
// const name=" I am Kenneth";
// const dateOfBirth="a 90 years old";
// const job= "Teacher in";
// const school="SWITCHTECH Academy";
// const course="teaching Web Development"
// console.log(`${name} ${dateOfBirth} ${job} ${school} ${course}`)


// // CODING CHALLENGE TW0
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// // CODING CHALLENGE THREE
// for (let rep = 1; rep <= 40; rep++) {
//   console.log(`I am Kenneth a 20 years old teacher in Programming ${rep} 🏋️‍♀️`);
// }

// CODING CHALLENGE FOUR
// Test 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// // console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// // checkWinner(576, 111);


// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// CODING CHALLENGE FIVE
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
//   // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
//   console.log(bills, tips, totals);

// CODING CHALLENGE SIX
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   mark.calcBMI();
//   john.calcBMI();
  
//   console.log(mark.bmi, john.bmi);
  
//   // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }



// // USING NORMAL ARRAY METHOD
// const arr=[7,8,9];
// const badNewArr=[1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // USING THE SPREAD OPERATOR
// const newArr=[1,2, ...arr];
// console.log(newArr)
// console.log(...newArr)

// CREATING NEW ELEMENT IN THE DOM
// document.addEventListener('DOMContentLoaded', function(){
//     const button=document.getElementById('addElementButton');
//     button.addEventListener('click', function(){
//         const newDiv=document.createElement('div');
//         newDiv.textContent='This is a new div element added to the DOM!'
//    document.body.appendChild(newDiv)

//     })
// })


// THE FOR OF LOOP
// const days=['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
// for (const day of days){
//     // const open=restaurant.openingHourse[day]?.open?? 'closed';
//     console.log(`On ${day}, we open at ${open}`)
// }




// DOM AND EVENT MANIPULATION
const newDiv=document.createElement('div')
// This is use to add a text to the element you created i.e. div
newDiv.textContent='You are lucky';
console.log(newDiv)
// This is use to create and add a class
newDiv.classList.add('newClass');


// document.addEventListener('DOMContentLoaded', function(){
//     const button=document.getElementById('addElementButton');
//     const container=document.getElementById('container');
//     const newDiv=document.createElement('div');
//     newDiv.textContent='This is a new div element added to the Dom'
// newDiv.setAttribute('id', 'newDiv')

// container.appendChild(newDiv);
// })


// document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
//     const button = document.getElementById('addElementButton');
//     const container = document.getElementById('container');

//     // Add a click event listener to the button
//     button.addEventListener('click', function() {
//         // Create a new div element
//         const newDiv = document.createElement('div');

//         // Set some content for the new div
//         newDiv.textContent = 'This is a new div element added to the DOM!';

//         // Optionally, set some attributes or styles
//         newDiv.setAttribute('id', 'newDiv');
//         newDiv.style.color = 'blue';
//         newDiv.style.marginTop = '20px';
//         newDiv.style.border = '1px solid black';
//         newDiv.style.padding = '10px';
//         newDiv.style.backgroundColor = 'lightgray';

//         // Append the new div to the container (or any other existing element)
//         container.appendChild(newDiv);
//     });
// // });


// WHEN SUBMITTING AN APPLICATION
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('applicationForm');
    // Get the message container
    const messageContainer = document.getElementById('messageContainer');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Create a new div element for the message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = 'Application Submitted!';

        // Append the message to the message container
        messageContainer.innerHTML = ''; // Clear any previous message
        messageContainer.appendChild(messageDiv);
    });
});

