import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    UpdateBookComponent
  ],
  imports: [
    
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
