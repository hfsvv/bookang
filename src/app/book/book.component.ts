import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private dataService:DataService,private router:ActivatedRoute) { }
  bookList :any
  book_name=""
  price=""
  author=""

  ngOnInit(): void {
    this.dataService.getBooks().subscribe(
      data2=>{
        this.bookList=data2
        console.log(data2);
        
      }
    )
  }
  crbook(){
    var data={
      "book_name":this.book_name,
      "author":this.author,
      "price":this.price
    }
    this.dataService.bookcr(data).subscribe(
      response=>{
        alert("book created")
        console.log(response);
        this.dataService.getBooks().subscribe(
          data=>{
            this.bookList=data
            console.log(data);
            
          }
        )
        
      }
    )

  }
  dlt(book:any){
    
    this.dataService.dlt(book).subscribe(
      resp=>{
      alert("Book is deleted")
      this.dataService.getBooks().subscribe(
        data=>{
          this.bookList=data
          console.log(data);
          
        }
      )}
    )
    
  }

}
