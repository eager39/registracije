import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';  
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MatSort } from '@angular/material/sort'; 
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-prometna',
  templateUrl: './prometna.component.html',
  styleUrls: ['./prometna.component.css']
})
export class PrometnaComponent implements OnInit {

  baseUrl = environment.baseUrl;

  /*
  additionAsyncResult
  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }/*
  async addWithAsync() {
    const result1 = <number>await this.resolveAfter2Seconds(20);
    const result2 = <number>await this.resolveAfter2Seconds(30);
    this.additionAsyncResult = result1 + result2;
    console.log(`async result: ${this.additionAsyncResult}`);
  }
 */
  constructor(private http: HttpClient) {


   }
   fullpage:number;
   dataSource;
  avto_data;
  zdaj;
  now;
  uspeh;
  error;
  filtered=[]
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.getTours();
   
  }
  displayedColumns = ['avto', "regst"];
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  getTours(){
   this.http.get(this.baseUrl+"prometna_dovoljenja").subscribe((
      data:any
    ) => {
      
      for(let i=0;i<data[1].length;i++){
        let tempObj=JSON.parse(data[1][i].velja_do)
         data[1][i]=Object.assign(data[1][i],tempObj)
     
      }
 
    
      console.log(this.filtered)
      console.log(data)
      this.zdaj= new Date();
      this.now=this.zdaj.getTime();
      this.zdaj.setMonth(this.zdaj.getMonth() + 1 );
      this.zdaj= this.zdaj.getTime() ;
      for(let i=0;i<data[1].length;i++){
        var tempObj=JSON.parse(data[1][i].velja_do)
        tempObj=Object.keys(tempObj)
       
        if(this.displayedColumns.indexOf(data[1][i].drzava) === -1) {
        this.displayedColumns.push(...tempObj);
        
        
    }
      } 
  
     
       this.displayedColumns.push("actions")
    console.log(this.displayedColumns)
      this.avto_data=data[1];
      this.dataSource = new MatTableDataSource(this.avto_data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource)
      this.fullpage=this.avto_data.length;
    }, error => (this.error = error,
    console.log(this.error)) );
  }

  captureScreen()  
  {  
    alert("PDF se ustvarja...");
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
      pdf.addImage(contentDataURL, 'JPG', 0, position, imgWidth, imgHeight)  
      pdf.save('registracije.pdf'); // Generated PDF   
    });  
  }  

  markAsSeen(id){
    
    if(id.seen==0){
     id.seen=1;
    }else{
      id.seen=0;
    }
    this.http.post(this.baseUrl+"seen",
    {
        "id":id.id,
        "seen":id.seen
    })
    .subscribe(
        (val) => {
          this.getTours();
          
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

check(stolpec){
  if(["avto","regst"].includes(stolpec)){
    return true
  }else if(["actions"].includes(stolpec)){
    console.log(stolpec)
    return stolpec
  }

  else{
    return false
  }
}
check2(stolpec){
  if(stolpec=="actions"){
    return true
  }
}


}
