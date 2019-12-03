import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


Name: string="RAM"
Age:number;
Mailid:string;
Address;
Hobbies:string[]
Projects=[];
Dpt:string;
Status:string;

  constructor() { }

  ngOnInit() {
    this.Name=""
    this.Age=24;
    this.Mailid="john123@gmail.com"
    this.Address={Hname:"MNT 97",Street:"Line3",Location:"South",Pincode:6876452}
    this.Hobbies=["Reading","Gaming","Driving"]
    this.Projects=[{Title:"Pro1",Dpt:"IT",Status:"Live"},
              {Title:"Pro2",Dpt:"IT",Status:"Completed"},
              {Title:"Pro3",Dpt:"IT",Status:"Live"},
              {Title:"Pro4",Dpt:"IT",Status:"Completed"},
              {Title:"Pro5",Dpt:"IT",Status:"Live"}]
  }
add(){
  this.Projects.push({Title:this.Name,Dpt:this.Dpt,Status:this.Status})
}
}
