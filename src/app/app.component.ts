import { Component } from "@angular/core";
import { Car } from "./car";
import { CarService } from "./carservice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  x;
  cars: any;

  selectedCar: Car;

  displayDialog: boolean;

  sortOptions: any[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCarsLarge().subscribe(cars => {
      this.cars = cars;
    });

    this.sortOptions = [
      { label: "Newest First", value: "!year" },
      { label: "Oldest First", value: "year" },
      { label: "Brand", value: "brand" }
    ];
  }

  selectCar(event: Event, car: Car) {
    this.selectedCar = car;
    this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onDialogHide() {
    this.selectedCar = null;
  }
}
