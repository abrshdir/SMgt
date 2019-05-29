import {AbstractControl} from '@angular/forms';
export class PasswordValidationService {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('newpass').value; // to get value in input tag
       let confirmPassword = AC.get('newpassconfirm').value; // to get value in input tag
        if(password != confirmPassword) {
            AC.get('newpassconfirm').setErrors( {MatchPassword: true} )
        } else {
            return null
        }
    }
}
