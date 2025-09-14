const form = document.getElementById('cadastro');
const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//email regex é uma sequencia de caracteres que testa a veracidade geral de um email digitado pelo usuário, peguei da internet(salamaleicogames)
const name = document.getElementById('idname');
const email = document.getElementById('idemail');
const msg1 = document.getElementById('msg1');
const msg2 = document.getElementById('msg2');
const msg3 = document.getElementById('msg3');
const msg4 = document.getElementById('msg4');
const password = document.getElementById('idpassword');
const password2 = document.getElementById('confirm');


function nameValidate(){
    if(name.value.length < 3){
         name.style.border = '2px solid #C42847';
         name.style.color = '#C42847';
    }
    else{
        name.style.color = 'black';
        name.style.border = 'none';
        name.style.outile = 'none';
    }
}

function emailValidate(){
   if (!emailregex.test(email.value)) {
    email.style.border = '2px solid #C42847';
    email.style.color = '#C42847';
    email.style.outline = 'none';
    console.log("inválido");
  } else {
    email.style.border = 'none';
    email.style.color = 'black';
    email.style.outline = 'none';
    console.log("válido");
  }
}


function passwordValidate(){
  if(password.value.length < 8){
password.style.border = '2px solid #C42847';
    password.style.color = '#C42847';
    password.style.outline = 'none';
    console.log("inválido");
  }
  else{
password.style.border = 'none';
    password.style.color = 'black';
    password.style.outline = 'none';
    console.log("válido");
    comparacao();
  }

  function comparacao(){
    if(password.value == password2.value && password2.value.length > 7){
      password2.style.border = 'none';
    password2.style.color = 'black';
    password2.style.outline = 'none';
    }
    else{
      password2.style.color = '#C42847';
    passwor2.style.outline = 'none';
    console.log("inválido");
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const geradorano = document.getElementById('idano');

for(let ano = 1900; ano <= 2025; ano++){
const option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    geradorano.appendChild(option);

}

const geradordia = document.getElementById('iddia')

for(let dia = 1; dia <= 31; dia++){
  const option = document.createElement("option");
  option.value = dia;
  option.textContent = dia;
  geradordia.appendChild(option);
}

    






