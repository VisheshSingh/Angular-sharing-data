import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  names = ["John", "Kate", "Peter"];
  name = "";
  constructor() {}

  ngOnInit() {}

  eventFromInner($event) {
    this.name = $event;
  }
}
