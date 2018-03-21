$(document).ready(function() {
  $("#survey").submit(function(event) {
    var inputName = $("#name").val();
    var inputFood = $("input:radio[name=food]:checked").val();
    var inputDate = $("#born").val();
    var inputColor = $("#color").val();

    $(".outputName").text(inputName);
    $(".outputFood").text(inputFood);
    $(".outputdate").text(inputDate);
    $(".outputColor").text(inputColor);

    $(".panel").show();
    
    event.preventDefault();
  });
});
