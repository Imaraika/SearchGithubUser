import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Github } from '../github-class/github';
import { GithubRequestService } from '../github-http/github-request.service';


@Component({
  selector: 'app-user-info-comp',
  templateUrl: './user-info-comp.component.html',
  styleUrls: ['./user-info-comp.component.css']
})
export class UserInfoCompComponent implements OnInit {
  user:Github;

  constructor(private githubService:GithubRequestService) {
   
  }

  ngOnInit() {

    this.githubService.githubRequest()
    this.user = this.githubService.user;
  }
}