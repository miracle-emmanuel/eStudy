
const initApp = () => {
  const hamburgerBtn = document.getElementById('humburger-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  const toggleMenu =() => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  }
  hamburgerBtn.addEventListener('click',toggleMenu)
  mobileMenu.addEventListener('click',toggleMenu)
};
document.addEventListener('DOMContentLoaded', initApp)

// src= "https://smtpjs.com/v3/smtp.js";

// function sendEmail(){
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "miracleemmanuel995",
//     Password : "Heavengate123$",
//     To : 'miracleemmanuel995@gmail.com',
//     From : document.getElementById ("email").value,
//     Subject : "New contact form enquiry",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }