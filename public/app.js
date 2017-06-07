$('#formthing').on('submit',function(e){
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: '/message',
    data: {
            body: $('#text').val(),
            title: $('#title').val()
          }
  }).then(function(res){
    window.location.href="/messages.html"
  });
});