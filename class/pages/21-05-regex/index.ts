//  /apple/.test("apple")
//  true
//  /apple/.test("appleaa")
//  true 왜냐하먄  apple이 포함이 되어있기 때문에
//  /apple/.test("applqq")
//  false
//  /^\w+@a.com$/.test("asd@a.com")
//  true
//  /^\w+@\w+\.\w+$/.test("asd@a.com")
//  true
//  /010-1234-5678/.test("010-1234-5678")
//  true
//  /^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678")
//  true
//  \s
