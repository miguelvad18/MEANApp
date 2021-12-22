import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  showChat = false;
  userLogin: any;
  newMessage: String= "";
  message: any = [{
    emisor: "id",
    texto: "hola que tal"
  }, {
    transmitter: "id",
    text: "todo bien, vos?"
  }, {
    transmitter: "id",
    text: "todo perfecto"
  }, {
    transmitter: "id",
    text: "hola gente"
  }, {
    transmitter: "id",
    text: "que onda"
  },];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subcribe(user => {
      this.userLogin= user;
    })
  }
  enviarMensaje(){
    if (this.newMessage == "") return; 
    console.log(this.newMessage);
    let message={
      emisor: this.userLogin.uid,
      texto: this.newMessage
    }
    this.message.push(message);

    this.newMessage = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 10);
    
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo:any = elements[elements.length - 1];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('messageContainer')?.scrollTop = toppos;
  }
}
