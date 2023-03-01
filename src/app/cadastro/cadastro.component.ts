import { ConsultaCepService } from '../service/consulta-cep.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cep } from '../models/cep';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCEP(event: any, f: NgForm){
    const cep = event.target.value;

    if (cep !== '') {
      this.consultaCepService.getConsultaCep(cep).subscribe({
      next: res => {
        console.log(res);
        this.populandoEndereco(res, f)
      }
    })
    }
  }
  populandoEndereco(dados: Cep, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm){
    if (form.valid) {
      this.router.navigate(['./sucesso'])
    } else {
      alert('Formulario Inválido!')
    }
      console.log('Formulário enviado');
  }
}
