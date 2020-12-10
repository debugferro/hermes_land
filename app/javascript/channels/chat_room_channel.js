import consumer from "./consumer";
import $ from 'jquery';

const initChatRoomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatRoomChannel", id: id }, {
      received(data) {
        messagesContainer.insertAdjacentHTML('beforeend', data);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        const lastMessageContainer = messagesContainer.lastElementChild;
        const userId = document.getElementById("current-user").dataset.id
        const photo = lastMessageContainer.querySelector(".photo");
        const bubble = lastMessageContainer.querySelector(".bubble");
        if (lastMessageContainer.dataset.userId != userId) {
          photo.classList.toggle("message-photo");
          photo.classList.toggle("message-photo-right");
          bubble.classList.toggle("speech-bubble");
          bubble.classList.toggle("speech-bubble-right");
          lastMessageContainer.classList.toggle("message-wrapper");
          lastMessageContainer.classList.toggle("message-wrapper-right");
          const tdiv1 = photo.cloneNode(true);
          const tdiv2 = bubble.cloneNode(true);
          photo.replaceWith(tdiv2);
          bubble.replaceWith(tdiv1);
        }
      },
    });
  }
}

export { initChatRoomCable };
