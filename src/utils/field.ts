import SQLReturnRowInterface from "../schemas/SQLRowInterface.type";

const isMatchFieldsExpectation = <T extends SQLReturnRowInterface>(
  actual: T[],
  expected: T,
): boolean =>
  Object.keys(expected).every((key) =>
    actual.every((obj) => obj[key] !== undefined),
  ) &&
  actual.every((obj) =>
    Object.keys(obj).every((key) => expected[key] !== undefined),
  );

export default isMatchFieldsExpectation;
