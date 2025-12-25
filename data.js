<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Krishna Home Cleaning Products</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#2e7d32" />

  <link rel="stylesheet" href="style.css" />

  <style>
    /* =====================================================
       FESTIVE OFFER BLOCK – HOMEPAGE
       (BIG IMAGE + CENTER BUTTON + DOTTED BORDER)
    ===================================================== */

    .festive-home-wrapper {
      padding: 20px;
    }

    /* DOTTED CONTAINER */
    .festive-home-box {
      border: 2px solid #050709; /* soft light border */
      border-radius: 26px;
      padding: 20px;
      background: #ffffff;
    }


    /* FESTIVE IMAGE */
    .festive-home-image {
      width: 100%;
      height: 180px;                 /* CHANGE HEIGHT IF NEEDED */
      border-radius: 18px;
      background-size: cover;
      background-position: center;
      background-color: #e5e5e5;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 600;
      color: #666;
      margin-bottom: 22px;
    }

    /* CENTER BUTTON */
    .festive-home-btn {
      display: block;
      width: fit-content;
      margin: 0 auto;

      background: #22c55e;
      color: #fff;
      padding: 14px 30px;
      border-radius: 999px;
      font-size: 15px;
      font-weight: 600;
      text-decoration: none;
    }

    .festive-home-btn:hover {
      background: #16a34a;
    }
  </style>
</head>

<body>

<!-- =====================================================
     HEADER
===================================================== -->

<div class="header">
  <div class="header-title">
    Krishna Home Cleaning Products
  </div>

  <div class="trust-strip">
    ✔ Hygienic & Safe &nbsp; • &nbsp;
    ✔ Trusted Quality &nbsp; • &nbsp;
    ✔ Affordable Prices
  </div>
</div>

<hr class="header-divider" />

<!-- =====================================================
     CART BUTTON
===================================================== -->

<div class="cart-row">
  <a href="cart.html" class="header-pill cart-btn" id="cartBtn">
    🛒 Cart (0)
  </a>
</div>

<!-- =====================================================
     FESTIVE OFFER BLOCK (HOMEPAGE)
     👉 ONLY THIS SECTION IS FOR FESTIVE POSTER
===================================================== -->

<div class="festive-home-wrapper">

  <div class="festive-home-box">

    <!-- FESTIVE IMAGE (CHANGE IMAGE FILE ONLY) -->
    <div
      class="festive-home-image"
      style="background-image: url('./images/offers/offer-homepage.jpg');"
    >
    </div>

    <!-- BUTTON -->
    <a href="offers.html" class="festive-home-btn">
      View Today’s offers 
    </a>

  </div>

</div>

<!-- =====================================================
     NORMAL PRODUCTS GRID (DO NOT TOUCH)
===================================================== -->

<div class="grid" id="grid"></div>

<!-- =====================================================
     DATA
===================================================== -->

<script src="data.js"></script>

<script>
  /* ================= CART COUNT ================= */
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;
    cart.forEach(i => count += Number(i.qty) || 0);
    document.getElementById("cartBtn").innerText =
      "🛒 Cart (" + count + ")";
  }

  document.addEventListener("DOMContentLoaded", updateCartCount);
  window.addEventListener("focus", updateCartCount);

  /* ================= RENDER PRODUCTS ================= */

  const grid = document.getElementById("grid");

  Object.values(PRODUCTS).forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const basePrice = Object.values(p.variants)[0].price;

    card.innerHTML = `
      <div class="img-box"
           style="background-image:url('./images/${p.imageFolder}/cover.jpg')">
      </div>
      <h3>${p.name}</h3>
      <p>From ₹${basePrice}</p>
    `;

    card.onclick = () => {
      location.href = "product.html?id=" + p.id;
    };

    grid.appendChild(card);
  });
</script>

</body>
</html>
