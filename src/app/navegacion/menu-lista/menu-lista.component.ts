import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-lista',
  templateUrl: './menu-lista.component.html',
  styleUrls: ['./menu-lista.component.css']
})
export class MenuListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() menuToggle = new EventEmitter();
  onCerrarLibro(){
    this.menuToggle.emit();
  }

}
