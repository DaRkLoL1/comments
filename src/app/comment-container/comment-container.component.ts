import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';

import { IComment } from '../icomment';


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent implements OnInit {
  public comments: IComment[] = [];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.parseComments();
  }
  
  parseComments() {
    this.commentService.getComments().subscribe(commenst => {
      commenst.forEach((comment: IComment, index, array) => {
        if (comment.parent_id === null) {
          this.comments.push(comment);
        }
        
        const parentComment = comment;
        parentComment.comments = [];
          
        array.forEach((comment: IComment) => {
          if (comment.parent_id === parentComment.id) {
            parentComment.comments.push(comment);
          }
        });
      });
    });
  }
}
