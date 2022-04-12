import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts!: Post[];
  public modalIsOpen!: boolean;

  constructor(private apiService: ApiService, public modalService: ModalService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.posts = data;
    });
    this.modalIsOpen = this.modalService.isOpen;
  }

  public openModal(): void{
    this.modalService.type = 'create';
    this.modalService.toogle();
  }

}
