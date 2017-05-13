import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Injectable} from "@angular/core";

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
       satisfaction: [''],
       user: this.fb.group({
         id: [''],
         civ: [''],
         email: [''],
         job: [''],
         active: ['']
       })
    })
  }
}
