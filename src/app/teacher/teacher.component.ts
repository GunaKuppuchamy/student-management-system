import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
   staff: any = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const name = this.dataService.getLoggedInName();
    this.staff = this.dataService.getStaffByName(name);
  }
}
