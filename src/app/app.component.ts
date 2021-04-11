import { Component } from '@angular/core';
import {DriverService} from "./driver.service";
import {Driver} from "./Driver";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formula-one';
  items = new Array(10);
  public drivers: Driver[];

  constructor(public driverService: DriverService) {
    this.driverService.getAll().subscribe(driver => this.drivers = driver);
    console.log(this.drivers);
  }
}
