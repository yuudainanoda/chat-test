$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="test__message__contents__form__first">
           <div class="test__message__contents__form__first__id">
             ${message.user_name}
           </div>
           <div class="test__message__contents__form__first__day">
             ${message.created_at}
           </div>
         </div>
         <div class="test__message__contents__form__comment">
           <p>
             ${message.content}
           </p>
         </div>
         <img src=${message.image} >
       </div>`
     return html;
   } else {
     var html =
      `<div class="message" data-message-id=${message.id}>
         <div class="test__message__contents__form__first">
           <div class="test__message__contents__form__first__id">
             ${message.user_name}
           </div>
           <div class="test__message__contents__form__first__day">
             ${message.created_at}
           </div>
         </div>
         <div class="test__message__contents__form__comment">
           <p>
             ${message.content}
           </p>
         </div>
       </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.test__message__contents').append(html);      
    $('form')[0].reset();
    $('.test__message__contents').animate({ scrollTop: $('.test__message__contents')[0].scrollHeight});
    $('.test__message__contents__btn__form__send').prop('disabled', false);
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});