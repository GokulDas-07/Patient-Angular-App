import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  patientid=""
  
  searchData:any=""
  
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"patientid":this.patientid}
    console.log(data)
    this.api.searchPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid Patient Id")
        }else{
          this.searchData=response
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deletePatient(data).subscribe(
      (generated:any)=>{
        console.log(generated);
      }
    )
  }

}
