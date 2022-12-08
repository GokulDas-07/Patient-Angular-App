import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addPatient=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/add",dataToSend)
  }

  fetchPatient=()=>
  {
    return this.http.get("http://localhost:8000/view")
  }

  searchPatient=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8000/search",dataToSend)
  }

  deletePatient=(dataToDelete:any)=>
  {
    return this.http.post("http://localhost:8000/delete",dataToDelete)
  }
}
