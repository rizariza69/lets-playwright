import { test, expect } from "@playwright/test";

test.describe("Team Efficiency chart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      "https://telerik.github.io/kendo-react/react-coffeewarehouse/"
    );
  });

  test("Tooltip 'March 2020' is visible for each team", async ({ page }) => {
    const tooltip = page.locator(".k-chart-tooltip");

    const marchPoints = page.locator('g[aria-label*="Mar 2020"] circle');
    const pointHandles = await marchPoints.elementHandles();

    for (const point of pointHandles) {
      await point.hover({ force: true });
      await page.waitForTimeout(300);
      await expect(tooltip).toContainText(/March 2020/);
    }
  });
});
