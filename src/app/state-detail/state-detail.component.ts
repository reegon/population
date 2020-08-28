import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-detail',
  templateUrl: './state-detail.component.html',
  styleUrls: ['./state-detail.component.scss']
})
export class StateDetailComponent implements OnInit {

  @Input() parentName: string;
  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  name: string ='This is my First App'
  enteredName: string = 'Reegan';


  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: string): void {
    this.onNameChange.emit(event);
    this.enteredName = event;
  }
}
