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
  let avatarInfos;
  let bases;
  let eyes;
  let hairs;
  let mouths;
  let eyebrows;
  let noses;
  let clothes;
  let acessories;
  let gender;

const filter = (names, index, letter) => {
    let filteredNames = names.filter(function(word) {
       return word.charAt(index) === letter;
    });
    return filteredNames;
}


const createAvatar = () => {
  // DEFINING INDEX AS 1 TO LOOP INSIDE ARRAY SENT BY RAILS WHEN CLICKING A BUTTON
  let baseIndex     = 1;
  let eyeIndex      = 1;
  let hairIndex     = 1;
  let mouthIndex    = 1;
  let eyebrowIndex  = 1;
  let noseIndex     = 1;
  let clothIndex    = 1;
  let acessoryIndex = 1;

  // GETTING INFORMATION FROM RAILS AVATAR CONTROLLER BASED ON GENDER
  const getAssetsInfo = (avatarInfos, gender) => {

    bases       = avatarInfos.data('bases');
    bases       = filter(bases, 0, gender);

    eyes        = avatarInfos.data('eyes');
    eyes       = filter(eyes, 0, gender);

    // hairs       = avatarInfos.data('hairs');
    hairs       = filter(avatarInfos.data('hairs'), 0, gender);

    mouths      = avatarInfos.data('mouths');
    mouths      = filter(mouths, 0, gender);

    eyebrows    = avatarInfos.data('eyebrows');
    eyebrows    = filter(eyebrows, 0, gender);

    noses       = avatarInfos.data('noses');
    noses       = filter(noses, 0, gender);

    clothes     = avatarInfos.data('clothes');
    clothes     = filter(clothes, 0, gender);

    acessories  = avatarInfos.data('acessories');
    acessories  = filter(acessories, 0, gender);
  }

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
  let btnSave     = document.querySelector(".Btn-save");
  let btnMale     = document.querySelector(".Btn-male");
  let btnFemale   = document.querySelector(".Btn-female");

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
    imgBase     = document.getElementById("face");
    imgHair     = document.getElementById("hair");
    imgMouth    = document.getElementById("mouth");
    imgEyes     = document.getElementById("eyes");
    imgEyebrows = document.getElementById("eyebrows");
    imgNose     = document.getElementById("nose");
    imgCloth    = document.getElementById("cloth") ?? '';
    imgAcessory = document.getElementById("acessory") ?? '';
    resAvatar   = document.querySelector(".result");
  }
  const getInfo = () => {
    avatarInfos = $('.avatar_information');
    gender = avatarInfos.data('gender');
  }

  window.onload = function () {
    grabElements();
    updateCanvas();
    };
  getInfo();
  getAssetsInfo(avatarInfos, gender);

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

  btnMale.addEventListener("click", () => {
    let form = document.getElementById("edit_avatar_2");
    document.getElementById("avatar_gender").value = "male"
    form.submit();
  });

  btnFemale.addEventListener("click", () => {
    let form = document.getElementById("edit_avatar_2");
    document.getElementById("avatar_gender").value = "female"
    form.submit();
  });

  // imgBase     = document.getElementById("face");
  //   imgHair     = document.getElementById("hair");
  //   imgMouth    = document.getElementById("mouth");
  //   imgEyes     = document.getElementById("eyes");
  //   imgEyebrows = document.getElementById("eyebrows");
  //   imgNose     = document.getElementById("nose");
  //   imgCloth    = document.getElementById("cloth") ?? '';
  //   imgAcessory = document.getElementById("acessory") ?? '';
  //   resAvatar   = document.querySelector(".result");

  // SEND BUTTON EVENT LISTENER
  // SET FORM VALUE TO CANVAS-DATAURI TO UPLOAD
  btnSave.addEventListener("click", () => {
    let form = document.getElementById("edit_avatar_1");
    let dataURI = resAvatar.toDataURL('image/png');
    let assetData = new Array (imgBase.src.slice(29), imgHair.src.slice(29),
      imgMouth.src.slice(29), imgEyes.src.slice(29), imgEyebrows.src.slice(29),
      imgNose.src.slice(29), imgCloth.src.slice(29), imgAcessory.src.slice(29)
      )
    document.getElementById("avatar_img").value = dataURI;
    document.getElementById("avatar_appearance").value = assetData;
    form.submit();
  });
};



// document.addEventListener("DOMContentLoaded", uploadfunc);

export { createAvatar };
