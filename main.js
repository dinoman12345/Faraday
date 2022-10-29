//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyBY7qNDq13xGmZkquxJIku7QkBwAL4OSlI",
  authDomain: "faraday-fd10f.firebaseapp.com",
  databaseURL: "https://faraday-fd10f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "faraday-fd10f",
  storageBucket: "faraday-fd10f.appspot.com",
  messagingSenderId: "828291799602",
  appId: "1:828291799602:web:982abd41ccdfc158fbfa2b",
  measurementId: "G-HG9MQZ2ZMH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firebase = firebase.firestore()
//Variable to access database collection
const db = firstore.collection("formData")
//Get Submit Form
let submitButton = document.getElementById('submit')
//Create Event Listener To Allow Form Submission
submitButton.addEventListener("clcik", (e) => {
//Prevent Default From Submission Behaviour
e.preventDefault()

//Get Form Values
let studentName = document.getElementById('Sname').value
let parentName = document.getElementById('pname').value
let schoolName = document.getElementById('scname').value
let VI = document.getElementById('6').value
let VII = document.getElementById('7').value
let VIII = document.getElementById('8').value
let IX = document.getElementById('9').value
let X = document.getElementById('10').value
let XI = document.getElementById('11').value
let XII = document.getElementById('12').value
let phonenumber = document.getElementById('Phname').value
let Biology = document.getElementById('T1').value
let Chemistry = document.getElementById('T2').value
let ComputerCplusplus = document.getElementById('T3').value
let ComputerJava = document.getElementById('T4').value
let ComputerPhyton = document.getElementById('T5').value
let English = document.getElementById('T6').value
let Hindi = document.getElementById('T7').value
let Malayalam = document.getElementById('T8').value
let Maths = document.getElementById('T9').value
let Physics = document.getElementById('T10').value

//Save Form Data To Firebase
db.doc().set({
    Sname: studentName,
    pname: parentName,
    scname: schoolName,
    6: VI,
    7: VII,
    8: VIII,
    9: IX,
    10: X,
    11: XI,
    12: XII,
    Phname: phonenumber,
    T1: Biology,
    T2: Chemistry,
    T3: ComputerCplusplus,
    T4: ComputerJava,
    T5: ComputerPhyton,
    T6: English,
    T7: Hindi,
    T8: Malayalam,
    T9: Maths,
    T10: Physics
}).then( () => {
    console.log("Data saved")
}).catch((error)=>{
    console.log(error)
})
//alert
alert("Your Form Has Been Submitted Success")
})