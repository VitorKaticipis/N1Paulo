var funcionarios = [
    { nome: "Valentina Zanette", rg: "123456"  , cpf: "78910111213", dataNascimento: "01/01/1980", telefone: "(24) 1234-5678", email: "valen@gmail.com", endereco: "Rua palhoça, 123" },
    { nome: "Vitor Katicipis", rg: "789012", cpf: "14151617181", dataNascimento: "05/05/1975", telefone: "(99) 9876-5432", email: "vitor@gmail.com", endereco: "Av. luiz braga, 456" },
    { nome: "João Silveira", rg: "920293", cpf: "2873737383", dataNascimento: "08/12/2003", telefone: "(33) 7383-4545", email: "joao@gmail.com", endereco: "Av. jose selso, 333" },
    { nome: "Leila Silva", rg: "767484", cpf: "282292929", dataNascimento: "13/09/2003", telefone: "(33) 7383-4646", email: "leila@gmail.com", endereco: "Av. jose rodolfo, 909" },
    { nome: "Rodolfo Rodrigues", rg: "783839", cpf: "27282933229", dataNascimento: "04/11/2011", telefone: "(11) 4444-9082", email: "rodolfo@gmail.com", endereco: "Av. jorge guimaraes, 9229" },
    { nome: "Luiz Gazes", rg: "282908", cpf: "1356233382", dataNascimento: "05/09/1980", telefone: "(41) 6272-9282", email: "luiz@gmail.com", endereco: "Av. pantanal, 345" },
    { nome: "Mariah Nunes", rg: "727892", cpf: "1356283332", dataNascimento: "15/12/2000", telefone: "(21) 9827-0098", email: "mariah@gmail.com", endereco: "Av. gama dça, 78" },
    { nome: "Monica Rodrigues", rg: "728292", cpf: "1234567898", dataNascimento: "16/06/1966", telefone: "(45) 5555-7890", email: "monica@gmail.com", endereco: "Av. vitor konder, 90" },
    { nome: "Juan Peregrino", rg: "277272", cpf: "3467890800", dataNascimento: "15/08/1973", telefone: "(43) 6666-2345", email: "juan@gmail.com", endereco: "Av. gama dça, 790" },
    { nome: "Larissa Nunes", rg: "890765", cpf: "029287262", dataNascimento: "14/11/2000", telefone: "(26) 0928-0098", email: "larissa@gmail.com", endereco: "Av. carvoeira, 99" },
    { nome: "Helena Monteiro", rg: "098345", cpf: "135161718", dataNascimento: "16/12/1966", telefone: "(12) 7892-7890", email: "helena@gmail.com", endereco: "Av. camargo, 56" },
    { nome: "Laura Ramos", rg: "123789", cpf: "4262728222", dataNascimento: "03/08/1973", telefone: "(09) 4567-0987", email: "laura@gmail.com", endereco: "Av. carvoeira, 987" },
    { nome: "José Antonelli", rg: "829292", cpf: "827262625", dataNascimento: "22/08/1950", telefone: "(56) 3837-9988", email: "jose@gmail.com", endereco: "Av. pantanal, 22" },
    { nome: "Henrique Manoel", rg: "098762", cpf: "456829292", dataNascimento: "06/05/1988", telefone: "(22) 9929-0099", email: "henrique@gmail.com", endereco: "Av. saco, 98" },
    { nome: "Vitor Luiz", rg: "098777", cpf: "2882929292", dataNascimento: "15/02/1990", telefone: "(48) 2928-2828", email: "vitorl@gmail.com", endereco: "Av. luiz tiago, 12" },
    { nome: "Carla Fioravante", rg: "234569", cpf: "838383844", dataNascimento: "09/08/2000", telefone: "(48) 2222-4646", email: "carla@gmail.com", endereco: "Av. ingleses, 24" },
    { nome: "Bernardo Silva", rg: "908763", cpf: "0297636363", dataNascimento: "18/12/2003", telefone: "(48) 6788-8383", email: "ber@gmail.com", endereco: "Av. canasjure, 57" },
    { nome: "Yago Sousa", rg: "233378", cpf: "111671828", dataNascimento: "30/01/1988", telefone: "(48) 9188-9282", email: "yago@gmail.com", endereco: "Av. santo antonio, 778" },
    { nome: "Paulo Lobato", rg: "829292", cpf: "279739237", dataNascimento: "24/10/2001", telefone: "(48) 9111-2727", email: "paulo@gmail.com", endereco: "Av. jurere internacional, 57" },
    { nome: "Lucas Rosa", rg: "404949", cpf: "94748543", dataNascimento: "16/10/1001", telefone: "(48) 2822-3892", email: "lulu@gmail.com", endereco: "Av. canasvieras, 778" },


];


function exibirFuncionarios() {
    var corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = "";

    for (var i = 0; i < funcionarios.length; i++) {
        var funcionario = funcionarios[i];

        var row = corpoTabela.insertRow();

        for (var prop in funcionario) {
            var cell = row.insertCell();
            cell.innerHTML = funcionario[prop];
        }

        var cellAcoes = row.insertCell();
        cellAcoes.innerHTML = '<button onclick="editarFuncionario()">Editar</button>' +
                              '<button onclick="excluirFuncionario()">Excluir</button>';
    }
}

exibirFuncionarios();


function editarFuncionario() {
    alert("Funcionário editado com sucesso!");
}

function excluirFuncionario() {
    alert("Funcionário excluído com sucesso!");
}


