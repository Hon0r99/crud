import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  constructor(private apiService: ApiService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  public deletePost(): void{
    this.apiService.deletePost(this.post).subscribe((res) => {
      console.log(res)
      this.apiService.getData()
    })
  }

  public updatePost(): void{
    this.modalService.type = 'update';
    this.modalService.toogle();
    this.modalService.selectedPost = this.post;
    // this.modalService.updatePost(this.post);
  }
}
