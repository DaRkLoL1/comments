import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IComment } from '../icomment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: IComment;
  public visible: boolean = false;
  public answer: boolean = false;
  public textAnswer: string = '';
  constructor(private commentService: CommentService) { }

  toggleComments() {
    this.visible = !this.visible;
  }

  sendAnswer(form: NgForm) {
    if (!form.controls.answer.value.trim()) {
      return;
    }
    const comment = {
      parent_id: this.comment.id,
      author_name: 'User Test',
      datetime: Date.now(),
      body: form.controls.answer.value.trim(),
    }

    this.commentService.addComment(comment)
      .subscribe((comment) => {
        comment.comments = [];
        this.comment.comments.unshift(comment);
        this.visible = true;
      });

    this.answer = false;
  }

  answerOnComment() {
    this.answer = true;
  }

  closeAnswerOnComment() {
    this.answer = false;
  }
}
