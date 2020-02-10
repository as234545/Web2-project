function validateForm() {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");

 var y = document.forms["myForm"]["FullName"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }

   var z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("email must be filled out");
    return false;
  }

 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    }


  var w = document.forms["myForm"]["pass"].value;
  if (w == "") {
    alert("password is empty");
    return false;
  }



    return window.location.href = "student_home_page.html";
}

function logInStudent() {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");

   var z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("email must be filled out");
    return false;
  }

 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    }

  var w = document.forms["myForm"]["pass"].value;
  if (w == "") {
    alert("password is empty");
    return false;
  }


    return window.location.href = "student_home_page.html";
}



function logInInstructor() {
  var x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");

   var z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("email must be filled out");
    return false;
  }

 if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Not a valid e-mail address");
    }

  var w = document.forms["myForm"]["pass"].value;
  if (w == "") {
    alert("password is empty");
    return false;
  }


    return window.location.href = "instructor_home_page.html";
}
