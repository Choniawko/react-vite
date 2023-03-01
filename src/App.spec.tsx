import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: JSX.Element }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("App", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<App />, { wrapper });
    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    const { getByText } = render(<App />, { wrapper });
    expect(getByText(/Hello App!/gi)).toBeTruthy();
  });
});
