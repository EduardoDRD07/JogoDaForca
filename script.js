const palavras = ['Astenia', 'Babugem', 'Cinesia', 'Duidade', 'Empedernido', 'Gorjear', 'Homizio', 'Lancinante', 'Mendacioso', 'Nefelibata', 'Odiento', 'Urze', 'Verossimilhança', 'Xaropear', 'Zeugma', 'Amarelo', 'Amiga', 'Amor', 'Ave', 'Bolo', 'Branco', 'Cama', 'Caneca', 'Celular', 'Clube', 'Copo', 'Doce', 'Elefante', 'Escola', 'Estojo', 'Faca', 'Foto', 'Garfo', 'Geleia', 'Girafa', 'Janela', 'Limonada', 'Meia', 'Noite', 'Ovo', 'Pai', 'Parque', 'Passarinho', 'Peixe', 'Pijama', 'Rato']

let palavraSorteada = palavras[Math.floor(Math.random() * (46 - 0 + 1))]
palavraSorteada = palavraSorteada.toUpperCase()
console.log(palavraSorteada)

const letrasCertas = []
const letrasErradas = []

mostrarLetrasCertas()

const getValues = function (props) {
    if (palavraSorteada.includes(props)) {
        if (letrasCertas.includes(props)) {
            return
        } else {
            letrasCertas.push(props)
        }
    } else {
        if (letrasErradas.includes(props)) {
            return
        } else {
            letrasErradas.push(props)
        }
    } atualizarJogo()
    vidas()
}

function atualizarJogo() {
    mostrarLetrasCertas()
    mostrarLetrasErradas()
}

function mostrarLetrasErradas() {
    const erradas = document.querySelector('.letrasErradas')
    erradas.innerHTML = '<h1>Letras Erradas<h1/><br>'
    letrasErradas.forEach(letra => erradas.innerHTML += ` ${letra}, `)
}

function mostrarLetrasCertas() {
    const certas = document.querySelector('.letrasCertas')
    certas.innerHTML = ''
    palavraSorteada.split('').forEach(letra => {
        if (letrasCertas.includes(letra)) {
            certas.innerHTML += `${letra}`
        } else {
            certas.innerHTML += ` _ `
        }
    })
}

function vidas() {
    let vidas = 6 - (letrasErradas.length)
    const forca = document.querySelector('.forca')
    switch (vidas) {
        case 6:
            forca.innerHTML = '<img src="forca.png" alt="Forca" width="300px" height="600px">'
            break
        case 5:
            forca.innerHTML = '<img src="vida1.png" alt="Forca Cabeça" width="300px" height="600px">'
            break
        case 4:
            forca.innerHTML = '<img src="vida2.png" alt="Forca Cabeça e tronco" width="300px" height="600px">'
            break
        case 3:
            forca.innerHTML = '<img src="vida3.png" alt="Forca Cabeça, Tronco e um braço" width="300px" height="600px">'
            break
        case 2:
            forca.innerHTML = '<img src="vida4.png" alt="Forca Cabeça, Tronco e dois braços" width="300px" height="600px">'
            break
        case 1:
            forca.innerHTML = '<img src="vida5.png" alt="Forca Cabeça tronco, braços e uma perna" width="300px" height="600px">'
            break
        case 0:
            forca.innerHTML = '<img src="vida6.png" alt="Forca corpo completo" width="300px" height="600px">'
            alert('Você Perdeu :(')
            const resposta = document.querySelector('.letrasCertas')
            resposta.innerHTML = palavraSorteada
            return
    }
    const ganhar = document.querySelector('.letrasCertas').firstChild.textContent
    if (ganhar == palavraSorteada) {
        alert('Você Ganhou!!! :D')
    }
}

function jogarNovamente() {
    location.reload()
}