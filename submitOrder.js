// submitOrder.js

function submitOrder(event) {
    event.preventDefault(); // impede o reload da página

    // Pega os dados do formulário
    const data = {
        mineName: document.getElementById('mineName').value,
        discord: document.getElementById('discord').value,
        pokemon: document.getElementById('pokemon').value,
        gender: document.getElementById('gender').value,
        ability: document.getElementById('ability').value,
        hp: document.getElementById('hp').value,
        atk: document.getElementById('atk').value,
        def: document.getElementById('def').value,
        spatk: document.getElementById('spatk').value,
        spdef: document.getElementById('spdef').value,
        spd: document.getElementById('spd').value,
        eggMove: document.getElementById('eggMove').value,
        level: document.getElementById('level').value,
        notes: document.getElementById('notes').value
    };

    // URL do seu Apps Script (substitua pela sua)
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdtF4jSbYh2TeKZ3gl-Y7qrWjOURj7SpVqB08tAn7LXcWbAendZrbLgVXPsqyV1NGjkQ/exec;

    // Envia os dados via POST
    fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if(result.status === 'success') {
            // Fecha o modal e abre o modal de sucesso
            closeModal();
            showSuccessModal();
            // Reseta o formulário
            document.getElementById('orderForm').reset();
        } else {
            alert('Erro ao enviar o pedido: ' + result.message);
        }
    })
    .catch(error => {
        alert('Erro ao enviar o pedido: ' + error);
    });
}


