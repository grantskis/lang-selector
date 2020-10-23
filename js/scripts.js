$(document).ready(function() {
  $("#questionaire").submit(function(event) {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=q1]:checked").val()); // Monster
    const answer2 = parseInt($("input:radio[name=q2]:checked").val()); // Zodiac
    const answer3 = parseInt($("input:radio[name=q3]:checked").val()); // Animal
    const answer4 = parseInt($("input:radio[name=q4]:checked").val()); // Time
    const answer5 = parseInt($("input:radio[name=q5]:checked").val()); // Holiday
    let totalSum = parseInt(answer1 + answer2 + answer3 + answer4 + answer5)

    if (isNaN(totalSum)) {
      alert("You need to answer all the questions!")
    }
    else {
      // $("#questionaire").hide();
      $(".output span").hide();
      if (answer5 === 3) {
        $("#ruby").show();
      }
      else if (answer3 === 2) {
        $("#python").show();
      }
      else if (answer1 === 2) {
        $("#rust").show();
      }
      else if (totalSum <= 11 && totalSum >=9 ) {
        $("#javascript").show();
      }
      else if (totalSum > 11) {
        $("#ruby").show();
      }
      else {
        $("#python").show();
      }
    }
    console.log(totalSum);
  });
});