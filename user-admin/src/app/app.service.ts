import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  employeeListing(){
    return this.http.get("http://localhost:3000/employees/");
  }
  addEmployee(data:any){
    return this.http.post("http://localhost:3000/employees/",data);
  }
  deleteEmployee(id:string){
    return this.http.delete("http://localhost:3000/employees/"+id);
  }
  fetchEmployeeDetail(id:string){
    return this.http.get("http://localhost:3000/employees/"+id);
  }
  updateEmpoyeeDetail(id:string ,data:any){
    return this.http.put("http://localhost:3000/employees/"+id,data);
  }
}
