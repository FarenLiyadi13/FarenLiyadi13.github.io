const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 +1);
    const g = Math.round(Math.random() * 255 +1);
    const b = Math.round(Math.random() * 255 +1);
    
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})


// const sMerah = document.querySelector('input[name=sMerah]');
// sMerah.addEventListener('input', function(){
//     const r = sMerah.value;
//     document.body.style.backgroundColor = 'rgb('+r+',0,0)';

// })

const rgb = document.querySelectorAll("input[type='range']");
rgb.forEach(function(range){
    range.addEventListener("input", function(){
        const r = document.querySelector("input[name='sMerah']").value;
        const g = document.querySelector("input[name='sHijau']").value;
        const b = document.querySelector("input[name='sBiru']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    })
})























