[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Rq9wqpLb)

# Noroff
## Back-end Development Year 2
### FTS - Course Assignment

Repository for Noroff back-end development 2 - FTS course.

Instruction for the course assignment is in the LMS (Moodle) system of Noroff.
https://lms.noroff.no



You will not be able to make any submission after the deadline of the course assignment. Make sure to make all your commit **BEFORE** the deadline

![](http://images.restapi.co.za/pvt/help_small.png)

If you are unsure of any instructions for the course assignment, contact your teacher on **Microsoft Teams**.

**REMEMBER** Your Moodle LMS submission must have your repository link **AND** your Github username in the text file.

---

# Installation & Usage

This application was built using Node version `v22.22.0` with npm version `10.9.4`.

1. Clone the project with `git clone https://github.com/noroff-backend-2/aug25-fts-ca-yosang-2`.
2. Change directory with the command `cd fet-module-5-assignment/`.
3. Copy the env example with `cp .env.example .env`.
4. Add the backend API url for movies to the variable `BASE_API`.
5. Install dependencies with `npm install`.
6. I recommend building the application before running it for development, this will allow the compiler to lint and catch any typing issues, build with `npm run build`.
7. Run the application with either `npm run dev` or `npm run dev-turbo`.
    - The turbo alternative provides a faster load and better performance, although the feature might not be fully compatible, I recommend running without it first to stress test the application the use turbo as an alternative.

# Additional Packages & Libraries

## Dependencies
- `yosang/ui` - A very minimaltistic component library made with react JSX components by myself, with a simple `du -sh @yosang/ui` we can see its only 8 MB of size. Its written in typescript, but does not currently provide types. Im declaring the types locally for the time being.
- `lucide-react` - Icon library.
- `next` - Fullstack React framework.
- `react` - SPA react library.
- `react-dom` - React DOM library.

## Development dependencies

- `@testing-library/jest-dom` - Extension of the jest matchers.
- `@testing-library/react` - Testing library for react components.
- `@types/jest` - Types for jest globals.
- `@types/node` - Types for node globals.
- `@types/react` - Types for react.
- `@types/react-dom` - Types for react dom.
- `eslint` - Syntax rules and tooling.
- `jest` - Test runner.
- `jest-environment-jsdom` - A javascript DOM, required when using `@testing-library.`
- `typescript` - Type safety superset of javascript.

# Author
[Yosmel Chiang](https://github.com/yosang)

