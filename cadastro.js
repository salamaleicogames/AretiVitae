const form = document.getElementById('cadastro');
const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const name = document.getElementById('idname');
const email = document.getElementById('idemail');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const msg3 = document.getElementById('msg3');
const msg4 = document.getElementById('msg4');
const msgdate = document.getElementById('idmsgdate')
const password = document.getElementById('idpassword');
const password2 = document.getElementById('idconfirm');
const dia = document.getElementById('iddia');
const mes = document.getElementById('idmes');
const ano = document.getElementById('idano');

form.addEventListener('submit', (event) =>{
    if(nameValidate() &&
    emailValidate() &&
    passwordValidate() &&
    compare()){
        console.log("Formulario Preenchido");
    }
    else{
        event.preventDefault();
        console.log("Formulário incompleto");
    }

});


function nameValidate() {
    if (name.value.length < 3) {
        name.style.border = '2px solid #C42847';
        name.style.color = '#C42847';
        msg1.innerText = "Menos de 3 caracteres"
        msg1.style.display = "block";
        msg1.style.marginTop = "0.5vh"; 
        msg1.style.marginBottom = "-1.5vh";
        return false;
    } else {
        name.style.color = 'black';
        name.style.border = 'none';
        name.style.outline = 'none';
        msg1.innerText = ""
        msg1.style.marginTop = "0vh"; 
        msg1.style.marginBottom = "0vh"; 
        return true;
        
    }

}


function emailValidate() {
    if (!emailregex.test(email.value)) {
        email.style.border = '2px solid #C42847';
        email.style.color = '#C42847';
        email.style.outline = 'none';
        console.log("inválido");
         msg2.innerText = "Email invalido"
        msg2.style.display = "block";
        msg2.style.marginTop = "0.5vh"; 
        msg2.style.marginBottom = "-1.5vh"; 
        return false;
    } else {
        email.style.border = 'none';
        email.style.color = 'black';
        email.style.outline = 'none';
        console.log("válido");
         msg2.innerText = ""
        msg2.style.marginTop = "0vh"; 
        msg2.style.marginBottom = "0vh"; 
        return true;
    }
}

function passwordValidate() {
    if (password.value.length < 8) {
        password.style.border = '2px solid #C42847';
        password.style.color = '#C42847';
        password.style.outline = 'none';
        console.log("inválido");
         msg3.innerText = "Menos de 8 caracteres"
        msg3.style.display = "block";
        msg3.style.marginTop = "0.5vh"; 
        msg3.style.marginBottom = "-1.5vh";
        return false;
    } else {
        password.style.border = 'none';
        password.style.color = 'black';
        password.style.outline = 'none';
        msg3.innerText = ""
        msg3.style.marginTop = "0vh"; 
        msg3.style.marginBottom = "0vh"; 
        console.log("válido");
        compare();
        return true;
    }
}

function compare() {
    if (password.value === password2.value && password2.value.length > 7) {
        password2.style.border = 'none';
        password2.style.color = 'black';
        password2.style.outline = 'none';
        console.log("válido");
          msg4.innerText = ""
        msg4.style.marginTop = "0vh"; 
        msg4.style.marginBottom = "0vh"; 
        return true;
    } else {
        password2.style.border = '2px solid #C42847';
        password2.style.color = '#C42847';
        password2.style.outline = 'none';
        console.log("inválido");
        msg4.innerText = "Senhas não conferem"
        msg4.style.display = "block";
        msg4.style.marginTop = "0.5vh"; 
        msg4.style.marginBottom = "-1.5vh"; 
        return false;
    }
}

const geradorano = document.getElementById('idano');
for (let ano = 1900; ano <= 2025; ano++) {
    const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    geradorano.appendChild(option);
}


const geradordia = document.getElementById('iddia');
for (let dia = 1; dia <= 31; dia++) {
    const option = document.createElement("option");
    option.value = dia;
    option.textContent = dia;
    geradordia.appendChild(option);
}


window.nameValidate = nameValidate;
window.emailValidate = emailValidate;
window.passwordValidate = passwordValidate;
window.compare = compare;

//////////////Biblioteca CDN/////////////////////////
