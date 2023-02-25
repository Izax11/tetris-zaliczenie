import { Component, Input, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

 
@Component({
  selector: 'app-gra',
  templateUrl: './gra.component.html',
  styleUrls: ['./gra.component.css']
})
export class GraComponent {
  @Input() playerName: string = "";
  @Input() endGameParent: Function | undefined;
  @ViewChild(TetrisCoreComponent)
  private _tetris: TetrisCoreComponent | undefined;
  gameStatus: string = 'gotowa';
  points: number = 0;
  gameTime: number = 0;

  public onactionStart() {
    this._tetris && this._tetris.actionStart();
    this.gameStatus = "start"
  }

  public onactionStop() {
    this._tetris && this._tetris.actionStop();
    this.gameStatus = "wstrzymana"
  }

  endGame() {
    this.endGameParent && this.endGameParent();
  }

  onLineCleared() {
    this.points += 1;
  }

  startTimer() {
    setInterval(() => {
      this.gameTime++;
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }
}
