import axios from "axios";

export default function handleLogin() {
  const loginButton = document.getElementById("login_btn");
  loginButton.disabled = true;
  loginButton.innerHTML = `<div class="spinner-border text-primary p-2 spinner-border-sm" role="status" aria-hidden="true"><span class="visually-hidden">Loading...</span></div>`;

  let params = new URLSearchParams();
  params.append("email", document.getElementById("emailId").value);
  params.append("password", document.getElementById("password").value);
  axios
    .post("http://localhost:5000/userlogin", params)
    .then((result) => {
      if (result.data === "user-fail") {
    //    document.getElementById("pass-fail").classList.add("d-none");
    //    document.getElementById("email-fail").classList.remove("d-none");
    //    document.getElementById("server-fail").classList.add("d-none");
        loginButton.disabled = false;
        loginButton.innerHTML = `Login`;
      } else if (result.data === "pass-fail") {
        console.log("Incorrect password");
    //    document.getElementById("pass-fail").classList.remove("d-none");
    //    document.getElementById("email-fail").classList.add("d-none");
    //    document.getElementById("server-fail").classList.add("d-none");
        loginButton.disabled = false;
        loginButton.innerHTML = `Login`;
      } else if (result.data === "server-down") {
    //    document.getElementById("pass-fail").classList.add("d-none");
    //    document.getElementById("email-fail").classList.add("d-none");
    //    document.getElementById("server-fail").classList.remove("d-none");
        loginButton.disabled = false;
        loginButton.innerHTML = `Login`;
      } else {
    //    document.getElementById("pass-fail").classList.add("d-none");
    //    document.getElementById("email-fail").classList.add("d-none");
    //    document.getElementById("server-fail").classList.add("d-none");
        console.log("Logged In");
        var check = result.data[0];
        if(check.roll_no==null){
          window.location.href="http://localhost:3000/public/Template/academic_details.xlsx#/auth/GeneralInformationdata";
        }
        else {
          window.location.href="http://localhost:3000/public/Template/academic_details.xlsx#/admin/dashboard";
        }
        localStorage.setItem("email", result.data[0].email);
        localStorage.setItem("auth_token", result.data[0].auth_token);
        localStorage.setItem("user_name", result.data[0].user_name);
        loginButton.disabled = false;
        loginButton.innerHTML = `Login`;
      }
    })
/*    .catch((err) => {
      document.getElementById("pass-fail").classList.add("d-none");
      document.getElementById("email-fail").classList.add("d-none");
      document.getElementById("server-fail").classList.remove("d-none");
    }); */
}
