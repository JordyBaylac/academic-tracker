import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
// import { JQUERY_TOKEN } from '../shared/jquery.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  // constructor(@Inject(JQUERY_TOKEN) private jquery: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }



}
