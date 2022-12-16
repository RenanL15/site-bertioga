// Menu Responsivo

let toggleButton = document.getElementsByClassName("header-button")[0];
let navbarLinks = document.getElementsByClassName("container-menu-coll")[0];
let navbarLinks2 = document.getElementsByClassName("container-menu-2-coll")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbarLinks2.classList.toggle("active");
});


// Validação dos dados do formulário Cadastro

function validarDados() {
  let nome = document.getElementById("nome").value;
  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let bairro = document.getElementById("bairro").value;
  let email = document.getElementById("email").value;
  let numero = document.getElementById("numero").value;
  let uf = document.getElementById("uf").value;

  let dataNascimento = new Date(document.getElementById("birthDate").value);
  let dataAtual = new Date();

  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth();
  let diaAtual = dataAtual.getDate();

  let anoNascimento = dataNascimento.getFullYear();
  let mesNascimento = dataNascimento.getMonth();
  let diaNascimento = dataNascimento.getDate();

  let idade = anoAtual - anoNascimento;

  if (nome == "" || nome == null || nome == undefined || isNaN(nome) == false) {
    alert("Preencha todos os campos corretamente!");
  } else {
    if (email == "" || email == null || email == undefined) {
      alert("Preencha todos os campos corretamente!");
    } else {
      if (endereco == "" || endereco == null || endereco == undefined) {
        alert("Preencha todos os campos corretamente!");
      } else {
        if (cidade == "" || cidade == null || cidade == undefined) {
          alert("Preencha todos os campos corretamente!");
        } else {
          if (bairro == "" || bairro == null || bairro == undefined) {
            alert("Preencha todos os campos corretamente!");
          } else {
            if (uf == 1) {
              alert("Estado inválido");
            } else {
              if (numero == "" || numero == null || numero == undefined || isNaN(numero) == true) {
                alert("Preencha todos os campos corretamente!");
              } else {
                if (
                  (mesNascimento == mesAtual && diaNascimento > diaAtual) ||
                  mesNascimento > mesAtual  

                  ) {
                  idade--;
                }
                if (idade < 0 || dataNascimento == "Invalid Date") {
                  alert("Coloque uma data válida");
                } else {
                  if (idade < 18) {
                    let nomeResponsavel = prompt(
                      "Coloque o nome de seu responsável"
                    );
                    if (
                      nomeResponsavel == "" ||
                      nomeResponsavel == null ||
                      nomeResponsavel == undefined ||
                      isNaN(nome) == false
                    ) {
                      alert("Nome do responsável inválido");
                    } else {
                      alert("Cadastro feito com sucesso!");
                      location.reload();
                    }
                  } else {
                    if (idade >= 18) {
                      alert("Cadastro feito com sucesso!");
                      location.reload();
                    } else {
                      alert("Cadastro feito com sucesso");
                      location.reload();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
