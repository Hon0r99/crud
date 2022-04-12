import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public posts!: Post[];
  public posts$: Subject<Post[]> = new Subject();

  constructor(private http: HttpClient) { }

  public getData(): Observable<Post[]>{
    this.http.get<Post[]>('https://yourtestapi.com/api/posts').subscribe(data => {
      this.posts$.next(data);
      this.posts = data;
    })
    return this.posts$;
  }

  public createPost(post: Post): Observable<Post>{
     post = {
      ...post,
      id: this.posts[this.posts.length - 1].id + 1,
      url: post.image,
      active: 1,
      sort_order:null,
      created_at: new Date().toDateString(),
      updated_at:null,
      deleted_at:null,
    }
    return this.http.post<Post>('https://yourtestapi.com/api/posts', post)
  }

  public deletePost(post: Post): Observable<Post>{
    return this.http.delete<Post>('https://yourtestapi.com/api/posts/' + post.id)
  }
  public updatePost(post: Post): Observable<Post>{
    console.log(post);
    
    return this.http.put<Post>('https://yourtestapi.com/api/posts/' + post.id, post)
  }
    
}
