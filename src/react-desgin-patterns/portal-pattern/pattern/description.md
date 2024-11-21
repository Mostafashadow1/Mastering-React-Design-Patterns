### **7. Portal Pattern**

#### Description:

Portals allow rendering children into a DOM node outside of the parent component's DOM hierarchy, while preserving React's context.

#### Benefits:

- Useful for modals, tooltips, and dropdowns that need to escape parent CSS constraints.
- Improves accessibility by rendering directly into the document body.
- Retains component's internal state and context.

#### Example in Real Tools:

- **Material-UI Dialog:** Uses portals for modals to render them outside the main DOM tree.
