var first_name = "Edureka";
first_name = 10;
console.log(first_name);

var age1 = 30;
var age2 = "30";

var result = age1 == age2;
console.log(result);

var sayHello = function(name) {
  return "Hello" + name + "!!!";
};

console.log(sayHello("Ravi"));

var student = {
  name: "Ravi",
  email: "ravi@gmail.com"
};

console.log(student.name);

var fs = require("fs");

fs.writeFile("./hello.txt", "How are you?", function(err) {
  fs.readFile("./hello.txt", function(err, data) {
    if (err) {
      console.log(err + " happened");
    } else {
      console.log(data.toString());
    }
  });
});
