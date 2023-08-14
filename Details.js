// Function to store user details in local storage
function storeUserDetails() {
  const fullName = document.getElementById("fullName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;

  // an object to store the user details
  const userDetails = {
    fullName: fullName,
    mobileNumber: mobileNumber,
    email: email,
    gender: gender
  };

  // Store the user details in local storage
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
}
function loadUserDetails() {
  
  const storedUserDetails = localStorage.getItem("userDetails");

  if (storedUserDetails) {
    const userDetails = JSON.parse(storedUserDetails);
    // Display the user details in the summary table
    document.getElementById("fullNameSummary").textContent = userDetails.fullName;
    document.getElementById("mobileNumberSummary").textContent = userDetails.mobileNumber;
    document.getElementById("emailSummary").textContent = userDetails.email;
    document.getElementById("genderSummary").textContent = userDetails.gender;
  }
}

window.onload = function () {
  loadUserDetails();
};

function AddData() {
  storeUserDetails();
}




