// const showMessageOne = document.getElementById('mentorMessageOne');
//
// function showMentorDetails(){
//   document.getElementById('mentorOne').classList.toggle('show');
// }
//
// function closeDetails(){
//   document.getElementById('mentorMessageOne').classList.remove('showMessageOne');
// }
//
// document.getElementById('mentorOne').addEventListener('click', showMentorDetails);
// document.getElementById('close-trigger').addEventListener('click', closeDetails);

function mentorDetails1() {
  document.getElementById("mentorMessageOne").style.visibility = "visible";
}

function mentorDetails2() {
  document.getElementById("mentorMessageTwo").style.visibility = "visible";
}

function mentorDetails3() {
  document.getElementById("mentorMessageThree").style.visibility = "visible";
}

function closeDetails() {
  document.getElementById("mentorMessageOne").style.display = "none";
  document.getElementById("mentorMessageTwo").style.display = "none";
  document.getElementById("mentorMessageThree").style.display = "none";
}

function openForm() {
  document.getElementById("lunchWindow").style.visibility = "visible";
}

function closeForm() {
  document.getElementById("lunchWindow").style.display = "none";
}
