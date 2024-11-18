
function login(event) {
    event.preventDefault(); 

 
    const nome = document.getElementById('Nome').value;
    const email = document.getElementById('Email').value;
    const cpf = document.getElementById('CPF').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    
    if (usuario) {
        
        if (usuario.nome === nome && usuario.email === email && usuario.cpf === cpf && usuario.telefone === telefone && usuario.senha === senha) {
            
            alert('Login bem-sucedido!');
            window.location.href = 'perfil.html'; 
        } else {
            
            alert('Email, CPF ou senha incorretos!');
        }
    } else {
       
        alert('Nenhum usuário encontrado no cadastro!');
    }
}


function mascara_cpf() {
    let cpf_formatado = document.getElementById("CPF").value;
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] !== undefined) {
            document.getElementById("CPF").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }
    cpf_formatado = document.getElementById("CPF").value;
    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] !== undefined) {
            document.getElementById("CPF").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }
    cpf_formatado = document.getElementById("CPF").value;
    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] !== undefined) {
            document.getElementById("CPF").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }
}


function mascara_telefone() {
    let tel_formatado = document.getElementById("telefone").value;
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] !== undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
        }
    }
}


const formLogin = document.getElementById('formLogin');
formLogin.addEventListener('submit', login);
