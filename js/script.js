let toConvert;
function convertirARomano(){
    
    toConvert = document.getElementById("decimal").value;
    toConvert = parseInt(toConvert);
    let aux = toConvert;

    let converted ="";
    
    const romanDec = {
    
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    
    
    };
    
    for(let item in romanDec){
        while (toConvert >= romanDec[item]){
            converted += item;
            toConvert -= romanDec[item];
        }
    
    }

    document.querySelector("#romano").innerHTML = `El numero ${aux} en numero romano es: ${converted}`;
}


document.getElementById("submit").addEventListener("click",convertirARomano);


