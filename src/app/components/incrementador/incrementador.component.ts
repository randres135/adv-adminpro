import { Component, Input, Output,EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input() btnClass :String = 'btn btn-primary'
  @Input() progreso :number = 60

  @Output() valorSalida :EventEmitter<number> = new EventEmitter()

  get getPorcentaje(){
    return `${this.progreso}%`
  }

  cambiarValor(valor:number){

    if (this.progreso>= 100 && valor>=0) {
      this.valorSalida.emit(100)
       this.progreso = 100
       return
    }
    if (this.progreso<=0 && valor<0) {
      this.valorSalida.emit(0)
      this.progreso = 0
      return
   }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso)
  }

  onChange(valor:number){

    if (valor >=100) {
      this.progreso = 100
    }else if(valor<=0){
      this.progreso = 0
    }else{
      this.progreso = valor
    }
    
    this.valorSalida.emit(this.progreso)
  }
}
