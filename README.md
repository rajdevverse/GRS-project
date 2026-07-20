# LNMU Grievance Redressal Portal (React + Bootstrap 5)

Plain JavaScript React (.jsx), Bootstrap 5, Bootstrap Icons, React Router.
No TypeScript, no Tailwind.

## Run locally

```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Pages
- `/` — Home
- `/admin-login` — Admin Login
- `/user-login` — User Login
- `/user-register` — User Registration (2-step form)

## Notes
- Forms are wired to React state but don't call a backend yet — hook up
  your API inside the `handleSubmit` functions in `src/pages/`.
- Custom gradients/shadows live in `src/index.css`; everything else is
  Bootstrap 5 utility classes.
