import { Component } from "@angular/core";
import { GameService } from "./gameservice";
import { Game } from "./game";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  x;
  games: any;

  selectedGame: Game;

  displayDialog: boolean;

  sortOptions: any[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private gameservice: GameService) {}

  ngOnInit() {
    this.gameservice.getGames().subscribe(games => {
      this.games = games;
    });

    this.sortOptions = [
      { label: "Newest First", value: "!Year" },
      { label: "Oldest First", value: "Year" },
      { label: "Name", value: "Name" }
    ];
  }

  selectCar(event: Event, game: Game) {
    this.selectedGame = game;
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
    this.selectedGame = null;
  }
}
