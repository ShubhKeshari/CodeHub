// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1

function UniqueString(strings) {
  let ans = strings.reduce((previousValue, currentValue) => {
    if (previousValue[currentValue]) {
      previousValue[currentValue]++;
    } else {
      previousValue[currentValue] = 1;
    }
    return previousValue;
  }, {});
  return ans;
}
//console.log(UniqueString(strings));

// qn :2

function ProductOfMultipleOfThreeOrFive(numbers) {
  // console.log(ProductOfMultipleOfThreeOrFive(numbers1));
  let ans = numbers.reduce((previous, item) => {
    if (item % 3 === 0 || item % 5 === 0) {
      previous = previous + item;
    }
    return previous;
  }, 0);
  return ans;
  //ForEach Method
  // let ans = 0;
  // numbers.forEach((item) => {
  //   if (item % 3 === 0 || item % 5 === 0) {
  //     ans = ans + item;
  //   }
  // });
  // return ans;
}

// filter method Qn:1\

function palindromesString(words) {
  let ans = words.filter((item) => {
    if (item === item.split("").reverse().join("")) {
      return item;
    }
  });
  return ans;
}
// console.log(palindromesString(words))

// filter method Qn:2

function findImage(filePaths) {
  let ans = filePaths.filter((item) => {
    let tempItem = item.split(".");
    if (tempItem[1] === "jpg" || tempItem[1] === "png") {
      return item;
    }
  });
  return ans;
}
// console.log(findImage(filePaths))

// map method Qn:1

function swapStrings(strings) {
  let ans = strings.map((item) => {
    let first = item[0];
    let last = item[item.length - 1];
    let mid = item.substring(1, item.length - 1);
    return last + mid + first;
  });
  return ans;
}
// console.log(swapStrings(strings1));

// foreach method Qn:1
function countWords(sentences) {
  let ans = sentences.forEach((item, index) => {
    let tempArr = item.split(" ");
    console.log(`sentence ${index + 1} contains ${tempArr.length} words.`);
  });
  return ans;
}
// countWords(sentences)

// combination method Qn:1
function sumOfSquaresOfOddNumbers(numbers) {
  let ans = numbers
    .filter((item) => item % 2 === 1)
    .map((item) => item ** 2)
    .reduce((prev, curr) => prev + curr, 0);
  return ans;
}
// console.log(sumOfSquaresOfOddNumbers(numbers));

// combination method Qn:2
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
function massageArray(inputArray) {
  return inputArray.map((item) => {
    let obj = {
      courseName: item.courseName,
      courseDuration: CourseDurationDirectory[item.courseDuration],
      Category: Category[item.Category],
      type: typeOfCourse.filter((elem) => {
        return elem.id === item.type;
      })[0].name,
      techTools: [],
    };
    for (let i = 1; i <= 20; i++) {
      if (item.techTools[i]) {
        let dataObj = {
          language: item.techTools[i],
          details: item.techdetails[i],
        };
        obj.techTools.push(dataObj);
      }
    }
    return obj;
  });
}
// console.log(massageArray(exampleInputArray));

// Implementation methods ps Qn:6

function ImplementationPS6(students) {
  let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  let obj = {};
  students.forEach((item) => {
    let name = item.name;
    let subjectID = item.subjectID;
    let subject = subjectsHash[subjectID];
    if (!obj[name]) {
      obj[name] = [];
    }
    obj[name].push(subject);
  });
  return obj;
}
// console.log(ImplementationPS6(students));

// Implementation methods ps Qn:7

function ImplementationPS7(allStudentsMarksData) {
  let outputArray = [];
  allStudentsMarksData.forEach((student) => {
    let data = {
      name: student.name,
      marks: [],
    };
    for (let i = 1; i <= 5; i++) {
      let Subject = `subject${i}`;
      let ScoreKey = `marks${i}`;
      if (student[Subject] != null && student[ScoreKey] !== null) {
        data.marks.push({
          subject: student[Subject],
          score: student[ScoreKey],
        });
      }
    }
    outputArray.push(data);
  });
  return outputArray;
}
// console.log(ImplementationPS7(allStudentsMarksData));

// Implementation methods ps Qn:9

function ImplementationPS9(voters) {
  let obj = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };
  voters.forEach((voter) => {
    if (voter.age >= 18 && voter.age <= 20) {
      obj["numYoungPeople"]++;
      if (voter.voted === true) {
        obj["numYoungVotes"]++;
      }
    } else if (voter.age >= 21 && voter.age <= 50) {
      obj["numMidsPeople"]++;
      if (voter.voted === true) {
        obj["numMidVotesPeople"]++;
      }
    } else {
      obj["numOldsPeople"]++;
      if (voter.voted === true) {
        obj["numOldVotesPeople"]++;
      }
    }
  });
  return obj;
}
// console.log(ImplementationPS9(voters));

// Implementation methods ps Qn:10
function ImplementationPS10(data) {
  let obj = {};
  data.forEach((favoriteIce) => {
    for (let i of favoriteIce.favoriteIceCreams) {
      if (obj[i]) {
        obj[i]++;
      } else {
        obj[i] = 1;
      }
    }
  });
  return obj;
}
// console.log(ImplementationPS10(data));

// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
