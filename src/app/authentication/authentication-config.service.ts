import {Injectable} from '@angular/core';
import {ApiConfiguration} from '../api/api-configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationConfigService {
  public tokenKey = 'bunabank_access_token_teller';
  public roleKey = 'bunabank_role_key';
//  public afterLoginLink = '/home';
  public baseUrl = this.apiConfiguration.rootUrl;

  constructor(private apiConfiguration: ApiConfiguration) {
  }
}
