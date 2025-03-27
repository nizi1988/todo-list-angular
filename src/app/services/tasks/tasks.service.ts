import { Injectable, computed, signal } from '@angular/core';
import { TaskListState } from '../../interfaces/task-list'
import { Task } from '../../interfaces/task'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //get all tasks if there are any in local storage
  public stateTasks= signal<TaskListState>( { taskList: JSON.parse(localStorage.getItem('tasks')!) || [] });
  public taskList = computed(() => this.stateTasks().taskList);
  public sortedList = computed(() => this.stateTasks().taskList.sort((a, b) =>  + a.completed - + b.completed));
  public sortedIdList = computed(() => Math.max(...this.stateTasks().taskList.map(a => a.id)));

  constructor(private router: Router) {
  }

  private saveToLocalStorage(redirect: boolean = true){
    localStorage.setItem('tasks', JSON.stringify(this.taskList()));
    this.router.navigate(['/tasks/overview']);
  }

  public createTask(taskToSave: Task){
    let id = 0;
    //if there is a list in local storage, get the last id and add 1
    if( localStorage.getItem('tasks') !== null ){
      id = this.sortedIdList() + 1;
    }

    const newTask = {
      ...taskToSave,
      id: id,
    } as Task;

    this.stateTasks.update((stateTasks) => ({
      ...stateTasks,
      taskList: [...stateTasks.taskList, newTask],
    }));

    this.saveToLocalStorage();
  }

  public updateTask(id:number, updatedTask: Task){
    console.log("service update function");
    console.log(updatedTask);
    const updatedTaskList = this.stateTasks().taskList.map((task) => {
        return task.id === id ? updatedTask : task;
    })

    this.stateTasks.update((stateTasks) => ({
        ...stateTasks,
        taskList: updatedTaskList,
    }));

    this.saveToLocalStorage();

  }

  public deleteTask(id:number){
    const cleanedTaskList = this.stateTasks().taskList.filter((task) => task.id !== id);

    this.stateTasks.update((stateTasks) => ({
      ...stateTasks,
      taskList: cleanedTaskList,
    }));

    this.saveToLocalStorage(false);
  }


   public getTaskById(id: number){
     return this.stateTasks().taskList.find(t => t.id === id);
   }

}
