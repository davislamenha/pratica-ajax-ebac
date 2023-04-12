// document.addEventListener('DOMContentLoaded', function () {
//   document
//     .getElementById('btn-buscar-cep')
//     .addEventListener('click', function () {
//       const xhttp = new XMLHttpRequest();
//       const cep = document.getElementById('cep');
//       const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//       xhttp.open('GET', endpoint);
//       xhttp.send();
//     });
// });

$(document).ready(function () {
  $('#cep').mask('00000-000');

  $('#btn-buscar-cep').on('click', function () {
    const cep = $('#cep').val();
    const endpoint = `https://viacep.com.br/ws/${cep}/json`;
    $(this).find('i').addClass('d-none');
    $(this).find('span').removeClass('d-none');

    // $.ajax(endpoint).done(function (resposta) {
    //   const logradouro = resposta.logradouro;
    //   const bairro = resposta.bairro;
    //   const cidade = resposta.localidade;
    //   const estado = resposta.uf;
    //   const endereco = `${logradouro}, ${bairro}, ${cidade}-${estado}`;

    //   $('#endereco').val(endereco);

    //   $('#btn-buscar-cep').find('span').addClass('d-none');
    //   $('#btn-buscar-cep').find('i').removeClass('d-none');
    // });

    fetch(endpoint)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;
        const endereco = `${logradouro}, ${bairro}, ${cidade}-${estado}`;

        $('#endereco').val(endereco);

        $('#btn-buscar-cep').find('span').addClass('d-none');
        $('#btn-buscar-cep').find('i').removeClass('d-none');
      });
  });
});
