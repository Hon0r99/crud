import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public isOpen: boolean = false;
  public type!: 'create' | 'update';
  public selectedPost!: Post;

  constructor(private apiService: ApiService) { }

  public toogle(): void{
    this.isOpen = !this.isOpen;
  }

  public createPost(post: Post): void{
    this.apiService.createPost(post).subscribe((res) => {
      console.log(res);
      this.apiService.getData();
    });
    this.toogle();
  }

  public updatePost(post: Post): void{
    this.apiService.updatePost(post).subscribe((res) => {
      console.log(res);
      this.apiService.getData();
    });
    this.toogle();
  }

}
