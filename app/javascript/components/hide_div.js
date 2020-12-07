import $ from 'jquery';

const hideDiv = () => {
  const toggleDiv = document.querySelectorAll(".togglediv");
  toggleDiv.forEach((div) => {
    if (div) {
      $(".btn-add").click(function(){
        div.classList.toggle("hidden")
      });
    }
  })
}

export { hideDiv };
