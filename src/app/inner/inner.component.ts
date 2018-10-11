import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-inner",
  templateUrl: "./inner.component.html",
  styleUrls: ["./inner.component.css"]
})
export class InnerComponent implements OnInit {
  @Input()
  name;

  constructor() {}

  ngOnInit() {}
}
