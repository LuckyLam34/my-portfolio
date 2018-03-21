import { Component, OnInit } from '@angular/core';
import { GoogleApiOauthService } from '../../services/google-api-oauth.service';

@Component({
  selector: 'trinhlam-portfolio-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public googleApiOauthService: GoogleApiOauthService) { }

  ngOnInit() {
  }

}
