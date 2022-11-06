import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  // getPostsByUser(id: number): Observable<Post[]> {
  //   this.http.get<Post[]>(this.postsUrl).pipe(
  //     filter(x => {return x.}));
  // }

}
