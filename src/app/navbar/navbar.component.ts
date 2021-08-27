import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class NavbarComponent implements OnInit {

  constructor(private _eref: ElementRef) { }

  navbarOpen = false;

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target)) // or some similar check
      this.toggleNavbarOutside();
   }


  ngOnInit(): void {
  }

  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleNavbarOutside(){
    if (this.navbarOpen === true){
      this.navbarOpen = !this.navbarOpen;
    }
  }

}
