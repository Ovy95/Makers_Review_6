describe("TodoApp", function () {
  
  var todo
  beforeEach(function(){
    todo = new TodoApp();
  })

  describe("returns the correct answer given from input example",function () {
    it("Returns the value",function() {
      expect(todo.review("add wash the car")).toEqual("1 wash the car")
    })

  })

})