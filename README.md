# 🛒 Amazon Clone

A front-end Amazon clone built using **HTML, CSS, and JavaScript**.  
This project recreates the basic shopping experience of Amazon, including product listings, cart functionality, and checkout.

## 🚀 Live Demo

Add your GitHub Pages link here after deployment:

`https://YOUR-USERNAME.github.io/amazon-clone/`

## 📌 Features

- 🏠 Amazon-style home page
- 🔍 Search bar interface
- 🛍️ Product listing
- ⭐ Product ratings
- 🛒 Add products to cart
- 🔢 Cart item quantity updates
- 💾 Cart data stored using Local Storage
- ❌ Remove products from cart
- 🚚 Delivery option selection
- 📦 Checkout page
- 💰 Dynamic order summary
- 📱 Responsive layout

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6 Modules)** – Dynamic functionality
- **Local Storage** – Saving cart data
- **Day.js** – Handling delivery dates
- **Git & GitHub** – Version control and deployment

## 📂 Project Structure

```text
amazon-clone/
│
├── index.html
├── checkout.html
│
├── backend/
│   └── scripts/
│       ├── amazon.js
│       ├── checkout.js
│       ├── utils/
│       │   └── money.js
│       └── checkout/
│           ├── order.summary.js
│           └── payment.summary.js
│
├── data/
│   ├── cart.js
│   └── products.js
│
├── images/
│   ├── icons/
│   ├── products/
│   └── ratings/
│
└── styles/
    ├── shared/
    └── pages/
