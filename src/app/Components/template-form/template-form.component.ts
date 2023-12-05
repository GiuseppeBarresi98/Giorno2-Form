import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  constructor() {}
  loginData: any = {
    username: '',
    password: '',
  };

  ngOnInit(): void {}
  onSubmit() {}
}
