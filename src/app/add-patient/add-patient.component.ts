import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientid=""
  patientname=""
  address=""
  phone=""
  appointment=""

  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"patientid":this.patientid,"patientname":this.patientname,"address":this.address,"phone":this.phone,"appointment":this.appointment}
    console.log(data)
    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        alert("Patient added")
        this.patientid=""
        this.patientname=""
        this.address=""
        this.phone=""
        this.appointment=""
      }
    )
  }
    
  }



