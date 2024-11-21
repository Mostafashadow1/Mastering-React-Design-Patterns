### **2. Compound Components Pattern**

#### Description:

In this pattern, multiple components work together as a cohesive unit. A parent component acts as a controller, while its child components interact with shared state and context.

#### Benefits:

- Enhances readability and modularity of complex UIs.
- Allows flexible APIs by exposing components for customization.
- Reduces the need for prop drilling through the use of React Context.

#### Example in Real Tools:

- **React Select:** Components like `<Select>`, `<Option>`, and `<Menu>` interact seamlessly while sharing state via context.
