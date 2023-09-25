import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://openlibrary.org/authors/OL1253600A.json');
  }
}
