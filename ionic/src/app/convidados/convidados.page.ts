import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditConvidadoPage } from '../edit-convidado/edit-convidado.page';
import { Convidado } from '../models/convidado';
@Component({
  selector: 'app-convidados',
  templateUrl: './convidados.page.html',
  styleUrls: ['./convidados.page.scss'],
})
export class ConvidadosPage implements OnInit {
  convidados: any;
  convidado: Convidado;


  constructor(private router: Router) {
      this.getConvidados();
  }

  getConvidados() {
    this.convidados = [{"id":6,"nome":"Vingadores","duracao":109},{"id":13,"nome":"StarWars","duracao":108}];
  }
  ngOnInit() {
  }
  addConvidado(){
    this.router.navigate(['/edit-convidado', 0]);
  }
  editConvidado(id: number) {
    this.router.navigate(['/edit-convidado', id]);
  }
  removeConvidado(id: number){

  }
}


