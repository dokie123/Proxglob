function validateForm() {
  let x = document.forms["proxy"]["URL"].value;
  if (x == "") {
    alert("URL must be filled out");
    return false;
  }
}
