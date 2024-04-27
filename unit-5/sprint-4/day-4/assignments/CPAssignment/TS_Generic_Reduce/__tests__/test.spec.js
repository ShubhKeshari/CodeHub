const cp = require("child_process");
const fs = require("fs");
const execPromise = () => {
  return new Promise((resolve, reject) => {
    cp.exec("npx ts-node src/index.ts", (e, data) => {
      if (e) {
        reject({ ...e, isErrorFromExec: true });
      } else {
        resolve(data);
      }
    });
  });
};
const fsPromise = (path = "", content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve("Created File");
    });
  });
};
global.score = 1;

const FileContent = [
  `import Reduce from "./code";
  const arr=[1,5,3,2,12,23,1,4];
  console.log(Reduce<number>(arr,(a,b) =>{
      return a+b;
  }))`,
  `import Reduce from "./code";
  const arr=[1,5,3,2,12,23,1,4];
  console.log(Reduce<string>(arr,(a,b) =>{
      return a+b;
  }))
  `,
  `import Reduce from "./code";
  const arr=[1,5,3,2,12,23,1,4];
  console.log(Reduce<number>(arr,(a,b) =>{
      return true;
  }));
  `,
  `
  import Reduce from "./code";

type ArrayType = {
    name: string;
    price: number;
}
const arr: ArrayType[] = [
    {
        name: "P1",
        price: 1,
    },
    {
        name: "P2",
        price: 3,
    },
    {
        name: "P3",
        price: 7,
    },
    {
        name: "P4",
        price: 6,
    },
    {
        name: "P5",
        price: 21,
    },
];

console.log(Reduce<ArrayType>(arr,(a,b) =>{
    return a * b.price;
},1))
  `,
  `import Reduce from "./code";
  type ArrayType = {
      name: string;
      price: number;
  }
  const arr: ArrayType[] = [
      {
          name: "P1",
          price: 1,
      },
      {
          name: "P2",
          price: 3,
      },
      {
          name: "P3",
          price: 7,
      },
      {
          name: "P4",
          price: 6,
      },
      {
          name: "P5",
          price: 21,
      },
  ];
  console.log(Reduce<{nane: boolean, price: string}>(arr,(a,b) =>{
      return a * b.price;
  },1))`,
  `import Reduce from "./code";

  type ArrayType = {
      name: string;
      price: number;
  }
  const arr: ArrayType[] = [
      {
          name: "P1",
          price: 1,
      },
      {
          name: "P2",
          price: 3,
      },
      {
          name: "P3",
          price: 7,
      },
      {
          name: "P4",
          price: 6,
      },
      {
          name: "P5",
          price: 21,
      },
  ];
  console.log(Reduce<ArrayType>(arr,(a,b) =>{
      return "";
  },1))`,
  `import Reduce from "./code";

  type ArrayType = {
      name: string;
      price: number;
  }
  const arr: ArrayType[] = [
      {
          name: "P1",
          price: 1,
      },
      {
          name: "P2",
          price: 3,
      },
      {
          name: "P3",
          price: 7,
      },
      {
          name: "P4",
          price: 6,
      },
      {
          name: "P5",
          price: 21,
      },
  ];
  
  console.log(Reduce<ArrayType>(arr,(a,b) =>{
      return a * b.price;
  },"1"))`,
];
global.passed = new Array(2).fill(false);
describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });
  it("If Everything works fine with correct params-1", async () => {
    try {
      let data = await OnPass(FileContent[0]);
      expect(data).toContain("51");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Generic Type-1", async () => {
    expect(global.passed[0]).toBe(true);
    try {
      let data = await OnFail(FileContent[1]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Return Type-1", async () => {
    expect(global.passed[0]).toBe(true);
    try {
      let data = await OnFail(FileContent[2]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("If Everything works fine with correct params-2", async () => {
    try {
      let data = await OnPass(FileContent[3]);
      expect(data).toContain("2646");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Generic Type-2", async () => {
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[4]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Return Type-2", async () => {
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[5]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong Optional Params Type", async () => {
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[6]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);

  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const OnPass = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
