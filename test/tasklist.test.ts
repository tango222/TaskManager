import { Task, TaskList } from '../src/tasklist';
import moment from 'moment';

describe(" 1 Testing Task...", () => {
  test('Should make a new Task', () => {
    let testTask = new Task("Eat Breakfast", moment([2021, 0, 31]), "food");
    expect(testTask.title).toEqual("Eat Breakfast");
    expect(testTask.dueDate).toEqual(moment([2021, 0, 31]));
    expect(testTask.project).toEqual("food");
  })

  //returns basically correct value but doesn't pass
  test("Should log the task", () => {
    let testTask = new Task("Eat Breakfast", moment([2021, 0, 31]), "food");
    console.log = jest.fn()
    testTask.logTask()
    expect(console.log).toHaveBeenCalledWith(`{
      Title : Eat Breakfast,·
      Due Date : Sun Jan 31 2021 00:00:00 GMT-0800,·
      Project : food,
    }`);
  })
  test("Should edit the task title", () => {
    let testTask = new Task("Eat Breakfast", moment([2021, 0, 31]), "food");
    testTask.editTask("title", "Eat Lunch")
    expect(testTask.title).toEqual("Eat Lunch");
  })
  test("Should edit the task due date", () => {
    let testTask = new Task("Eat Breakfast", moment([2021, 0, 31]), "food");
    testTask.editTask("dueDate", moment([2021, 1, 31]))
    expect(testTask.dueDate).toEqual(moment([2021, 1, 31]));
  })
  test("Should edit the task project", () => {
    let testTask = new Task("Eat Breakfast", moment([2021, 0, 31]), "food");
    testTask.editTask("project", "Inbox")
    expect(testTask.project).toEqual("Inbox");
  })
})

describe("2 Testing TaskList...", () => {
  test("Should add task to tasklist", () => {
    let myList = new TaskList();
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "food")
    let Task = myList.List[0];
    expect(myList.List.length).toEqual(1);
    expect(Task.dueDate).toEqual(moment([2021, 0, 31]));
    expect(Task.title).toEqual("Eat Breakfast");
    expect(Task.project).toEqual("food");
  })
  test("Should view all tasks in tasklist", () => {
    let myList = new TaskList();
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "food")
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "food")
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "food")
    console.log = jest.fn()
    myList.viewAll()
    expect(console.log).toHaveBeenCalledWith(expect.objectContaining(
      {
        1: `{
          Title : Eat Breakfast,·
          Due Date : Sun Jan 31 2021 00:00:00 GMT-0800,·
          Project : food,
        }`, 
        2: `{
          Title : Eat Breakfast,·
          Due Date : Sun Jan 31 2021 00:00:00 GMT-0800,·
          Project : food,
        }`, 
        3: `{
          Title : Eat Breakfast,·
          Due Date : Sun Jan 31 2021 00:00:00 GMT-0800,·
          Project : food,
        }`
      }
    ));

  })
  test("Should filter tasks by project", () => {
    let myList = new TaskList();
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "apple")
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "pear")
    myList.addTask("Eat Breakfast", moment([2021, 0, 31]), "banana")
    let newList = myList.filterTasks("project", "apple");
    expect(newList.List.length).toEqual(1);
  })
})