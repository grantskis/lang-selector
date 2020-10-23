$(document).ready(function() {
  $("#questionaire").submit(function(event) {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=q1]:checked").val());
    const answer2 = parseInt($("input:radio[name=q2]:checked").val());
    const answer3 = parseInt($("input:radio[name=q3]:checked").val());
    const answer4 = parseInt($("input:radio[name=q4]:checked").val());
    const answer5 = parseInt($("input:radio[name=q5]:checked").val());
    $("form").hide();
    let totalSum = parseInt(answer1 + answer2 + answer3 + answer4 + answer5)
    console.log(totalSum);
    
    if (isNaN(totalSum)) {
      alert("You need to answer all the questions!")
      $("form").show();
    }
    else if (totalSum === 5) {
      $("#exactly-five").show();
    }
  });
});