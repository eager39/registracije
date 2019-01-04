import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient,HttpParams } from '@angular/common/http'; 
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-form-dodaj',
  templateUrl: './form-dodaj.component.html',
  styleUrls: ['./form-dodaj.component.css']
})
export class FormDodajComponent implements OnInit {
  id;
  private sub: any;
  avto_edit_data;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  registracije = new FormGroup({
    avto: new FormControl(''),
    stevilka: new FormControl(''),
    datum: new FormControl(''),
    opombe: new FormControl(""),
    id:new FormControl(""),
  });
  ngOnInit() {
    if(this.route.params){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  
      if(this.id){
         this.http.get("http://localhost:3000/avto_edit",{params: new HttpParams().set("id", this.id)}).subscribe((
          data:any
        ) => {
          
       this.avto_edit_data=data;
       this.registracije.controls["id"].setValue(this.id);
       this.registracije.controls["avto"].setValue(this.avto_edit_data[0].avto);
       this.registracije.controls["stevilka"].setValue(this.avto_edit_data[0].regst);
       this.registracije.controls["datum"].setValue(this.avto_edit_data[0].regdo);
       this.registracije.controls["opombe"].setValue(this.avto_edit_data[0].opombe);
        });
      
      }
    });
  }
  }
  onSubmit(){
    alert(JSON.stringify(this.registracije.value));
    this.http.post("http://localhost:3000/dodaj",
    {
        "avto": this.registracije.value.avto,

        "stevilka": this.registracije.value.stevilka,

        "datum": this.registracije.value.datum,
        
        "opombe": this.registracije.value.opombe,

        "id":this.registracije.value.id
    })
    .subscribe(
        (val) => {
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
