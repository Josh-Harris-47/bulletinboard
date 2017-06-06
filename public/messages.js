$( document ).ready(function() {
  $.ajax({
    method: "GET",
    url: '/message'
  }).then(function(res){
    console.log(res);
  });
});