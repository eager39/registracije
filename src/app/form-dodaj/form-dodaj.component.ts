import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute, ActivationEnd } from '@angular/router';


@Component({
  selector: 'app-form-dodaj',
  templateUrl: './form-dodaj.component.html',
  styleUrls: ['./form-dodaj.component.css']
})
export class FormDodajComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  registracije = new FormGroup({
    avto: new FormControl(''),
    stevilka: new FormControl(''),
    datum: new FormControl(''),
    opombe: new FormControl("")
  });
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      alert(this.id); 
      if(this.id){
        alert("haha");
      this.registracije.controls["avto"].setValue("avto");
      }
    });
  }
  onSubmit(){
    alert(JSON.stringify(this.registracije.value));
    this.http.post("http://localhost:3000/dodaj",
    {
        "avto": this.registracije.value.avto,

        "stevilka": this.registracije.value.stevilka,

        "datum": this.registracije.value.datum,
        
        "opombe": this.registracije.value.opombe
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
