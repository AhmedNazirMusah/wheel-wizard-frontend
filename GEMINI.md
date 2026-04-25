# Wheel Wizard Frontend

## Project Overview
This is a React-based frontend for a car reservation system called "Wheel Wizard". It uses Redux for state management and interacts with a backend API for cars, reservations, and user authentication.

## Technical Stack
- **Frontend:** React, Redux, React Router
- **State Management:** Redux (with `configureStore.js`, types, and various slices in `src/redux/`)
- **Styling:** CSS (separate `.css` files for components and pages)
- **API Interaction:** Axios (implied by `src/APIs/`)
- **Testing:** Jest/React Testing Library (implied by `src/tests/` and snapshots)
- **Linting:** ESLint, Stylelint

## Conventions & Standards
- Follow the existing project structure: components in `src/components/`, pages in `src/pages/`, Redux logic in `src/redux/`, and API calls in `src/APIs/`.
- Adhere to the existing styling patterns (one CSS file per component/page).
- Maintain type safety and consistent naming conventions.
- Ensure all new features or bug fixes are accompanied by tests in the `src/tests/` directory.

## Development Workflow
1. **Research:** Understand the current implementation and dependencies.
2. **Strategy:** Plan the changes and testing approach.
3. **Execution:** Apply surgical updates and verify with tests and linting.
4. **Validation:** Ensure the system's integrity and adherence to standards.
