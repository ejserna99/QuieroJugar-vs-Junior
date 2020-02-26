import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    if (authService.getCurrentUser()) {
      this.router.navigate(['/Inicio']);
    }
  }

  ngOnInit() {
  }

}
