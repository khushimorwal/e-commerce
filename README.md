# 🍽️ Recipe App (React + Vite)

A modern React.js recipe browsing application featuring user authentication, protected routes, recipe search & sorting, wishlist, cart, and a responsive UI.

> ⚠️ Note: The repo is currently named `e-commerce`, but the app itself is a **recipe discovery platform** built on the [DummyJSON Recipes API](https://dummyjson.com/recipes) — consider renaming the repo to something like `recipe-app` for clarity.

## 📌 About

This app lets users browse recipes fetched live from an API, search and sort them by rating, add recipes to a wishlist, sign up / log in, and manage a cart — all protected behind authentication using React Router's protected routes.

## ✨ Features

- 🔐 **User Authentication** — Sign up and log in (stored via `localStorage`)
- 🛡️ **Protected Routes** — Cart page accessible only to logged-in users
- 🔍 **Recipe Search & Sort** — Search recipes by name, sort by rating (asc/desc)
- ❤️ **Wishlist** — Add/remove recipes to a personal wishlist
- 🛒 **Cart & Orders** — View cart and past orders
- 🖼️ **Lazy-loaded Images** — Smooth image loading with blur effect
- 📱 **Responsive UI**

## 🛠 Tech Stack

- **React 19**
- **Vite** — build tool & dev server
- **React Router DOM v7** — routing & protected routes
- **Axios** — API requests
- **react-lazy-load-image-component** — optimized image loading
- **DummyJSON API** — recipe data source
- **ESLint** — code linting

## 📂 Project Structure
