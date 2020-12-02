import $ from 'jquery';

const sendMessage = () => {
  const form = document.querySelector('.chatroom')
  if (form) {
    $('.chat-form').keydown(function(e){
      if(e.which==13){
        form.submit();
        return false;
      }
    });
  }
}

export { sendMessage };
