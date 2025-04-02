import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import lifeQuotes from "../utilities";

describe("App Component", () => {
  it("Renders life quotes with buttons and quotes", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Life quotes app/i);
    const nextButton = screen.getByRole("button", { name: "Next" });
    const prevButton = screen.getByRole("button", { name: "Prev" });
    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });
  it("Renders the first quote in first render.", () => {
    const firstQuote = lifeQuotes[0].text;
    const firstQuoteBy = lifeQuotes[0].quotedBy;
    render(<App />);
    expect(screen.getByText(firstQuote)).toBeInTheDocument();
    expect(screen.getByText(`"${firstQuoteBy}"`)).toBeInTheDocument();
  });
  it("When next is clicked it displays item in next index", async () => {
    const user = userEvent.setup();
    render(<App />);
    const nextQuote = lifeQuotes[1].text;
    const nextQuoteBy = lifeQuotes[1].quotedBy;
    const nextButton = screen.getByRole("button", { name: "Next" });
    await user.click(nextButton);
    expect(screen.getByText(nextQuote)).toBeInTheDocument();
    expect(screen.getByText(`"${nextQuoteBy}"`)).toBeInTheDocument();
  });
  it("Should display previous when Prev button is clicked", async () => {
    const user = userEvent.setup();
    render(<App/>)
    const prevBtn = screen.getByRole("button", { name: "Prev" });
    const nextBtn = screen.getByRole("button", { name: "Next" });
    //get second quote in list
    const thirdQuote = lifeQuotes[2].text;

    //click to get to third quote in list
    user.click(nextBtn);
    user.click(nextBtn);
    user.click(nextBtn);

    //click to get back to third quote in the list
    await user.click(prevBtn);
    expect(screen.getByText(thirdQuote)).toBeInTheDocument();
  });
  it("Resets to first quote when reset is clicked", async () => {
    const user = userEvent.setup()
    render(<App/>)
    const resetBtn = screen.getByRole("button", {name: "Restore"})
    const firstQuote = lifeQuotes[0].text;
    
    user.click(resetBtn)
    expect(screen.getByText(firstQuote)).toBeInTheDocument()
  })
  
}); 
