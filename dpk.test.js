const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("Must be 128 length key", () => {
    const event = "Acowisgivingmilk";
    const response = deterministicPartitionKey(event);
    expect(response).toHaveLength(128);
  });
  it("Must return the same string of partitionKey", () => {
    const event = {
      "partitionKey": "Im partitionKey"
    }
    const response = deterministicPartitionKey(event)
    expect(response).toBe(event.partitionKey)
  });
  it("Must return a 128 length key", () => {
    const event = {
      "partitionKey": ["27399629618101871061164714369415138889690993275437627420444094492320543272307283661358790533838050723166537248941870298278768240542968408532693894495600991462888770154271773743688518108469133360749226067433284253841524878382663213020300439013395051660095465213244114983915020095532593844192661702194876809221"]}
      const response = deterministicPartitionKey(event);
      expect(response).toHaveLength(128)
  })
});