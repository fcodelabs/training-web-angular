import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent {
  @Input() title: any;
  @Input() description: any;
  @Input() username: any;
   isExpanded = false;
  public thumbnailSrc =
    'https://firebasestorage.googleapis.com/v0/b/dailydiary-96e2f.appspot.com/o/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg?alt=media&token=78f7c5fc-99fc-4616-b5ca-77be651a93fd';
  public cover =
    'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg';
}
