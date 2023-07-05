import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../service/orders.service';

// DECORATOR
@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent {
  public form!: FormGroup;

  @Input() init!: any;
  @Output() submitted = new EventEmitter();
  @Output() deleted = new EventEmitter();

  // créer une propriété pour stocker le StateOrder
  // Object.values() en JS
  public stateOrder = Object.values(StateOrder);

  constructor(private fb: FormBuilder) {
    console.log(this.init); // ??? undefined
  }

  // life cycle hooks/methods
  ngOnInit() {
    console.log(this.init); // objet

    // créer l'objet
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      typePresta: [
        this.init.typePresta,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      nbJours: [
        this.init.nbJours,
        [Validators.required, Validators.min(5), Validators.max(15)],
      ],
      tva: [this.init.tva],
      state: [this.init.state],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    // Obtenir l'objet envoyé par le user
    console.log(this.form.value);
    // envoyé au composant parent
    this.submitted.emit(this.form.value);
  }

  public onDelete() {
    // emettre un événement avec un argument

    this.deleted.emit(this.form.value);
  }
}
