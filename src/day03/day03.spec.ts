import { checkInstruction, extractDigit } from "./main";

describe("Day 3", () => {
  it("should return correct operation", () => {
    const instructionInput = "mul(11,8)";
    const instructionOutput = ["mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });

  it("should return correct operation", () => {
    const instructionInput = "mul(11,8),mul(11,8)";
    const instructionOutput = ["mul(11,8)", "mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });

  it("should return correct operation", () => {
    const instructionInput = "mul(11,8)edezmul(11,8)";
    const instructionOutput = ["mul(11,8)", "mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mul(1e1,8)edezmul(11,8)";
    const instructionOutput = ["mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mule(11,8)edezmul(11,8)";
    const instructionOutput = ["mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mul(42,00008)dzdeidzmul(àmule(11,8)edezmul(11,8)";
    const instructionOutput = ["mul(42,00008)", "mul(11,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mul(42,00008)dzdeidzmul(àmule(11,8)edezmul(11,8d)";
    const instructionOutput = ["mul(42,00008)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mul(42,0000d8)dzdeidzmul(àmule(11,8)edezmul(11,8d)";
    const instructionOutput: string[] = [];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should extract digit", () => {
    const instructionInput = "mul(42,00008)";
    const instructionOutput = [42, 8];
    expect(extractDigit(instructionInput)).toEqual(instructionOutput);
  });

  it("should extract digit", () => {
    const instructionInput = "mul(42,8)";
    const instructionOutput = [42, 8];
    expect(extractDigit(instructionInput)).toEqual(instructionOutput);
  });
});
