// Initialize EmailJS
emailjs.init("0VC_dLB3U6lLvab37"); // Replace with your actual EmailJS User ID

// Function to send email with form data
function sendLoveCalculationEmail(name1, name2) {
  const emailParams = {
    user_name: name1,
    love_name: name2,
    message: `${name1} loves ${name2}`,
  };

  // Send email using EmailJS
  emailjs.send("service_he0thdr", "template_q45x3fw", emailParams)
    .then(response => {
      console.log("Email sent successfully!", response.status, response.text);
    })
    .catch(error => {
      console.log("Failed to send email.", error);
    });
}

// Handle "Calculate" button click
document.getElementById("calculateButton").addEventListener("click", function() {
  const name1 = document.querySelector(".name1").value;
  const name2 = document.querySelector(".name2").value;

  // Optionally, send the calculation result via email
  sendLoveCalculationEmail(name1, name2);
});