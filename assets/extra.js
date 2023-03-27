

const boneco = document.querySelector('#boneco');

const pulo= () => {
    boneco.classList.add('pulo');
}

document.addEventListener('keydown', pulo)

function pulo(){
    if(boneco.classList != 'an'){
        boneco.classList.add('an')
}


const pulo()
setTimeout(function(){
    boneco.classList.remove('an')
},500)
}

var testcoliso = setInterval( function(){
    var topboneco = parseInt(
        window.getComputedStyle(boneco).getPropertyValue('top')
    )
    var leftsquare = parseInt(
        window.getComputedStyle(square).getPropertyValue('left')
    )

    if(leftsquare <20 && leftsquare > 0 && topboneco >= 130){
        square.style.animation = 'none'
        square.style.display = 'none'
    }
}, 10)