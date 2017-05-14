import {
  FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidatorFn,
  ValidationErrors
} from "@angular/forms";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";


function softeamEmailValidator(control: AbstractControl): ValidationErrors {
  return control.value.indexOf('@softeam.fr') > -1 ? Observable.of(null) : Observable.of({'invalidFormat': true});
}


@Injectable()
export class VoteForm {

  constructor(private fb: FormBuilder){}

  public getForm(): FormGroup{
     return new FormGroup({
        satisfaction: new FormControl(''),
        user: new FormGroup({
            id: new FormControl(''),
            civ: new FormControl(''),
            email: new FormControl(''),
            job: new FormControl(''),
            active: new FormControl('')
        })
      });
  }

  public buildForm(): FormGroup {
     return this.fb.group({
       satisfaction: ['', Validators.required],
       commentaire: [''],
       user: this.fb.group({
         id: [''],
         civ: [''],
         email: ['', Validators.required, softeamEmailValidator],
         job: ['', Validators.required],
         active: ['']
       })
    })
  }

}
