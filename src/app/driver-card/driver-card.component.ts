import {Component, Input, OnInit} from '@angular/core';
import {Driver} from "../Driver";

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.css']
})
export class DriverCardComponent implements OnInit {

  @Input()
  public driver: Driver;

  constructor() { }

  ngOnInit(): void {
  }

}
