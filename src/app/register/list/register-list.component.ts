import {Component,OnInit} from '@angular/core';
import {RegisterService} from '../register.service';
import {User} from '../user.interface';
import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
//import {Angular2DataTableModule } from 'angular2-datatable/datatable';
//import {DataTablesModule} from 'angular-datatables';
import {Response} from '@angular/http';
import {DataTableModule} from "angular2-datatable";
import * as _ from 'lodash';
import {showLoading, hideLoading, doNothing} from '../../commons';



@Component({
selector:'register-list',
templateUrl:'./register-list.component.html',
})


export class RegisterListComponent implements OnInit{
private getUsers:User[]=[];
private errorMessage:any='';

responseStatus:Object=[];

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
return this.getUsers;
}

   public removeUser(removeUser:any)
    {
     //this.getUsers=_.filter(this.getUsers,(elem)=>elem!=removeUser);
let observable:Rx.Observable<Response> =this.registerService.deleteEmployee(removeUser.id);
observable.switchMap(() => {
         return this.getRegisteredEmployees();
        }).subscribe(doNothing, hideLoading, hideLoading);
    }


private sortByWordLength = (a:any)=>
{
    return a.firstname.length;
}

showLoading() {
	console.log("loading ...");    
}

  hideLoading() {
	console.log("loaded");
}

  doNothing () {

  }


}