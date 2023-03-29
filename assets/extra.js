
const boneco = document.querySelector('.boneco');
const squ = document.querySelector('.squ');
textstart = document.querySelector('text-start');




/*================ Função Start ===================*/ 

const start= () => {

    document.getElementById("text-start").style.color = "white";

    squ.classList.add('squ-animation');

    boneco.src = '/assets/images/mantis animation.gif';
    boneco.style.width = '400px';
    document.addEventListener('keydown', start);
}

document.addEventListener('keydown', start);
/*
const an= () => {
    boneco.classList.add('an');
    setTimeout(()=>{
        boneco.classList.remove('an');
      

    },500)
}
/*document.addEventListener('keydown', an);*/
/*
var colisao = setInterval( function(){
    var bonecoPosition = parseInt(
        window.getComputedStyle(boneco).getPropertyValue('top')
    )
    var squPosition = parseInt(
        window.getComputedStyle(squ).getPropertyValue('left')
    )

    if(squPosition <= 7 && squPosition > 0 && bonecoPosition >=180){
        squ.style.animation = 'none'
        squ.style.display = 'none'
        boneco.style.display = 'none'
        document.getElementById("text-start").innerHTML="<strong>GAME OVER</strong>";  
    }
}, 10)











