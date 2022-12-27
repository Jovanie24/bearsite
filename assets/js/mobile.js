const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// Form validation code will come here.
      function validate() {
      
         if( document.myForm.name.value == "" ) {
            document.getElementById('error').innerHTML = "Name is required.";
            return false;
         }
         else if( document.myForm.email.value == "" ) {
            document.getElementById('error').innerHTML = "Email is required.";
            return false;
         }
         else if( document.myForm.code.value == "" ) {
            document.getElementById('error').innerHTML = "Code is required.";
            return false;
         }
         else if( document.myForm.phone.value == "" ) {
            document.getElementById('error').innerHTML = "Phone is required.";
            return false;
         }
            document.getElementById('success').innerHTML = "Thanks for contacting us! We will get in touch with you shortly.";
            setTimeout(function(){
   window.location.reload();
}, 3000);
            return false;
}