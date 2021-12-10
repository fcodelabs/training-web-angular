import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary-card',
  templateUrl: './diary-card.component.html',
  styleUrls: ['./diary-card.component.scss']
})
export class DiaryCardComponent implements OnInit {
  constructor() { }
  public description:string = "The oldest classical Greek and Latin writing had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized, and word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphs, similar to an underscore at the beginning of the new group.[2] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences."
  public readMore: Boolean = false;
  public title: string = "The Paragraph";
  public subtitle: string = "Shehan"
  ngOnInit(): void {
  }

  public showMore(): void {
    this.readMore = !this.readMore;
  }

}