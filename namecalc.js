document.querySelector('form').addEventListener('submit' , (Event) =>{
  Event.preventDefault(); //Prevents the form from submitting.

  //get a user's date of birth
  let monthBirth = parseInt(document.querySelector('#month').value);
  let dateBirth = parseInt(document.querySelector('#date').value);
  let yearBirth = parseInt(document.querySelector('#year').value);

  //calculate day of week of birth
  let c = Math.floor(yy / 100);
  let cc = 2 - (c % 4);
  let yy = yearBirth % 100;
  let mm = monthBirth - 1;
  let dd = dateBirth;
  let dayOfWeek=( ( (c/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  alert('Your day of birth is ${daysOfWeek[dayOfWeek]}');
})
function akanName()