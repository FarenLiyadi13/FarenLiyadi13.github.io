function getPilihanKomputer(){
    const comp = Math.random()
        if(comp < 0.34) return 'gajah';
        if(comp >= 0.34 && comp < 0.67 ) return 'orang';
        return 'semut';
}
function getHasil(comp, player){
    if (comp == player) return 'SERI!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}
let i = 0;
let j = 0;
let k = 0;
function putar(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();


    setInterval(function(){
        if ( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/'+gambar[i++]+ '.png');
        if(i == gambar.length) i=0;
    }, 100)
}
function clear(){
    const clear = document.querySelector('.info');
    clear.innerHTML = '';
}

const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        clear();
    const pilihanComputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    putar();
    setTimeout(function(){
        const hasil = getHasil(pilihanComputer,pilihanPlayer);
    const imgComputer = document.querySelector('.img-computer');
    
    imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');
    const h2 = document.querySelector('.info');
    h2.innerHTML = hasil;
    if(hasil == 'MENANG!'){
        i++;
    } else if (hasil == 'KALAH!'){
        j++;
    } else if (hasil == 'SERI!'){
        k++;
    }
    console.log(hasil);
    // i = setScore(i,hasil);
    // j = setScore(j,hasil);
    const getScore = document.querySelector('.nilaiscore');
    getScore.innerHTML = i;
    const getLoses = document.querySelector('.nilailoses');
    getLoses.innerHTML = j;
    const getSeri = document.querySelector('.nilaiseri');
    getSeri.innerHTML = k;    
},1000)
})
})


// const getScore = document.querySelector('.score'); 
//     const nilaiScore = document.createElement('h6');
//     const setNilaiScore = document.createTextNode(i);
//     nilaiScore.appendChild(setNilaiScore);
//     getScore.appendChild(nilaiScore);












// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');
//     const h2 = document.querySelector('.info');
//     h2.innerHTML = hasil;
//     // const elemenBaru = document.createElement('h2');
//     // const isiBaru = document.createTextNode(hasil);
//     // elemenBaru.appendChild(isiBaru);
//     // h2.appendChild(elemenBaru);
// })
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');
//     const h2 = document.querySelector('.info');
//     h2.innerHTML = hasil;
//     // const elemenBaru = document.createElement('h2');
//     // const isiBaru = document.createTextNode(hasil);
//     // elemenBaru.appendChild(isiBaru);
//     // h2.appendChild(elemenBaru);
// });
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanComputer,pilihanPlayer);
//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/'+pilihanComputer+'.png');
//     const h2 = document.querySelector('.info');
//     h2.innerHTML = hasil;
//     // const elemenBaru = document.createElement('h2');
//     // const isiBaru = document.createTextNode(hasil);
//     // elemenBaru.appendChild(isiBaru);
//     // h2.appendChild(elemenBaru);
// })