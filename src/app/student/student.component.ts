import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  student: any = {};
  check:boolean=false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const id = this.dataService.getLoggedInStudentId(); 
    // alert(id);
    this.student = this.dataService.getStudentById(id); 
  if(this.student){
this.check=true;
alert(this.check);
  }
  }
}
