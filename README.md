# React Design Patterns Course

Welcome to the **React Design Patterns Course**! This repository accompanies a video playlist that covers essential design patterns in React, helping developers build clean, scalable, and maintainable code. Each pattern is designed to solve specific challenges commonly encountered in React applications.

## Introduction

This course dives into fundamental React patterns that can help streamline your codebase, reduce redundancy, and improve performance. Each pattern in this repository is paired with a code example that demonstrates both the **problem** and the **solution** that the pattern addresses.

## Patterns Covered

The following design patterns are included:

- **children-components-pattern**
- **Compound Components Pattern**
- **Container-Presentational Pattern**
- **Custom Hooks Pattern**
- **Error Boundaries Pattern**
- **Higher-Order Components (HOC)**
- **Portal Pattern**
- **Render Props Pattern**
- **Variant Props Pattern**

## How to Use This Repository

Each pattern has its own folder in the repository with:

- A **README.md** explaining the pattern and its use cases.
- **Code examples** that demonstrate both "bad" and "good" code.
- Explanations of the pattern's **benefits** and **limitations**.

For each section, follow along with the code examples, which mirror the structure and best practices discussed in the course.

## Getting Started

To run the examples locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/react-design-patterns.git
   cd react-design-patterns
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the project**:
   ```bash
   npm run Dev
   ```

Each pattern is contained in a separate component file for easy testing and learning.

## Patterns Overview

Below are brief explanations of each pattern and what it aims to solve. Each link takes you to a specific section in this repository for more details.

### 1. Children Components Pattern

The Children Components Pattern allows components to be more reusable by accepting children components that can be dynamically rendered. This helps reduce prop drilling and improves component flexibility.

### 2. Compound Components Pattern

Compound components allow a group of components to work together to achieve a single behavior. This is often used for building UI libraries where components need to be flexible and composable.

### 3. Container-Presentational Pattern

This pattern separates the "what" (UI) from the "how" (logic). The **Container** component manages the logic and state, while the **Presentational** component focuses purely on displaying data.

### 4. Custom Hooks Pattern

Custom hooks let you reuse logic across multiple components in a React application. This pattern promotes modularity and reusability, especially for data fetching, handling complex state, or encapsulating side effects.

### 5. Error Boundaries Pattern

Error boundaries catch JavaScript errors in components and display a fallback UI instead of crashing the application. This pattern is essential for robust error handling in production-grade applications.

### 6. Higher-Order Components (HOC)

A higher-order component (HOC) is a function that takes a component and returns a new component. This pattern is useful for reusing component logic, such as authentication or data-fetching concerns, across multiple components.

### 7. Portal Pattern

The Portal pattern allows you to render components outside the main DOM hierarchy. This is often useful for components like modals, tooltips, and dropdowns that need to overlay other UI elements.

### 8. Render Props Pattern

The Render Props pattern is a technique for sharing component logic through a function passed as a prop. It’s particularly useful when you want to avoid duplicating logic across different components.

### 9. Variant Props Pattern

This pattern provides a flexible way to manage multiple styles or configurations within a component. Instead of relying on multiple props, a single `variant` prop can be used to switch between styles or behaviors.

---

## 📚 Resources

- **React Documentation**: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **React Patterns**: [React Patterns Official Site](https://reactpatterns.com/)

---

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue with any improvements, additional examples, or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Happy coding and happy learning! 🚀
