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
  let hairColors;
  let currentHairColors;
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

const filterColor = (hairColors, pattern, selectedColors) => {
  hairColors.forEach((hairColor) => {
  if (hairColor[hairColor.lastIndexOf("_") + 1] == pattern) {
    selectedColors.push(hairColor);
    }
  })
}
// ITERAR SOBRE A ARRAY DE CABELOS
// TODAS QUE TERMINAM COM O MESMO NÚMERO SÃO REMOVIDAS PARA UMA ARRAY DE CORES
// QUANDO O USUÁRIO ESCOLHER UM CABELO, O PROGRAMA IRÁ EXIBIR A ESSA LISTA DE CORES
// ISSO SE A ID DO USUÁRIO ESCOLHIDO TIVER UMA ARRAY DE CORES ONDE TENHAM ESSA ID

// CHANGE HAIR

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
    // f_nome_tipo_id.png
    bases       = filter(avatarInfos.data('bases'), 0, gender);
    eyes        = filter(avatarInfos.data('eyes'), 0, gender);
    hairs       = filter(avatarInfos.data('hairs'), 0, gender);
    hairColors  = filter(avatarInfos.data('haircolors'), 0, gender);
    mouths      = filter(avatarInfos.data('mouths'), 0, gender);
    eyebrows    = filter(avatarInfos.data('eyebrows'), 0, gender);
    noses       = filter(avatarInfos.data('noses'), 0, gender);
    clothes     = filter(avatarInfos.data('clothes'), 0, gender);
    acessories  = filter(avatarInfos.data('acessories'), 0, gender);
  }

  // GETTING HTML BUTTONS FOR CHANGES
  let btnUpdate    = document.querySelector(".Btn");
  let btnBase      = document.querySelector(".Btn-base");
  let btnEyes      = document.querySelector(".Btn-eyes");
  let btnHair      = document.querySelector(".Btn-hair");
  let btnHairColor = document.querySelector(".Btn-haircolor");
  let btnMouth     = document.querySelector(".Btn-mouth");
  let btnEyebrows  = document.querySelector(".Btn-eyebrows");
  let btnNose      = document.querySelector(".Btn-nose");
  let btnCloth     = document.querySelector(".Btn-cloth");
  let btnAcessory  = document.querySelector(".Btn-acessory");
  let btnSave      = document.querySelector(".Btn-save");
  let btnMale      = document.querySelector(".Btn-male");
  let btnFemale    = document.querySelector(".Btn-female");

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

  // LOADING CURRENT USER AVATAR
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
  let currentHair;
  btnHair.addEventListener("click", () => {
    currentHair = hairs[hairIndex++%hairs.length];
    imgHair.src = `/avatar/${currentHair}`
    imgHair.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnHairColor.addEventListener("click", () => {
    let pattern = currentHair[currentHair.lastIndexOf("_") + 1]
    let selectedColors = [];
    filterColor(hairColors, pattern, selectedColors);
    let selectedColorsIndex = 1;
    selectedColors.push(currentHair)
    let currentColor = selectedColors[selectedColorsIndex++%selectedColors.length]
    imgHair.src = `/avatar/${currentColor}`
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

  const getColors = (currentAsset) => {

  }

};



// document.addEventListener("DOMContentLoaded", uploadfunc);

export { createAvatar };
