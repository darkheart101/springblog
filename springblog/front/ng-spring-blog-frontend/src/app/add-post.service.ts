import { Injectable } from '@angular/core';
import { PostPayload } from './add-post/post-payload';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  constructor(private httpClient: HttpClient)
  {

  }

  addPost(postPayload: PostPayload)
  {
    return this.httpClient.post('http://localhost:8080/api/posts', postPayload);
  }

  getAllPosts(): Observable<Array<PostPayload>>
  {
    return this.httpClient.get<Array<PostPayload>>("http://localhost:8080/api/posts/all")
  }
}
