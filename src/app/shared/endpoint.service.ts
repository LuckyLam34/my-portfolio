import { Injectable } from '@angular/core';

@Injectable()
export class EndpointService {

  constructor() { }

  baseUrl: string = 'https://lucky-portfolio.firebaseio.com';

  experiences: string = this.baseUrl + '/aboutMe/experiences.json';

  skills: string = this.baseUrl + '/aboutMe/skills.json';
}
