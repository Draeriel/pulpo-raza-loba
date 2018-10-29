eventos: Array;
pulpo: Boolean;

function test() {
    console.log('Test registro: ');
    eventos = ["trabajar", "tocar un árbol", "hamburguesa", "correr", "twitter"];
    pulpo = false;
    mostrarRegistro();
}

function contieneEvento(evento, eventos) {
        console.log(eventos.includes(evento));
}

function mostrarRegistro() {
    console.log("eventos: " + eventos);
    console.log("pulpo: " + pulpo);
}

test();