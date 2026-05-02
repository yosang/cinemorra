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
- `sonner` - Toast component library.

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
- `eslint-plugin-jsx-a11y` - Accessibility rules linting library.

# Author
[Yosmel Chiang](https://github.com/yosang)

