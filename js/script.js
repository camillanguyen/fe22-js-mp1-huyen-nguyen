for(let i = 1; i<6; i++){
    const h1Element = document.createElement('h1');
    h1Element.innerText = 'Rad ' +i;
    document.body.appendChild(h1Element);
    h1Element.style.backgroundColor = `hsl(${i * 10}, 70%, 50%)`;
    h1Element.style.textAlign = "center";
    h1Element.style.fontSize = i + "rem";
    h1Element.style.color = "purple";
}
let container = document.createElement("div");
document.body.appendChild(container);
container.style.border = "1px solid black";
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.padding = "5rem";

for (let i=0; i< 3; i++){
    let innercontainer = document.createElement("div");
    container.appendChild(innercontainer);
    innercontainer.style.backgroundColor ="purple";
    innercontainer.style.width = "5rem";
    innercontainer.style.padding = "1rem";
    if (i===0) {
        for (let i=0; i<10; i++){
            let number = document.createElement("h2");
            innercontainer.appendChild(number);
            number.innerText = i;
            number.style.margin ="0px";
            if(i% 2 === 0){
                number.style.backgroundColor ="black";
                number.style.color ="white";
            
            } else  {
                number.style.backgroundColor = "white";
            }
            if (i===4){
                number.style.background =null;
            }
        }
    }
    else if (i===1){
        for (let i=9; i>=0; i--){
            let number = document.createElement("h2");
            innercontainer.appendChild(number);
            number.innerText = i;
            number.style.margin ="0px";
            number.style.textAlign = "center";
            if(i% 2 === 0){
                number.style.backgroundColor ="black";
                number.style.color ="white";
            
            } else  {
                number.style.backgroundColor = "white";
            }
            if (i===8){
                number.style.background =null;
            }
        }
    }
    else {
        let narray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
    for (let i=0; i<10; i++){
        let number = document.createElement("h2");
        innercontainer.appendChild(number);
        number.innerText = narray [i];
        number.style.margin ="0px";
        number.style.textAlign = "right";
        if(i% 2 === 0){
            number.style.backgroundColor ="black";
            number.style.color ="white";
        
        } else  {
            number.style.backgroundColor = "white";
        }
        if (i===5){
            number.style.background =null;
        }
    }
}
    }
