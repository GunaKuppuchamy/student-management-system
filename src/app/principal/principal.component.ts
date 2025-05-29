import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  imports: [CommonModule,FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
   students: any[] = [];
  staffs: any[] = [];
  editStaffIndex = -1;
  editStudentIndex = -1;

  newStaff = { id: 0, name: '', subject: '', email: '' };
  newStudent = {
    id: 0,
    name: '',
    class: '',
    marks: { math: 0, science: 0 },
    attendance: 0
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.staffs = this.dataService.getStaffList();
    this.students = this.dataService.getStudentList();
  }
 startEditStaff(index: number): void {
    this.editStaffIndex = index;
    this.newStaff = { ...this.staffs[index] };
  }

  addOrUpdateStaff(): void {
    if (this.editStaffIndex === -1) {
      this.staffs.push({ ...this.newStaff, id: Date.now() });
    } else {
      this.staffs[this.editStaffIndex] = { ...this.newStaff };
      this.editStaffIndex = -1;
    }
    this.resetStaffForm();
  }

  deleteStaff(index: number): void {
    this.staffs.splice(index, 1);
    if (index === this.editStaffIndex) this.resetStaffForm();
  }

  cancelStaffEdit(): void {
    this.resetStaffForm();
  }

  resetStaffForm(): void {
    this.newStaff = { id: 0, name: '', subject: '', email: '' };
    this.editStaffIndex = -1;
  }

  // ───────────── Student Methods ─────────────

  startEditStudent(index: number): void {
    this.editStudentIndex = index;
    this.newStudent = { ...this.students[index] };
  }

  addOrUpdateStudent(): void {
    if (this.editStudentIndex === -1) {
      this.students.push({ ...this.newStudent, id: Date.now() });
    } else {
      this.students[this.editStudentIndex] = { ...this.newStudent };
      this.editStudentIndex = -1;
    }
    this.resetStudentForm();
  }

  deleteStudent(index: number): void {
    this.students.splice(index, 1);
    if (index === this.editStudentIndex) this.resetStudentForm();
  }

  cancelStudentEdit(): void {
    this.resetStudentForm();
  }

  resetStudentForm(): void {
    this.newStudent = {
      id: 0,
      name: '',
      class: '',
      marks: { math: 0, science: 0 },
      attendance: 0
    };
    this.editStudentIndex = -1;
  }
}
