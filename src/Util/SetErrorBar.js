import I_Check from '../Img/Icon/I_Check.svg'

export default function SetErrorBar(str = "error", check = false) {
  let errBar=document.createElement('div');
  
  errBar.style.width = "100%";
  errBar.style.height = "60px";
  errBar.style.background = "rgba(0,0,0,0.5)";
  errBar.style.color = "#fff";

  let errText = document.createElement('span');
  errText.innerText = str;

  

  errBar.style.display = "flex";
  errBar.style.justifyContent = "center";
  errBar.style.alignItems = "center";

  errBar.style.position = "absolute";
  errBar.style.top = "0px";
  errBar.style.fontFamily = "NotosansMedium";

  if (check) {
    let checkIconBox = document.createElement('span');
    checkIconBox.style.width = "28px";
    checkIconBox.style.height = "28px";
    checkIconBox.style.border = "2px solid #fff";
    checkIconBox.style.borderRadius = "50%";
    checkIconBox.style.display = "flex";
    checkIconBox.style.justifyContent = "center";
    checkIconBox.style.alignItems = "center";
    checkIconBox.style.marginRight = "10px";

    let checkIcon = document.createElement('img');
    checkIcon.src = I_Check;
    checkIcon.style.width = "15px";

    checkIconBox.append(checkIcon);
    errBar.append(checkIconBox);
  }

  errBar.append(errText);
  
  
  let errBarApear = errBar.animate([
    { transform: 'translateY(80px)' },
  ], {
    duration: 400,
    fill:"forwards",
    easing:"ease-in-out",
  });
  
  errBarApear.play();

  errBarApear.onfinish = errBarDisapear;

  function errBarDisapear() {
    errBar.animate([
      { transform: 'translateY(0px)' },
    ], {
      delay: 5400,
      duration: 400,
      fill: "forwards",
      easing: "ease-in-out",
    }).onfinish = removeErrBar;
  }
    
  function removeErrBar() {
    errBar.remove();
  }

  document.body.append(errBar);
  
}