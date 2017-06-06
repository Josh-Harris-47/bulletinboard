$('#formthing').on('submit',function(e){
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: '/message',
    data: {body: $('#text').val()}
  }).then(function(res){
    console.log(res);
    window.location.href="/messages.html"
  });
});