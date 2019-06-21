# Auto save form

Form component that saves user's work in progress when filling a form.

Form works with generic entities.

- [x] Works with both adding and editing entities
- [x] Each user has his own "draft"
- [x] When loading the form, if draft data exists, it's displayed, otherwise latest version is used
- [x] Drafts are persisted to the mock backend
- [ ] When the user hits save, the draft is cleared and the changes are published for other uses to see as well
- [ ] Debounce saving the use changes
- [ ] Form validations
- [ ] Nice UI
- [ ] CRUD for other entity types - e.g. cases

App uses a mock backend to simulate talking to a real backend API.
