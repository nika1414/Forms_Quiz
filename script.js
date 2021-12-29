const signUp = (e) => {
  //stops from restarting the browser
  e.preventDefault();
  displayData();
};

function displayData() {
  var output = document.getElementById("output");
  output.innerHTML = `
    <table class="tableClass">
      <br/>     
                <tr>
                    <td><b>Last Name: </b></td>
                    <td> ${document.getElementById("lname").value}</td>
                </tr>
                <tr>
                    <td><b>Email: </b></td>
                    <td> ${document.getElementById("email").value}</td>    
                </tr>
                <tr>
                    <td><b>Password: </b></td>
                    <td class="hide"> ${
                      document.getElementById("psw").value
                    }</td>
                </tr>
                <tr>
                    <td><b>Registration Date: </b></td>
                    <td> ${new Date()}</td>
                </tr>          
    </table>
  `;
}

function ShowRepeatedPass() {
  var x = document.getElementById("psw-repeat");
  var y = document.getElementById("psw");
  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}

var password = document.getElementById("psw");
var confirm_password = document.getElementById("psw-repeat");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function saveData() {
  let name, lname, email, psw, pswRepeat;
  name = document.getElementById("fname").value;
  lname = document.getElementById("lname").value;
  email = document.getElementById("email").value;
  psw = document.getElementById("psw").value;
  pswRepeat = document.getElementById("psw-repeat").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  } else {
    user_records.push({
      name: name,
      lname: lname,
      email: email,
      psw: psw,
      pswRepeat: pswRepeat,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
