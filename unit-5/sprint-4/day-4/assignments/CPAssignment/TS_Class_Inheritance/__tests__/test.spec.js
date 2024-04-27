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

const fsReadPromise = (path = "") => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, content) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve(content);
    });
  });
};
global.passed = new Array(3).fill(false);
global.score = 1;

const FileContent = [
  {
    index: `import Cow from "./Cow";
    const cow = new Cow({
        gender:"Male", 
        age:15,
        givesMilk: false,
        hasOwner: true
    });
    console.log(cow);`,
    shouldPass: true,
  },
  {
    index: `import Cow from "./Cow";
    const cow = new Cow({
        gender:"Male", 
        age:"15",
        givesMilk: false,
        hasOwner: true
    });
    console.log(cow);`,
    shouldPass: false,
  },
  {
    index: `import Cow from "./Cow";
    const cow = new Cow({
        gender:"abc", 
        age:15,
        givesMilk: false,
        hasOwner: true
    });`,
    shouldPass: false,
  },
  {
    ICow: `import { IAnimal } from "./IAnimal";
    export interface ICow extends IAnimal{
        givesMilk: string,
        hasOwner: boolean,
    }`,
    shouldPass: false,
  },
  {
    IAnimal: `export interface IAnimal{
      noOfLegs: number,
      type: "Herbivores" | "Carnivorous",
      gender: "Male" | "Female",
      hasHorn: string,
      age: number
    }`,
    shouldPass: false,
  },
];

describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/Cow.ts`);
    expect(tsFileExists2).toBe(true);
    const tsFileExists3 = fs.existsSync(`${__dirname}/../src/ICow.ts`);
    expect(tsFileExists3).toBe(true);
    const tsFileExists4 = fs.existsSync(`${__dirname}/../src/IAnimal.ts`);
    expect(tsFileExists4).toBe(true);
    const tsFileExists5 = fs.existsSync(`${__dirname}/../src/Animal.ts`);
    expect(tsFileExists5).toBe(true);
  });
  it("If Everything works fine with correct params", async () => {
    try {
      let data = await OnPass(FileContent[0].index, "index");
      expect(data).toContain("noOfLegs");
      expect(data).toContain("type");
      expect(data).toContain("gender");
      expect(data).toContain("hasHorn");
      expect(data).toContain("age");
      expect(data).toContain("givesMilk");
      expect(data).toContain("hasOwner");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong class params doesn't work-1", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[1].index, "index", true);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  it("Wrong class params doesn't work-2", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[2].index, "index", true);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);

  it("Wrong Animal interface", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[3].IAnimal, "IAnimal", true);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);

  it("Wrong Cow interface", async () => {
    expect(global.passed[0]).toBeTruthy();
    try {
      let data = await OnFail(FileContent[4].ICow, "ICow", true);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 60000);
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const OnPass = (FileContent, fileName = "index", revert = false) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      const oldContent = await fsReadPromise(
        `${__dirname}/../src/${fileName}.ts`
      );
      await fsPromise(`${__dirname}/../src/${fileName}.ts`, FileContent);
      if (revert) {
        await fsPromise(`${__dirname}/../src/${fileName}.ts`, oldContent);
      }
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent, fileName = "index", revert = false) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/${fileName}.ts`, FileContent);
      // if (revert) {
      //   await fsPromise(`${__dirname}/../src/${fileName}.ts`, oldContent);
      // }
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
