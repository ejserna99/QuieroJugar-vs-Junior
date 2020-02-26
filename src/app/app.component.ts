import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Quiero Jugar';
  public isLogget = false;

  constructor( private authService: AuthService) {
    this.isLogget = authService.getCurrentUser() ? true : false;
  }

}
