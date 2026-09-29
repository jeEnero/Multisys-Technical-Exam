# Playwright E2E Testing with GitHub Actions

End-to-end testing project built with Playwright and TypeScript.

## What This Project Covers

- TodoMVC user journey testing
- Adding multiple todo items
- Completing todo items
- Active and Completed filters
- UI assertions and CSS class validation
- Automated test execution with GitHub Actions
- Headless browser execution in CI
- Playwright HTML test reports
- CI retries for failed tests

## Tech Stack

- Playwright
- TypeScript
- GitHub Actions
- Node.js
- Git

## Test Scenario

The automated test covers the following user journey:

1. Add three todo items
2. Verify the todo count
3. Mark one todo as completed
4. Verify the completed CSS state
5. Filter by Active todos
6. Verify the correct active items
7. Filter by Completed todos
8. Verify the correct completed item

## CI/CD

Tests are automatically executed through GitHub Actions when changes are pushed to the `main` branch.

The CI workflow:

```text
Push to main
    ↓
GitHub Actions
    ↓
Install dependencies
    ↓
Install Playwright browsers
    ↓
Run E2E tests
    ↓
Generate HTML report
