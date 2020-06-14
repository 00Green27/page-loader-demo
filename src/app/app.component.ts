import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'page-loader-demo';
  value = 0;
  opened: boolean;

  setValue(): void {
    if (this.value > 0 && this.value < 100) {
      this.opened = true;
    } else {
      this.value = 0;
      this.opened = false;
    }

    this.value += 10;
  }
}
