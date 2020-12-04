const loadScroll = () => {

  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    window.onload = function () {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // let fullCookie = document.cookie.split(',')
    // let nameValue = fullCookie[0].split('=')
    // let posValue = nameValue[1]
    // window.scrollTo(0, Number(posValue));
    };
  }
}

export { loadScroll };
