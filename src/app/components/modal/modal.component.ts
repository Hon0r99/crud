import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public type!: 'create' | 'update';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.type = this.modalService.type;
    if (this.type === 'update'){
      this.postForm.setValue(
        {
          title: this.modalService.selectedPost.title,
          text: this.modalService.selectedPost.text,
          image: this.modalService.selectedPost.image,
        })
    }
  }

  public postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  })

  public submit(){
    if (this.type === 'create'){
      this.modalService.createPost(this.postForm.value);
      this.postForm.reset()
    }else {
      this.modalService.updatePost({...this.modalService.selectedPost, ...this.postForm.value, updated_at: new Date().toDateString});
    }
  }

  public close(): void{
    this.modalService.toogle();
  }

}
