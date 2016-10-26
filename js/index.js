var anchor = 0;
var waveCtrl = 0;
var ans = " ";
var newCal;
var dotUsed = false;

function incDec(int) {

  waveCtrl += int;

  if (waveCtrl < 255) {
    anchor += int;
  } else if (waveCtrl < 510 && waveCtrl > 255) {
    anchor -= int;
  } else if (waveCtrl == 510) {
    waveCtrl = 0;
  }

  return anchor;

}

$("#up").click(function() {
  for (var i = 0; i < 10; i++) {
    var random1 = "rgb(0,2," + incDec(2);
    var random2 = "rgb(" + incDec(2) + ",0,0)";
    document.body.style.background = "linear-gradient(to top," + random2 + "," + random1 + ")";
  }
});

$("#moon").click(function() {
  document.body.style.background = "radial-gradient(circle, blue, black ) ";
});

$("#sun").click(function() {
  document.body.style.background = "radial-gradient(circle, yellow, black)";
});

$("#clouds").click(function() {
  document.body.style.background = "radial-gradient(circle, white, black)";
});

$(".btn").click(function() {

  if ($(this).attr("value") == "=") {

    newCal = true;
    dotUsed = false;
    ans = eval(ans);
    $("#screen").val(ans);
    console.log("this is the value: " + ans);
  

  } else if($(this).attr("value") == "."){
      
      if(dotUsed){
        
        return;
        
      } else {
        
        dotUsed = true;
        ans += $(this).attr("value");
        
      }
    
  } else if ($(this).attr("value") == "C") {

    ans = " ";

  } else if($(this).attr("value") == "*" || $(this).attr("value") == "+" || $(this).attr("value") == "/" || $(this).attr("value") == "-" ){
    
    dotUsed = false;
    ans += $(this).attr("value");
    
    
  } else {

    if (newCal) {

      ans = " ";
      newCal = false;
     
    }
    
    ans += $(this).attr("value");

  }
  
  ans = ans.replace(/\+{2}/g, "+").replace(/\-{2}/,"-").replace(/\\\/{2}/,"/").replace(/\*{2}/,"*");
  // ans = ans.replace(/4/,"5");
  $("#screen").val(ans);
  console.log("this is the value: " + ans);

});