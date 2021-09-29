function pilihanCom(){
    const comp = Math.round((Math.random() * 3) + 1) ;
    
    if(comp == 1) return "Gajah";
    if(comp == 2) return "Orang";
    return "Semut";
}

function getHasil (comp, player){
    if (player == comp) return "SERI";
    if (player == "Gajah") return (comp == "Orang") ? "MENANG" : "KALAH";
    if (player == "Orang") return (comp == "Gajah") ? "KALAH" : "MENANG";
    if (player == "Semut") return (comp == "Orang") ? "KALAH" : "MENANG";
}


function putar(){
    const imgKomputer = document.querySelector(".img-komputer");
    const gambar = ["Gajah", "Orang", "Semut"];
    let i = 0;
    const timeMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - timeMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute("src", "Gambar/" + gambar[i++] + ".png");
        if(i == gambar.length) i = 0;
    }, 100);
};


const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function(pil){
    pil.addEventListener("click",  function(){
        const pilKomputer = pilihanCom();
        const PilPlayer = pil.className;
        const hasil = getHasil(pilKomputer, PilPlayer);

        putar();

        setTimeout(function(){
            const imgKomputer = document.querySelector(".img-komputer");
            imgKomputer.setAttribute("src", "Gambar/" + pilKomputer + ".png");
    
            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000);
    });
});






















// const pGajah = document.querySelector(".Gajah");
// pGajah.addEventListener("click", function(){
//     
// });

// const pOrang = document.querySelector(".Orang");
// pOrang.addEventListener("click", function(){
//     const pilKomputer = pilihanCom();
//     const PilPlayer = pOrang.className;
//     const hasil = getHasil(pilKomputer, PilPlayer);

//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src", "Gambar/" + pilKomputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector(".Semut");
// pSemut.addEventListener("click", function(){
//     const pilKomputer = pilihanCom();
//     const PilPlayer = pSemut.className;
//     const hasil = getHasil(pilKomputer, PilPlayer);

//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src", "Gambar/" + pilKomputer + ".png");

//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });


