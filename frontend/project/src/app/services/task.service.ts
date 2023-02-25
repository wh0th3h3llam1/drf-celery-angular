import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) { }

    invoke_task() {
        return this.http.get("http://127.0.0.1:8000/tasks")
    }
}
