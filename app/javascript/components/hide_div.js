import $ from 'jquery';

const hideDiv = () => {
  const toggleDiv = document.getElementById("togglediv");
  if (toggleDiv) {
    $("#btn-add").click(function(){
      toggleDiv.classList.toggle("hidden")
    });
  }
}

export { hideDiv };
