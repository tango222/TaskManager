import * as moment from 'moment';
import * as  _ from 'lodash';

//let now = moment();

//defines number of days needed to add to `now` to get absolute time from relative time
// export enum DueDateShort {
//   today = 0,
//   tomorrow = now.add(1, 'days').day(),
//   weekend = now.add(6 - now.day(), 'days').day(),
//   nextWeek = now.add(7, 'days').day(),
// }

//defines Task class with set default values
export class Task {
  title: string; 
  dueDate: moment.Moment;
  project: string;
  
  constructor(title: string, dueDate : moment.Moment, project: string) {
    this.title = title;
    this.dueDate = dueDate;
    this.project = project;
  }
  logTask() {
        console.log(`{
          Title : ${this.title}, 
          Due Date : ${this.dueDate}, 
          Project : ${this.project},
        }`)
  }

  editTask(prop : string, value : any) {
    if(prop === "title"){
      this.title = value; 
    }else if (prop === 'dueDate'){
      this.dueDate = value;
    }else if (prop === 'project'){
      this.project = value;
    }
  }
}

export class TaskList {
  List: Task[];
  constructor(tasks? : Task[]) {
    this.List = tasks ? tasks : [];
  }

  //function to add task 
  addTask = (title: string, dueDate: moment.Moment, project: string) => {
    this.List = _.concat(this.List, new Task(title, dueDate, project));
  }

  //function to view all tasks
  viewAll = () => {
    _.forEach(this.List, (t : Task) => { t.logTask() })
  }

  //filter by due day, and project type
  filterTasks = (filter: string, value: any) => {
    if(filter === "dueDate"){
      return new TaskList(_.filter(this.List, (t : Task) => {
        return t.dueDate === value;
      }));
    }else if(filter === 'project'){
      return new TaskList(_.filter(this.List, (t : Task) => {
        return t.project === value;
      }));
    }else if(filter === 'title'){
      return new TaskList(_.filter(this.List, (t : Task) => {
        return t.title.includes(value);
      }));
    }else{
      return new TaskList();
    }
  }
}
