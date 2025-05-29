import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,private dataService: DataService) {}
  
  // roles=['Principal','Teacher','Student'];
  name='';
  id=0;
  currentRole='';
  pc='';
  code='987654321';

  navigate(){
    if(this.currentRole=='Student'){
      this.dataService.setLoggedInStudentId(this.id);
      this.router.navigate([`/${this.currentRole}`])
    }else if(this.currentRole=='Teacher'){
      this.dataService.setLoggedInName(this.name);
      this.router.navigate([`/${this.currentRole}`])
    }else{
      if(this.pc===this.code){
        this.router.navigate([`/${this.currentRole}`])
      }else{
        alert('invalid Code, Enter a Valid code');
        this.pc='';
      }
    }
    
    
    
  }


}
