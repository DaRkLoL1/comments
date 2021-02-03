import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

import { IComment } from './icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'api/comments';
  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url).pipe(
      map((comments) => {
        this.getCommentsFromStorage(comments);

        return  comments
      })
    );
  }

  addComment(comment): Observable<IComment> {
    return this.http.post<IComment>(this.url, comment).pipe(
      map((comment) => {
        this.addCommentInStorage(comment);
        
        return comment
      })
    );
  }

  getCommentsFromStorage(comments) {
    const localComments = JSON.parse(localStorage.getItem('comments'));
    if (localComments !== null) {
      comments.unshift(...localComments);
    }
  }

  addCommentInStorage(comment: IComment) {
    let localComments = JSON.parse(localStorage.getItem('comments'));
    if (localComments === null) {
      localComments = [];
    }
    localComments.push(comment);

    const json = JSON.stringify(localComments);
    localStorage.setItem('comments', json);
  }
}
