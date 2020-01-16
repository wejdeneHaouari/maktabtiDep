import {Component, OnInit} from '@angular/core';
import {CrudService} from '../../_services/crud.service';
import {User} from '../../_models/user';
import {API_URL, USER} from '../../globals/global-variables';
import {SignInService} from '../../_services/sign-in.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  updateForm: FormGroup;
  user: User;
  private file: any;

  constructor(private signInService: SignInService, private formBuilder: FormBuilder, private crudService: CrudService, private router: Router) {
    this.signInService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      name: this.user.name || '',
      email: this.user.email,
      address: this.user.address,
      password: '',
      aboutMe: '',
      city: '',
      country: '',
      postalCode: '',
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.file);
    formData.append('name', this.updateForm.get('name').value);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    formData.append('address', this.updateForm.get('address').value);
    formData.append('city', this.updateForm.get('city').value);
    formData.append('postalCode', this.updateForm.get('postalCode').value);
    formData.append('aboutMe', this.updateForm.get('aboutMe').value);
    formData.append('country', this.updateForm.get('country').value);
    this.crudService.put(API_URL + USER, formData).subscribe(
      (response) => {
        this.router.navigate(['']);
        this.signInService.refreshUserData(response);
      }, (error => {
        console.log(error);
        this.router.navigate(['']);
      }));
  }

}
