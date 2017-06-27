
import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

import {User} from './user.interface';
import {RegisterService} from './register.service';


@Component({
selector:'register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.css'],


})

export class RegisterComponent implements OnInit{

    
public myForm:FormGroup;
public submitted:boolean;
public events:any[]=[];
responseStatus:Object= [];

constructor(private _fb:FormBuilder,private _registerService:RegisterService){ }
    
ngOnInit()
    {
     this.myForm=new FormGroup({
       firstname:new FormControl('',[<any> Validators.required,<any>Validators.minLength(5)]),
          lastname:new FormControl('',[<any> Validators.required,<any>Validators.minLength(5)]),
             designation:new FormControl('',[<any> Validators.required,<any>Validators.minLength(5)]),
             address:new FormControl('',[<any>Validators.required])
      // address:new FormGroup({
      //   street:new FormControl('',<any>Validators.required),
      //   postcode: new FormControl('8000')  
// })
  });


  this.subscribeToFormChanges();


    (<FormControl>this.myForm.controls['firstname'])
            .setValue('John', { onlySelf: true });




 }


save(model :User,isValid:boolean)
{
this.submitted=true;
console.log(model,isValid);

this._registerService.addEmployee(model).subscribe(

data=>console.log(this.responseStatus=data),
error=>console.log(error),
()=>console.log('Request Completed'));
}


subscribeToFormChanges()
{
const myFormValueChanges$=this.myForm.valueChanges;

const myformStatusChanges$=this.myForm.statusChanges;

//myFormValueChanges$.subscribe(x=>this.events.push({event:'Value CHANGED',object:x}));

//myformStatusChanges$.subscribe(x=>this.events.push({event:'Status changed',Object:x}))
}

}