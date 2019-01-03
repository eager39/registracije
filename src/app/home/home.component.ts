import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  avto_data;
  zdaj;
  
  ngOnInit() {
    this.getTours();
    
  }
  displayedColumns = ['avto', "regst", "regdo"];
 
  getTours(){
   this.http.get("http://localhost:3000/data").subscribe((
      data:any
    ) => {
      this.zdaj= new Date()
   this.zdaj.setMonth(this.zdaj.getMonth() + 1 );
   this.zdaj= this.zdaj.getTime() ;
   //this.zdaj=formatDate(this.zdaj,"longDate","en");
  
  
   this.avto_data=data;
   
    });
  }

}
