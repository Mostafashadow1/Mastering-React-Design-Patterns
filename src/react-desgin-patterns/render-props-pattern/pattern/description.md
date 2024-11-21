### **8. Render Props Pattern**

#### Description:

A pattern where a component shares logic by providing a function (prop) that controls what to render. The parent component decides how the UI should look.

#### Benefits:

- Provides granular control over rendering logic.
- Enables sharing functionality without HOCs or hooks.
- Simplifies scenarios where UI needs to change based on logic.

#### Example in Real Tools:

- **React Motion:** Uses render props to allow custom animations for components.
