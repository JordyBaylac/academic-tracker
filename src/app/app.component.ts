import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loading Academic Results ...';
  public loaded = false;
  public clicked = false;
  ngOnInit() {
    // setTimeout.call(this, () => {
    //   this.loaded = true;
    // }, 2000);
  }

}
