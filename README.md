

### ✅ `README.md`

```md
# SWIFT Dashboard – Front-End Internship Assignment

This is a React-based dashboard project built for the **SWIFT Front-End Internship Assignment**.  
It demonstrates UI development, data handling from APIs, routing, custom pagination, sorting, search, theming, and dynamic profile view.

---

## 🚀 Features

- 🔗 **Routing** between Dashboard and Profile pages
- 📋 **Dashboard Page**:
  - Loads 500 records from dummy comments API
  - Custom **pagination** (10, 50, 100 records/page)
  - **Partial search** by name or email
  - **Sorting** on Post ID, Name, and Email (cyclic: none → asc → desc)
- 👤 **Profile Page**:
  - Displays selected comment details dynamically
  - Auto-generated avatar via `ui-avatars.com`
- 🌙 **Light/Dark Theme Toggle** with persistence
- 📱 **Responsive layout**, cross-browser compatible
- 💾 Local storage used to remember UI preferences

---

## 🛠️ Tech Stack

- React (CRA)
- React Router DOM
- Plain JavaScript
- Custom CSS (no UI libraries)
- Dummy API: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

---

## 📦 Folder Structure

```
---
src/
├── components/         # Reusable UI components (Header, Pagination, etc.)
├── pages/              # Profile and Dashboard pages
├── styles/             # CSS for layout and theming
├── utils/              # LocalStorage helper (optional)
├── App.jsx             # Routes setup
└── index.js
---
````

---

## ▶️ Run Locally

```bash
git clone https://github.com/GopalChinta/SWIFT_Dashboard.git
cd SWIFT_Dashboard
npm install
npm start
````

---

## 🔗 APIs Used

* Comments: `https://jsonplaceholder.typicode.com/comments`
* Users: `https://jsonplaceholder.typicode.com/users`
* Avatar: `https://ui-avatars.com/api`

---

## ✅ Status

> ✅ All features implemented as per assignment instructions
> ✅ Mobile-friendly, clean UI
> ✅ Functional across Chrome, Edge, and Firefox

---

## 🙌 Author

**Gopal Chinta**
[GitHub Profile](https://github.com/GopalChinta)

````

---

### ✅ To Push It:

1. Create the file:
```bash
touch README.md
````

2. Paste the content above into it.

3. Then push:

```bash
git add README.md
git commit -m "Add README"
git push origin master
```

---


