import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      favoriteCar: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigate(
      ['/cars-page'], 
      { queryParams: { 
          favoriteCar: this.loginForm.value.favoriteCar 
        } 
      }
    );
  }
}
