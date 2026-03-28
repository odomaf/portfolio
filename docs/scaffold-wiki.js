import "dotenv/config"; // Loads .env automatically (shorthand for ES modules)
import simpleGit from "simple-git";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// ==== CONFIGURATION ==== //
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_PAT = process.env.GITHUB_PAT;
const WIKI_REMOTE = `https://${GITHUB_USERNAME}:${GITHUB_PAT}@github.com/odomaf/portfolio.wiki.git`;
const TEMP_DIR = path.join(__dirname, "temp_wiki");

const pages = {
  "Home.md": `# Portfolio Documentation

Welcome to the project wiki for **Portfolio**!

## Overview

_A short summary of what your project does and its main goals._

## Table of Contents

- [Getting Started](Getting-Started)
- [Requirements](Requirements)
- [Architecture & Design](Architecture-&-Design)
- [Development Guide](Development-Guide)
- [How-To Guides](How-To-Guides)
- [FAQ](FAQ)
- [Changelog](Changelog)

---

_Quick links to important pages or external resources:_

- [Repository](https://github.com/odomaf/portfolio)
- [Issues](https://github.com/odomaf/portfolio/issues)
- [Pull Requests](https://github.com/odomaf/portfolio/pulls)
`,
  "Getting-Started.md": `# Getting Started

This page helps you set up, build, and run the project.

## Prerequisites

- List required software (Node.js, Python, etc.)
- How to install dependencies

## Installation

\`\`\`sh
# Example
git clone https://github.com/odomaf/portfolio.git
cd portfolio
npm install
\`\`\`

## Running the Project

- How to run locally (commands, settings)
- Optional: how to run tests

## Usage

_Brief intro to using the application. Screenshots optional._
`,
  "Requirements.md": `# Requirements

Summary of needs and goals for the project.

- [Business Requirements](Business-Requirements)
- [Functional Requirements](Functional-Requirements)
- [Non-Functional Requirements](Non-Functional-Requirements)
- [User Stories](User-Stories)
`,
  "Business-Requirements.md": `# Business Requirements

_Describe the goals from a business/user perspective._

- Enable X users to do Y thing
- Support feature Z to solve P problem
`,
  "Functional-Requirements.md": `# Functional Requirements

| Requirement ID | Description | Priority | Status |
|----------------|-------------|----------|--------|
| FR-1 | System shall... | High | In Progress |
| FR-2 | User can...      | Medium | Planned   |

_Add as many as needed. Use clear, testable statements._
`,
  "Non-Functional-Requirements.md": `# Non-Functional Requirements

| Type           | Requirement                             |
|----------------|-----------------------------------------|
| Performance    | Response time under 500ms for X action. |
| Security       | Passwords stored hashed and salted.      |
| Scalability    | Handle 1000+ concurrent users.          |
| Reliability    | 99.9% uptime per month.                 |
`,
  "User-Stories.md": `# User Stories

| As a ... | I want to ...     | So that ...         |
|----------|-------------------|---------------------|
| User     | log in            | I can access my ... |
| Admin    | view analytics    | analyze performance |

_Add or expand as flows evolve._
`,
  "Architecture-&-Design.md": `# Architecture & Design

## High-Level Architecture

_Describe the system’s main components. Include diagrams or images if available._

## Technical Stack

| Layer       | Technology          |
|-------------|--------------------|
| Frontend    | (e.g., React)      |
| Backend     | (e.g., Node.js)    |
| Database    | (e.g., PostgreSQL) |
| CI/CD       | (e.g., GitHub Actions) |

## Data Models

_Add entity-relationship diagrams or tables for main data objects._

## API Documentation

| Endpoint    | Method | Purpose      |
|-------------|--------|-------------|
| \`/api/foo\`  | GET    | Get foos    |

_Example request/response payloads as needed._
`,
  "Development-Guide.md": `# Development Guide

## Contributing

- How to fork, create branches, make PRs
- Branch naming conventions

## Code Standards

- Style guides (e.g., Prettier, ESLint)
- Linting rules

## Testing

- How to run tests
- Writing new tests

## CI/CD

- How build/test/deploy pipelines work
- Links to workflow files or pipeline dashboards
`,
  "How-To-Guides.md": `# How-To Guides

*Brief step-by-step walkthroughs for common tasks or advanced features.*

- [How to Add a New Feature](How-to-Add-a-New-Feature)
- [How to Report a Bug](How-to-Report-a-Bug)

---

## Example: How to Add a New Feature

1. Branch from \`main\`.
2. Describe your changes in an issue/PR.
3. Submit a PR following [Contribution Guidelines](Development-Guide).
`,
  "FAQ.md": `# Frequently Asked Questions

**Q: How do I contribute?**  
A: See [Development Guide](Development-Guide).

**Q: Who maintains this project?**  
A: [@odomaf](https://github.com/odomaf)
`,
  "Changelog.md": `# Changelog

## [v1.0.0] - YYYY-MM-DD

- Initial release.

## [Unreleased]

- Planned enhancements.
`,
};

(async () => {
  // Clean temp dir
  await fs.remove(TEMP_DIR);
  await fs.ensureDir(TEMP_DIR);

  const git = simpleGit();

  // Clone wiki
  await git.clone(WIKI_REMOTE, TEMP_DIR);

  // Write all markdown files
  for (const [name, content] of Object.entries(pages)) {
    await fs.writeFile(path.join(TEMP_DIR, name), content.trim());
  }

  // Commit & push
  const wikiGit = simpleGit(TEMP_DIR);
  await wikiGit.add(".");
  await wikiGit.commit("Scaffold wiki pages with starter templates");
  await wikiGit.push();

  console.log("Wiki scaffolded successfully!");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
