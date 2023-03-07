const handleClick = (event) => {
  event.preventDefault();
  const errorMessageBox = document.getElementById("error-message-box");
  errorMessageBox.style.display = "block";
  errorMessageBox.style.marginTop = "900px";
  errorMessageBox.style.position = "absolute";
  errorMessageBox.style.backgroundColor = "white";
  errorMessageBox.style.borderRadius = "20px";
  errorMessageBox.style.boxShadow = "-2px 6px 55px -11px black";
  errorMessageBox.style.border = "none";
  errorMessageBox.style.fontSize = "20px";

  errorMessageBox.style.color = "gray";
  errorMessageBox.style.padding = "5vh 10vh";
  errorMessageBox.style.borderRadius = "20px";

  errorMessageBox.style.zIndex = "999";
  errorMessageBox.innerHTML =
    "The code is not accessible due to protection of company information";

  const handleOutsideClick = (event) => {
    if (!errorMessageBox.contains(event.target)) {
      errorMessageBox.style.display = "none";
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  document.addEventListener("click", handleOutsideClick, true);
  // true parameter is added to make the click event to be captured in the capture phase instead of the bubble phase
};

const tdigitalCodeAccessError = document.getElementById("tdigital-code-button");
tdigitalCodeAccessError.addEventListener("click", handleClick);
