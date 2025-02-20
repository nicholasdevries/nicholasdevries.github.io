import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Image } from "../components/Image";

test("renders as an img", () => {
  const { getByRole } = render(<Image src="/mock.jpg" alt="mock image" width={100} height={100} />);
  expect(getByRole("img", { name: /mock image/i })).toBeDefined();
});
