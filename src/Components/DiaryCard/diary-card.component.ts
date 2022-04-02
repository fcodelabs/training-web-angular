import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  title: string = "Test";
  subtitle: string = "Noah";
  description: string = "Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world";
  color: string = "#B9E9FF"

  isExpanded: boolean = false;
  btnText: string = "SHOW MORE";

  constructor (){}

  ngOnInit(): void {
  }

  public showDescription(): string {
    if (this.description.length > 100) {
      if (this.isExpanded) return this.description;
      else {
        return this.description.substring(0, 100).concat(" ...");
      }
    }
    return this.description;
  }

  public toggleShowMore() {
    this.isExpanded = !this.isExpanded;
    this.btnText = this.isExpanded ? "SHOW LESS" : "SHOW MORE";
  }

}
