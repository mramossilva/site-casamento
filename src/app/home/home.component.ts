import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    setInterval(() => this._refreshTime(), 1000)
  }

  ngOnInit(): void {
    
  }

  bgStyle = "background-image: linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.2) 100%), url('../assets/bg-image.jpg');"
  bgMenu = "background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.2) 100%), url('../assets/bg-menu.png');"

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  _refreshTime(){
    let WeddingDate: any = new Date("October 31, 2021");
    let now: any = new Date();
    let dateDifference:any = WeddingDate - now;

    let year = 1000 * 60 * 60 * 24 * 7 * 4 * 12;

    
  }

  text:any = {
    Year: 'Ano',
    Month: 'Meses',
    Weeks: "Semanas",
    Days: "Dias",
    Hours: "Horas",
    Minutes: "Minutos",
    Seconds: "Segundos",
    MilliSeconds: "MilliSeconds"
  };


}




