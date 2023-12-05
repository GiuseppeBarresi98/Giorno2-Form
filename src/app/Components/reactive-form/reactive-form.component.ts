import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  registrazione: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrazione = this.fb.group({
      nome: [''],
      cognome: [''],
      password: [''],
      confermaPassword: [''],
      genere: [''],
      immagineProfilo: [''],
      biografia: [''],
      username: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit() {}
}
