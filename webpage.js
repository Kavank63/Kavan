function validate() {
  let f = document.forms["myform"]["fname"].value;
  let l = document.forms["myform"]["lname"].value;
  let date = document.forms["myform"]["date"].value;
  let email = document.forms["myform"]["email"].value;
  let Phone = document.forms["myform"]["Phone"].value;
  let gender = document.forms["myform"]["gender"].value;
  let address=document.forms["myform"]["address"].value
  let state = document.forms["myform"]["state"].value;
  let hobby = document.getElementById("hobby");

  if (f == "") {
    alert("enter the first name");
    return false;
  }
  if (!isNaN(f)) {
    alert(" name should be character");
    return false;
  }
  if (l == "") {
    alert("enter the last name");
    return false;
  }
  if (!isNaN(l)) {
    alert(" name should be character");
    return false;
  }
  if (date == "") {
    alert("enter the DOB");
    return false;
  }
  if (email == "") {
    alert("enter the email");
    return false;
  }
  let at = email.indexOf("@");
  let dot = email.lastIndexOf(".");
  if (at < 1|| dot < at + 2 ||dot + 2 >= email.length)
  {
    alert("not a vaild email");
     return false;
  }
  if (Phone == "") {
    alert("enter the phone number");
    return false;
  }
  if(isNaN(Phone))
  {
    alert('phone number should be in digits')
    return false
  }
  if(Phone.length != 10)
  {
    alert('enter 10 digits');
    return false;

  }
  if(gender=="")
  {
    alert('enter the gender');
    return false;

  }
  if (address == "") {
    alert("enter the address");
    return false;
  }
  if (state == "select a state" ){
    alert("state not selected");
    return false;
  }
  if (!hobby.checked) {
    alert("select the hobby");
    return false;


  }

}
