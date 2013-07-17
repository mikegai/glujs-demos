Given 'the hello world app is launched', ->
  vm = null
  Meaning -> vm = glu.model {ns:'helloworld',mtype:'main'}
  ShouldHave 'set arriving to true', -> (expect vm.arriving).toBe true
  ShouldHave 'set message to a welcome', -> (expect vm.message).toBe 'Hello World!'
  When 'the user toggles his/her status', ->
    Meaning -> vm.set('arriving', false)
    ShouldHave 'set message to a farewell', -> (expect vm.message).toBe 'Goodbye World!'
  When 'the user changes max length', ->
    Meaning -> vm.set('maxLength', 3)
    ShouldHave 'truncated message', -> (expect vm.message).toBe 'Hel!'
