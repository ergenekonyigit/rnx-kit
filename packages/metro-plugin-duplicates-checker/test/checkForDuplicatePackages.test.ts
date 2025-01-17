import {
  checkForDuplicateDependencies,
  checkForDuplicatePackages,
  countCopies,
  detectDuplicatePackages,
  Options,
  printModule,
} from "../src/checkForDuplicatePackages";
import {
  bundleGraph,
  bundleGraphFS,
  bundleGraphWithDuplicates,
  bundleGraphWithDuplicatesFS,
  bundleSourceMap,
  bundleSourceMapFS,
  bundleSourceMapWithDuplicates,
  bundleSourceMapWithDuplicatesFS,
} from "./testData";

jest.mock("fs");

const defaultOptions: Options = {
  ignoredModules: [],
  bannedModules: [],
};

const testModuleMap = {
  "@babel/runtime": {
    "7.13.10": new Set(["/~/node_modules/@babel/runtime"]),
  },
  fbjs: {
    "1.0.0": new Set([
      "/~/node_modules/fbjs",
      "/~/node_modules/react-native/node_modules/fbjs",
    ]),
  },
  metro: {
    "0.58.0": new Set(["/~/node_modules/metro"]),
    "0.59.0": new Set(["/~/node_modules/metro"]),
  },
  invariant: {
    "2.2.4": new Set(["/~/node_modules/invariant"]),
  },
  react: {
    "16.13.1": new Set(["/~/node_modules/react"]),
  },
  "react-native": {
    "0.63.4": new Set(["/~/node_modules/react-native"]),
  },
};

describe("countCopies()", () => {
  test("returns number of copies of a package", () => {
    expect(countCopies(testModuleMap["fbjs"])).toBe(2);
    expect(countCopies(testModuleMap["metro"])).toBe(2);
    expect(countCopies(testModuleMap["react-native"])).toBe(1);
  });
});

describe("printModules()", () => {
  const consoleWarnSpy = jest.spyOn(global.console, "warn");

  beforeEach(() => {
    consoleWarnSpy.mockReset();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("prints all versions and locations of a package", () => {
    printModule(testModuleMap["fbjs"]);
    expect(consoleWarnSpy).toBeCalledTimes(2);
    consoleWarnSpy.mockReset();

    printModule(testModuleMap["metro"]);
    expect(consoleWarnSpy).toBeCalledTimes(2);
    consoleWarnSpy.mockReset();

    printModule(testModuleMap["react-native"]);
    expect(consoleWarnSpy).toBeCalledTimes(1);
    consoleWarnSpy.mockReset();
  });
});

describe("detectDuplicatePackages()", () => {
  const consoleErrorSpy = jest.spyOn(global.console, "error");
  const consoleWarnSpy = jest.spyOn(global.console, "warn");

  beforeEach(() => {
    consoleErrorSpy.mockReset();
    consoleWarnSpy.mockReset();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("returns number of duplicated packages", () => {
    expect(detectDuplicatePackages(testModuleMap, defaultOptions)).toEqual({
      banned: 0,
      duplicates: 2,
    });
  });

  test("ignores specified packages", () => {
    expect(
      detectDuplicatePackages(testModuleMap, { ignoredModules: ["fbjs"] })
    ).toEqual({ banned: 0, duplicates: 1 });
    expect(
      detectDuplicatePackages(testModuleMap, {
        ignoredModules: ["fbjs", "metro"],
      })
    ).toEqual({ banned: 0, duplicates: 0 });
  });

  test("counts banned packages", () => {
    expect(
      detectDuplicatePackages(testModuleMap, {
        bannedModules: ["react", "react-native"],
      })
    ).toEqual({ banned: 2, duplicates: 2 });
  });

  test("prints the duplicated packages", () => {
    detectDuplicatePackages(testModuleMap, defaultOptions);
    expect(consoleErrorSpy).toBeCalledTimes(2);
    expect(consoleWarnSpy).toBeCalledTimes(4);
  });
});

describe("checkForDuplicateDependencies()", () => {
  const fs = require("fs");

  const consoleErrorSpy = jest.spyOn(global.console, "error");
  const consoleWarnSpy = jest.spyOn(global.console, "warn");

  beforeEach(() => {
    consoleErrorSpy.mockReset();
    consoleWarnSpy.mockReset();
  });

  afterAll(() => {
    fs.__setMockFiles();
    jest.clearAllMocks();
  });

  test("checkForDuplicateDependencies", () => {
    fs.__setMockFiles(bundleGraphFS);

    expect(checkForDuplicateDependencies(bundleGraph)).toEqual({
      banned: 0,
      duplicates: 0,
    });
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    expect(consoleWarnSpy).not.toHaveBeenCalled();

    fs.__setMockFiles(bundleGraphWithDuplicatesFS);

    expect(checkForDuplicateDependencies(bundleGraphWithDuplicates)).toEqual({
      banned: 0,
      duplicates: 1,
    });
    expect(consoleErrorSpy).toBeCalledTimes(1);
    expect(consoleWarnSpy).toBeCalledTimes(2);
  });
});

describe("checkForDuplicatePackages()", () => {
  const fs = require("fs");

  afterAll(() => fs.__setMockFiles());

  test("checkForDuplicatePackages", () => {
    fs.__setMockFiles(bundleSourceMapFS);

    expect(checkForDuplicatePackages(bundleSourceMap)).toEqual({
      banned: 0,
      duplicates: 0,
    });

    fs.__setMockFiles(bundleSourceMapWithDuplicatesFS);

    expect(checkForDuplicatePackages(bundleSourceMapWithDuplicates)).toEqual({
      banned: 0,
      duplicates: 1,
    });
  });
});
