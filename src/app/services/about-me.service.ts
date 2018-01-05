import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import "rxjs/add/operator/catch";


@Injectable()
export class AboutMeService {
  private url = "https://lucky-portfolio.firebaseio.com/aboutMe/";

  constructor(private http: HttpClient) {

  }

  getExperiences(): Observable<any> {
    return this.http.get<any>(this.url + 'experiences.json')
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);

    return Observable.throw(err.message);
  }
}