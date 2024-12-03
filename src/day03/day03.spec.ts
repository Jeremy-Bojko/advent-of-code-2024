import { checkInstruction, extractDigit, ignoreDontData } from "./main";

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
  it("should return correct operation", () => {
    const instructionInput = "don't()";
    const instructionOutput: string[] = ["don't()"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "don't()dezdzdo()";
    const instructionOutput: string[] = ["don't()", "do()"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "don't()demul(42,8)zdzdo()";
    const instructionOutput: string[] = ["don't()", "mul(42,8)", "do()"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should return correct operation", () => {
    const instructionInput = "mul(42,8)don't()demul(42,8)zdzdo()mul(42,8)";
    const instructionOutput: string[] = ["mul(42,8)", "don't()", "mul(42,8)", "do()", "mul(42,8)"];
    expect(checkInstruction(instructionInput)).toEqual(instructionOutput);
  });
  it("should ignore 'don't' instructions ", () => {
    // const instructionInput = ["mul(42,8)", "don't()", "mul(42,8)", "do()", "mul(42,8)"];
    const instructionInput = ["mul(42,8)", "don't()", "mul(42,8)", "mul(8,42)"];
    const instructionOutput: string[] = ["mul(42,8)"];
    expect(ignoreDontData(instructionInput)).toEqual(instructionOutput);
  });
  it("should ignore 'don't' instructions ", () => {
    const instructionInput = ["mul(42,8)", "don't()", "mul(42,8)", "do()", "mul(42,842)"];
    const instructionOutput: string[] = ["mul(42,8)", "do()", "mul(42,842)"];
    expect(ignoreDontData(instructionInput)).toEqual(instructionOutput);
  });
});
