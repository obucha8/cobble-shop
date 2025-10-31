// submitOrder.js (versão mínima para teste)
function submitOrder(event) {
    event.preventDefault(); // impede reload da página

    // Pega só dois campos por enquanto
    const data = {
        mineName: document.getElementById('mineName').value,
        discord: document.getElementById('discord').value
    };

    // URL do seu Apps Script (corrigida)
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdtF4jSbYh2TeKZ3gl-Y7qrWjOURj7SpVqB08tAn7LXcWbAendZrbLgVXPsqyV1NGjkQ/exec';

    // Envia os dados via POST
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if(result.status === 'success') {
            alert('Pedido enviado com sucesso!'); // teste simples
            document.getElementById('orderForm').reset();
        } else {
            alert('Erro ao enviar o pedido: ' + result.message);
        }
    })
    .catch(error => {
        alert('Erro ao enviar o pedido: ' + error);
    });
}
