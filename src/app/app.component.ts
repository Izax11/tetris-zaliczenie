import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentPage = 'intro';
  playerName: string = "";
  playerEmail: string = "";
  gameStatus: string = "";
  score = 0;
  gameTime = 0;

  get startGameFunc() {
      return this.startGame.bind(this);
  }

  get exitGameFunc() {
    return this.exitGame.bind(this);
  }

  startGame(playerName: string) {
    this.playerName = playerName;
    if (this.playerName) {
      // zapisanie danych gracza i przejście do strony gry
      this.currentPage = 'game';
    }
  }

  exitGame() {
    // powrót do strony wprowadzającej
    this.currentPage = 'intro';
    this.playerName = "";
    this.playerEmail = "";
  }

}
