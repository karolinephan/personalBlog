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

  constructor() { }

  ngOnInit() {}

}
