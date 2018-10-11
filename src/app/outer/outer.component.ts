import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-outer",
  templateUrl: "./outer.component.html",
  styleUrls: ["./outer.component.css"]
})
export class OuterComponent implements OnInit {
  @Input()
  names;
  @Output()
  nameFromInner: EventEmitter<string> = new EventEmitter<string>();
  name: string = "";

  constructor() {}

  ngOnInit() {}

  onEventName($event) {
    this.name = $event;
    this.nameFromInner.emit(this.name);
  }
}
