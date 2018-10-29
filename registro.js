eventos: Array;
pulpo: Boolean;
registros = [];

function testRegistro() {
    console.log('Test registro: ');
    eventos = ["trabajar", "tocar un árbol", "hamburguesa", "correr", "twitter"];
    pulpo = false;
    mostrarRegistro();
    cantidadEventos();
    contieneEvento('hamburguesa', eventos);
    contieneEvento('pizza', eventos);
}

function testDiario() {
    console.log('Test diario: ');
    incluirRegistro({
        eventos: ["trabajar", "tocar un árbol", "hamburguesa", "correr", "twitter"],
        pulpo: false
    });
    incluirRegistro({   
        eventos: ["trabajar", "helado", "coliflor", "lasaña", "tocar un árbol", "lavarse los dientes"],
        pulpo: false
    });
    incluirRegistro({   
        eventos: ["finde", "bicicleta", "descansar", "cacahuetes", "cerveza"],
        pulpo: true
    });
    mostrarDiario();    
    tamañoDiario();
}

function contieneEvento(evento, eventos) {
        let containsEvent = eventos.includes(evento);
        console.log(`${evento} ${containsEvent ? '' : 'no '}está presente en el registro:`);
        console.log(eventos); 
}

function cantidadEventos() {
    console.log(`El registro tiene ${eventos.length} eventos`);
}

function mostrarRegistro() {
    console.log("eventos: " + eventos);
    console.log("pulpo: " + pulpo);
}

function incluirRegistro(registro) {
    this.registros.push(registro);
}

function mostrarDiario() {
    for(let index = 0; index < registros.length; index++) {
        eventos = registros[index].eventos;
        pulpo = registros[index].pulpo;
        mostrarRegistro();
    }
}

function tamañoDiario() {
    console.log(`El diario tiene ${registros.length} registros`);
}

testRegistro()
testDiario()