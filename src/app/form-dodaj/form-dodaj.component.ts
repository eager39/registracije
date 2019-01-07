import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpParams } from '@angular/common/http'; 
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { environment } from '../../environments/environment';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-form-dodaj',
  templateUrl: './form-dodaj.component.html',
  styleUrls: ['./form-dodaj.component.css']
})
export class FormDodajComponent implements OnInit {
  baseUrl = environment.baseUrl;
  id;
  delete;
  private sub: any;
  avto_edit_data;
  uspeh;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  registracije = new FormGroup({
    avto: new FormControl(''),
    stevilka: new FormControl(''),
    datum: new FormControl(''),
    opombe: new FormControl(""),
    id:new FormControl(""),
    gume:new FormControl("")
  });
  ngOnInit() {
    if(this.route.params){
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.delete=params["delete"];
    
      if(this.delete!=undefined){
        alert("zbrisano");
      }
  
      if(this.id){
         this.http.get(this.baseUrl+"avto_edit",{params: new HttpParams().set("id", this.id)}).subscribe((
          data:any
        ) => {
          
       this.avto_edit_data=data;
       this.registracije.controls["id"].setValue(this.id);
       this.registracije.controls["avto"].setValue(this.avto_edit_data[0].avto);
       this.registracije.controls["stevilka"].setValue(this.avto_edit_data[0].regst);
       this.registracije.controls["datum"].setValue(this.avto_edit_data[0].regdo);
       this.registracije.controls["opombe"].setValue(this.avto_edit_data[0].opombe);
       this.registracije.controls["gume"].setValue(this.avto_edit_data[0].gume)
        });
      
      }
    });
  }
  }
  onSubmit(){
   
    var form=this.registracije.value; console.log(form);
    if(form.avto!="" && form.stevilka&&  form.datum!=""){
     var datum=new Date(form.datum);
     
    //datum.setMinutes( datum.getMinutes() + datum.getTimezoneOffset()+60 );
    datum.setHours(12);
    datum.setMinutes(0);
    datum.setSeconds(0);
    datum.setMilliseconds(0);
    
    this.http.post(this.baseUrl+"dodaj",
    {
        "avto": this.registracije.value.avto,

        "stevilka": this.registracije.value.stevilka,

        "datum": datum,
        
        "opombe": this.registracije.value.opombe,
        
        "gume":this.registracije.value.gume,

        "id":this.registracije.value.id
    })
    .subscribe(
        (val) => {
          
          if(val){
                    this.uspeh="Avto je bil uspešno vnešen!";
          }
  
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
          console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}
  



}
