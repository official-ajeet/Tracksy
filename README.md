# 🚀 Tracksy – Employee Task Management System

Tracksy is a lightweight, frontend-only task management web app built with **React** and **Tailwind CSS**. It allows admins to assign tasks to employees and track their progress in real-time — all managed locally through browser storage (`localStorage`).

---

## 🌐 Live Demo

👉 [Visit Tracksy on GitHub Pages](https://official-ajeet.github.io/tracksy)

---

## 🧠 Features

### 👤 Login
- Separate login for **Admin** and **Employees**
- Session management via **React Context (AuthContext)**

### 👨‍💼 Admin Panel
- Assign tasks with title, description, date, and category
- Select which employee receives the task
- Tasks are marked as **new** by default

### 👷 Employee Dashboard
- View task stats: **New**, **Active**, **Completed**, **Failed**
- Click to **mark tasks as completed or failed**
- Automatic count updates and UI re-rendering
- Tasks are categorized and styled based on status

### 📦 Data Handling
- All data is stored in the browser using `localStorage`
- Acts like a mock database for frontend-only apps

---

## 🛠 Tech Stack

- ✅ React
- ✅ Tailwind CSS
- ✅ Vite
- ✅ Context API
- ✅ LocalStorage

---
