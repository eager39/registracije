import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';
import { Router, ActivatedRoute } from '@angular/router';




@Injectable()
export class AuthService {
   data;
    constructor(
      private _dataService: ApiDataService,
      private route: ActivatedRoute,
      private router: Router,
      
      
      ) {
      
    }

    

   async login() {
      this.data=await this._dataService.add({user:"user",password:"password"},"auth").toPromise()
           
      if(this.data.status==false){
            console.log("horay");
            }else{
            
            localStorage.setItem('currentUser', "user");
            console.log(localStorage.getItem("currentUser"));
            this.router.navigate(["home"]);
            }
         
         
}

               
          
    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        
    }
}