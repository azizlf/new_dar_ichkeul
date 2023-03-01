import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.heart-of-carthage-dubai.com/admin/me//suits?today=true';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
