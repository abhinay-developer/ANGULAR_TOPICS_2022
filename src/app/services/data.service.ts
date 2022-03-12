import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
baseURL:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) {
  }


   public findAllUsers(){
   return this.http.get(this.baseURL);
   }
  

}
