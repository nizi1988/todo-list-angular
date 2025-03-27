import { Injectable, computed, signal } from '@angular/core';
import { TaskListState } from '../../interfaces/task-list'
import { Task } from '../../interfaces/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  //get all tasks if there are any in local storage
  public stateTasks= signal<TaskListState>( { taskList: JSON.parse(localStorage.getItem('tasks')!) || [] });
  public taskList = computed(() => this.stateTasks().taskList);
  public sortedList = computed(() => this.stateTasks().taskList.sort((a, b) =>  + a.completed - + b.completed));
  public sortedIdList = computed(() => Math.max(...this.stateTasks().taskList.map(a => a.id)));

  private saveToLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(this.taskList()));
    console.log('save to local storage');
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


   public getTaskById(id: number){
     return this.stateTasks().taskList.find(x => x.id === id);
   }

}
