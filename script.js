const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
  
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession == "developer") {
      console.log(data[i].profession);
    }
  }
  console.log(data.length);
}

// 2. Add Data
function addData() {
  const newData = {
    id: data.length,
    name: prompt("Enter name"),
    age: parseInt(prompt("Enter age")),
    profession: prompt("Enter proffesion"),
  };
  data.push(newData);
  // console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession === "admin") {
        data.pop(data[i].profession);
      }
    }
    console.log("Removed Admin Successfully");
}

// 4. Concatenate Array
function concatenateArray() {
    const example = [
      { name: "ram", age: 24, profession: "developer" },
      { name: "sai", age: 27, profession: "admin" },
      { name: "pavan", age: 23, profession: "developer" },
      { name: "naresh", age: 28, profession: "admin" },
    ];
    for (let i = 0; i < example.length; i++) {
      data.push(example[i]);
    }
    console.log("Concatination of Arrays is Successfully excuted");
}

// 5. Average Age
function averageAge() {
  let avg = 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    let x = Object.keys(data[i]);
    for (let j = 0; j < x.length; j++) {
      if (x[j] == "age") {
        count++;
        sum += data[i].age;
      }
    }
  }
  avg = sum / count;
  console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].age > 25) {
      console.log("true");
      return;
    }
  }
  console.log("false");
}

// 7. Unique Professions
function uniqueProfessions() {
  let ans = new Array();
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].profession);
    ans.push(data[i].profession);
  }
  for (let k = 0; k < ans.length; k++) {
    let count = 0;
    for (let j = 0; j < ans.length; j++) {
      if (ans[k] == ans[j]) {
        count++;
      }
    }
    if (count <= 1) {
      console.log(ans[k]);
    }
  }
}

// 8. Sort by Age
function sortByAge() {
    let ans=new Array();
    for(let i=0;i<data.length;i++){
        ans.push(data[i].age);
    }
    ans.sort();

    for(let j=0;j<ans.length;j++){
        console.log(ans[j]);
    }
}

// 9. Update Profession
function updateJohnsProfession() {
    data[0].profession="manager";
    console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
   let admin = 0;
   let dev = 0;
   for (let i = 0; i < data.length; i++) {
     if (data[i].profession === "admin") {
       admin++;
     } else if (data[i].profession === "developer") {
       dev++;
     }
   }
   console.log(`total admin are ${admin}`);
   console.log(`total developers are ${dev}`);
}
