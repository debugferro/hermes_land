import $ from 'jquery';

  let imgFace;
  let imgHair;
  let imgMouth;
  let imgEyes;
  let imgEyebrow;
  let imgNose;
  let resAvatar;
  var context;

const createAvatar = () => {
  const hairs = ['blond_hair_1.png', 'blond_hair_2.png']
  let hairIndex = 1;
  const updateCanvas = () => {
    context = resAvatar.getContext("2d");
    resAvatar.width = imgFace.width;
    resAvatar.height = imgFace.height;
    context.drawImage(imgFace, 0, 0);
    context.drawImage(imgHair, 0, 0);
    context.drawImage(imgMouth, 0, 0);
    context.drawImage(imgEyes, 0, 0);
    context.drawImage(imgEyebrow, 0, 0);
    context.drawImage(imgNose, 0, 0);
    var data = resAvatar.toDataURL('image/png');
  }
  const grabElements = () => {
    imgFace = document.getElementById("face");
    imgHair = document.getElementById("hair");
    imgMouth = document.getElementById("mouth");
    imgEyes = document.getElementById("eyes");
    imgEyebrow = document.getElementById("eyebrows");
    imgNose = document.getElementById("nose");
    resAvatar = document.querySelector(".result");
  }
  grabElements();

  let btnUpdate = document.querySelector(".Btn");
  let btnHair = document.querySelector(".Btn-hair");

  btnUpdate.addEventListener("click", () => {
    updateCanvas();
  });

  btnHair.addEventListener("click", () => {
    imgHair.src = `/avatar/${hairs[hairIndex++%hairs.length]}`
    imgHair.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

};



// document.addEventListener("DOMContentLoaded", uploadfunc);

export { createAvatar };
