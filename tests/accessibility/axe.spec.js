import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/',
  '/about',
  '/research',
  '/publications',
  '/software',
  '/team',
  '/facilities/dial',
  '/give',
];

for (const route of routes) {
  test(`${route} passes WCAG 2.2 AA`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    if (results.violations.length) {
      console.log(
        `\n${route} violations:`,
        JSON.stringify(
          results.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.length,
          })),
          null,
          2
        )
      );
    }
    expect(results.violations).toEqual([]);
  });
}
