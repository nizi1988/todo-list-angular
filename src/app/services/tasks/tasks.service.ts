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
  public filtered = signal<Task[]>(this.stateTasks().taskList);


  constructor(private router: Router) {
  }

  //save the current task list to local storage and redirect to overview if needed
  private saveToLocalStorage(redirect: boolean = true){
    localStorage.setItem('tasks', JSON.stringify(this.taskList()));
    redirect && this.router.navigate(['/tasks/overview']);
  }

  public createTask(taskToSave: Task){
    let id = 0;
    //if there is a list in local storage, get the last id and add 1
    if( localStorage.getItem('tasks') !== null ){
      id = this.sortedIdList() + 1;
    }

    //create a new task with the new id
    const newTask = {
      ...taskToSave,
      id: id,
    } as Task;

    //add the new task to the task list
    this.stateTasks.update((stateTasks) => ({
      ...stateTasks,
      taskList: [...stateTasks.taskList, newTask],
    }));

    //update local storage
    this.saveToLocalStorage();
  }

  public updateTask(id:number, updatedTask: Task){
    //update the task with the new values, for the task with the given id
    const updatedTaskList = this.stateTasks().taskList.map((task) => {
        return task.id === id ? updatedTask : task;
    })

    //update the task list
    this.stateTasks.update((stateTasks) => ({
        ...stateTasks,
        taskList: updatedTaskList,
    }));

    //update local storage
    this.saveToLocalStorage();

  }

  public deleteTask(id:number){
    //remove the task with the given id from the task list
    const cleanedTaskList = this.stateTasks().taskList.filter((task) => task.id !== id);

    this.stateTasks.update((stateTasks) => ({
      ...stateTasks,
      taskList: cleanedTaskList,
    }));

    this.saveToLocalStorage(false);
  }

  public filterTasks(filter: string){
    // Reset the filtered list to the initial task list
    this.filtered.set(this.stateTasks().taskList);

    let filteredTasks: Task[];
    switch (filter) {
      //only show completed tasks
      case 'completed':
        filteredTasks = this.stateTasks().taskList.filter((t) => t.completed);
        break;
      //only show not completed tasks
      case 'open':
        filteredTasks = this.stateTasks().taskList.filter((t) => !t.completed);
        break;
        //show all tasks
      default:
        filteredTasks = this.stateTasks().taskList;
        break;
    }

    //we don't save this to the local storage, because we want to keep the original list,
    // it is only a temporary filter
    this.filtered.set(filteredTasks);

  }


   public getTaskById(id: number){
      //get the task with the given id
     return this.stateTasks().taskList.find(t => t.id === id);
   }

}
