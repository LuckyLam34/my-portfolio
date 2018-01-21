import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class HelperService {

  constructor(private http: HttpClient) { }

  sendRequest(type, url: string, data?: any): Observable<any> {

    // return this.http[type.toLowerCase()](url, data)
    //   .map(response => response.json())
    //   .catch(this.errorHandler);
    return this.http.get(url, data)
      .catch(this.errorHandler);

  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(error.message);

    return Observable.throw(error.message || 'Server Error!!!');
  }
}
