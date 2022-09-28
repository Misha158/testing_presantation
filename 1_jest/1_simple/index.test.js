const getNormalizeData = require("./index");

const data = {
  uk: { id: 3, text: undefined },
  en: null,
  fr: { id: 2, text: "Salut!" },
  jp: { id: 5, text: "こんにちは!" },
  br: undefined,
};

const expectedResult = [
  { lang: "jp", id: 5, text: "こんにちは!" },
  { lang: "uk", id: 3, text: null },
  { lang: "fr", id: 2, text: "Salut!" },
];

describe("getNormalizeData", () => {
  it("If no data - return empty array", () => {
    expect(getNormalizeData([])).toEqual([]);
    expect(getNormalizeData(false)).toEqual([]);
    expect(getNormalizeData(undefined)).toEqual([]);
  });

  it("The data will be filtered without empty values", () => {
    expect(getNormalizeData(data)).toHaveLength(3);
  });

  it("The data will be sorted by id DESC(from high to low)", () => {
    expect(getNormalizeData(data)).toEqual(expectedResult);
  });

  it("If data exist should return not empty array", () => {
    expect(getNormalizeData(data)).not.toEqual([]);
  });
});
