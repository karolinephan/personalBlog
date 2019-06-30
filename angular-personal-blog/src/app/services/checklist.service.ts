import { Injectable } from '@angular/core';
//import Checklist class from checklist model
import { Checklist } from '../models/checklist.model';
//import Observable for service
import { Observable, of } from 'rxjs';
//import HTTP client
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  //server routes
  private addChecklistUrl = 'http://localhost:8080/checklist';
  private getChecklistUrl = 'http://localhost:8080/checklist';
  private getChecklistByTodoIdUrl = 'http://localhost:8080/checklist/todo/';
  private deleteChecklistUrl = 'http://localhost:8080/checklist/';

  //inject HttpCLient to constructor
  constructor(private http: HttpClient) { }

  //add a new checklist to server
  addChecklist(checklist: Checklist): Observable<Checklist> {
    return this.http.post<Checklist>(this.addChecklistUrl, checklist);
  }

  //get checklist by checklist ID
  getChecklistByTodoId(todoId: string): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(this.getChecklistByTodoIdUrl + todoId);
  }

  //delete checklist
  deleteChecklist(checklistId: string): Observable<{}> {
    return this.http.delete<Checklist>(this.deleteChecklistUrl + checklistId)
  }

  //get all checklists
  getChecklist(): Observable<Checklist[]> {
    return this.http.get<Checklist[]>(this.getChecklistUrl);
  }
}
