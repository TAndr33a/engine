import pluginTester from "babel-plugin-tester";
import prettier from "prettier";
import plugin from "../src";
import config from "./babelConfig.json";

/*
const b: producer = update.foo.bar[param.foo].baz.set(
  ({
    id = observe.selectedId,
    x = observe.foo.bar[arg.id].boo[param.foo].baz,
  }) => {
    if (x > 10) {
      // do some more processing
      return "foo";
    } else {
      // other processing
      return "bar";
    }
  },
  {
    foo: observe.selectedId,
    bar: 123,
  }
);

const bCompiled: producer = ({
  _update = update.foo.bar[param.foo].baz,
  id = observe.selectedId,
  x = observe.foo.bar[arg.id].boo,
  foo = observe.foo,
  params = { foo: observe.foo.bar, bar: 123 },
}) => {
  const fn = () => {
    return x + foo + id;
  };
  try {
    _update.set(fn(), params);
  } catch (e) {
    // ignore
  }
};

/*
const b: producer = ({
  a1 = observe.something.selectedId,
  updateFoo = update.foo.bar[arg.a1].baz,
  x = observe.foo.bar[arg.a1].boo,
}) => {
  updateFoo.set(x + 10);
};

const b: producer = update.foo.bar[param.id].baz.set(
  (x = observe.foo.bar[param.id].boo) => x + 10,
  {
    id: observe.something.selectedId,
  }
);

const c: producer = ({
  selectedId = observe.something.selectedId,
  updateFoo = update.foo.bar[arg.selectedId].baz,
  x = observe.foo.bar[arg.selectedId].boo,
}) => {
  updateFoo.set(x + 10);
};

const d: producer = update.foo[wildcard.id].summary.set(
  (x = observe.foo[wildcard.id].title) => x.substr(0, 100)
);

const e: producer = update.foo[wildcard.id].flag.set(123);

const b: producer = update.foo.bar[param.id].baz.merge(observe.foo.bar, { id: observe.foo });
*/

pluginTester({
  plugin,
  babelOptions: { filename: __filename, ...config },
  formatResult: (result: any) => {
    result = result.replace(
      /buildId:\s?\"[a-zA-Z_]+\"/g,
      `buildId:"unique_id"`
    );
    return prettier.format(result, {
      parser: "babel",
    });
  },
  pluginName: "engine.babel-plugin-syntax",
  tests: {
    "should compile a producer": {
      code: `
      const foo: producer = ({ foo = observe.foo }) => {}
      `,
      snapshot: true,
    },
    "should support simple prop params": {
      code: `
        const foo: producer = ({ prop }) => {}
      `,
      snapshot: true,
    },
    "should support props arguments for passthrough": {
      code: `
        const foo: producer = (props) => {}
      `,
      snapshot: true,
    },
    "should throw if not given an arrow function": {
      code: `const foo: producer = 123`,
      error: true,
    },
    "should throw an error if it is not invoked with an arrow function": {
      code: `
        const result: producer = {
          foo = '123'
        }
      `,
      error: true,
    },
    "should support short hand syntax with multiple args": {
      only: true,
      code: `
        const foo: producer = update.foo.bar.baz.set(
          ({ t, x = observe.foo.bam, z = observe.bam.bam.bam }) => x + z
        );
      `,
      snapshot: true,
    },
  },
});
