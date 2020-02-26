export class RegisterModel {

    constructor(
        public inputNombre: string,
        public inputApellido: string,
        public inputApodo: string,
        public inputCorreo: string,
        public inputPass: string,
        public inputPass2: string,
        public inputFecha: string,
        public inputDescripcion?: string,
        public inputImgUrl?: string
      ) {  }

      reset() {
        this.inputNombre =  this.inputApellido = this.inputApodo = this.inputCorreo = this.inputPass = this.inputPass2 = '';
      }
}
