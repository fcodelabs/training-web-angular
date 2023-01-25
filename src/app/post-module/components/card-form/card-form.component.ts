import { UserInterface } from 'src/app/models/user-interface';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { addPostStart } from 'src/app/store/actions/postAction';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { userSelector } from './../../../store/selectors/userSelector';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent {
  title: string;
  description: string;
  username$: Observable<string | undefined>;
  username: string | undefined;
  visible: boolean = false;
  height: string = '220px';
  constructor(
    private store: Store<AppStateInterface>,
    private elementRef: ElementRef
  ) {
    this.username$ = this.store.pipe(select(userSelector));
    this.title = '';
    this.description = '';
  }

  ngOnInit(): void {}

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(event);
      this.height = '220px';
    }
  }

  changeDescription(value: string) {
    this.description = value;
  }
  changeTitle(value: string) {
    this.title = value;
  }
  addPostHandle() {
    this.username$.pipe(first()).subscribe((val) => (this.username = val));
    if (
      this.title !== '' &&
      this.description !== '' &&
      this.username !== undefined
    ) {
      this.store.dispatch(
        addPostStart({
          post: {
            id: 'none',
            title: this.title,
            description: this.description,
            username: this.username,
            color: '#fff',
          },
        })
      );

      this.title = '';
      this.description = '';
    } else {
      alert('Please fill the form');
    }
  }
  public handleClick(): void {
    this.height = '350px';
  }
}
