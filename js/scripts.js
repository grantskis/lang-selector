$(document).ready(function() {
  $("#questionaire").submit(function(event) {
    event.preventDefault();
    const answer1 = parseInt($("input:radio[name=q1-monster]:checked").val());
    const answer2 = parseInt($("input:radio[name=q2-zodiac]:checked").val()); 
    const answer3 = parseInt($("input:radio[name=q3-animal]:checked").val()); 
    const answer4 = parseInt($("input:radio[name=q4-time]:checked").val()); 
    const answer5 = parseInt($("input:radio[name=q5-holiday]:checked").val());

    let totalSum = parseInt(answer1 + answer2 + answer3 + answer4 + answer5)

    if (isNaN(totalSum)) {
      alert("You need to answer all the questions!")
    }
    else {
      $(".find-it").hide();
      $("#questionaire").hide();
      $(".output div").hide();
      $("#found-it").show();

      if (answer5 === 3) {
        $("#ruby").show();
      } else if (answer3 === 2) {
        $("#python").show();
      } else if (totalSum <= 11 && totalSum >=8 ) {
        $("#javascript").show();
      } else if (totalSum > 11) {
        $("#ruby").show();
      } else {
        $("#python").show();
      }
    }
  });
});