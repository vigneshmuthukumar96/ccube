import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})

// This is the parent service for other service
export class UtilService {

  constructor(private alertMsg:ToastrService,private http:HttpService) { }


  //handler for api requests
  handleRequest(type: string, url: string, parameters?: any, body?: any, applicationType?: any, neglectError?: any, avoidLoader?: any): Promise<any> {
    return this.http.handleRequest(type, url, parameters, body, applicationType, neglectError, avoidLoader);
  }

  //toaster service messages
  success(msg) {
    this.alertMsg.success(msg);
  }
  error(msg) {
    this.alertMsg.error(msg);
  }
  warning(msg) {
    this.alertMsg.warning(msg);
  }

}
