 var elemLoginButton = document.getElementById("login_button")
 console.log(elemLoginButton);

const USER_MESSAGE_ELEMENT_ID = "user_message";
const ERROR_MESSAGE_ELEMENT_CLASS = "error-message";


 function showMessage(message, isError) {
        //Borrar mensaje anterior en caso de existir
        var elemPreviousMessage = document.getElementById("user_message")

        if (elemPreviousMessage) {
            elemPreviousMessage.parentNode.removeChild(elemPreviousMessage);
        }

        //Crear mensaje de bienvenida / element p
        var elemMessage = document.createElement("p");
        elemMessage.innerText = message;
        elemMessage.id = "user_message";
        if(isError)
        {
            elemMessage.className = "error-message";
        }
        

        //Mostrar mensaje de bienvenida
        var elemMainDiv = document.getElementById("main_div");
        elemMainDiv.appendChild(elemMessage);
    }
elemLoginButton.onclick = function () {
    console.log("Login button clicked")

    var elemUsername = document.getElementById("username");
    var elemPassword = document.getElementById("password");

    console.log(elemUsername);
    console.log(elemPassword);

    var username = elemUsername.value;
    var password = elemPassword.value;
    console.log(username);
    console.log(password);

    if (username === "admin" && password === "admin") {

        //Crear mensaje de bienvenida / element p
        //var elemWelcomeMessage = document.createElement("p");
        //elemWelcomeMessage.innerText = "Bienvenido " + username;

        //Mostrar mensaje de bienvenida
        //var elemMainDiv = document.getElementById("main_div");
        //elemMainDiv.appendChild(elemWelcomeMessage);

        showMessage("Bienvenido " + username);

    } else {
        showMessage("Credenciales incorrectas", true);
    }

    if (username === "" && password === ""){
        showMessage("Campos de textos vacios", true);
        
    }

}




