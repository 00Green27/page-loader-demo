import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLoaderComponent implements OnInit {
  @Input()
  value: number = 0;

  @Input()
  opened: boolean = false;

  constructor() {}

  ngOnInit() {}
}
