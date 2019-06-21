# Auto save form

Form component that saves user's work in progress when filling a form.

Form works with generic entities.

- Works with both adding and editing entities
- Each user has his own "draft"
- When loading the form, if draft data exists, it's displayed, otherwise latest version is used
- When the user hits save, the draft is cleared and the changes are published for other uses to see as well

App uses a mock backend to simulate talking to a real backend API.