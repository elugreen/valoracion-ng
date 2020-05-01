import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
    
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if (this.registerForm.valid) {
     
    }
    // display form values on success
   
    this.router.navigate(['/home']);
}


}
