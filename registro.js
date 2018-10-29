eventos: Array;
pulpo: Boolean;


function test() {
    console.log('Test registro: ');
    eventos = ["trabajar", "tocar un árbol", "hamburguesa", "correr", "twitter"];
    pulpo = false;
    
    mostrarRegistro();
    cantidadEventos();
    contieneEvento('hamburguesa', eventos);
    contieneEvento('pizza', eventos);
}

function contieneEvento(evento, eventos) {
        let containsEvent = eventos.includes(evento);
        console.log(`${evento} ${containsEvent ? '': 'no '}está presente en el registro:`);
        console.log(eventos); 
}

function cantidadEventos() {
    console.log(`El registro tiene ${eventos.length} eventos`);
}

function mostrarRegistro() {
    console.log("eventos: " + eventos);
    console.log("pulpo: " + pulpo);
}


test();
