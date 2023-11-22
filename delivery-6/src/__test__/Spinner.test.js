import React from "react";
import renderer from "react-test-renderer";
import Spinner from "../components/Spinner";

test("snapshot", () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="css-1kkstn9"
    />
  `);
});
