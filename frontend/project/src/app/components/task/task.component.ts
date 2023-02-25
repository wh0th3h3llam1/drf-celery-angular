import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  api_response: any = null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onClick() {
    this.taskService.invoke_task().subscribe({
      next: (res: any) => {
        this.api_response = res
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
        this.api_response = err.status
      }
    })
  }

}
