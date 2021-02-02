import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { IComment } from './icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://test-server/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }

  addComment(comment): Observable<IComment> {
    return this.http.post<IComment>(this.url, JSON.stringify(comment), this.httpOptions);
  }
}
