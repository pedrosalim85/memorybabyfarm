document.addEventListener('DOMContentLoaded', () => {

    // carregar os cards
    const cardArray = [
        {
            name: 'gato',
            img: 'images/gato.png'
        },

        {
            name: 'gato',
            img: 'images/gato.png'
        },

        {
            name: 'cachorro',
            img: 'images/cachorro.png'
        },

        {
            name: 'cachorro',
            img: 'images/cachorro.png'
        },

        {
            name: 'pato',
            img: 'images/pato.png'
        },

        {
            name: 'pato',
            img: 'images/pato.png'
        },

        {
            name: 'pinto',
            img: 'images/pinto.png'
        },

        {
            name: 'pinto',
            img: 'images/pinto.png'
        },

        {
            name: 'porco',
            img: 'images/porco.png'
        },

        {
            name: 'porco',
            img: 'images/porco.png'
        },

        {
            name: 'vaca',
            img: 'images/vaca.png'
        },

        {
            name: 'vaca',
            img: 'images/vaca.png'
        },

        {
            name: 'cavalo',
            img: 'images/cavalo.png'
        },

        {
            name: 'cavalo',
            img: 'images/cavalo.png'
        },

        {
            name: 'ovelha',
            img: 'images/ovelha.png'
        },

        {
            name: 'ovelha',
            img: 'images/ovelha.png'
        },

        {
            name: 'cabra',
            img: 'images/cabra.png'
        },

        {
            name: 'cabra',
            img: 'images/cabra.png'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')

    const resultDisplay = document.querySelector('#result')

    var cardsChosen = []
    var cardsChosenId = []
    var pares = []

    function tabuleiro(){
        for (i=0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkforMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src', 'images/card.png')
            alert("Você clicou na mesma imagem!")
        }
        else if (cardsChosen[0] == cardsChosen[1]){
            alert("Você fez um par!")
            cards[optionOneId].setAttribute('src', 'images/preto.png')
            cards[optionTwoId].setAttribute('src', 'images/preto.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            pares.push(cardsChosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/card.png'),
            cards[optionTwoId].setAttribute('src', 'images/card.png'),
            alert('Jogue novamente.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = pares.length

        if (pares.length == cardArray.length/2){
            resultDisplay.textContent = ' Parabéns! Você encontrou todos os pares!'
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length == 2){
            setTimeout(checkforMatch, 500)
        }

    }

    tabuleiro()
})