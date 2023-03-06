
  //define akan male names
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];

  //define akan female names 
  const femaleNames = [
    "Akosua",
    "Adwao",
    "Abenaa",
    "Akua",
    "Ama"
  ];

  function akanName() {
  //get a user's date of birth
  const dob = document.getElementById("date");
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  
  if (dob.value === ""){
    alert("Please enter date of birth");
    return
  }

    //calculate day of week of birth
  let cc = 2 - (c % 4);
  let yy = year % 100;
  let mm = month - 1;
  let dd = dob.getdob();

  let dayOfWeek = Math.floor( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  alert('Your day of birth is ${daysOfWeek[dayOfWeek]}');
  if(gender == "male"){}
}
