import { Directive, Input} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS,ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appMatch]',
  providers: [{provide:NG_VALIDATORS,useExisting:MatchDirective, multi:true}]
})
export class MatchDirective implements Validator{
@Input('appMatch') controlNameToCompare: string;
  constructor() { }
 validate( c :AbstractControl): ValidationErrors | null{
   const controlToCompare= c.root.get(this.controlNameToCompare);
   if(controlToCompare)
   {
     const subscription: Subscription= controlToCompare.valueChanges.subscribe(()=>{
     c.updateValueAndValidity();
     subscription.unsubscribe();

    
    });
   }
   return controlToCompare && controlToCompare.value !== c.value? {'appMatch': true}: null;
}
}