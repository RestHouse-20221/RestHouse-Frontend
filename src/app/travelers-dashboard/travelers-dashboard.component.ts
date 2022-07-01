import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 
import { ApiService } from '../shared/api.service';
import { TravelersModel } from './travelers-dashboard.model';

@Component({
  selector: 'app-travelers-dashboard',
   
  providers: [ApiService  ],
  templateUrl: './travelers-dashboard.component.html'
})
export class TravelersDashboardComponent implements OnInit {
travelersModelObj:TravelersModel=new TravelersModel();


  formValue !: FormGroup;
travelersData!:any;
showAdd!:boolean;
showUpdate!:boolean;


showUpdateName!:boolean;
showAddName!:boolean;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { 

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
  skills:[''],
  rating:[''],
      
    })  
this.getAllTravelers();
}

postTravelersDetails(){
//alert("fucntion call");
this.travelersModelObj.id=this.formValue.value.id ;

  this.travelersModelObj.name=this.formValue.value.name;
  this.travelersModelObj.skills=this.formValue.value.skills;
  this.travelersModelObj.rating=this.formValue.value.rating;

  let cancel=document.getElementById("cancel");
  this.api.postData(this.travelersModelObj).subscribe(a=> {

    console.log(a);
    alert("Traveler inserted successfully");
    cancel?.click();this.formValue.reset();
    this.getAllTravelers();
  })
 }


getAllTravelers(){
  this.api.getData().subscribe(a=>{
    this.travelersData=a;
  })

}
deleteTravelers(row:any){

  this.api.deleteData(row.id).subscribe(a=>{
    alert("Traveler Deleted Succesfully");
    this.getAllTravelers();
  })

}
updateTravelers(row:any){
  this.showUpdate=true;
  this.showAdd=false;

  this.showUpdateName=true;
  this.showAddName=false;
  this.travelersModelObj.id=row.id;
  this.formValue.controls['name'].setValue(row.name);
  this.formValue.controls['skills'].setValue(row.skills);
  this.formValue.controls['rating'].setValue(row.rating);

}

updateTravelersDetails(){

  this.travelersModelObj.name=this.formValue.value.name;
  this.travelersModelObj.skills=this.formValue.value.skills;
  this.travelersModelObj.rating=this.formValue.value.rating;
  this.api.updateData(this.travelersModelObj,this.travelersModelObj.id).subscribe(a=>{
    alert("Traveler updated Succesfully");

  let cancel=document.getElementById("cancel");

    cancel?.click();
    this.formValue.reset();
    this.getAllTravelers();
  })
}

}
