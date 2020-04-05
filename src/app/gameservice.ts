import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Car } from "./car";

@Injectable()
export class GameService {
  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get("http://starlord.hackerearth.com/TopSellingGames");
  }
}
