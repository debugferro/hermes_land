import $ from 'jquery';

const sendMessage = () => {
  const form = document.querySelector('.chatroom');
  const messageInput = document.getElementById('message_content');
  var date = new Date();
  date.setTime(date.getTime() + (30 * 1000));
  if (form) {
    $('.chat-form').keydown(function(e){
      if(e.which==13){
        document.cookie = `cookiename=${window.pageYOffset}, expires=${date.toGMTString()};`;
        form.submit();
        messageInput.value = "";
        return false;
      }
    });
    document.getElementById("new_message").addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("new_message").submit();
      document.cookie = `cookiename=${window.pageYOffset}, expires=${date.toGMTString()};`;
      messageInput.value = "";
    })
  }
}

export { sendMessage };
