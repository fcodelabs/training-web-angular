import { Component } from '@angular/core';
import {
  LoaderType,
  LoaderThemeColor,
  LoaderSize,
} from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  public loaderType: LoaderType = 'converging-spinner';
  public loaderThemeColor: LoaderThemeColor = 'info';
  public loaderSize: LoaderSize = 'medium';
}
