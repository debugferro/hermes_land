import $ from 'jquery';

const filter = (names, index, letter) => {
  let filteredNames = names.filter(function(word) {
    return word.charAt(index) === letter || word.charAt(index) === 'n';
  });
  return filteredNames;
}

const findAssetColors = (assetColors, idPattern) => {
  let selected = [];
  assetColors.forEach((assetColor) => {
    let startIndex = assetColor.lastIndexOf("_") + 1;
    let endIndex = assetColor.lastIndexOf(".");
    let assetIdPattern = assetColor.substring(startIndex, endIndex)
    if (assetIdPattern == idPattern) {
      selected.push(assetColor)
      }
  })
  return selected;
}

const findColors = (assetColors, idPattern) => {
  let selected = [];
  assetColors.forEach((assetColor) => {
    let firstIndex = assetColor.lastIndexOf(":") + 1;
    let lastIndex = assetColor.lastIndexOf(";");
    if (assetColor.substring(firstIndex, lastIndex) == idPattern || assetColor.substring(firstIndex, lastIndex) == "neutral") {
      selected.push(assetColor)
      }
    })
  return selected;
}

const createAvatar = () => {

  // Initializing assets image variables
  let imgBase;
  let imgHair;
  let imgMouth;
  let imgEyes;
  let imgEyebrows;
  let imgNose;
  let imgCloth;
  let imgAcessory;

  // Initializing avatar canvas variables
  let resAvatar;
  let context;
  let avatarInfos;

  // Initializing assets variables
  let bases;
  let eyes;
  let hairs;
  let mouths;
  let eyebrows;
  let noses;
  let clothes;
  let acessories;
  let gender;

  // Initializing assets colors variables
  let eyebrowColors;
  let acessoryColors;
  let baseColors;
  let eyeColors;
  let hairColors;

  // Initializing filtered assets for specific skin colors
  let filteredNoses;
  let filteredMouths;
  let filteredEyes;

  // Initializing assets index
  let baseIndex     = 1;
  let eyeIndex      = 1;
  let hairIndex     = 1;
  let mouthIndex    = 1;
  let eyebrowIndex  = 1;
  let noseIndex     = 1;
  let clothIndex    = 1;
  let acessoryIndex = 1;

  // Initializing colorized assets index
  let selectedHairColorsIndex = 0;
  let selectedBaseColorsIndex = 0;
  let selectedEyeColorsIndex = 0;
  let selectedAcessoryColorsIndex = 0;
  let selectedEyebrowColorsIndex = 0;

  // Initializing the variable for present assets colors
  let selectedHairColors = [];
  let selectedBaseColors = [];
  let selectedEyeColors  = [];
  let selectedAcessoryColors = [];
  let selectedEyebrowColors = [];

  // Initializing current-assets variables
  let currentEyebrows;
  let currentBase;
  let currentHair;
  let currentEyes;
  let currentAcessory;

  // METHOD FOR GETTING INFORMATION FROM RAILS AVATAR-CONTROLLER, FILTERING BY GENDER
  const getAssetsInfo = (avatarInfos, gender) => {
    // <gender>_:<color>;_<type>_<id>.png
    bases           = filter(avatarInfos.data('bases'), 0, gender);
    baseColors      = filter(avatarInfos.data('basecolors'), 0, gender);
    eyes            = filter(avatarInfos.data('eyes'), 0, gender);
    eyeColors       = filter(avatarInfos.data('eyecolors'), 0, gender);
    hairs           = filter(avatarInfos.data('hairs'), 0, gender);
    hairColors      = filter(avatarInfos.data('haircolors'), 0, gender);
    mouths          = filter(avatarInfos.data('mouths'), 0, gender);
    eyebrows        = filter(avatarInfos.data('eyebrows'), 0, gender);
    eyebrowColors   = filter(avatarInfos.data('eyebrowcolors'), 0, gender);
    noses           = filter(avatarInfos.data('noses'), 0, gender);
    clothes         = filter(avatarInfos.data('clothes'), 0, gender);
    acessories      = filter(avatarInfos.data('acessories'), 0, gender);
    acessoryColors  = filter(avatarInfos.data('acessorycolors'), 0, gender);
  }

  // GETTING HTML BUTTONS FOR CHANGES
  let btnUpdate         = document.querySelector(".Btn");
  let btnBase           = document.querySelector(".Btn-base");
  let btnSkin           = document.querySelector(".Btn-skincolor");

  let btnEyes           = document.querySelector(".Btn-eyes");
  let btnEyeColor       = document.querySelector(".Btn-eyecolor");

  let btnHair           = document.querySelector(".Btn-hair");
  let btnHairColor      = document.querySelector(".Btn-haircolor");

  let btnMouth          = document.querySelector(".Btn-mouth");

  let btnEyebrows       = document.querySelector(".Btn-eyebrows");
  let btnEyebrowColor   = document.querySelector(".Btn-eyebrowcolor");

  let btnNose           = document.querySelector(".Btn-nose");
  let btnCloth          = document.querySelector(".Btn-cloth");

  let btnAcessory       = document.querySelector(".Btn-acessory");
  let btnAcessoryColor  = document.querySelector(".Btn-acessorycolor");

  let btnSave           = document.querySelector(".Btn-save");
  let btnMale           = document.querySelector(".Btn-male");
  let btnFemale         = document.querySelector(".Btn-female");

  // METHODS FOR GRABBING ELEMENTS THAT WERE CHANGED AND UPDATE CANVAS
  const updateCanvas = () => {
    context          = resAvatar.getContext("2d");
    resAvatar.width  = imgBase.width;
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
    gender      = avatarInfos.data('gender');
  }


  const initializeColorIndexes = (currentAsset, assetColors) => {
    let startIndex = currentAsset.lastIndexOf("_") + 1;
    let endIndex   = currentAsset.lastIndexOf(".");
    let idPattern  = currentAsset.substring(startIndex, endIndex)
    let selectedAssetColors = [];
    let selectedAssetsIndex;

    selectedAssetColors = findAssetColors(assetColors, idPattern);
    selectedAssetColors.push(currentAsset)
    selectedAssetsIndex = (selectedAssetColors.indexOf(currentAsset)) - 1;
    return {
      index: selectedAssetsIndex,
      colors: selectedAssetColors
    };
  }

  const initializeNoseMouthForColor = (currentFile) => {
    let startIndex = currentFile.lastIndexOf(":") + 1;
    let endIndex   = currentFile.lastIndexOf(";");
    let idPattern  = currentFile.substring(startIndex, endIndex)
    filteredNoses  = findColors(noses, idPattern);
    filteredMouths = findColors(mouths, idPattern);
    filteredEyes   = findColors(eyes, idPattern);
  }

  // INITIALIZING
  window.onload = function () {
    grabElements();
    updateCanvas();
    // INITIALIZING ASSETS
    let initializedValues;
    // INITIALIZING NOSE/MOUTH AND EYES FOR CURRENT SKIN COLOR
    initializeNoseMouthForColor(imgBase.src.slice(29));
    // INITIALIZING HAIR COLORS
    currentHair             = imgHair.src.slice(29);
    initializedValues       = initializeColorIndexes(currentHair, hairColors);
    selectedHairColors      = initializedValues.colors;
    selectedHairColorsIndex = initializedValues.index;
    // INITIALIZING EYEBROW COLORS
    currentEyebrows            = imgEyebrows.src.slice(29);
    initializedValues          = initializeColorIndexes(currentEyebrows, eyebrowColors);
    selectedEyebrowColors      = initializedValues.colors;
    selectedEyebrowColorsIndex = initializedValues.index;
    // INITIALIZING ACESSORY COLORS
    currentAcessory             = imgAcessory.src.slice(29);
    initializedValues           = initializeColorIndexes(currentAcessory, acessoryColors);
    selectedAcessoryColors      = initializedValues.colors;
    selectedAcessoryColorsIndex = initializedValues.index;
  };

  getInfo();
  getAssetsInfo(avatarInfos, gender);



  btnUpdate.addEventListener("click", () => {
    updateCanvas();
  });

  btnBase.addEventListener("click", () => {             // If the skin was not changed
    if (selectedBaseColors == undefined){               // then selectedBaseColors will be
      currentBase = bases[baseIndex++%bases.length];    // undefined, so it will set a current base
    }                                                   // else, it was set in the skin event listener below
    // Initializing colors for present base
    let initializedValues   = initializeColorIndexes(currentBase, baseColors);
    selectedBaseColors      = initializedValues.colors
    selectedBaseColorsIndex = initializedValues.index
    imgBase.src = `/avatar/${currentBase}`
    imgBase.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnSkin.addEventListener("click", () => {
    // Verifying it current base was initialized
    // If not, it will initialize to get current base colors to iterate over
    if (currentBase == undefined) {
      currentBase             = bases[baseIndex++%bases.length];
      let initializedValues   = initializeColorIndexes(currentBase, baseColors);
      selectedBaseColors      = initializedValues.colors
      selectedBaseColorsIndex = initializedValues.index
    }
    let currentColor = selectedBaseColors[selectedBaseColorsIndex++%selectedBaseColors.length]
    imgBase.src = `/avatar/${currentColor}`
    currentBase = currentColor;
    initializeNoseMouthForColor(currentColor);
    btnMouth.click(); // Forcind mouth, nose and eyes to change accordingly to
    btnNose.click();  // the current skin color
    btnEyes.click();
    imgBase.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnHair.addEventListener("click", () => {
    currentHair = hairs[hairIndex++%hairs.length];
    // INITIALIZING CURRENT HAIR COLOR FILES AND INDEX
    // SETTING CURRENT HAIR COLORS AND EQUIVALENT INDEX
    let initializedValues   = initializeColorIndexes(currentHair, hairColors);
    selectedHairColors      = initializedValues.colors
    selectedHairColorsIndex = initializedValues.index
    // -------------------------------------------------
    imgHair.src = `/avatar/${currentHair}`
    imgHair.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnHairColor.addEventListener("click", () => {
    // let pattern = currentHair[currentHair.lastIndexOf("_") + 1]
    // let selectedHairColors = [];
    // selectedHairColors = findAssetColors(hairColors, pattern);
    // selectedHairColors.push(currentHair)
    let currentColor = selectedHairColors[selectedHairColorsIndex++%selectedHairColors.length]
    imgHair.src = `/avatar/${currentColor}`
    imgHair.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });


  btnEyes.addEventListener("click", () => {
    currentEyes            = filteredEyes[eyeIndex++%filteredEyes.length]
    let initializedValues  = initializeColorIndexes(currentEyes, eyeColors);
    selectedEyeColors      = initializedValues.colors
    selectedEyeColorsIndex = initializedValues.index
    imgEyes.src = `/avatar/${currentEyes}`
    imgEyes.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnEyeColor.addEventListener("click", () => {
    let currentColor = selectedEyeColors[selectedEyeColorsIndex++%selectedEyeColors.length]
    imgEyes.src = `/avatar/${currentColor}`
    imgEyes.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnMouth.addEventListener("click", () => {
    imgMouth.src = `/avatar/${filteredMouths[mouthIndex++%filteredMouths.length]}`
    imgMouth.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnEyebrows.addEventListener("click", () => {
    currentEyebrows            = eyebrows[eyebrowIndex++%eyebrows.length]
    let initializedValues      = initializeColorIndexes(currentEyebrows, eyebrowColors);
    selectedEyebrowColors      = initializedValues.colors
    selectedEyebrowColorsIndex = initializedValues.index
    imgEyebrows.src = `/avatar/${currentEyebrows}`
    imgEyebrows.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnEyebrowColor.addEventListener("click", () => {
    let currentColor = selectedEyebrowColors[selectedEyebrowColorsIndex++%selectedEyebrowColors.length]
    imgEyebrows.src = `/avatar/${currentColor}`
    imgEyebrows.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnNose.addEventListener("click", () => {
    imgNose.src = `/avatar/${filteredNoses[noseIndex++%filteredNoses.length]}`
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
    let currentAcessory         = acessories[acessoryIndex++%acessories.length];
    let initializedValues       = initializeColorIndexes(currentAcessory, acessoryColors);
    selectedAcessoryColors      = initializedValues.colors
    selectedAcessoryColorsIndex = initializedValues.index
    imgAcessory.src = `/avatar/${currentAcessory}`
    imgAcessory.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnAcessoryColor.addEventListener("click", () => {
    let currentColor = selectedAcessoryColors[selectedAcessoryColorsIndex++%selectedAcessoryColors.length]
    imgAcessory.src = `/avatar/${currentColor}`
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
    let form      = document.getElementById("edit_avatar_1");
    let dataURI   = resAvatar.toDataURL('image/png');
    let assetData = new Array (imgBase.src.slice(29), imgHair.src.slice(29),
      imgMouth.src.slice(29), imgEyes.src.slice(29), imgEyebrows.src.slice(29),
      imgNose.src.slice(29), imgCloth.src.slice(29), imgAcessory.src.slice(29)
      )
    document.getElementById("avatar_img").value        = dataURI;
    document.getElementById("avatar_appearance").value = assetData;
    form.submit();
  });

};

export { createAvatar };
