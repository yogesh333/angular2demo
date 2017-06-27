import {Component} from '@angular/core';
import {Router} from '@angular/router';


import { GithubService } from '../shared/github.service';
@Component({
selector:'github',
templateUrl:'./repo.component.html',
styleUrls:['./repo.component.css']
})


export class RepoComponent{

constructor(private router :Router,private github:GithubService)
{}

searchForOrg(orgName:string)
{
this.github.getOrg(orgName).subscribe(({name})=>{

    console.log(name);
    console.log("Printing org name "+orgName);
    this.router.navigate(['/github',orgName]);
});

}
}