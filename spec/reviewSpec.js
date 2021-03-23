describe("TodoApp", function () {
  
  var todo
  beforeEach(function(){
    todo = new TodoApp();
  })

  describe("Checks adding todo are correct outputs",function () {
    it("add wash the car returns //  1 wash the car",function() {
      expect(todo.review("add wash the car")).toEqual("1 wash the car")
    })

  })

  describe("Checks done todos return correct outputs ",function () {
    it("done 1  returns // You don't have any todos!",function() {
      expect(todo.review("done 1")).toEqual("You don't have any todos!")
    })

  })

})