// window.onload = (event) => {
//     console.log("Started Loaded return message in JS");
//     setTimeout(showReturnMessage, 5000);
//     setTimeout(hideReturnMessage, 8000);
//     console.log("Finished Loaded return message in JS");
// };

function isMobile() {
  let browserWidth = window.innerWidth;
  if (browserWidth <= 600) {
    return true;
  } else {
    return false;
  }
}

function showReturnMessage() {
  if (isMobile() == false) {
    let elementReturnMessage = document.getElementById("returnMessage");
    elementReturnMessage.style.opacity = "1";
    console.log("JS - Finished showReturnMessage");
  }
}

function hideReturnMessage() {
  if (isMobile() == false) {
    let elementReturnMessage = document.getElementById("returnMessage");
    elementReturnMessage.style.opacity = "0";
    console.log("JS - Finished showReturnMessage");
  }
}
