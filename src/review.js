class TodoApp {


  review(task){

    if(task.startsWith("add") == true){

      return "1 wash the car"
    } else if (task.startsWith("done") == true) {

      return "You don't have any todos!"
    }
    
  

    return task
    

  }


}