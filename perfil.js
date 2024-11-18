
function exibirPerfil() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        
        document.getElementById('nomeUsuario').textContent = usuario.nome;
        document.getElementById('emailUsuario').textContent = usuario.email;
        document.getElementById('cpfUsuario').textContent = usuario.cpf;
        document.getElementById('telefoneUsuario').textContent = usuario.telefone;
    } else {
        
        window.location.href = 'indexlogin.html';
    }
}


function logout() {
    
    localStorage.removeItem('usuario');
    
   
    window.location.href = 'indexlogin.html';
}


document.getElementById('logoutBtn').addEventListener('click', logout);


window.onload = exibirPerfil;
