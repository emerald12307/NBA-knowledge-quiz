//quiz

// Event Listener
document.getElementById("btn").addEventListener("click", outputResults);
//Number Variables
let numCorrect = 0;

function outputResults() {
  //Input
  let answ1 = document.getElementById("answer1-input").value;
  let answ2 = document.getElementById("answer2-input").value;
  let answ3 = document.getElementById("answer3-input").value;
  let answ4 = document.getElementById("answer4-input").value;
  let answ5 = document.getElementById("answer5-input").value;

  //Lower case
  answ1 = answ1.toLowerCase();
  answ2 = answ2.toLowerCase();
  answ3 = answ3.toLowerCase();
  answ4 = answ4.toLowerCase();
  answ5 = answ5.toLowerCase();

  //Question 1
  if (answ1 === "1949") {
    document.getElementById("mark1").innerHTML = "Correct";
    document.getElementById("mark1").style.color = "green";
    numCorrect++;
  } else {
    document.getElementById("mark1").innerHTML = "Incorrect";
    document.getElementById("mark1").style.color = "red";
    document.getElementById("answ1").innerHTML = "The correct answer is 1949.";
  }

  //Question 2
  if (
    answ2 === "boston celtics and los angeles lakers" ||
    answ2 === "lakers and celtics" ||
    answ2 === "celtics and lakers" ||
    answ2 === "los angeles lakers and boston celtics"
  ) {
    document.getElementById("mark2").innerHTML = "Correct";
    document.getElementById("mark2").style.color = "green";
    numCorrect++;
  } else {
    document.getElementById("mark2").innerHTML = "Incorrect";
    document.getElementById("mark2").style.color = "red";
    document.getElementById("answ2").innerHTML =
      "The correct answer is the Los Angeles Lakers and Boston Celtics.";
  }

  //Question 3
  if (answ3 === "bill russell") {
    document.getElementById("mark3").innerHTML = "Correct";
    document.getElementById("mark3").style.color = "green";
    numCorrect++;
  } else {
    document.getElementById("mark3").innerHTML = "Incorrect";
    document.getElementById("mark3").style.color = "red";
    document.getElementById("answ3").innerHTML =
      "The correct answer is Bill Russell.";
  }

  //Question 4
  if (answ4 === "100" || answ4 === "100 points") {
    document.getElementById("mark4").innerHTML = "Correct";
    document.getElementById("mark4").style.color = "green";
    numCorrect++;
  } else {
    document.getElementById("mark4").innerHTML = "Incorrect";
    document.getElementById("mark4").style.color = "red";
    document.getElementById("answ4").innerHTML = "The correct answer is 100.";
  }

  //Question 5
  if (answ5 === "1979") {
    document.getElementById("mark5").innerHTML = "Correct";
    document.getElementById("mark5").style.color = "green";
    numCorrect++;
  } else {
    document.getElementById("mark5").innerHTML = "Incorrect";
    document.getElementById("mark5").style.color = "red";
    document.getElementById("answ5").innerHTML = "The correct answer is 1979.";
  }

  //Mark Output
  let mark = (numCorrect / 5) * 100;
  document.getElementById("results").innerHTML =
    "Your Score: " + numCorrect + "/5 (" + mark + "%)";

  //Comments
  if (mark <= 20) {
    document.getElementById("comment").innerHTML = "Watch more NBA videos!";
  } else if (mark <= 40) {
    document.getElementById("comment").innerHTML =
      "You must be new to basketball...";
  } else if (mark <= 60) {
    document.getElementById("comment").innerHTML = "You're a casual.";
  } else if (mark <= 80) {
    document.getElementById("comment").innerHTML = "So close!";
  } else {
    document.getElementById("comment").innerHTML =
      "Great Job! You're a true NBA fan!!";
  }
}

//Try again button

document.getElementById("try-again-btn").addEventListener("click", reloadPage);

function reloadPage() {
  location.reload();
}
