import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Car } from "./car";

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http
      .get<any>("./assets/data.json")
      .toPromise()
      .then(res => res.data)
      .then(data => {
        console.log(data);
        return data;
      });
  }

  getCarsMedium() {
    return this.http
      .get<any>("./assets/data.json")
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => {
        return data;
      });
  }

  getCarsLarge() {
    return this.http.get("./assets/data.json");
  }
}
