$(document).ready(function() {
  $("#submit-button").click(function() {
    if (timesNoButtonClicked > timesYesButtonClicked) {
      $("#results").text("you were not horrible");
    } else if (timesYesButtonClicked > timesNoButtonClicked) {
      $("#results").text("you were the worst human alive");
    }
  });
  var timesNoButtonClicked = 0;
  var timesYesButtonClicked = 0;
  $("#no").click(function() {
    //adds 1 to timesYesButtonClicked
    timesNoButtonClicked++;
  });

  $("#yes").click(function() {
    //adds 1 to timesYesButtonClicked
    timesYesButtonClicked++;
  });
});
