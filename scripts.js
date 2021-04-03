document.getElementById("terms").addEventListener("keyup", () => {
  const terms = document.getElementById("terms").value;
  const submitButton = document.querySelector("button");
  if (terms === "Yes" || terms === "yes") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
