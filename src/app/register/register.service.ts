import {HttpModule,Http,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/publish';


import {User} from './user.interface';

@Injectable()
export class RegisterService{
http:Http;
post_Url:string='http://localhost:8080/angular2Spring/api/employee/save';

constructor(public _http:Http)
{
this.http=_http;
}


addEmployee(user:User){
 return this.http.post(this.post_Url,user,{}).map(res=>res.json());

}

getEmployeeData():Observable<User[]>
{
 return this.http.get('http://localhost:8080/angular2Spring/api/employee/getEmployeeList').
 map(this.extractData).catch(this.handleError);


}

private extractData(res:Response)
 {
   let body=res.json();
   return body || [];

 }



private handleError(error:any)
{
    let errMsg=(error.message)?error.message:error.status?`${error.status}-${error.statusText}`:'Server error';

console.log(errMsg);
return Observable.throw(errMsg);

}


   deleteEmployee(id:Number):Rx.Observable<Response>
{

return this.http.delete(`http://localhost:8080/angular2Spring/api/employee/${id}`).publish().refCount();

}

}




