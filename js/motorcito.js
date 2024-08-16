/* Funcionamiento de la Licuadora */
let estadoLicuadora = "apagado";
let sonidoLicuadora = document.getElementById( "blender-sound" );
let botonLicuadora = document.getElementById( "blender-button-sound" );
let licuadora = document.getElementById("blender");

let estadoTelevisor = "apagado";
let sonidoTelevisor = document.getElementById("televisor-sound");
let botonTelevisor = document.getElementById("televisor-button-sound");
let televisorrr = document.getElementById("televisor");


let estadoTostadora = "apagado";
let sonidoTostadora = document.getElementById("tostadora-sound");
let botonTostadora = document.getElementById("tostadora-button-sound");
let tostadoraaa = document.getElementById("tostadora");

let estadoRadio = "apagado";
let sonidoRadio = document.getElementById("radio-sound");
let botonRadio = document.getElementById("radio-button-sound");
let radiooo= document.getElementById("radio");

let estadoVentilador = "apagado";
let sonidoVentilador = document.getElementById("ventilador-sound");
let botonVentilador = document.getElementById("ventilador-button-sound");
let ventiladorr= document.getElementById("ventilador");

let estadoMp3 = "apagado";
let sonidoMp3 = document.getElementById("mp3-sound");
let botonMp3 = document.getElementById("mp3-button-sound");
let mpp3= document.getElementById("mp3");

function controlarLicuadora() {
  if ( estadoLicuadora == "apagado" ) {
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "green"; */
  } else {
    estadoLicuadora = "apagado";
    hacerBrrBrr();
    licuadora.classList.remove("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "red"; */
  }
}

function hacerBrrBrr() {
if( sonidoLicuadora.paused ){
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
  }
}

/* TELEVISOR*/

function controlarTelevisor() {
  if (estadoTelevisor == "apagado") {
    estadoTelevisor = "encendido";

    televisorBrrBrr();
    televisorrr.classList.add("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "green"; */
  } else {
    estadoTelevisor = "apagado";
    console.log("apagado");
    televisorBrrBrr();
    televisorrr.classList.remove("active");
    /* document.getElementById( "blender-button" ).style.backgroundColor = "red"; */
  }
}

function televisorBrrBrr() {
  if (sonidoTelevisor.paused) {
    botonTelevisor.play();
    sonidoTelevisor.play();
  } else {
    botonTelevisor.play();
    sonidoTelevisor.pause();
    sonidoTelevisor.currentTime = 0; /* Reinicia el audio al segundo 0 */
  }
}

//TOSTADORA//

function controlarTostadora() {
  if (estadoTostadora == "apagado") {
    estadoTostadora = "encendido";

    tostadoraBrrBrr();
    tostadoraaa.classList.add("active");
  } else {
    estadoTostadora = "apagado";
    tostadoraBrrBrr();
    tostadoraaa.classList.remove("active");
  }
}

function tostadoraBrrBrr() {
  if (sonidoTostadora.paused) {
    botonTostadora.play();
    sonidoTostadora.play();
  } else {
    botonTostadora.play();
    sonidoTostadora.pause();
    sonidoTelevisor.currentTime = 0; 
  }
}

//RADIO//

function controlarRadio() {
  if (estadoRadio == "apagado") {
    estadoRadio = "encendido";

    radioBrrBrr();
    radiooo.classList.add("active");
  } else {
    estadoRadio = "apagado";
    radioBrrBrr();
    radiooo.classList.remove("active");
  }
}

function radioBrrBrr() {
  if (sonidoRadio.paused) {
    botonRadio.play();
    sonidoRadio.play();
  } else {
    botonRadio.play();
    sonidoRadio.pause();
    sonidoRadio.currentTime = 0; 
  }
}

//VENTILADOR//

function controlarVentilador() {
  if (estadoVentilador == "apagado") {
    estadoVentilador= "encendido";
    ventiladorBrrBrr();
    ventiladorr.classList.add("active");
  } else {
    estadoVentilador = "apagado";
    ventiladorBrrBrr();
    ventiladorr.classList.remove("active");
  }
}

function ventiladorBrrBrr() {
  if (sonidoVentilador.paused) {
    botonVentilador.play();
    sonidoVentilador.play();
  } else {
    botonVentilador.play();
    sonidoVentilador.pause();
    sonidoVentilador.currentTime = 0; 
  }
}
//MP3//

function controlarMp3() {
  if (estadoMp3 == "apagado") {
    estadoMp3= "encendido";
    mp3BrrBrr();
    mpp3.classList.add("active");
  } else {
    estadoMp3 = "apagado";
    mp3BrrBrr();
    mpp3.classList.remove("active");
  }
}

function mp3BrrBrr() {
  if (sonidoMp3.paused) {
    botonMp3.play();
    sonidoMp3.play();
  } else {
    botonMp3.play();
    sonidoMp3.pause();
    sonidoMp3.currentTime = 0; 
  }
}