import { Component, OnInit } from '@angular/core';
import { GenericBrowserDomAdapter } from '@angular/platform-browser/src/browser/generic_browser_adapter';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

Name: string;
Age:number;
Mailid:string;
DOB:number;
State:string;
Gender:string;
Students:[];
  constructor() { }

  ngOnInit() {
    this.Students=[{Name:"bam",Age:15,Mailid:"nmbnbvbvgv",DOB:22/1/2000,State:"tn",Gender:"m"}],
  }
  
}
