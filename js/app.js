let formulario = document.querySelector("form");
let ventanaModal = new bootstrap.Modal(document.getElementById("modalAgregarPersona"));
let personas = [];
let contadorPersonas = 1;
let alert = document.getElementById("alert");

formulario.addEventListener("submit", agregarPersona);

function agregarPersona(e) {
  e.preventDefault();
  if (formulario.checkValidity()) {
    let id = contadorPersonas;
    let nombre = document.getElementById("nombre").value;
    let dni = parseInt(document.getElementById("dni").value);
    let nacimiento = convertirFecha(document.getElementById("nacimiento").value);
    let edad = calcularEdad(nacimiento);
    let sexo = document.getElementById("sexo").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);

    //Creamos el objeto de la persona
    const objetoPersona = new Persona(id, nombre, edad, dni, sexo, peso, altura, nacimiento);

    contadorPersonas++;

    //Introducimos el objeto en un array
    personas.push(objetoPersona);
    crearTabla(objetoPersona);

    //ocultar ventana modal
    ventanaModal.hide();
  }
  formulario.reset();
}

function convertirFecha(fecha) {
  let partesFecha = fecha.split("-");
  let nacimiento = partesFecha[2] + "-" + partesFecha[1] + "-" + partesFecha[0];
  return nacimiento;
}

function calcularEdad(nacimiento) {
  let fechaActual = new Date();
  let anioActual = fechaActual.getFullYear();
  let mesActual = fechaActual.getMonth() + 1;
  let diaActual = fechaActual.getDate();
  let fechaNac = nacimiento.split("-");
  let anioNac = parseInt(fechaNac[2]);
  let mesNac = parseInt(fechaNac[1]);
  let diaNac = parseInt(fechaNac[0]);

  let edad = anioActual - anioNac;

  if (mesActual < mesNac || (mesActual == mesNac && diaActual < diaNac)) {
    edad--;
  }

  return edad;
}

function crearTabla(objetoPersona) {
  let contenedorPersonas = document.getElementById("contenedorPersonas");

  let btnMostrarGeneracion = document.createElement("button");
  btnMostrarGeneracion.className = "btn btn-primary me-3";
  btnMostrarGeneracion.innerHTML = "Mostrar generacion";
  btnMostrarGeneracion.onclick = () => objetoPersona.mostrarGeneracion();

  let btnMayorDeEdad = document.createElement("button");
  btnMayorDeEdad.className = "btn btn-primary me-3";
  btnMayorDeEdad.innerHTML = "Mayor de edad";
  btnMayorDeEdad.onclick = () => objetoPersona.esMayorDeEdad();

  let nuevaTabla = document.createElement("div");
  nuevaTabla.className = "p-2 col-12 col-md-6 col-lg-4";
  nuevaTabla.innerHTML = `<article class=" p-3 rounded-4">
  <table class="table table-striped rounded-3">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">${objetoPersona.nombre}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">DNI</th>
        <td>${objetoPersona.dni}</td>
      </tr>
      <tr>
        <th scope="row">Fecha de nacimiento</th>
        <td>${objetoPersona.nacimiento}</td>
      </tr>
      <tr>
        <th>Edad</th>
        <td>${objetoPersona.edad}</td>
      </tr>
      <tr>
        <th>Sexo</th>
        <td>${objetoPersona.sexo}</td>
      </tr>
      <tr>
        <th>Peso</th>
        <td>${objetoPersona.peso}</td>
      </tr>
      <tr>
        <th>Altura</th>
        <td>${objetoPersona.altura}</td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex btnContainer justify-content-center pb-2">
  </div>
</article>`;

  nuevaTabla.querySelector(".btnContainer").appendChild(btnMostrarGeneracion);
  nuevaTabla.querySelector(".btnContainer").appendChild(btnMayorDeEdad);
  contenedorPersonas.appendChild(nuevaTabla);
}

function mostrarAlerta(mensaje) {
  alert.className = "alert alert-primary";
  alert.innerHTML = mensaje;
}

class Persona {
  #id;
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #nacimiento;
  #anio;

  constructor(id, nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.#id = id;
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#nacimiento = nacimiento;
    this.#anio = parseInt(nacimiento.split("-")[2]);
  }

  get id() {
    return this.#id;
  }
  set id(nuevoId) {
    this.#id = nuevoId;
  }

  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    if (nuevoNombre !== "") {
      this.#nombre = nuevoNombre;
    }
  }

  get edad() {
    return this.#edad;
  }
  set edad(nuevoEdad) {
    if (nuevoEdad > 0 && nuevoEdad < 130) {
      this.#edad = nuevoEdad;
    }
  }

  get dni() {
    return this.#dni;
  }
  set dni(nuevoDni) {
    if (nuevoDni >= 0 && nuevoDni <= 99999999) {
      this.#dni = nuevoDni;
    }
  }

  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSexo) {
    if (nuevoSexo !== "") {
      this.#sexo = nuevoSexo;
    }
  }

  get peso() {
    if (!isNaN(this.#peso)) {
      return this.#peso;
    } else {
      return "---";
    }
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this.#peso = nuevoPeso;
    }
  }

  get altura() {
    if (!isNaN(this.#altura)) {
      return this.#altura;
    } else {
      return "---";
    }
  }
  set altura(nuevaAltura) {
    if (nuevaAltura > 0) {
      this.#altura = nuevaAltura;
    }
  }

  get nacimiento() {
    return this.#nacimiento;
  }
  set nacimiento(nuevonacimiento) {
    if (nuevonacimiento > 1900 && nuevonacimiento < 2023) {
      this.#nacimiento = nuevonacimiento;
    }
  }

  get anio() {
    return this.#anio;
  }
  set anio(nuevoAnio) {
    if (nuevoAnio > 1929 && nuevoAnio < 2025) {
      this.#anio = nuevoAnio;
    }
  }

  mostrarGeneracion() {
    if (this.anio >= 1994 && this.anio <= 2010) {
      mostrarAlerta(
        `${this.nombre} pertenece a la generación Z y su rasgo característico es la irreverencia`
      );
    } else if (this.anio >= 1981 && this.anio <= 1993) {
      mostrarAlerta(
        `${this.nombre} pertenece a la generación Y (Milennials) y su rasgo característico es la frustración`
      );
    } else if (this.anio >= 1969 && this.anio <= 1980) {
      mostrarAlerta(
        `${this.nombre} pertenece a la generación X y su rasgo característico es la obseción por el exito`
      );
    } else if (this.anio >= 1949 && this.anio <= 1968) {
      mostrarAlerta(
        `${this.nombre} pertenece a la generación Baby Boom y su rasgo característico es la Ambición`
      );
    } else if (this.anio >= 1930 && this.anio <= 1948) {
      mostrarAlerta(
        `${this.nombre} pertenece a la Silent Generation y su rasgo característico es la austeridad`
      );
    } else {
      mostrarAlerta(`${this.nombre} no pertenece ninguna generación que coincida con sus datos`);
    }
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      mostrarAlerta(`${this.nombre} es mayor de edad`);
    } else {
      mostrarAlerta(`${this.nombre} no es mayor de edad`);
    }
  }
  mostrarDatos() {
    console.log(`ID: ${this.id}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fecha de nacimiento: ${this.nacimiento}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} Kg`);
    console.log(`Altura: ${this.altura} cm`);
    console.log(`Año de nacimiento: ${this.anio}`);
  }
}
