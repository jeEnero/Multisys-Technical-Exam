# Playwright Test Automation Suite (UI & API Testing)

A robust, maintainable, and modular test automation suite built with **Playwright (TypeScript)** 

---

---

## 🛠️ Framework Structure and Design

| Element | Description |
| :--- | :--- |
| **Framework Used** | **Playwright with TypeScript and Node.js**<br>- Chosen for its modern architecture, fast execution, native auto-waiting capabilities, and built-in support for both UI and API testing. |
| **Design Pattern** | **Page Object Model (POM) & Service Object Pattern**<br>- Encapsulates page elements, locators, and UI/API actions into dedicated Page and Service classes (e.g., `CheckboxStatePage`, `UsersApiService`) to separate test logic from automation mechanics, ensuring high maintainability and code reusability. |
| **Test Data Handling** | **Modular Constants & Inline Test Payloads**<br>- UI locators and selectors are centralized in dedicated locator files (e.g., `checkboxInteractionLocators`). Test-specific payloads (such as user creation data for POST requests) are managed cleanly within the test blocks or structured TypeScript objects. |
| **Reporting Tool** | **Playwright Built-in HTML Reporter**<br>- Utilizes `@playwright/test`'s native HTML reporting tool (`npx playwright show-report`) which captures detailed test execution steps, trace logs, screenshots, and error context for failed assertions. |

---



## 🚀 Tech Stack
- **Test Framework:** Playwright (`@playwright/test`)
- **Language:** TypeScript / Node.js
- **Design Pattern:** Page Object Model (POM) & Service Object Pattern

---

## 📂 Project Structure

```text
Playwright-Multisys/
├── .github/
├── locators/                      # Centralized UI locators/selectors
│   ├── checboxInteraction.ts
│   ├── dynamicContentLocators.ts
│   └── loginLocators.ts
├── node_modules/
├── pages/                         # Page Objects & API Service classes
│   ├── ApiPage.ts
│   ├── CheckboxState.ts
│   ├── dynamicContent.ts
│   └── loginPage.ts
├── playwright-report/             # Generated HTML test reports
│   └── index.html
├── test-results/                  # Trace logs, videos, and screenshots on failure
├── tests/                         # Test specification files
│   ├── api.spec.ts
│   ├── checkboxes.spec.ts
│   ├── dynamic-content.spec.ts
│   └── login.spec.ts
├── Util/                          # Helper and utility files
│   ├── checboxInteractionUtil.ts
│   ├── dynamicContentUtil.ts
│   └── loginUtil.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts           # Playwright global configuration file
└── README.md

Test Scenarios Covered
Login & Dynamic Content (http://the-internet.herokuapp.com/)

Verifies user authentication and dynamic content page behaviors.

Checkboxes Interaction (http://the-internet.herokuapp.com/checkboxes)

Verifies default checked/unchecked states and interactive modifications.

API Endpoint Validation (https://jsonplaceholder.typicode.com/users)

GET Request (Success): Validates 200 OK status, array schema, and nested JSON properties.

GET Request (Single Resource): Validates specific user retrieval by ID.

POST Request (Data Creation): Validates 201 Created status and response payload creation with a unique ID.

Prerequisites & Installation
Make sure you have Node.js installed on your machine.

How to Run Tests

npx playwright test

Run a specific test file:

npx playwright test tests/checkboxes.spec.ts

npx playwright test tests/api.spec.ts

View Playwright HTML Test Report:

npx playwright show-report

