import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas';  







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  renderedData: any;
  constructor(private http: HttpClient) {


   }
  avto_data;
  zdaj;
  
  ngOnInit() {
    this.getTours();
    
  }
  displayedColumns = ['avto', "regst", "regdo","opombe","actions"];
 
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

  captureScreen()  
  {  
    alert("hmm");
    var data = document.getElementById('pdf');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('registracije.pdf'); // Generated PDF   
    });  
  }  

  markAsSeen(avto_data){
    alert(avto_data);
  }

}
