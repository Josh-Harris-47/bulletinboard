$( document ).ready(function() {
  $.ajax({
    method: "GET",
    url: '/message'
  }).then(function(res){
    for(var i = 0; i < res.length; i++){
      $('#content').append('<div><h1>'+res[i].title+'</h1><h6>'+res[i].body+'</h6></div>');
    }
    console.log(res);
  });
});