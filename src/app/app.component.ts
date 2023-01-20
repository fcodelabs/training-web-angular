import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'training-web-angular';
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @ViewChild('colorDiv')
  colorDiv!: ElementRef;

  changeColor() {
    this.renderer.setStyle(
      this.colorDiv.nativeElement,
      'background-color',
      'green'
    );
  }
}
