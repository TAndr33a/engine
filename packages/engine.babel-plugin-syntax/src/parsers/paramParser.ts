import type * as Babel from "@babel/core";
import {
  OperationTypes,
  StructOperation,
  ValueTypes,
  ValueOperation,
} from "@c11/engine.types";
import { processParamValue } from "./valueParser";

type ShortHandVariant = (
  | Babel.types.Pattern
  | Babel.types.Identifier
  | Babel.types.RestElement
)[];

type ExtendedVariant = Babel.types.ObjectPattern;

export const paramParser = (
  babel: typeof Babel,
  param: ShortHandVariant | ExtendedVariant
): StructOperation => {
  const t = babel.types;
  if (!param) {
    return {
      type: OperationTypes.STRUCT,
      value: {},
      meta: {},
    };
  }

  const parseIdentifier = (node: Babel.types.Identifier) => {
    const propName = node.name;
    const propValue = {
      type: OperationTypes.VALUE,
      value: {
        type: ValueTypes.EXTERNAL,
        path: [propName],
      },
    } as ValueOperation;
    return { propName, propValue };
  };

  const parseAssignmentPattern = (node: Babel.types.AssignmentPattern) => {
    const left = node.left as Babel.types.Identifier;
    const propName = left.name;
    const propValue = processParamValue(babel, node);
    return { propName, propValue };
  };

  let result;
  if (t.isObjectPattern(param)) {
    result = param.properties.reduce(
      (acc, x, idx) => {
        if (t.isObjectProperty(x)) {
          if (t.isIdentifier(x.value)) {
            const { propName, propValue } = parseIdentifier(x.value);
            acc.value[propName] = propValue;
          } else if (t.isAssignmentPattern(x.value)) {
            const { propName, propValue } = parseAssignmentPattern(x.value);
            if (propValue) {
              acc.value[propName] = propValue;
            } else {
              throw new Error(
                "Property " + propName + " could not be processed."
              );
            }
          } else {
            console.log("Not object property", x);
          }
        } else if (t.isRestElement(x)) {
          throw new Error("Rest operator is not supported.");
        }
        return acc;
      },
      {
        type: OperationTypes.STRUCT,
        value: {},
      } as StructOperation
    );
  } else {
    result = param.reduce(
      (acc, x, idx) => {
        if (t.isIdentifier(x)) {
          const { propName, propValue } = parseIdentifier(x);
          acc.value[propName] = propValue;
        } else if (t.isAssignmentPattern(x)) {
          const { propName, propValue } = parseAssignmentPattern(x);
          if (propValue) {
            acc.value[propName] = propValue;
          } else {
            throw new Error(
              "Property " + propName + " could not be processed."
            );
          }
        } else {
          console.log("Not a valid member", x);
        }
        return acc;
      },
      {
        type: OperationTypes.STRUCT,
        value: {},
      } as StructOperation
    );
  }

  return result;
};
