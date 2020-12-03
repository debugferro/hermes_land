import $ from 'jquery';

const sendMessage = () => {
  const form = document.querySelector('.chatroom')
  var date = new Date();
  date.setTime(date.getTime() + (30 * 1000));
  if (form) {
    $('.chat-form').keydown(function(e){
      if(e.which==13){
        form.submit();
        document.cookie = `cookiename=${window.pageYOffset}, expires=${date.toGMTString()};`;
        return false;
      }
    });
  }
}

export { sendMessage };
