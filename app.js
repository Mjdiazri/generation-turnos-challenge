const turnos = [
   {
    "codigo": "A-04",
    "nombre": "Carlos Mendoza",
    "tramite": "Asignación de Citas Especialistas",
    "modulo": "Módulo 3",
    "atendido": false
  },
  {
    "codigo": "C-12",
    "nombre": "María Paula Restrepo",
    "tramite": "Autorización de Medicamentos",
    "modulo": "Módulo 1",
    "atendido": false
  },
  {
    "codigo": "U-85",
    "nombre": "Jorge Eliécer Gaitán",
    "tramite": "Validación de Incapacidades",
    "modulo": "Módulo 5",
    "atendido": false
  },
  {
    "codigo": "A-03",
    "nombre": "Ana Lucía Domínguez",
    "tramite": "Asignación de Citas Especialistas",
    "modulo": "Módulo 3",
    "atendido": true
  },
  {
    "codigo": "R-44",
    "nombre": "Andrés Felipe Arias",
    "tramite": "Afiliaciones y Novedades",
    "modulo": "Módulo 2",
    "atendido": true
  },
  {
    "codigo": "C-11",
    "nombre": "Sandra Milena Ortiz",
    "tramite": "Autorización de Medicamentos",
    "modulo": "Módulo 1",
    "atendido": true
  }]


/*Capturar elementos*/
const visorNumero = document.getElementById('visor-numero');
const visorModulo = document.getElementById('visor-modulo');
const buscadorTurno = document.getElementById('buscador-turno');
const listaTurnos = document.getElementById('fila-lista');
const turnosFaltantes = document.getElementById('turnos-esperando');
const listaVacia = document.getElementById('mensajeVacio');
const btnLlamar = document.getElementById('btnLlamar');

function mostrarFila(){

    turnos= [];

    turnos.forEach(element => {
        liTurnos = document.createElement("li");  
        codigoSpan = document.createElement("span");  
        divTurno = document.createElement("div");  
        pNombre = document.createElement("p");  
        pTramite = document.createElement("p"); 
        estadoSpan = document.createElement("span");  
       
        codigoSpan.textContent=element.codigo; 
        pNombre.textContent=element.nombre; 
        pTramite.textContent=element.tramite; 
        if (element.atendido === true){
            estadoSpan.textContent= "Atendido";
        } else{
            estadoSpan.textContent="EN ESPERA";
        }   
        

        divTurno.appendChild(pNombre);
        divTurno.appendChild(pTramite);
        liTurnos.appendChild(codigoSpan);
        liTurnos.appendChild(divTurno);
        liTurnos.appendChild(estadoSpan);

        listaTurnos.appendChild(liTurnos);     
        
        liTurnos.classList.add("turno")
        codigoSpan.classList.add("turno__codigo");
        divTurno.classList.add("turno__datos");
        pNombre.classList.add("turno__nombre");
        pTramite.classList.add("turno__tramite");
        estadoSpan.classList.add("turno__estado");
    });   
}

btnLlamar.addEventListener('click', function (){
  let pendiente = turnos.find((turnos) => turnos.atendido === false);
  visorNumero.textContent = pendiente.codigo;
  visorModulo.textContent = `Pase al ${pendiente.modulo}` ;
  pendiente.atendido = true;
  mostrarFila();
  console.log(turnos)  
});



