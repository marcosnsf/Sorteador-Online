document.addEventListener('DOMContentLoaded', () => {
    const rifas = [
        { numero: 1, nome: 'Renata' }, { numero: 2, nome: 'Irmã Neide' }, { numero: 3, nome: 'Maira' },
        { numero: 4, nome: 'Renata' }, { numero: 5, nome: 'Renata' }, { numero: 6, nome: 'Sole' },
        { numero: 7, nome: 'Sole' }, { numero: 8, nome: 'Larissa' }, { numero: 9, nome: 'Irmã Neide' },
        { numero: 10, nome: 'Renata' }, { numero: 11, nome: 'Luciana' }, { numero: 12, nome: 'Renata' },
        { numero: 13, nome: 'Renata' }, { numero: 14, nome: 'Renata' }, { numero: 15, nome: 'Adriana' },
        { numero: 16, nome: 'Sole' }, { numero: 17, nome: 'Sole' }, { numero: 18, nome: 'Sole' },
        { numero: 19, nome: 'Renata' }, { numero: 20, nome: 'Adriana' }, { numero: 21, nome: 'Renata' },
        { numero: 22, nome: 'Renata' }, { numero: 23, nome: 'Irmã Neide' }, { numero: 24, nome: 'Maira' },
        { numero: 25, nome: 'Luciana' }, { numero: 26, nome: 'Sole' }, { numero: 27, nome: 'Sole' },
        { numero: 28, nome: 'Irmã Neide' }, { numero: 29, nome: 'Renata' }, { numero: 30, nome: 'Adriana' },
        { numero: 31, nome: 'Renata' }, { numero: 32, nome: 'Renata' }, { numero: 33, nome: 'Maira' },
        { numero: 34, nome: 'Renata' }, { numero: 35, nome: 'Larissa' }, { numero: 36, nome: 'Sole' },
        { numero: 37, nome: 'Sole' }, { numero: 38, nome: 'Renata' }, { numero: 39, nome: 'Luciana' },
        { numero: 40, nome: 'Renata' }, { numero: 41, nome: 'Renata' }, { numero: 42, nome: 'Renata' },
        { numero: 43, nome: 'Renata' }, { numero: 44, nome: 'Larissa' }, { numero: 45, nome: 'Adriana' },
        { numero: 46, nome: 'Sole' }, { numero: 47, nome: 'Irmã Neide' }, { numero: 48, nome: 'Adriana' },
        { numero: 49, nome: 'Renata' }, { numero: 50, nome: 'Renata' }
    ];
    

    const winnerDisplay = document.getElementById('vencedor');
    const itemImg = document.getElementById('item-img');

    window.sortear = function() {
        let currentIndex = 0;
        const interval = setInterval(() => {
            const currentRifa = rifas[currentIndex];
            winnerDisplay.textContent = `Sorteando... Número ${currentRifa.numero} - ${currentRifa.nome}`;
            currentIndex = (currentIndex + 1) % rifas.length;
        }, 50);

        setTimeout(() => {
            clearInterval(interval);
            const randomIndex = Math.floor(Math.random() * rifas.length);
            const winner = rifas[randomIndex];
            winnerDisplay.textContent = `Vencedor: Número ${winner.numero} - ${winner.nome}`;
            
            // Exibir a imagem do item sorteado
            itemImg.style.display = 'block';
            itemImg.src = "img.jpeg"; // Substitua pela URL da imagem do item

            // Soltar confetes
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 5000);
    };
});