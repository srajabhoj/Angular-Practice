import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GameService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(
      "https://starlord.hackerearth.com/TopSellingGames",
      this.httpOptions
    );
  }
}
