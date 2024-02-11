

const nomeHeroi = "Jaime";
let xp = 1001;
let nivel = "detectando";

if (xp <= 1000){
    nivel = "Ferro";
}else if(xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
}else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata"
}else if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"
}else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    nivel = "Imortal"
}else {
    nivel = "Radiante"
}
switch(nivel){
    case "Ferro":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Bronze":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Prata":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Ouro":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Platina":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Ascendete":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Imortal":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    case "Radiante":
        console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivel)
    break

    default :
        console.log("Nível não detectável")
        break
}