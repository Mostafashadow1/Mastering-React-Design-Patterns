### **3. Container-Presentational Pattern**

#### Description:

Separates UI logic from business logic by creating **container components** (handle state and logic) and **presentational components** (focus solely on rendering UI).

#### Benefits:

- Encourages single-responsibility principle.
- Simplifies component reusability and unit testing.
- Facilitates team collaboration by distinguishing responsibilities.

#### Example in Real Tools:

- **Redux with React:** Containers are connected to the store (e.g., `mapStateToProps`), while presentational components are purely functional and unaware of the state.
