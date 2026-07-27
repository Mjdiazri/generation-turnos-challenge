let turnos = [
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
    "atendido": false
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

//Funciones
function mostrarFila(){
    //turnos= [];

    turnos.forEach(element => {
        //Crear elementos
        liTurnos = document.createElement("li");  
        codigoSpan = document.createElement("span");  
        divTurno = document.createElement("div");  
        pNombre = document.createElement("p");  
        pTramite = document.createElement("p"); 
        estadoSpan = document.createElement("span");  
        btnCancelar = document.createElement("button");
       
        //Poner texto
        codigoSpan.textContent=element.codigo; 
        pNombre.textContent=element.nombre; 
        pTramite.textContent=element.tramite; 
        btnCancelar.textContent="Cancelar";
        
        //Agregar identificador
        liTurnos.dataset.idTurno = element.codigo;
        liTurnos.dataset.idModulo = element.modulo;
        btnCancelar.dataset.botonCancelar = "cancelar"
        
        //Poner la clase y cambiar texto
        if (element.atendido === true){
            estadoSpan.textContent= "Atendido";
            liTurnos.classList.add('turno--atendido'); 
        } else{
            estadoSpan.textContent="EN ESPERA";
        }  
        
        //Definir la estuctura
        divTurno.appendChild(pNombre);
        divTurno.appendChild(pTramite);
        liTurnos.appendChild(codigoSpan);
        liTurnos.appendChild(divTurno);
        liTurnos.appendChild(estadoSpan);
        liTurnos.appendChild(btnCancelar);

        listaTurnos.appendChild(liTurnos);     
        
        //Agregar clases
        liTurnos.classList.add("turno")
        codigoSpan.classList.add("turno__codigo");
        divTurno.classList.add("turno__datos");
        pNombre.classList.add("turno__nombre");
        pTramite.classList.add("turno__tramite");
        estadoSpan.classList.add("turno__estado");
        btnCancelar.classList.add("turno__cancelar")

        actualizarContador();
    });   
}


function llamarSiguiente(){
  let pendiente = turnos.find((turnos) => turnos.atendido === false);
  pendiente.atendido = true;
  console.log(pendiente.atendido) 
  visorNumero.textContent = pendiente.codigo;
  visorModulo.textContent = `Pase al ${pendiente.modulo}` ;
  mostrarFila();  
};

btnLlamar.addEventListener("click", llamarSiguiente);
listaTurnos.addEventListener("click", function(elemento){
  if(elemento.target.dataset.botonCancelar === 'cancelar'){
    let li = elemento.target.closest("li");
    let turnoCancelar = li.dataset.idTurno;
    console.log(turnoCancelar);
    
    turnos = turnos.filter(function(t){
      if(t =! turnoCancelar){
        return true
      } else {
        return false;
      }
    }) 
    li.remove()
    mostrarFila();
  }  
})


function actualizarContador(){
  let faltantes = document.querySelectorAll(".turno:not(.turno--atendido)");
  let total = faltantes.length;
  turnosFaltantes.textContent= total;
}

mostrarFila()

