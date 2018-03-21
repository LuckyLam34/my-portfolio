import { Injectable } from '@angular/core';

@Injectable()
export class GoogleApiOauthService {

  constructor() { }

  private clientId = '880487117655-09e6aljditq5nhjosd8tofvn7v66qdb9.apps.googleusercontent.com';
  private apiKey = 'AIzaSyAr1rE1F-kfrG6X3yMwAaXFhmk7PpPPQyw';

  GoogleAuth: any;
  scope = 'https://www.googleapis.com/auth/drive.metadata.readonly';

  private handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', this.initClient);
  }

  private initClient() {
    // Retrieve the discovery document for version 3 of Google Drive API.
    // In practice, your app can retrieve one or more discovery documents.
    const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
      'apiKey': this.apiKey,
      'discoveryDocs': [discoveryUrl],
      'clientId': this.clientId,
      'scope': this.scope
    }).then(function () {
      this.GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      this.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);

      // Handle initial sign-in state. (Determine if user is already signed in.)
      const user = this.GoogleAuth.currentUser.get();
      this.setSigninStatus();

      // Call handleAuthClick function when user clicks on
      //      "Sign In/Authorize" button.
      $('#sign-in-or-out-button').click(() => {
        this.handleAuthClick();
      });
      $('#revoke-access-button').click(() => {
        this.revokeAccess();
      });
    });
  }

  private revokeAccess() {
    this.GoogleAuth.disconnect();
  }

  private handleAuthClick() {
    if (this.GoogleAuth.isSignedIn.get()) {
      // User is authorized and has clicked 'Sign out' button.
      this.GoogleAuth.signOut();
    } else {
      // User is not signed in. Start Google auth flow.
      this.GoogleAuth.signIn();
    }
  }

  private updateSigninStatus(isSignedIn) {
    this.setSigninStatus(isSignedIn);
  }

  private setSigninStatus(isSignedIn) {
    const user = this.GoogleAuth.currentUser.get();
    const isAuthorized = user.hasGrantedScopes(this.scope);
    if (isAuthorized) {
      $('#sign-in-or-out-button').html('Sign out');
      $('#revoke-access-button').css('display', 'inline-block');
      $('#auth-status').html('You are currently signed in and have granted ' +
        'access to this app.');
    } else {
      $('#sign-in-or-out-button').html('Sign In/Authorize');
      $('#revoke-access-button').css('display', 'none');
      $('#auth-status').html('You have not authorized this app or you are ' +
        'signed out.');
    }
  }

}
