import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import "rxjs/add/operator/catch";
import { EndpointService } from "../shared/endpoint.service";
import { HelperService } from "../shared/helper.service";


@Injectable()
export class SkillsService {

  constructor(private http: HttpClient, private endpoint: EndpointService, private helper: HelperService) {

  }

  getSkills(): Observable<any> {
    return this.helper.sendRequest('get', this.endpoint.skills);
  }
}