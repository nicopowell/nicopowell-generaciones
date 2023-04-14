let formulario = document.querySelector("form");
let ventanaModal = new bootstrap.Modal(document.getElementById("modalAgregarPersona"));
let personas = [];

formulario.addEventListener("submit", agregarPersona);

function agregarPersona(e) {
  e.preventDefault();
  if (formulario.checkValidity()) {
    let nombre = document.getElementById("nombre").value;
    let dni = parseInt(document.getElementById("dni").value);
    let nacimiento = document.getElementById("nacimiento").value;
    let edad = parseInt(document.getElementById("edad").value);
    let sexo = document.getElementById("sexo").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseInt(document.getElementById("altura").value);

    //Creamos el objeto de la persona
    const objetoPersona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);

    //Introducimos el objeto en un array
    personas.push(objetoPersona);

    //ocultar ventana modal
    ventanaModal.hide();
    console.log(personas)
  }
  formulario.reset();
}

function crearTabla (){}

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #nacimiento;

  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#nacimiento = nacimiento;
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
    if (nuevoDni >= 10000000 && nuevoDni <= 99999999) {
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
    return this.#peso;
  }
  set peso(nuevoPeso) {
    if (nuevoPeso > 0) {
      this.#peso = nuevoPeso;
    }
  }

  get altura() {
    return this.#altura;
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

  mostrarGeneracion() {
    if (this.nacimiento >= 1994 && this.nacimiento <= 2010) {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} pertenece a la generación Z</p>`
      );
    } else if (this.nacimiento >= 1981 && this.nacimiento <= 1993) {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} pertenece a la generación Y o millenials</p>`
      );
    } else if (this.nacimiento >= 1969 && this.nacimiento <= 1980) {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} pertenece a la generación X</p>`
      );
    } else if (this.nacimiento >= 1949 && this.nacimiento <= 1968) {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} pertenece a la generación Baby Boom</p>`
      );
    } else if (this.nacimiento >= 1930 && this.nacimiento <= 1948) {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} pertenece a la Silent Generation</p>`
      );
    } else {
      document.write(
        `<p>Esta persona al haber nacido en ${this.nacimiento} no pertenece a ninguna generación en nuestra tabla</p>`
      );
    }
    document.write("<hr>");
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write(`<p>${this.nombre} es mayor de edad</p>`);
    } else {
      document.write(`<p>${this.nombre} es menor de edad</p>`);
    }
    document.write("<hr>");
  }
  mostrarDatos() {
    document.write(`<p>Nombre: ${this.nombre}</p>`);
    document.write(`<p>Edad: ${this.edad}</p>`);
    document.write(`<p>DNI: ${this.dni}</p>`);
    document.write(`<p>Sexo: ${this.sexo}</p>`);
    document.write(`<p>Peso: ${this.peso} Kg</p>`);
    document.write(`<p>Altura: ${this.altura} cm</p>`);
    document.write(`<p>Año de nacimiento: ${this.nacimiento}</p>`);
    document.write("<hr>");
  }
  generaDNI() {
    this.dni = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    document.write(`Se genero un DNI con valor de ${this.dni}`);
    document.write("<hr>");
  }
}
