const firebaseConfig = {
  apiKey: "AIzaSyDY0Xy283pcbiFEEnpC0w62nkkPSXDByOg",
  authDomain: "littlewonders-620a3.firebaseapp.com",
  databaseURL: "https://littlewonders-620a3-default-rtdb.firebaseio.com",
  projectId: "littlewonders-620a3",
  storageBucket: "littlewonders-620a3.appspot.com",
  messagingSenderId: "1080465762785",
  appId: "1:1080465762785:web:ec120be48b935b68528aa0"
};

firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();
  var name = getElementVal('fname');
  var email = getElementVal('email');
  var time = getElementVal('Time');
  var phone = getElementVal('phone');
  
  saveMessages(name,email,time,phone);
  document.querySelector(".alert").style.display = "block";
  setTimeout(()=>{
    document.querySelector(".alert").style.display = "none";

  },1000);

  document.getElementById("contactForm").reset();
  

}

const saveMessages = (name,email,time,phone) =>{
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name:name,
    email : email,
    time : time,
    phone:phone,

  });
}

const getElementVal = (id) =>
{
  return document.getElementById(id).value;
}