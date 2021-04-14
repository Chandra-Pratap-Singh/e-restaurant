import { Component, Input, OnInit } from '@angular/core';
import { loaderVarientMapping, loaderVarients } from '../../constants';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  loaderVarients = loaderVarients;
  @Input() varient: string = loaderVarients.DEFAULT;
  @Input() fullScreen: boolean = false;
  loaderImage: string = '';
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(): void {
    this.varient !== loaderVarients.DEFAULT &&
      (this.loaderImage = loaderVarientMapping[this.varient]);
  }
}
