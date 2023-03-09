function validateForm() {
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  if (dob === "" || gender === "") {
    alert ("Please enter your date of Birth and gender.");
    return false;
  }
  return true;
  }

function generateName() {
  let dob = new Date(document.getElementById("dob").value);
  let gender = document.getElementById("gender").value;

  let year = dob.getFullYear();
  let month = dob.getMonth() + 1;
  let day = dob.getDate();

  let cc = Math.floor(year / 100) + 1;
  let dayOfWeek = Math.floor(((cc / 4) -2 * cc - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
   
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi","Kwame"];
let femaleNames = ["Akosua", "Adwao", "Abenaa", "Akua", "Yaa" , "Afua", "Ama"];

  let name;
   if (gender === "male") {
    name = maleNames[dayOfWeek];
  } else {
    name = femaleNames[dayOfWeek];
  }
  window.alert("Your Akan name is: " + name);
}
