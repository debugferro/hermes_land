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
  let baseColors;
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

  let filteredNoses;
  let filteredMouths;

const filter = (names, index, letter) => {
    let filteredNames = names.filter(function(word) {
       return word.charAt(index) === letter;
    });
    return filteredNames;
}

const findAssetColors = (assetColors, pattern) => {
  let selected = [];
  assetColors.forEach((assetColor) => {
  if (assetColor[assetColor.lastIndexOf("_") + 1] == pattern) {
    selected.push(assetColor)
    }
  })
  return selected;
}

const findColors = (assetColors, pattern) => {
  let selected = [];
  assetColors.forEach((assetColor) => {
  let firstIndex = assetColor.lastIndexOf(":") + 1;
  let lastIndex = assetColor.lastIndexOf(";");
  if (assetColor.substring(firstIndex, lastIndex) == pattern) {
    selected.push(assetColor)
    }
  })
  return selected;
}


// ITERAR SOBRE A ARRAY DE CABELOS
// TODAS QUE TERMINAM COM O MESMO NÚMERO SÃO REMOVIDAS PARA UMA ARRAY DE CORES
// QUANDO O USUÁRIO ESCOLHER UM CABELO, O PROGRAMA IRÁ EXIBIR A ESSA LISTA DE CORES
// ISSO SE A ID DO USUÁRIO ESCOLHIDO TIVER UMA ARRAY DE CORES ONDE TENHAM ESSA ID

// CHANGE HAIR

const createAvatar = () => {
  // DEFINING INDEX AS 1 TO LOOP INSIDE ARRAY SENT BY RAILS WHEN CLICKING A BUTTON
  // DEFINING ASSETS INDEXES
  let baseIndex     = 1;
  let eyeIndex      = 1;
  let hairIndex     = 1;
  let mouthIndex    = 1;
  let eyebrowIndex  = 1;
  let noseIndex     = 1;
  let clothIndex    = 1;
  let acessoryIndex = 1;

  // DEFINING COLORIZED ASSETS INDEXES
  let selectedHairColorsIndex = 0;
  let selectedBaseColorsIndex = 0;

  // DEFINING THE VARIABLE FOR PRESENT SELECTED HAIR COLORS
  let selectedHairColors = [];
  let selectedBaseColors = [];

  // GETTING INFORMATION FROM RAILS AVATAR CONTROLLER BASED ON GENDER
  const getAssetsInfo = (avatarInfos, gender) => {
    // f_nome_tipo_id.png
    bases       = filter(avatarInfos.data('bases'), 0, gender);
    baseColors  = filter(avatarInfos.data('basecolors'), 0, gender);
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
  let btnSkin      = document.querySelector(".Btn-skincolor");
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


  const initializeColorIndexes = (currentAsset, assetColors) => {
    let pattern = currentAsset[currentAsset.lastIndexOf("_") + 1]
    let selectedAssetColors = [];
    let selectedAssetsIndex;

    selectedAssetColors = findAssetColors(assetColors, pattern);
    selectedAssetColors.push(currentAsset)
    selectedAssetsIndex = (selectedAssetColors.indexOf(currentAsset)) + 1;
    return {
      index: selectedAssetsIndex,
      colors: selectedAssetColors
    };
  }

  const initializeNoseMouthForColor = (currentFile) => {
    let startIndex = currentFile.lastIndexOf(":") + 1;
    let endIndex = currentFile.lastIndexOf(";");
    let pattern = currentFile.substring(startIndex, endIndex)
    filteredNoses = findColors(noses, pattern);
    filteredMouths = findColors(mouths, pattern);
  }

  // LOADING CURRENT USER AVATAR
  window.onload = function () {
    grabElements();
    updateCanvas();
    // INITIALIZING NOSE/MOUTH AND EYES FOR CURRENT SKIN COLOR
    initializeNoseMouthForColor(imgBase.src.slice(29));
    };
  getInfo();
  getAssetsInfo(avatarInfos, gender);

 // EVENT LISTENERS BELOW

  btnUpdate.addEventListener("click", () => {
    updateCanvas();
  });

  let currentBase;
  btnBase.addEventListener("click", () => {
    currentBase = bases[baseIndex++%bases.length];
    let initializedValues = initializeColorIndexes(currentBase, baseColors);
    selectedBaseColors = initializedValues.colors
    selectedBaseColorsIndex = initializedValues.index
    imgBase.src = `/avatar/${currentBase}`
    imgBase.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnSkin.addEventListener("click", () => {
    // VERIFY IF VALUES WERE INITIALIZED
    // IF NOT INITIALIZED IT WILL FOR THE CURRENT BASE TO CHANGE IT'S COLOR
    if (currentBase == undefined) {
      currentBase = bases[baseIndex++%bases.length];
      let initializedValues = initializeColorIndexes(currentBase, baseColors);
      selectedBaseColors = initializedValues.colors
      selectedBaseColorsIndex = initializedValues.index
    }
    let currentColor = selectedBaseColors[selectedBaseColorsIndex++%selectedBaseColors.length]
    imgBase.src = `/avatar/${currentColor}`
    initializeNoseMouthForColor(currentColor);
    btnMouth.click(); // FORCING MOUTH AND NOSE TO CHANGE SO IT CAN BE COMPATIBLE
    btnNose.click();  // WITH THE CURRENT SKIN COLOR
    imgBase.addEventListener("load", function () {
      grabElements();
      updateCanvas();
    });
  });

  btnHair.addEventListener("click", () => {
    let currentHair = hairs[hairIndex++%hairs.length];
    // INITIALIZING CURRENT HAIR COLOR FILES AND INDEX
    // SETTING CURRENT HAIR COLORS AND EQUIVALENT INDEX
    let initializedValues = initializeColorIndexes(currentHair, hairColors);
    selectedHairColors = initializedValues.colors
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
    imgEyes.src = `/avatar/${eyes[eyeIndex++%eyes.length]}`
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
    imgEyebrows.src = `/avatar/${eyebrows[eyebrowIndex++%eyebrows.length]}`
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

};



// document.addEventListener("DOMContentLoaded", uploadfunc);

export { createAvatar };
