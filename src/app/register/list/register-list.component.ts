import {Component,OnInit} from '@angular/core';
import {RegisterService} from '../register.service';
import {User} from '../user.interface';
//import {Angular2DataTableModule } from 'angular2-datatable/datatable';
//import {DataTablesModule} from 'angular-datatables';


import {DataTableModule} from "angular2-datatable";


import * as _ from 'lodash';



@Component({
selector:'register-list',
templateUrl:'./register-list.component.html',


})

export class RegisterListComponent implements OnInit{

private getUsers:User[]=[];
private errorMessage:any='';

constructor(private registerService:RegisterService) {

}

ngOnInit(){
this.getRegisteredEmployees();
}


getRegisteredEmployees()
{
this.registerService.getEmployeeData().subscribe(
getUsers=>this.getUsers=getUsers,
error=>this.errorMessage=<any>error,
()=>console.log(' Get User data Request Completed'+this.getUsers)
);

}

   public removeUser(removeUser:any)
    {
     this.getUsers=_.filter(this.getUsers,(elem)=>elem!=removeUser);
     console.log("Remove:",removeUser.firstname);
    }


private sortByWordLength = (a:any)=>
{
    return a.firstname.length;
}


}