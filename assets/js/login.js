document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
  
    
    if (username === "admin@gmail.com" && password === "1234") {
      // Credenciales válidas
      localStorage.setItem("loggedIn", "true");
      window.location.href = "productoedit.html"; 
    } else {
      // Credenciales inválidas
       alert("Usuario o contraseña incorrectos.");
    }
  });
  