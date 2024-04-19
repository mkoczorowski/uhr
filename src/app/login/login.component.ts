import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
