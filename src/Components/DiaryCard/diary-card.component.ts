import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {

  // title!: string;
  // subtitle!: string;
  // description!: string;

  title: string = "Test";
  subtitle: string = "Noah";
  description: string = "Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world";
  // description: string = "Hello world Hello world";
  // color: string = "#b3d4fc"
  color: string = "#B9E9FF"

  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public displayDescription(): string {
    if (this.description.length > 100) {
      return this.description.substring(0, 100).concat(" ...");
    }
    return this.description;
  }

  public toggleShowMore() {
    

  }



}
