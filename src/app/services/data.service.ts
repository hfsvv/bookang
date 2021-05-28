import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  login(data:any) {


    return this.http.post('http://127.0.0.1:8000/api/book/v1/loginapi',data)
  }
  getBooks(){
    return this.http.get('http://127.0.0.1:8000/api/book/v1/books')
  }
  bookcr(data:any){
    return this.http.post('http://127.0.0.1:8000/api/book/v1/books/',data)
  }
  getdt(id:any){
    return this.http.get('http://127.0.0.1:8000/api/book/v1/books/'+id)
  }
  updt(id:any,data:any){
    return this.http.put('http://127.0.0.1:8000/api/book/v1/books/'+id+'/',data)
  }
  dlt(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/book/v1/books/'+id+'/')
  }
}
