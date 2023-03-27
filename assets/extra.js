
const boneco = document.querySelector('.boneco');
const squ = document.querySelector('.squ');

const an= () => {
    boneco.classList.add('an');
    setTimeout(()=>{
        boneco.classList.remove('an');

    },500)
}
/*
const loop = setInterval(() => {

    const squPosition = squ.offsetleft;
    const bonecoPosition = +window.getComputedStyle(boneco).bottom.replace('px', '');

    if (squPosition <= 100 && squPosition > 0 && bonecoPosition < 80){

        squ.style.animation = 'none';
        squ.style.left = `${squPosition}px`;

        boneco.style.animation = 'none';
        boneco.style.bottom = `${bonecoPosition}px`;

    }
    
}, 10);
*/
var colisao = setInterval( function(){
    var bonecoPosition = parseInt(
        window.getComputedStyle(boneco).getPropertyValue('top')
    )
    var squPosition = parseInt(
        window.getComputedStyle(squ).getPropertyValue('left')
    )

    if(squPosition <= 100 && squPosition > 0 && bonecoPosition >=150){
        squ.style.animation = 'none'
        squ.style.display = 'none'
        alert('dbwid')
    }
}, 10)

document.addEventListener('keydown', an);
