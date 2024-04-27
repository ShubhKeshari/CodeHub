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
  `import Print from "./code";
  interface Types{
      name: string;
      phone: number;
      id: number;
  }
  const Obj= {
      name: "s",
      phone: 9999,
      id: 0,
  }
  Print<Types>(Obj);`,
  `import Print from "./code";
  interface Types{
      name: string;
      phone: number;
      id: number;
  }
  const Obj= {
      name: "s",
      phone: 9999,
      id: "",
  }
  
  Print<Types>(Obj);`,
  `import Print from "./code";
  interface Types{
      name: string;
      phone: number;
      id: number;
  }
  const Obj= {
      name: "s",
      phone: true,
      id: 0,
  }
  Print<Types>(Obj);`,
  `import Print from "./code";
  interface Types{
      laptop: string;
      ram: number;
      ssd: number;
  }
  const Obj= {
      laptop: "Mackbook",
      ram: 16,
      ssd: 500,
  }
  
  Print<Types>(Obj);`,
  `import Print from "./code";
  interface Types{
      laptop: string;
      ram: number;
      ssd: number;
  }
  const Obj= {
      laptop: "Mackbook",
      ram: [],
      ssd: 500,
  }
  
  Print<Types>(Obj);`,
  `import Print from "./code";
  interface Types{
      laptop: string;
      ram: number;
      ssd: number;
  }
  const Obj= {
      laptop: true,
      ram: 16,
      ssd: 500,
  }
  
  Print<Types>(Obj);`,
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
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong id type", async () => {
    expect(global.passed[0]).toBe(true);
    try {
      let data = await OnFail(FileContent[1]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong phone type", async () => {
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
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong ram type", async () => {
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[4]);
      global.score += 1;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  }, 20000);
  it("Wrong laptop type", async () => {
    expect(global.passed[1]).toBe(true);
    try {
      let data = await OnFail(FileContent[5]);
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
