let formulario = document.querySelector('form')
let ventanaModal = new bootstrap.Modal(document.getElementById('modalAgregarPersona'))

formulario.addEventListener('submit', agregarPersona)
console.log(ventanaModal)

function agregarPersona(e) {
  e.preventDefault();
  if(formulario.checkValidity()) {
    ventanaModal.hide()
  }
}

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anio;
  constructor(nombre, edad, sexo, peso, altura, anio) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#dni = undefined;
      this.#sexo = sexo;
      this.#peso = peso;
      this.#altura = altura;
      this.#anio = anio;
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

  get anio() {
      return this.#anio;
  }
  set anio(nuevoAnio) {
      if (nuevoAnio > 1900 && nuevoAnio < 2023) {
          this.#anio = nuevoAnio;
      }
  }

  mostrarGeneracion() {
      if (this.anio >= 1994 && this.anio <= 2010) {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Z</p>`
          );
      } else if (this.anio >= 1981 && this.anio <= 1993) {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Y o millenials</p>`
          );
      } else if (this.anio >= 1969 && this.anio <= 1980) {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación X</p>`
          );
      } else if (this.anio >= 1949 && this.anio <= 1968) {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} pertenece a la generación Baby Boom</p>`
          );
      } else if (this.anio >= 1930 && this.anio <= 1948) {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} pertenece a la Silent Generation</p>`
          );
      } else {
          document.write(
              `<p>Esta persona al haber nacido en ${this.anio} no pertenece a ninguna generación en nuestra tabla</p>`
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
      document.write(`<p>Año de nacimiento: ${this.anio}</p>`);
      document.write("<hr>");
  }
  generaDNI() {
      this.dni = Math.floor(
          Math.random() * (99999999 - 10000000 + 1) + 10000000
      );
      document.write(`Se genero un DNI con valor de ${this.dni}`);
      document.write("<hr>");
  }
}