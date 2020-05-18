import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [],
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    ////// validadores para los campos del formulario de login //////////
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required], /// requerido
      password: ['', [Validators.required, Validators.minLength(6)]], /// requerido y mínimo de 6 caracteres 
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get f() {
    return this.registerForm.controls;
  }
  ////// funcion que al enviar el formulario valida los campos y realiza la redirección /////
  onSubmit() {
    this.submitted = true;
   
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      this.router.navigate(["/home"]);
    }
  }
}
