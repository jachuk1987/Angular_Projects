import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Master } from './Service/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  master = inject(Master);

  constructor(private master: Master) {
    
  }
}
