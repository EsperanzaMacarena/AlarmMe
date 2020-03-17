import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'ejercicioPeliculas';
  sessionId: string =localStorage.getItem('sessionId');

  
 constructor(private auth: AuthenticationService){}
 
  ngOnInit(){
    
  }
  
  public requestToken(){
    const token:string=localStorage.getItem('token');
    /*this.auth.getTokenRequest().subscribe(resp=>{
      //guardar el token una vez conseguido
      localStorage.setItem('token',resp.request_token);
      //debemos navegar para que el usuario autorice nuestra app
      //https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}?redirect_to=http://www.yourapp.com/approved
      window.location.href='https://www.themoviedb.org/authenticate/'+resp.request_token+'?redirect_to=http://localhost:4200/populares';
    });*/
  }
  
 
  logout(){
    localStorage.removeItem('sessionId');
    this.sessionId=null;
  }
 
}
