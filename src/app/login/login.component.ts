import { HttpResponse } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accno=""
  pswd=""
  tokdet :any;

  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    var accno=this.accno
    var pswd=this.pswd
    var data={
      'username':accno,
      'password':pswd
    }
    
    this.dataservice.login(data).subscribe(
    
      response=>{

        // console.log(accno);
        this.tokdet=response
        console.log(this.tokdet.token);
        
        alert(response)
        console.log(response);
        localStorage.setItem("token",JSON.stringify(this.tokdet.token))
        this.router.navigateByUrl("book")

      },
      error=>{
       console.log(error);
       alert(error.message)
        
      }
    );
    
    
  }

}
