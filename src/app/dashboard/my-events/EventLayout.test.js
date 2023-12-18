import { render, fireEvent } from "@testing-library/react";
import Page from "./page";
import * as EventService from "@/services/EventService";
import { act } from "react-test-renderer";
import Layout from "./layout";

describe("Dashboard my events page component", () => {
  let mockEventsService;

  beforeEach(() => {
    mockEventsService = jest.spyOn(EventService, "createdEvents");
    mockEventsService.mockResolvedValue([]);
  });

  afterEach(() => {
    mockEventsService.mockRestore();
  });

  it("Test fetch in layout", async () => {
    // prettier-ignore
    render(await Layout());

    expect(mockEventsService).toHaveBeenCalled();
  });
});
