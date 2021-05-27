import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-booklist',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books$: Observable<any>;

  constructor(private bookData: BookDataService) {
    this.books$ = this.bookData.getBooks();
  }

  ngOnInit(): void {
  }

}
