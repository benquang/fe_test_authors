import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit{
  jsonData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Code to fetch JSON data
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('https://openlibrary.org/search/authors.json?q=rowling&limit=10&offset=20')
      .subscribe((data: any) => {
        // Assign JSON data to component property
        this.jsonData = data.docs;
      });
  }


}
