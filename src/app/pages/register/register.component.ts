import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CrudService} from '../../_services/crud.service';
import {eraseStyles} from '@angular/animations/browser/src/util';
import {API_URL, SIGN_UP} from '../../globals/global-variables';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };
  registerForm: FormGroup;
  invalid = false;
  error: string;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder,
              private   crudService: CrudService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }
  get formControls() { return this.registerForm.controls; }
  submit() {
    this.isSubmitted = true;

    const formValue = this.registerForm.value;

    if (formValue.password !== formValue.repeatPassword) {
      this.error = 'Password mismatch';
      this.invalid = true;
      return;
    }
    if (this.registerForm.invalid) {
      return;
    }
    const url = API_URL + SIGN_UP;
    this.crudService.post(url, {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password
    }).subscribe(data => {
      this.router.navigate(['/login']);
      }, error => {
      this.toastr.error(error);
    });
  }

}
