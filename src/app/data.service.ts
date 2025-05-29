import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loggedInName: string = '';
   private staffList = [
    { id: 1, name: 'Guna', subject: 'Math', email: 'rajesh@school.com' },
    { id: 2, name: 'Logesh', subject: 'Science', email: 'priya@school.com' }
  ];

  private studentList = [
    { id: 1, name: 'Prakash', class: '10-A', marks: { math: 85, science: 78 }, attendance: 92 },
    { id: 2, name: 'Karthik', class: '10-A', marks: { math: 90, science: 88 }, attendance: 95 }
  ];
  constructor() { }
setLoggedInName(name: string) {
  this.loggedInName = name;
}


getLoggedInName(): string {
  return this.loggedInName;
}


  getStaffList() {
    return this.staffList;
  }

  getStaffByName(name: string) {
  return this.staffList.find(staff => staff.name.toLowerCase() === name.toLowerCase());
}


  getStudentList() {
    return this.studentList;
  }

  getStudentById(id: number) {
    alert(this.studentList.find(s => s.id === id)?.name);
    return this.studentList.find(s => s.id === id);
  }
  addStaff(staff: any) {
  staff.id = Date.now(); // Simple unique ID
  this.staffList.push(staff);
}

removeStaff(id: number) {
  this.staffList = this.staffList.filter(s => s.id !== id);
}

addStudent(student: any) {
  student.id = Date.now();
  this.studentList.push(student);
}

removeStudent(id: number) {
  this.studentList = this.studentList.filter(s => s.id !== id);
}

private loggedInStudentId: number = 0;

setLoggedInStudentId(id: number) {
  this.loggedInStudentId = id;
}

getLoggedInStudentId(): number {
  return this.loggedInStudentId;
}




}
