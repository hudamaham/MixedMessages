const name = ["Mohamed", "Nour", "Steven", "Saed", "Ali", "Arthur"];
const verb = ["Likes", "Uses", "Hate", "Rocks", "Love", "is Learning "];
const Languages = [
  "python",
  "java",
  "Ruby",
  "javascript",
  "Scala",
  "C++",
  "C#",
  "Perl",
];
console.log(
  name[Math.floor(Math.random() * name.length)] +
    " " +
    verb[Math.floor(Math.random() * verb.length)] +
    " " +
    Languages[Math.floor(Math.random() * Languages.length)]
);
