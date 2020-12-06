import $ from 'jquery';

  let imgBase;
  let imgHair;
  let imgMouth;
  let imgEyes;
  let imgEyebrows;
  let imgNose;
  let imgCloth;
  let imgAcessory;
  let resAvatar;
  var context;

const createAvatar = () => {
  // DEFINING INDEX AS 1 TO LOOP INSIDE ARRAY SENT BY RAILS WHEN CLICKING A BUTTON
  let baseIndex = 1;
  let eyeIndex = 1;
  let hairIndex = 1;
  let mouthIndex = 1;
  let eyebrowIndex = 1;
  let noseIndex = 1;
  let clothIndex = 1;
  let acessoryIndex = 1;

  // GETTING INFORMATION FROM RAILS AVATAR CONTROLLER
  const avatarInfos = $('.avatar_information');
  const bases = avatarInfos.data('bases');
  const eyes = avatarInfos.data('eyes');
  const hairs = avatarInfos.data('hairs');
  const mouths = avatarInfos.data('mouths');
  const eyebrows = avatarInfos.data('eyebrows');
  const noses = avatarInfos.data('noses');
  const clothes = avatarInfos.data('clothes');
  const acessories = avatarInfos.data('acessories');

  // GETTING HTML BUTTONS FOR CHANGES
  let btnUpdate   = document.querySelector(".Btn");
  let btnBase     = document.querySelector(".Btn-base");
  let btnEyes     = document.querySelector(".Btn-eyes");
  let btnHair     = document.querySelector(".Btn-hair");
  let btnMouth    = document.querySelector(".Btn-mouth");
  let btnEyebrows = document.querySelector(".Btn-eyebrows");
  let btnNose     = document.querySelector(".Btn-nose");
  let btnCloth    = document.querySelector(".Btn-cloth");
  let btnAcessory = document.querySelector(".Btn-acessory");

  // METHODS FOR GRABBING ELEMENTS THAT WERE CHANGED AND UPDATE CANVAS
  const updateCanvas = () => {
    context = resAvatar.getContext("2d");
    resAvatar.width = imgBase.width;
    resAvatar.height = imgBase.height;
    context.drawImage(imgBase, 0, 0);
    context.drawImage(imgHair, 0, 0);
    context.drawImage(imgMouth, 0, 0);
    context.drawImage(imgEyes, 0, 0);
    context.drawImage(imgEyebrows, 0, 0);
    context.drawImage(imgNose, 0, 0);
    context.drawImage(imgCloth, 0, 0);
    context.drawImage(imgAcessory, 0, 0);
    var data = resAvatar.toDataURL('image/png');
  }
  const grabElements = () => {
    imgBase = document.getElementById("face");
    imgHair = document.getElementById("hair");
    imgMouth = document.getElementById("mouth");
    imgEyes = document.getElementById("eyes");
    imgEyebrows = document.getElementById("eyebrows");
    imgNose = document.getElementById("nose");
    imgCloth = document.getElementById("cloth") ?? '';
    imgAcessory = document.getElementById("acessory") ?? '';
    resAvatar = document.querySelector(".result");
  }
  grabElements();

 // EVENT LISTENERS BELOW

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

  btnBase.addEventListener("click", () => {
    imgBase.src = `/avatar/${bases[baseIndex++%bases.length]}`
    imgBase.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnEyes.addEventListener("click", () => {
    imgEyes.src = `/avatar/${eyes[eyeIndex++%eyes.length]}`
    imgEyes.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnMouth.addEventListener("click", () => {
    imgMouth.src = `/avatar/${mouths[mouthIndex++%mouths.length]}`
    imgMouth.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnEyebrows.addEventListener("click", () => {
    imgEyebrows.src = `/avatar/${eyebrows[eyebrowIndex++%eyebrows.length]}`
    imgEyebrows.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnNose.addEventListener("click", () => {
    imgNose.src = `/avatar/${noses[noseIndex++%noses.length]}`
    imgNose.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnCloth.addEventListener("click", () => {
    imgCloth.src = `/avatar/${clothes[clothIndex++%clothes.length]}`
    imgCloth.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnAcessory.addEventListener("click", () => {
    imgAcessory.src = `/avatar/${acessories[acessoryIndex++%acessories.length]}`
    imgAcessory.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });
};



// document.addEventListener("DOMContentLoaded", uploadfunc);

export { createAvatar };
