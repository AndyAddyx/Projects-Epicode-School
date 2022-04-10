const deck = [
    'Pear',
    'Apple',
    'Orange',
    'Banana',
    'Strawberry',
    'Watermelon',
    'Pineapple',
    'Peach',
]

resetButton = document.querySelector(".btnreset");


$(document).ready(function(){
    let cards = $.merge(deck, deck);

    cards.sort(()=>Math.random() - 0.5);

    for(let i=0; i < cards.length; i++){
        let cardName = cards[i];

        $('#content').append(
            `<div class="card" data-name="${cardName}">
                <img src="img/${cardName}.jpg">
                <div class="card-back"></div>
            </div>`
        )
    }

    $('.card').click(function() {
        console.log('clicked');
        if($(this).hasClass('flipped')) {
            return
        }
        

        if($('.flipped').length === 2) {
            return
        }

        $(this).addClass('flipped')

        if($('.flipped').length === 2) {
            let cardName1 = $('.flipped')[0].getAttribute('data-name')
            let cardName2 = $('.flipped')[1].getAttribute('data-name')

            if(cardName1 === cardName2) {
                $('.flipped').addClass('matched')
                $('.flipped').removeClass('flipped')
                if($('.matched').length === cards.length) {
                    alert('Hai Vinto!!')
                } 
            } else {
                setTimeout(function() {
                    $('.flipped').removeClass('flipped')
                }, 1000)
                
            }
         
        }

    })

    $('.flips').click(function(){
        $(this).text('clicked');
    })

    $('.btnreset').click(function(){
        
        $(".flipped").removeClass("flipped")
        $('.matched').removeClass('matched') 
        
        

    })

    
})

