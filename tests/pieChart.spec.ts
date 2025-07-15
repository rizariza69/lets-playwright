import { test, expect } from "@playwright/test";

const PIE_CHART_URL =
  "https://www.telerik.com/kendo-react-ui/components/charts/series-types/pie";

test.describe("Telerik KendoReact Pie Chart Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PIE_CHART_URL);
  });

  test("should load pie chart page successfully", async ({ page }) => {
    await expect(page).toHaveTitle(
      "React Charts Series Types Pie - KendoReact"
    );

    await expect(page.locator("body")).toBeVisible();
  });

  test("should load pie chart successfully", async ({ page }) => {
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("//body//my-app")).toBeTruthy();
  });
});
