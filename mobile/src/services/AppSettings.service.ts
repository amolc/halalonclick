import { Injectable } from '@angular/core';
@Injectable()
export class AppSettings {
  //public static get API_ENDPOINT(): string { return 'http://80startups.com:3000'; }
  public static get API_ENDPOINT(): string { return 'http://localhost:3000'; }
}
