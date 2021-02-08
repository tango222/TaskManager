import * as _ from 'lodash';
//let now = moment();
//defines number of days needed to add to `now` to get absolute time from relative time
// export enum DueDateShort {
//   today = 0,
//   tomorrow = now.add(1, 'days').day(),
//   weekend = now.add(6 - now.day(), 'days').day(),
//   nextWeek = now.add(7, 'days').day(),
// }
//defines task interface
// export interface Task {
//   title: string;
//   dueDate: moment.Moment;
//   project?: string;
//   logTask?: () => any;
//   editTask?: (prop: string, value: any) => void;
// }
//defines Task class with set default values
export class Task {
    constructor(title, dueDate, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.project = project;
    }
    logTask() {
        console.log(`{
          Title : ${this.title}, 
          Due Date : ${this.dueDate}, 
          Project : ${this.project},
        }`);
    }
    editTask(prop, value) {
        if (prop === "title") {
            this.title = value;
        }
        else if (prop === 'dueDate') {
            this.dueDate = value;
        }
        else if (prop === 'project') {
            this.project = value;
        }
    }
}
export class TaskList {
    constructor() {
        //function to add task 
        this.addTask = (title, dueDate, project) => {
            _.concat(this.List, new Task(title, dueDate, project));
        };
        //function to view all tasks
        this.viewAll = () => {
            _.forEach(this.List, (t) => { t.logTask(); });
        };
        //filter by due day, and project type
        this.filterTasks = (filter, value) => {
            if (filter === "dueDate") {
                return _.filter(this.List, (t) => {
                    return t.dueDate === value;
                });
            }
            else if (filter === 'project') {
                return _.filter(this.List, (t) => {
                    return t.project === value;
                });
            }
            else if (filter === 'title') {
                return _.filter(this.List, (t) => {
                    return t.title.includes(value);
                });
            }
        };
        this.List = [];
    }
}
