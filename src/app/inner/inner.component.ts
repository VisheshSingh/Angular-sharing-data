import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-inner",
  templateUrl: "./inner.component.html",
  styleUrls: ["./inner.component.css"]
})
export class InnerComponent implements OnInit {
  @Input()
  name;
  @Output()
  eventNameOut: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  sendData() {
    this.eventNameOut.emit(this.name);
  }
}
