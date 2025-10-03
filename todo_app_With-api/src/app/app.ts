import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Master } from './Service/master';
import { ApiResponseModel, ITask } from './model/task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  taskList: ITask[] = [];

  master = inject(Master);

  ngOnInit(): void {

  }

  loadAllTask() {
    this.master.getAllTaskList().subscribe((res:ApiResponseModel)=>{

    })
  }

}
