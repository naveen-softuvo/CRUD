import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-admin';
  public employees:any;
  public empForm:FormGroup;
  public deleteId = null;
  public updateId = "";
  
  constructor(public appService:AppService, private fb : FormBuilder ){
   this.listing();
   this.empForm = fb.group({
      empId: ['',Validators.required],
      name: ['',Validators.required],
      email: ['',Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required],
      designation: ['',Validators.required]
    });
  }
  async listing(){
    this.appService.employeeListing().subscribe((res) => {
      this.employees = res;
    });
  }
  async addEmployee(){
    this.appService.addEmployee(this.empForm.value).subscribe((res) => {
      this.employees = res;
      location.reload();
    });
  }
  async deleteEmployee(){
    if(this.deleteId){
      this.appService.deleteEmployee(this.deleteId).subscribe((res) => {
        this.employees = res;
        location.reload();
      });
    }
  }
  async fetchEmployeeDetail(id:string){
    this.appService.fetchEmployeeDetail(id).subscribe((res:any) => {
      this.empForm.patchValue({
        name : res.name,
        email:res.email,
        empId: res.empId,
        address: res.address,
        phone: res.phone,
        designation: res.designation
      });
      this.updateId = res._id;
    });
  }
  async updateEmpoyeeDetail(){
    this.appService.updateEmpoyeeDetail(this.updateId,this.empForm.value).subscribe((res) => {
      location.reload();
    });
  }
}
