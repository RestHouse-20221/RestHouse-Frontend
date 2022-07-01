import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 
import { ApiServiceHosts } from '../shared/apiHosts.service';
import { HostsModel } from './hosts-dashboard.model';

@Component({
  selector: 'app-hosts-dashboard',
   
  providers: [ApiServiceHosts  ],
  templateUrl: './hosts-dashboard.component.html',
})
export class HostsDashboardComponent implements OnInit {
hostsModelObj:HostsModel=new HostsModel();


  formValue !: FormGroup;
hostsData!:any;
showAdd!:boolean;
showUpdate!:boolean;


showUpdateName!:boolean;
showAddName!:boolean;
  constructor(private formBuilder:FormBuilder,private api:ApiServiceHosts) { 

  }

  addButtonClickFunction(){
    this.formValue.reset();
    this.showUpdate=false;
    this.showAdd=true;
    
    this.showUpdateName=false;
    this.showAddName=true;
  }



  ngOnInit(): void {

  this.formValue=this.formBuilder.group({

  name:[''],
  description:[''],
  rating:[''],
      
    })  
this.getAllHosts();
}

postHostsDetails(){
//alert("fucntion call");
this.hostsModelObj.id=this.formValue.value.id ;

  this.hostsModelObj.name=this.formValue.value.name;
  this.hostsModelObj.description=this.formValue.value.description;
  this.hostsModelObj.rating=this.formValue.value.rating;

  let cancel=document.getElementById("cancel");
  this.api.postData(this.hostsModelObj).subscribe(a=> {

    console.log(a);
    alert("Host inserted successfully");
    cancel?.click();this.formValue.reset();
    this.getAllHosts();
  })
 }


getAllHosts(){
  this.api.getData().subscribe(a=>{
    this.hostsData=a;
  })

}
deleteHosts(row:any){

  this.api.deleteData(row.id).subscribe(a=>{
    alert("Host Deleted Succesfully");
    this.getAllHosts();
  })

}
updateHosts(row:any){
  this.showUpdate=true;
  this.showAdd=false;

  this.showUpdateName=true;
  this.showAddName=false;
  this.hostsModelObj.id=row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['description'].setValue(row.description);
  this.formValue.controls['rating'].setValue(row.rating);

}

updateHostsDetails(){

  this.hostsModelObj.name=this.formValue.value.name;
  this.hostsModelObj.description=this.formValue.value.description;
  this.hostsModelObj.rating=this.formValue.value.rating;
  this.api.updateData(this.hostsModelObj,this.hostsModelObj.id).subscribe(a=>{
    alert("Host updated Succesfully");

  let cancel=document.getElementById("cancel");

    cancel?.click();
    this.formValue.reset();
    this.getAllHosts();
  })
}

}
