import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book_name=""
  author=""
  price=""
  data:any
  data2:any

  constructor(private dataService:DataService,private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    
    this.dataService.getdt(this.router.snapshot.params.id).subscribe(
      result=>{
        this.data=result
        this.book_name=this.data.book_name
        this.author=this.data.author
        this.price=this.data.price
        
      }
    )

  }
  updt(){
    var data2={
      "book_name":this.book_name,
      "author":this.author,
      "price":this.price
    }
    this.dataService.updt(this.router.snapshot.params.id,data2).subscribe(
      result=>{
        console.log(result);
        alert(this.book_name+"has been updated")
        this.route.navigateByUrl("book")
        
      }
    )
  }

}
