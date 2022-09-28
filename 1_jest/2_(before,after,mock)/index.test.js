const mapArrToStrings = require("./index");

describe("convertToStrings", () => {
  let mockValue;
  // Перед каждым
  beforeEach(() => {
    // ДОБАВИТЬ В БД
  });
  // Один раз перед всеми тестами
  beforeAll(() => {});

  it("methods map and pow should called", () => {
    const spyArrayMap = jest.spyOn(Array.prototype, "map");
    const spyMathPow = jest.spyOn(Math, "pow");

    mapArrToStrings([1, 2, 3, 4, 5]);

    expect(spyArrayMap).toBeCalledTimes(1);
    expect(spyMathPow).toBeCalledTimes(5);
  });

  it("methods map and pow should NOT called", () => {
    const spyArrayMap = jest.spyOn(Array.prototype, "map");
    const spyMathPow = jest.spyOn(Math, "pow");

    mapArrToStrings([]);

    expect(spyArrayMap).toBeCalledTimes(0);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(() => {});
});
