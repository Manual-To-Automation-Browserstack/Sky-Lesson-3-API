const {test, expect } = require('@playwright/test');

const REPO = 'some-repo';
const USER = 'garyb-bs';

// This code will execute before 
test.beforeAll(async ({ request }) => {
  // Create a new repository
  const response = await request.post('/user/repos', {
    data: {
      name: REPO
    }
  });
  expect(response.ok()).toBeTruthy();
});

test('should create a bug report', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: 'A generic bug',
      body: 'This is a bug description.',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: 'A generic bug',
    body: 'This is a bug description.'
  }));
});

test('should create a feature request', async ({ request }) => {
  const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
    data: {
      title: 'Shiny New Feature',
      body: 'This feature will be great',
    }
  });
  expect(newIssue.ok()).toBeTruthy();

  const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
  expect(issues.ok()).toBeTruthy();
  expect(await issues.json()).toContainEqual(expect.objectContaining({
    title: 'Shiny New Feature',
    body: 'This feature will be great'
  }));
});

test('The UI should display the bug and feature', async ({ page }) => {
  await page.goto(`https://github.com/${USER}/${REPO}/issues`);
  const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
  await expect(firstIssue).toHaveText('Shiny New Feature');
});

// test.afterAll(async ({ request }) => {
//   // Delete the repository
//   const response = await request.delete(`/repos/${USER}/${REPO}`);
//   expect(response.ok()).toBeTruthy();
// });