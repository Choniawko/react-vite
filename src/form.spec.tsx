import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "@testing-library/react";
import { server } from "../util-mocking/server";
import { Form } from "./form";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: JSX.Element }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Form", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Form id="1" />, { wrapper });
    expect(baseElement).toBeTruthy();
  });
  it("should have label named name", async () => {
    render(<Form id="1" />, { wrapper });
    const label = await screen.findByText(/name/i);
    expect(label).toBeDefined();
  });
});
