import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [NgxSpinnerService]
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;


  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService, private fb: FormBuilder, private SpinnerService: NgxSpinnerService) { }


  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: [''],
      dayOfBirth: ['', Validators.required],
      monthOfBirth: ['', Validators.required],
      yearOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      cast: ['', Validators.required],
      education: ['', Validators.required],
      email: ['', [Validators.required , Validators.email]],
      phonenumber: ['', Validators.required],
      refererusername: [''],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  register() {
   this.SpinnerService.show();
    this.registerForm.value.dateOfBirth= this.registerForm.value.monthOfBirth+"/"+this.registerForm.value.dayOfBirth+"/"+this.registerForm.value.yearOfBirth;

    //console.log(JSON.stringify(this.registerForm.value) );
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;

      if (isNaN(Date.parse(this.registerForm.value.dateOfBirth))){
        this.alertify.success('Invalid Date of Birth');
      }
     // this.alertify.error(JSON.stringify(this.registerForm.value) );
      this.authService.register(this.registerForm.value).subscribe(() => {
       this.SpinnerService.hide();
        this.alertify.success('Registration successful');
      }, error => {
        console.log(JSON.stringify(error));
        this.SpinnerService.hide();
        this.alertify.error("Username already exists . Please try another Username");
      }, () => {
       this.SpinnerService.hide();
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/member/edit']);
        });
      });
    }else{
       this.SpinnerService.hide();
      this.alertify.error("Please fill the complete form .");
    }
   //
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}
  cancel() {
    this.cancelRegister.emit(false);
  }

}
