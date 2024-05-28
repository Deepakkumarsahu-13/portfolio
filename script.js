var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}





// ____________side menu_____

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// -------------contact---------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzLQf76ZM2FhFv3zfcjqc6l3yK-u_tOKyO2sIoywBmSDSAp3q0wamarnbGJJMZv1xAe/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Messsage Sent Successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 4000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})