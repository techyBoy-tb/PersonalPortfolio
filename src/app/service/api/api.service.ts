import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly httpsPrefix = 'http://';
  public clientSideErrorMessage = 'The request could not be processed - Client side';

  public config = null;
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
    this.http.get(this.configUrl)
      .subscribe(data => {
        console.log(data);
        this.config = data;
      });
  }


  public submitEmail(body: Object): Observable<any> {
    return this.newPostRequest('api.email.endpoint', body, this.requestOptions)
  }

  newPostRequest(pathUrl: string, body: Object, httpOptions?: Object, createEndpoint: boolean = true): Observable<any> {
    httpOptions = this.createHttpOptions(httpOptions);
    return this.http.post<any>(createEndpoint ? this.createEndpoint(pathUrl) : pathUrl, body, httpOptions);
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(this.clientSideErrorMessage);
    } else {
      return throwError(error);
    }
  }

  private createEndpoint(path: string): string {
    if (!this.config) { return ''; }
    return !!this.config['api.host'] ? this.httpsPrefix + this.config['api.host'] + this.config[path]
      : this.config['api.email.endpoint'];
  }

  private createHttpOptions(httpOptions: Object): any {
    let options = httpOptions;
    // Use default httpOptions if none is provided
    if (!options) { options = this.defaultHttpOptions(); }
    return options;
  }

  private defaultHttpOptions() {
    if (this.config) {
      return {
        headers: {
          'Client-Id': this.config['client-id'],
          'Access-Control-Allow-Origin': '*'
        },
        withCredentials: false,
        params: {},
        observe: 'response'
      };
    }
    return null;
  }

  private get requestOptions() {
    console.log('this.config', this.config);
    const headers = {
      'Client-Id': this.config['client-id']
    };
    return { headers: headers };
  }
}
