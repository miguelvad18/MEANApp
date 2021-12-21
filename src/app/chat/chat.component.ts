import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mostrarChat = false;
  usuariologueado: any;
  nuevoMensaje: String= "";
  mensajes: any = [{
    emisor: "id",
    texto: "hola que tal"
  }, {
    emisor: "id",
    texto: "todo bien, vos?"
  }, {
    emisor: "id",
    texto: "todo perfecto"
  }, {
    emisor: "id",
    texto: "hola gente"
  }, {
    emisor: "id",
    texto: "que onda"
  },];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subcribe(usuario => {
      this.usuariologueado = usuario;
    })
  }
  enviarMensaje(){
    if (this.nuevoMensaje == "") return; 
    console.log(this.nuevoMensaje);
    let mensaje={
      emisor: this.usuariologueado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);

    this.nuevoMensaje = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
    
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo:any = elements[elements.length - 1];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop = toppos;
  }
}
