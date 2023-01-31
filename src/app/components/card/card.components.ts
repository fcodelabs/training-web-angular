import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  input = {
    id: '',
    name: '',
    description: '',
    title: '',
  };

  @Input() set data(data: any) {
    this.input = data;
  }

  seeMore: boolean = false;

  showAction: boolean = false;

  constructor() {}

  ngOnInit(): void {
    //dummy data
    this.input.description =
      'fhf fh f gfhofhfy  f jvb yfyfgfd  fgyfh wufhyhfgf fhfiugh yh fhuhg ighufh uf whefghefhw9fh  hfwhgeyrh fwufh fuw fhfgh ghyu  gygh ehge ughy ehger yh';
    this.input.name = 'Card Name';
    this.input.title = 'Card Title';
  }

  public buttonClick(): void {
    this.seeMore = !this.seeMore;
  }
}
