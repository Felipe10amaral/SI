import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convidado } from '../models/convidado';

@Component({
  selector: 'app-edit-convidado',
  templateUrl: './edit-convidado.page.html',
  styleUrls: ['./edit-convidado.page.scss'],
})
export class EditConvidadoPage implements OnInit {
  id: number;
  convidado: Convidado;

  constructor(private actRoute: ActivatedRoute, private router: Router) { 
    this.convidado = new Convidado();
  }

  save(){
    this.router.navigateByUrl('/convidados');
  }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id = params['id']; 
    });
    if (this.id!=0) {
      this.convidado.id = this.id;
      this.convidado.nome = "Alguem";
      this.convidado.duracao = 8;
    }
    else {
      this.convidado.id = 0;
      this.convidado.nome = "Novo";
      this.convidado.duracao = 0;
    }
    console.log(this.convidado.id);
  }
}