import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../pages";

const { container, getByRole } = render(<Home />);

test("has an h1", () => {
  expect(getByRole("heading", { level: 1, name: /nicholas devries/i })).toBeDefined();
});

test("has social links", () => {
  expect(getByRole("link", { name: /github/i })).toBeDefined();
  expect(getByRole("link", { name: /linkedin/i })).toBeDefined();
});

test("matches snapshot", () => {
  expect(container).toMatchSnapshot();
});
