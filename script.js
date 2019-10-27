let idag_serveras = document.getElementById("idag_serveras");

let dagIdag = new Date();
console.log(dagIdag);

let veckoDag = dagIdag.getDay();
console.log(veckoDag);

switch (veckoDag) {
    case 1:
        idag_serveras.innerHTML = "Måndag :<br/> Stekt spätta med remouladsås och potatis ";
        break;
    case 2:
        idag_serveras.innerHTML = "Tisdag :<br/> Dansk sjömansbiff med pressgurka och rostade rödbetor";
        break;
    case 3:
        idag_serveras.innerHTML = "Onsdag :<br/> Plommonspäckad kycklingfilé  med gräddsås, brynt potatis,<br/> rödkål och kanelstekta äppelklyftor";
        break;
    case 4:
        idag_serveras.innerHTML = "Torsdag :<br/> Tacosoppa toppad med gräddfil, nachos och riven ost. <br/>Nybakat bröd med örter och vitlök. Marängsviss med hemlagad chokladkolasås, grädde och banan";
        break;
    case 5:
        idag_serveras.innerHTML = "Fredag :<br/> Smörstekt fläskschnitzel med sval Café de Parissås,<br/> rostade potatishalvor och fransk tomatsallad med kapris";
        break;
    default:
        idag_serveras.innerHTML = " Idag det är stängt. " ;   

}