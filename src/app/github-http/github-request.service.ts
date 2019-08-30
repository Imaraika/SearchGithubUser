import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Github } from '../github-class/github'


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user: Github;
    constructor(private http:HttpClient) {
      this.user = new Github("","");
     }
  
     githubRequest(){
       interface ApiResponse{
        avatar_url:string;
        login:string;
       }
       let promise = new Promise((resolve,reject)=>{
         this.http.get<ApiResponse>('https://api.github.com/users/Imaraika?access_token='+environment.myApi).toPromise().then(response=>{
           this.user.avatar_url = response.avatar_url
           this.user.login = response.login
           
           
  
           resolve()
         },
         error=>{
           this.user.avatar_url = "Never, never, never give up"
           this.user.login = "Winston Churchill"
  
           reject(error)
         })
       })
       return promise
     }
  }
  