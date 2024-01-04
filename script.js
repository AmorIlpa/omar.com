
const form= document.querySelector("form");
function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "omarilpa09@gmail.com",
        Password : "36E8D32C570FB916702598804B21C81B02FE",
        To : 'omarilpa09@gmail.com',
        From : "omarilpa09@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    ); 
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
