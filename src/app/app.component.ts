import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto2'
  tipoDoInput: string = 'text'
  texto: string = 'Digite algo'
  obrigatorio: boolean = true

  valorInput: number = 0

  constructor(
    private _snackBar: MatSnackBar) {}

  mostrarSnackBar():void{
    this._snackBar.open('Você clicou neste botão :)', 'Ok')
  }

  alterarValor(event:any):void {
    this.valorInput = event.target.value
  }

  decrementa(event:any){
    this.valorInput--;
  }
  incrementa(event:any){
    this.valorInput++;
  }
}


