import { Component, OnInit, Input } from '@angular/core';
// import Checklist from checklist Model
import { Checklist } from '../../models/checklist.model'
//(1-a) import Checklist service 
import { ChecklistService } from '../../services/checklist.service'
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  //get input of checklist from todo component
  @Input() checklist: Checklist;

  //inject ChecklistService
  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {}

  checked(): void {
    //if checklist is already marked DONE => mark it undone
    if(this.checklist.isDone) {
      this.checklist.isDone = false;
    }
    // otherwise, mark it as done if it's not done yet
    else {
      this.checklist.isDone = true;
    }

    //call checklist service to update checklist to server
    //append updated checklist with updated isDone boolean to the body 
    this.checklistService.updateChecklist(this.checklist._id.valueOf(), this.checklist)
      .subscribe();
    
  }

}
