import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded'
    })
};

interface Post {
    resultCode: string;
    resultMsg: string;
    content: any[];
}

@Injectable()
  export class AppService {
    private baseUrl = 'http://18.140.98.89:8089/'
    constructor(private httpClient: HttpClient) {}
    
    getPosts(): Observable<Post> {
        return this.httpClient.get<Post>(this.baseUrl + 'posts');
    }
  }
