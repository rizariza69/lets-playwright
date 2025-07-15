import { test, expect } from "@playwright/test";

test.describe("Finance Portfolio QA Test", () => {
  test("Add new stock item to Stock List (e.g: Intel Corporation)", async ({
    page,
  }) => {
    await page.goto(
      "https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/#/stocks"
    );
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);
    const addNewButton = page.locator(
      '//span[contains(@class, "k-input-inner") and text()="Add new"]'
    );
    await addNewButton.waitFor({ state: "visible" });
    await addNewButton.click();

    const intelOption = page.locator(
      'li[role="option"]:has-text("Intel Corporation")'
    );
    await intelOption.waitFor({ state: "visible" });
    await intelOption.click();

    await expect(page.locator("tbody")).toContainText("INTC");
  });

  test("Clicking Export to PDF", async ({ page }) => {
    await page.goto(
      "https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/#/virtualized"
    );
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    const PDFButton = page.locator('//span[normalize-space()="Export to PDF"]');
    await PDFButton.waitFor({ state: "visible" });
    await PDFButton.click();

    await page.waitForTimeout(2000);
    await expect(PDFButton).toBeVisible();
  });

  test("Click Collapse detail row +", async ({ page }) => {
    await page.goto(
      "https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/#/virtualized"
    );
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    const collapseButton = page.locator(
      '//tbody/tr[2]/td[2]/a[1]/span[1]//*[name()="svg"]'
    );
    await collapseButton.waitFor({ state: "visible" });
    await collapseButton.click();

    await page.waitForTimeout(2000);
    const tableExpand = page.locator('//span[contains(text(),"productID")]');
    await expect(tableExpand).toBeVisible();
  });

  test("Clicking Export to Excel)", async ({ page }) => {
    await page.goto(
      "https://telerik.github.io/kendo-react/kendo-react-finance-portfolio/#/virtualized"
    );
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);

    const ExcelButton = page.locator(
      '//span[normalize-space()="Export to Excel"]'
    );
    await ExcelButton.waitFor({ state: "visible" });
    await ExcelButton.click();

    await page.waitForTimeout(2000);
    await expect(ExcelButton).toBeVisible();
  });
});
