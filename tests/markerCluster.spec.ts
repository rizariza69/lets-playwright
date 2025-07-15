import { test, expect } from "@playwright/test";

test("Drill down marker cluster in K-Means demo", async ({ page }) => {
  await page.goto("https://www.highcharts.com/docs/maps/marker-clusters");
  await page.waitForLoadState("domcontentloaded");

  const demoTitle = page.locator("text=Maps Optimized K-means algorithm");
  expect(demoTitle).toBeTruthy();

  const cookieBtn = page.locator("#hc-cookie-dialog-decline");
  if (await cookieBtn.isVisible()) {
    await cookieBtn.click();
  }

  const frame = page.frameLocator('iframe[src*="optimized-kmeans"]');

  const clusterMarker = frame
    .locator("g.highcharts-markers path.highcharts-cluster-point")
    .first();
  await clusterMarker.waitFor({ state: "visible" });

  await clusterMarker.click({ force: true });

  await page.waitForTimeout(1500);

  const allMarkers = frame.locator(
    "g.highcharts-markers path.highcharts-point"
  );
  const count = await allMarkers.count();
  expect(count > 5).toBeTruthy();

  const anyMarker = frame.locator(
    "g.highcharts-markers path.highcharts-point:not(.highcharts-cluster-point)"
  );
  await expect(anyMarker.first()).toBeVisible();

  const cluster = page.locator("//div[@class='col col--3']");
  await cluster.click();

  await page.waitForTimeout(2000);

  await expect(cluster).toBeVisible();
});
