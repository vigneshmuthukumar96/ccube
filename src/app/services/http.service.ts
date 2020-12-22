import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstants } from 'src/assets/constants/url';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  public sendRequest(type: string, targetUrl: string, parameters?: any, body?: any, contentType?: any) {
    let url = this.getUrl(targetUrl, parameters);
    type = type.toLowerCase();
    switch (type) {
      case 'get': {
        return this.http.get(url, { responseType: contentType == 'blob' ? contentType : 'text', observe: 'response' });
      }
      case 'post': {
        if (body) {
          return this.http.post(url, body, { responseType: 'text', observe: 'response' });
        } else {
          return this.http.post(url, { responseType: 'text', observe: 'response' });
        }
      }
      case 'put': {
        if (contentType) {
          return this.http.put(url, body, { headers: { 'Content-Type': contentType }, responseType: contentType, observe: 'response' });
        } else {
          return this.http.put(url, body, { responseType: 'text', observe: 'response' });
        }
      }
      case 'patch': {
        return this.http.patch(url, body, { responseType: 'text', observe: 'response' });
      }
      case 'delete': {
        return this.http.delete(url, { responseType: 'text', observe: 'response' });
      }
    }
  }


  public errorHandler(err) {
    console.log(err.status);
    switch (err.status) {
      case 404: {
        break;
      }
      default: {
        // this.alertMsg.error(err.status);
        break;
      }
    }
  }

  handleRequest(type: string, url: string, parameters?: any, body?: any, applicationType?: any, neglectError?: any, avoidLoader?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sendRequest(type, url, parameters, body, applicationType).subscribe((res: any) => {
        if (applicationType == 'blob') resolve(res && res.body ? res.body : res);
        else resolve(res && res.body && JSON.parse(res.body) ? JSON.parse(res.body) : res);
      }, err => {
        if (!neglectError) {
          this.errorHandler(err);
        }
        reject(err);
      });
    })
  }


  getUrl(target: string, params?: any) {
    let temp = target.split('_');
    let urlDetails = ApiConstants.url[temp[0]][temp[1]][target];
    let url = ApiConstants.url[temp[0]].server_url + urlDetails[0];
    if (params) {
      if (params.constructor === Array) {
        params.forEach((element, index) => {
          url = url.replace('{{param' + (index + 1) + '}}', element);
        });
      }
    }
    return url;
  }
  
}
