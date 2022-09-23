let [vszam,gszam,dszam]=[0,0,0];
let eredmények = document.getElementById("eredmény");
let lehetséges_kimenetelek = {
    'kő' : {
        'kő' : 'Döntetlen',
        'olló' : 'Győztél',
        'papír' : 'Vesztettél'
    },
    'papír' : {
        'kő' : 'Győztél',
        'olló' : 'Vesztettél',
        'papír' : 'Döntetlen'
    },
    'olló' : {
        'kő' : 'Vesztettél',
        'olló' : 'Döntetlen',
        'papír' : 'Győztél'
    },
}

function elemzes(bemenet){
    var tömb = ["kő","olló","papír"];
    var randomSzam = Math.floor(Math.random()*3);

    document.getElementById("saját_választás").
    innerHTML = `Ezt választottad: <span> ${bemenet.
    toUpperCase()} </span>`;

    document.getElementById("gép_választás").
    innerHTML = 
    ` A Gép válasza: <span>${tömb[randomSzam].
    toUpperCase()} </span>`;

    let gép_választása = tömb[randomSzam];

    switch(lehetséges_kimenetelek[bemenet][gép_választása]){
        case 'Győztél':
            eredmények.innerHTML = "Győztél";
            gszam++;
            break;
        case 'Vesztettél':
            eredmények.innerHTML = "Vesztettél";
            vszam++;
            break;
        default:
            eredmények.innerHTML = "Döntetlen";
            dszam ++;
            break;
    }

    document.getElementById("vszam").innerHTML = vszam;
    document.getElementById("gszam").innerHTML = gszam;
    document.getElementById("dszam").innerHTML = dszam;

}
