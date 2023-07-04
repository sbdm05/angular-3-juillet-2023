import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator } from '@angular/forms';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

// DECORATOR
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent {

  public form!: FormGroup;

  @Input() init!: any;

  constructor(private fb : FormBuilder){}


  ngOnInit(){
    console.log(this.init);
    // créer l'objet
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      typePresta: ['TypePresta de test'],
      nbJours: [1],
      tva: [20],
      state: ['Etat à venir'],
      client: ['client à venir'],
      comment: ['commentaire'],
      id: [1],
    })
  }

  public onSubmit(){
    // Obtenir l'objet envoyé par le user
    console.log(this.form.value);
    // envoyé au serveur
  }


}
