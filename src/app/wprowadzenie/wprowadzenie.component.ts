import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wprowadzenie',
  templateUrl: './wprowadzenie.component.html',
  styleUrls: ['./wprowadzenie.component.css']
})
export class WprowadzenieComponent {
  form: FormGroup;
  name = '';
  email = '';
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  startGame() {
    if (this.form.valid) {
      this.name = this.form.value.name;
      this.email = this.form.value.email;

    }
  }
}