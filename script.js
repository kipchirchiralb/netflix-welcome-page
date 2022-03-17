let questions = document.querySelectorAll(".question");

let answers = document.querySelectorAll(".answer");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    let answer = e.target.nextElementSibling;
    let span = e.target.children[0];
    if (answer.style.display === "block") {
      answer.style.display = "none";
      span.textContent = "+";
    } else {
      answers.forEach((answer) => (answer.style.display = "none"));
      questions.forEach((question) => (question.children[0].textContent = "+"));
      answer.style.display = "block";
      span.textContent = "×";
    }
    // let count = 2;
    // if (count % 2 === 0) {
    //   e.target.nextElementSibling.style.display = "block";
    //   e.target.children[0].textContent = "×";
    // } else {
    //   e.target.nextElementSibling.style.display = "none";
    //   e.target.children[0].textContent = "+";
    // }
    // count++;
  });
});
