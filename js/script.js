
$(document).ready(function () {
  $("#bar").click(function () {
    $("header nav ul").css("display", "block");
  });
  $("#out").click(function () {
    $("header nav ul").css("display", "none");
  });


}); 
$(document).ready(function () {
  $("#cont1").hide();
  $("#click1").click(function () {
    $("#cont1 ").slideToggle(1000);

  })

  $("#cont2").hide();
  $("#click2").click(function () {
    $("#cont2 ").slideToggle(1000);

  })

  $("#cont3").hide();
  $("#click3").click(function () {
    $("#cont3").slideToggle(1000);

  })

  $("#cont4 ").hide();
  $("#click4").click(function () {
a
  })

});

$(document).ready(function () {
  $("#rev-content1").show();
  $("#rev-content2").hide();         
  $("#rev-content3").hide(); 
  $("#s1").click(function() {
      $("#rev-content1").fadeIn(4000);
      $("#rev-content2").hide();
      $("#rev-content3").hide();
      $("#s1").css("background-color", " teal");
      $("#s2").css("background-color", "aliceblue");
      $("#s3").css("background-color", "aliceblue");
  });
      $("#s2").click(function() {
          $("#rev-content2").fadeIn(4000);
          $("#rev-content1").hide();
          $("#rev-content3").hide();
          $("#s2").css("background-color", "teal");
          $("#s3").css("background-color", "aliceblue");
          $("#s1").css("background-color", "aliceblue");
      });
          $("#s3").click(function() {
              $("#rev-content3").fadeIn(4000);
              $("#rev-content2").hide();
              $("#rev-content1").hide();
              $("#s3").css("background-color", "teal");
              $("#s2").css("background-color", "aliceblue");
              $("#s1").css("background-color", "aliceblue");
          });
     
          
  });