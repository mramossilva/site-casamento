import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  lat = -19.4173442;
  lng = -44.2432847;
  zoom: number = 15;


  constructor() {

  }

  ngOnInit() {
  }



}
