import { FormGroup } from '@angular/forms';

export class PasswordValidators{
    static newMustMatch( group: FormGroup){
       var newPass = group.controls['newPassword'].value;
       var repeatPass = group.controls['repeatPassword'].value;

       if(newPass!=repeatPass){
           return { newMustMatch: true }
       }
        return null;
    }

   
}