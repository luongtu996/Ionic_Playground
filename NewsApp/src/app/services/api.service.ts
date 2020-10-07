import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishLast, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://newsapi.org/v2/top-headlines?country=my&category=business&apiKey=';
  private apiKey = 'YourKey';

  constructor(
    private http: HttpClient
  ) { }

  getNews<T>(): Observable<T> {
    return this.http.get<T>(this.apiUrl + this.apiKey).pipe(
      publishLast(), refCount()
    );
  }
}
