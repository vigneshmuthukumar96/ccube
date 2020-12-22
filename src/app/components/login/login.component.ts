import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private util:UtilService) { }

  ngOnInit() {
  }
  
  logIn(){
    this.util.error('Check Data.')
  }
}
