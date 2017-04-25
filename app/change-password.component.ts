import { Component } from '@angular/core';
import { PasswordValidators } from './passwordValidators';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
    selector: "change-password",
    templateUrl: "app/change-password.component.html"
})

export class ChangePasswordComponent{
    form: FormGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            password: ['',Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])
                
            ],
            newPassword: ['',Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])],
            repeatPassword: ['',Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])]
        },
                {validator: PasswordValidators.newMustMatch})
    }

    save(){
        console.log(this.form.errors)
      
       if(this.form.controls['password'].value!="test123"){
            this.form.controls['password'].setErrors({
                oldMustMatch: true
            })
       }
    }

  
}