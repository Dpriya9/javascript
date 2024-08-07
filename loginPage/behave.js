// login page

const login = () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username && password) {
    // store username & password permenantly in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // navigate to dashboard
    window.location = "dashBoard.html";
  } else {
    alert("Please Fill the Form Completely!!!");
  }
};
