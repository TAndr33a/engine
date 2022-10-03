import React from "react";
import ReactDOM from "react-dom";
import { waitFor, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { adaptor } from "../src";

const nextTick = process.nextTick;
const flushPromises = () => {
  return new Promise(nextTick);
};
jest.useFakeTimers({
  doNotFake: ["nextTick"],
});

beforeEach(() => {
  document.body.innerHTML = "";
});

test("should support adaptor functionality", async () => {
  const rootEl = document.createElement("div");
  rootEl.setAttribute("id", "root");
  document.body.appendChild(rootEl);
  const Component: view = ({ value = observe[prop.name] }) => {
    return <div data-testid="foo">{value}</div>;
  };
  const App = adaptor(Component, {}, { state: { foo: 123 } });
  const Component2 = () => {
    return (
      <div>
        <App name="foo" />
      </div>
    );
  };
  ReactDOM.render(<Component2 />, rootEl);
  jest.runAllTimers();
  await flushPromises();
  await waitFor(() => getByTestId(document.body, "foo")).then((x) => {
    expect(parseInt(x.innerHTML)).toBe(123);
  });
});
