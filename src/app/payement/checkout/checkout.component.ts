import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {NotyService} from '../../_services/noty.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  submitted: boolean;
  customStripeForm: FormGroup;
  formProcess: boolean;
  message: string;
  amount: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router,
              private noty: NotyService) {
  }

  get controls() {
    return this.customStripeForm.controls;
  }

  ngOnInit() {
    this.loadStripe();
    this.initForm();
  }

  initForm() {

    this.customStripeForm = this.fb.group({

      cardNumber: [null, Validators.compose([
        Validators.required
      ])],

      expMonth: [null, Validators.compose([
        Validators.required
      ])],

      expYear: [null, Validators.compose([
        Validators.required
      ])],

      cvv: [null, Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])]
    });
  }

  loadStripe() {

    if (!window.document.getElementById('stripe-custom-form-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-custom-form-script';
      s.type = 'text/javascript';
      s.src = 'https://js.stripe.com/v2/';
      s.onload = () => {
        window['Stripe'].setPublishableKey('pk_test_bjC6b9w8xPkGtc6J58taDUqr00lLeyKpWN');
      };

      window.document.body.appendChild(s);
    }
  }

  pay(form) {
    if (!window['Stripe']) {
      alert('Oops! Stripe did not initialize properly.');
      return;
    }

    this.submitted = true;

    console.log(this.customStripeForm);
    if (this.customStripeForm.invalid) {
      return;
    }

    this.formProcess = true;
    if (!window['Stripe']) {
      alert('Oops! Stripe did not initialize properly.');
      return;
    }
    (<any>window).Stripe.card.createToken({
      number: form.value.cardNumber,
      exp_month: form.value.expMonth,
      exp_year: form.value.expYear,
      cvc: form.value.cvc
    }, (status: number, response: any) => {
      this.submitted = false;
      this.formProcess = false;
      if (status === 200) {
        let token = response.id;
        this.chargeCard(token);
        this.message = `Success! Card token ${response.card.id}.`;
        console.log(this.message);
      } else {
        this.message = response.error.message;
        console.log(this.message);
      }
    });
  }

  chargeCard(token: string) {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.amount = params['amount'];
      });
    if (this.amount !== 0) {
      let headers = new HttpHeaders();
      headers = headers.set('token', token);
      headers = headers.append('amount', this.amount);
      this.http.post('http://localhost:8080/payment/charge', {}, {headers: headers})
        .subscribe(resp => {
            console.log(resp);
            // this.noty.displaySuccessNotification('Book add');
            window.location.replace('list-book');
            sessionStorage.removeItem('cart');
          },
          error => {
            // this.noty.displaySuccessNotification('Book add');
            window.location.replace('list-book');
            sessionStorage.removeItem('cart');
          });
    }
  }
}
