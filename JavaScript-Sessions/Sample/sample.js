
// // let name1 = "Abhi";
// // let age = '25';
// // let isEmployeed = false;


// // console.log(name1);
// // console.log(age);
// // console.log(isEmployeed);


// // console.log(typeof(name1));
// // console.log(typeof(parseInt(age)));
// // console.log(typeof(isEmployeed));

// // let n = 20;

// // if (n > 20){
// //     console.log("Given number is Higher");
// // }

// // else if (n > 10){
// //     console.log("Given Number is Smaller");
// // }

// // else{
// //     console.log("Given number is Very Smaller");
// // }

// // let blubImageEl = document.getElementById('blubImage');
// // let catImageEl = document.getElementById('catImage');
// // let switchStatusEl = document.getElementById('switchStatus');
// // let offButtonEl = document.getElementById('offButton');
// // let onButtonEl = document.getElementById('onButton');

// // function offSwitch(){
// //     blubImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
// //     catImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
// //     switchStatusEl.textContent = "Switched Off";
// //     offButtonEl.style.backgroundColor = "#d3d9e3";
// //     onButtonEl.style.backgroundColor = "green";

// // }

// // function onSwitch(){
// //     blubImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
// //     catImageEl.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
// //     switchStatusEl.textContent = "Switched On"
// //     offButtonEl.style.backgroundColor = "red";
// //     onButtonEl.style.backgroundColor = "#d3d9e3";

// // }


// // let randomNumber = Math.random();
// // let num = randomNumber * 100
// // console.log(num);
// // let finalValue = Math.ceil(num);
// // console.log(finalValue)


// // console.log(4 > 5); 
// // console.log( 5 < 10);
// // console.log( 55.45 >= 55.40);
// // console.log(67.8 <= 76.8);
// // console.log(12 == '12');
// // console.log(13.0 === 13);
// // console.log("ABC" === "abc");

// // let randomNumber = Math.ceil(Math.random()*100);

// // console.log(randomNumber);

// // // Data Structures

// // let newArray = [5.2,5,'six',true];
// // console.log(newArray);

// // console.log(newArray[0]);
// // console.log(newArray[3]);

// // newArray[2] = 6;

// // console.log(newArray[2])
// // console.log(newArray);

// // console.log(newArray.length);

// // newArray.push(false);
// // console.log(newArray);

// // newArray.pop();
// // console.log(newArray);


// // function Declaration

// function showMessage(){
//     console.log("Hello World!!!");
// }

// showMessage();

// // Function Expression 

// let showResult = function(){
//     console.log("Hello Program....");
// }
// showResult();

let containerElement = document.getElementById('myContainer');

let h1Element = document.createElement('h1');
h1Element.textContent = "Web Technologies";

let btnElement = document.createElement('button');
btnElement.textContent = "Change Heading";

// document.body.appendChild(h1Element);
// document.body.appendChild(btnElement);

containerElement.appendChild(h1Element);
containerElement.appendChild(btnElement);

btnElement.onclick = function(){
    h1Element.textContent = "4.0 Technologies";
    h1Element.classList.add('heading');

}


// let btnElement2 = document.createElement('button');
// btnElement2.textContent = "Remove Styles";

// containerElement.appendChild(btnElement2);

// btnElement2.onclick = function() {
//     h1Element.classList.remove('heading');
// }


// let personDetails = {
//     "first Name" : "Uday Kiran",
//     secondName : "Palepu",
//     age : 24.11,
//     place : "Pallam",
//     work : function() {
//         console.log("Trying for a Job");
//     },
//     hobbies : ["Running", "Reading", 5.8, "Walking", "Music"],
//     qulifactions : {
//         ssc : 9.2,
//         interMediate : "86%",
//         "B.tech" : "69%",
//         mba : "Not Completed"
//     }

// };

// console.log(personDetails.age);

// console.log(personDetails["age"]);
// let a = "secondName";
// console.log(personDetails["a"]);


// let {
//     secondName,
//     gender,
//     age
// } = personDetails ;

// console.log(secondName);
// console.log(age);
// console.log(gender);


// personDetails.age = 25;

// personDetails['first Name'] = "Uday Kiran Palepu";

// personDetails.gender = "Male" ;
// personDetails["Phone Number"] = 9908219977;

// personDetails.work();

// console.log(personDetails.hobbies);

// let abc = personDetails.hobbies[2];
// console.log(abc);

// console.log(personDetails.qulifactions["B.tech"]);



// let containerEl = document.getElementById('bgContainer');

// let inputEl = document.createElement('input');
// inputEl.type = "checkbox";

// containerEl.appendChild(inputEl);

// let labelEl = document.createElement("label");
// labelEl.htmlFor = "myCheckBox";
// labelEl.textContent = "I am Agree with Terms and Conditions";

// containerEl.appendChild(labelEl);

// let labelEl = document.createElement('label');
// labelEl.setAttribute('for', 'myCheckBox');
// labelEl.textContent = "I am Agree with Terms and Conditions";

// containerEl.appendChild(labelEl);


// let myArray = [1,2,3,4];

// for (let n of myArray){
//     console.log(n + 1);
// }


// alert("Please Enter Valid name");



// local Storage

// localStorage.setItem('fullName', 'Uday Kiran Palepu');
// localStorage.setItem('gender','Male');
// localStorage.setItem('city','Pallam');

// let fullName = localStorage.getItem('fullName');
// let gender = localStorage.getItem('gender');
// let city = localStorage.getItem('city');

// console.log(fullName);
// console.log(gender);
// console.log(city);


// let textareaEl = document.getElementById('message');
// let saveButtonEl = document.getElementById('saveButton');

// saveButtonEl.onclick = function(){
//     let userEnteredText = textareaEl.value;
//     localStorage.setItem('userEnteredText', userEnteredText);

// }

// let userStoredInputValue = localStorage.getItem('userEnteredText');

// if (userStoredInputValue === null){
//     textareaEl.value = "";
// }
// else{
//     textareaEl.value = userStoredInputValue;
// }


// Array Methods


// let myArray1 = [5,8.2,"six", 2, 8.2];
// let myArray2 = [5, 12, 8, 130, 44];

// let deletedValues = myArray.splice(1,3);
// console.log(myArray);
// console.log(deletedValues);

// myArray.splice(2,0, 'one', true );
// console.log(myArray);

// myArray.splice(1,1,6);
// console.log(myArray);


// let itemIndex = myArray2.findIndex(
//     function(eachItem){
//         if (eachItem === 12){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// );

// console.log(itemIndex);

// let itemStatus =  myArray1.includes(2);
// console.log(itemStatus);

// let itemStatus = myArray1.indexOf(8.2);
// console.log(itemStatus);


// let itemStatus = myArray1.lastIndexOf(8.2);
// console.log(itemStatus);

// myArray.unshift(6,"7.0");
// myArray.shift();

// console.log(myArray);

// let newArray = myArray1.concat(myArray2);
// console.log(newArray);

// let part = myArray1.slice(1,6);
// console.log(part);


// let array = ["Wind", "Water", "Fire"];
// let finalString = array.join(' # ');

// console.log(finalString);

// console.log(myArray1.sort());



// function callback(userName){
//     console.log("Hello " + userName());
// }

// let displayName = function(){
//     return "Kalyani" ;
// } 

// // let nameEl = "Kalyani"

// callback(displayName);


// let count = 0;

// let uniqueId = setInterval(function(){
//     console.log(count);
//     count = count + 1;
// },1000);



// clearInterval(uniqueId);

// let startButtonEl = document.getElementById('startButton');
// let endButtonEl = document.getElementById('endButton');
// let numberTextEl = document.getElementById('numberText');
// let messageEl = document.getElementById('message');

// let uniqueId = null;

// startButtonEl.onclick = function(){
//     let count = 0
//     uniqueId = setInterval(function(){
//         numberTextEl.textContent = count;
//         messageEl.textContent = 'Counter Stared.....'
//         count = count + 1
//     },1000)
// }

// endButtonEl.onclick = function(){
//     clearInterval(uniqueId);
//     messageEl.textContent = "Counter Ended...."
// }

// let uniqueId = null;

// startButtonEl.onclick = function(){
//     uniqueId = setTimeout(function(){
//         numberTextEl.textContent = "You Can start Exam";
//         messageEl.textContent = 'Function Executed'
//         count = count + 1
//     },3000)
// }

// endButtonEl.onclick = function(){
//     clearTimeout(uniqueId);
//     messageEl.textContent = "Function Ended"
// }

// let greetBtnEl = document.getElementById('greetBtn');
// let messageEl = document.getElementById('message');

// greetBtnEl.addEventListener('click', function(){
//     messageEl.textContent = "Good Evening Kaylani.....";
// });

//  1 + 3 = 4
// 3 - 1 = 2
// "Hi" + 3 = "Hi3"
// 4 / 2 = 2
// %


// 4 == 2  false
// 5.3  != 3  true
// "hi" !== "Hiiiii"  true

// console.log((5 > 2) && (4 != 2 ))
// console.log((5 > 2) || (4 != 2 ))
// console.log(!(true))


// let inputEl = document.createElement('input');
// let messageEl = document.getElementById('message');

// inputEl.addEventListener('keydown', function(event){
//     messageEl.textContent = event.key;
//     console.log(event.key);
// });

// document.body.appendChild(inputEl);

// Get Method

// let options = {
//     method : 'GET'
// }

// let url = "https://gorest.co.in/public-api/users";

// fetch(url, options)
//     .then(function(response){
//         return response.status ;
//     })
//     .then(function(status){
//         console.log(status);
//     });

// Post Method

// let data = {
//     name : "Kiran",
//     gender : "male",
//     email : "kingsman3@gmail.com",
//     status : "Active"
// }

// let options = {
//     method : "POST",
//     headers : {
//         'Content-Type' : "application/json",
//         Accept : "application/json",
//         Authorization : "Bearer 5f2fdd9a5a820f49ae43cb515a8cbfdbec0ee9f25454a61e8727a7126f769fff"
//     },
//     body : JSON.stringify(data)
// };


// let url = "https://gorest.co.in/public-api/users";

// fetch(url, options)
//     .then(function(response){
//         return response.status;
//     })
//     .then(function(status){
//         console.log(status);
//     });

// Put Method

// let data = {
//     name : "Kalyani",
//     status : "Active"
// };

// let options = {
//     method : 'PUT',
//     headers : {
//         'Content-Type': "application/json",
//         Accept : "application/json",
//         Authorization : "Bearer 5f2fdd9a5a820f49ae43cb515a8cbfdbec0ee9f25454a61e8727a7126f769fff"
//     },
//     body : JSON.stringify(data)
// };


// let url = "https://gorest.co.in/public-api/users/1831701";

// fetch(url, options)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(jsonData){
//         console.log(jsonData);
//     });

// Delete Method

// let options = {
//     method : "DELETE",
//     headers : {
//         "Content-Type" : "application/json",
//         Accept : "application/json",
//         Authorization : "Bearer 5f2fdd9a5a820f49ae43cb515a8cbfdbec0ee9f25454a61e8727a7126f769fff"
//     }
// };

// let url = "https://gorest.co.in/public-api/users/1831701";

// fetch(url, options)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(jsonData){
//         console.log(jsonData);
//     });


// let options = {
//     method: "GET"
//   };
  
// fetch("https://gorest.co.in/public-api/users", options)
//     .then(function(response) {
//         return response.text();
//     })
//     .then(function(text) {
//         console.log(text);
//         });

// let myFormEl = document.getElementById('myForm');

// myFormEl.addEventListener('submit', function(event){
//     event.preventDefault();
// });

// let inputEl = document.getElementById('inputEl');

// inputEl.addEventListener('blur', function(event){
//     console.log("Blue event triggered...");
// });

// let headingElement = document.getElementById("greetMessage");

// function changeGreet(){
//     headingElement.textContent = "Good Night...";
//     headingElement.style.color = "red";

// }


// function changeBack(){
//     headingElement.textContent = "Good Morning";
//     headingElement.style.color = "green";
// }

// -------------------------------------------------------------------------------------


