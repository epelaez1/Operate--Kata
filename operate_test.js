describe("email tester", function(){

  it("empty textlines equal to nothing", function(){
      expect(parseEmails([])).toEqual([]);      
  });

});
