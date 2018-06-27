import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Output() onSaid = new EventEmitter<string>();
  count: number;
  constructor() { }

  ngOnInit() {
    this.count = 0;
  }

  say(word: string) {
    console.log(word);
    this.onSaid.emit(word);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
