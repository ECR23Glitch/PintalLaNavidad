

$(document).ready(function(){


var element = $("#unityContainer"); // global variable
var getCanvas; // global variable


  $("#imprimir").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#imprimir").attr("download", "pintalanavidad.png").attr("href", newData);
  });

});
