import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ConfirmValidator(matchingControlName: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log(control?.parent);
        console.log(matchingControlName);
        if (control.parent && reverse) {
            const c = (control.parent?.controls as any)[matchingControlName] as AbstractControl;
            if (c) {
                c.updateValueAndValidity();
            }
            return null;
        }
        return !!control.parent &&
            !!control.parent.value &&
            control.value ===
            (control.parent?.controls as any)[matchingControlName].value ? null : { matching: true };
    };
    // const parent=control?.parent?.controls as any

    // if(parent!=undefined){
    // const matchingControl = (control?.parent?.controls as any)[matchingControlName] as AbstractControl;

    // return !!control?.parent && !!control?.parent.value &&matchingControl.value===control.value?null:{confirmValidator:true}
    // }
    // return null
}
    // export function matchValidator(
    //     matchTo: string,
    //     reverse?: boolean
    //   ): ValidatorFn {
    //     return (control: AbstractControl):
    //     ValidationErrors | null => {
        //   if (control.parent && reverse) {
        //     const c = (control.parent?.controls as any)[matchTo]
        //       as AbstractControl;
        //     if (c) {
        //       c.updateValueAndValidity();
        //     }
        //     return null;
        //   }
        //   return !!control.parent &&
        //     !!control.parent.value &&
        //     control.value ===
        //     (control.parent?.controls as any)[matchTo].value
        //     ? null
        //     : { matching: true };
        // };
    //   }
// }
