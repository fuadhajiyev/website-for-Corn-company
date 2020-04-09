function validateform() {
    let name = document.getElementById("fname");
    let lastname = document.getElementById("lname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
  
  if (name.value == null || name.value == "" || name.value.length > 15) {
    name.style.borderColor = "red";
    return false;
  } else if (lastname.value == null || lastname.value == "" || lastname.value.length > 16) {
    lastname.style.borderColor = "red";
    return false;
  } else if (email.value == null || email.value == "" || email.value.length > 40) {
    email.style.borderColor = "red";
    return false;
  } else if (phone.value == null || phone.value == "" || phone.value.length > 13) {
    phone.style.borderColor = "red";
    return false;
  }

}

