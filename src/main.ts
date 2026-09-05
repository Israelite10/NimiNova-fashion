import "./style.css";
import type { Product, Category, ProductCatalog } from "./types";

/* ====== EDIT YOUR SETTINGS HERE ====== */
const WHATSAPP_NUMBER = "2349132436683";
const INSTAGRAM_URL =
  "https://www.instagram.com/nimnova_fashion?igsi=bjhsaXcwajFieXNs";
const CURRENCY = "₦";
/* ====================================== */

/* ====== PRODUCTS ======
   Add a `colors` array to any product to enable the swatch picker.
   Each variant needs its own image file (e.g. 1.jpeg, 1-grey.jpeg, 1-white.jpeg).
   If you skip `colors`, the product just shows its default `image` with no swatches.
*/
const products: ProductCatalog = {
  men: [
    {
      name: "NIMNOVA Tank Top (Deluxe)",
      price: 25000,
      image: "/images/men/1.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/1.jpeg" },
        { label: "Purple", hex: "#8e44ad", image: "/images/men/1-purple.jpeg" },
        { label: "White", hex: "#f2f2f2", image: "/images/men/1-white.jpeg" },
        { label: "pink", hex: "#e91e8c", image: "/images/men/1-pink.jpeg" },
      ],
    },
    {
      name: "NIMNOVA Fitted Sleeveless",
      price: 25000,
      image: "/images/men/2.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/2-black.jpeg" },

        { label: "White", hex: "#f2f2f2", image: "/images/men/2.jpeg" },
      ],
    },
    {
      name: "NIMNOVA Essentials",
      price: 35000,
      image: "/images/men/3.jpeg",
      colors: [
        {
          label: "Black",
          hex: "#1a1a1a",
          image: "/images/men/3.jpeg",
          backImage: "/images/men/3-back.jpeg", // <-- add your back-view photo here
        },
        { label: "Grey", hex: "#9a9a9a", image: "/images/men/3-grey.jpeg" },
        { label: "White", hex: "#f2f2f2", image: "/images/men/3-white.jpeg" },
      ],
    },
    {
      name: "NIMNOVA Uinsex Hoodie",
      price: 30000,
      image: "/images/men/4.jpeg",
      colors: [
        {
          label: "Black",
          hex: "#1a1a1a",
          image: "/images/men/4.jpeg",
          backImage: "/images/men/4-back.jpeg", // <-- add your back-view photo here
        },
      ],
    },
    {
      name: "NIMNOVA Track Sweatshirt",
      price: 40000,
      image: "/images/men/5.jpeg",
    },
    {
      name: "Hoodie Jacket Set",
      price: 55000,
      image: "/images/men/6.jpeg",
      // showColorTextOnly: true,
      colors: [
        { label: "Brown", hex: "#5c4033", image: "/images/men/6-brown.jpeg" },
        { label: "Green", hex: "#2e5339", image: "/images/men/6-green.jpeg" },
        { label: "Blue", hex: "#1f3a5f", image: "/images/men/6-blue.jpeg" },
        { label: "Purple", hex: "#4b2e5c", image: "/images/men/6-purple.jpeg" },
        { label: "Cream", hex: "#f5f0e1", image: "/images/men/6-cream.jpeg" },
      ],
    },
    {
      name: "NIMNOVA Shorts",
      price: 18000,
      image: "/images/men/7.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/7-black.jpeg" },
        { label: "Grey", hex: "#9a9a9a", image: "/images/men/7-grey.jpeg" },
        { label: "White", hex: "#f2f2f2", image: "/images/men/7.jpeg" },
      ],
    },
    {
      name: "Quilted Vest Jacket",
      price: 25000,
      image: "/images/men/8.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/8.jpeg" },
        { label: "Grey", hex: "#9a9a9a", image: "/images/men/8-grey.jpeg" },
        { label: "Red", hex: "#8b1e1e", image: "/images/men/8-red.jpeg" },
      ],
    },

    {
      name: "NIMNOVA Premium Unisex Hoodies",
      price: 40000,
      image: "/images/men/10.jpeg",
      // showColorTextOnly: true,
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/10.jpeg" },
        { label: "Red", hex: "#8b1e1e", image: "/images/men/10-red.jpeg" },
        { label: "Cream", hex: "#f5f0e1", image: "/images/men/10-cream.jpeg" },
      ],
    },
    {
      name: "Uinsex Track Jacket Set ",
      price: 35000,
      image: "/images/men/11.jpeg",
      colors: [
        {
          label: "cream",
          hex: "#f5f0e1",
          image: "/images/men/11.jpeg",
          backImage: "/images/men/11-pants.jpeg", // <-- add your back-view photo here
        },
      ],
    },
    {
      name: "NIMNOVA Original Essentials Long Sleeve Tee",
      price: 40000,
      image: "/images/men/12.jpeg",
    },
  ],
  women: [
    {
      name: "NIMNOVA Shorts",
      price: 18000,
      image: "/images/women/1.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/women/1-black.jpeg" },
        { label: "Grey", hex: "#9a9a9a", image: "/images/women/1-grey.jpeg" },
        { label: "White", hex: "#f2f2f2", image: "/images/women/1.jpeg" },
      ],
    },
    {
      name: "NIMNOVA Tank Top (Deluxe)",
      price: 25000,
      image: "/images/women/2.jpeg",
      colors: [
        { label: "Black", hex: "#1a1a1a", image: "/images/men/1.jpeg" },
        { label: "Purple", hex: "#8e44ad", image: "/images/men/1-purple.jpeg" },
        { label: "White", hex: "#f2f2f2", image: "/images/men/1-white.jpeg" },
        { label: "pink", hex: "#e91e8c", image: "/images/men/1-pink.jpeg" },
      ],
    },
    {
      name: "Hoodie Jacket Set",
      price: 35000,
      image: "/images/women/3.jpg",
      showColorTextOnly: true,
      colors: [
        // {
        //   label: "Green",
        //   hex: "#90c290",
        //   image: "/images/women/3-green.jpeg",
        // },
        // {
        //   label: "Purple",
        //   hex: "#8e44ad",
        //   image: "/images/women/3-purple.jpeg",
        // },
        // {
        //   label: "White",
        //   hex: "#f2f2f2",
        //   image: "/images/women/3-white.jpeg",
        // },
        {
          label: "lightblue",
          hex: "#add8e6",
          image: "/images/women/3-lightblue.jpeg",
        },
      ],
    },
    {
      name: "Croped Sweatshirt",
      price: 33000,
      image: "/images/women/4.jpeg",
      colors: [
        {
          label: "grey",
          hex: "#9a9a9a",
          image: "/images/women/4.jpeg",
        },
        {
          label: "grey",
          hex: "#9a9a9a",
          image: "/images/women/4-grey.jpeg",
        },
      ],
    },
    {
      name: "OFF Shoulder Hoodie Set",
      price: 25000,
      image: "/images/women/5.jpeg",
      colors: [],
    },
    // {
    //   name: "Two-Piece Co-ord Set",
    //   price: 42000,
    //   image: "/images/women/6.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/6.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/6-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/6-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Sequin Slip Dress",
    //   price: 46000,
    //   image: "/images/women/7.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/7.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/7-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/7-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Faux Leather Trench",
    //   price: 50000,
    //   image: "/images/women/8.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/8.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/8-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/8-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Wide-Leg Palazzo Pants",
    //   price: 28000,
    //   image: "/images/women/9.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/9.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/9-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/9-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Ruched Bodycon Dress",
    //   price: 37000,
    //   image: "/images/women/10.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/10.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/10-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/10-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Tailored Blazer Set",
    //   price: 44000,
    //   image: "/images/women/11.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/11.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/11-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/11-white.jpg" },
    //   ],
    // },
    // {
    //   name: "Chiffon Maxi Dress",
    //   price: 39000,
    //   image: "/images/women/12.jpg",
    //   colors: [
    //     { label: "Black", hex: "#1a1a1a", image: "/images/women/12.jpg" },
    //     { label: "Grey", hex: "#9a9a9a", image: "/images/women/12-grey.jpg" },
    //     { label: "White", hex: "#f2f2f2", image: "/images/women/12-white.jpg" },
    //   ],
    // },
  ],
};

const WHATSAPP_ICON_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.03h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22a8.19 8.19 0 0 1 8.22 8.22c0 4.54-3.69 8.22-8.22 8.22zm4.51-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.24.25-.4.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36 1 2.52c.12.17 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>`;

function formatPrice(amount: number): string {
  return `${CURRENCY}${amount.toLocaleString("en-NG")}`;
}

function buyLink(product: Product, colorLabel?: string): string {
  const colorLine = colorLabel ? `Color: ${colorLabel}\n` : "";
  const message =
    `Hi NIM NOVA COLLECTIONS, I'd like to buy:\n\n` +
    `${product.name}\n` +
    `${colorLine}` +
    `Price: ${formatPrice(product.price)}\n\n` +
    `Please confirm availability and how to pay.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderGrid(list: Product[], mountId: string): void {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  mount.innerHTML = list
    .map((product, index) => {
      const colors = product.colors ?? [];
      const initialColor = colors[0];
      const initialImage = initialColor?.image ?? product.image;
      const initialLabel = initialColor?.label;
      const hasBack = Boolean(initialColor?.backImage);

      // 👇 CHANGED: check the flag first, before building swatch buttons
      const swatchesHtml = product.showColorTextOnly
        ? `<p class="multi-color-note">Available in multiple colors</p>`
        : colors.length
        ? `<div class="color-swatches">
            ${colors
              .map(
                (c, ci) => `
              <button
                type="button"
                class="swatch ${ci === 0 ? "active" : ""}"
                style="background:${c.hex}"
                data-image="${c.image}"
                data-back-image="${c.backImage ?? ""}"
                data-label="${c.label}"
                title="${c.label}"
                aria-label="${c.label}"
              ></button>`
              )
              .join("")}
          </div>`
        : "";

      return `
      <div class="card" data-product-index="${index}">
        <div class="card-img">
          <img src="${initialImage}" alt="${
        product.name
      }" loading="lazy" data-zoomable data-front="${initialImage}" data-back="${
        initialColor?.backImage ?? ""
      }">
          <div class="view-toggle ${hasBack ? "" : "hidden"}">
            <button type="button" class="view-btn active" data-view="front">Front</button>
            <button type="button" class="view-btn" data-view="back">Back</button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-name">${product.name}</div>
          ${swatchesHtml}
          <div class="card-row">
            <span class="price">${formatPrice(product.price)}</span>
            <a class="buy-btn" href="${buyLink(
              product,
              initialLabel
            )}" target="_blank" rel="noopener">
              ${WHATSAPP_ICON_SVG}
              Buy
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Swap image + buy link when a color swatch is clicked
  mount.querySelectorAll<HTMLButtonElement>(".swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const card = swatch.closest<HTMLElement>(".card");
      if (!card) return;
      const productIndex = Number(card.dataset.productIndex);
      const product = list[productIndex];
      const img = card.querySelector<HTMLImageElement>("img[data-zoomable]");
      const buyBtn = card.querySelector<HTMLAnchorElement>(".buy-btn");
      const viewToggle = card.querySelector<HTMLElement>(".view-toggle");
      const newFront = swatch.dataset.image ?? "";
      const newBack = swatch.dataset.backImage ?? "";
      const label = swatch.dataset.label;

      if (img) {
        img.src = newFront;
        img.dataset.front = newFront;
        img.dataset.back = newBack;
      }
      if (buyBtn) buyBtn.href = buyLink(product, label);

      // reset to front view whenever color changes
      if (viewToggle) {
        viewToggle.classList.toggle("hidden", !newBack);
        viewToggle
          .querySelectorAll(".view-btn")
          .forEach((b) => b.classList.remove("active"));
        viewToggle
          .querySelector('[data-view="front"]')
          ?.classList.add("active");
      }

      card
        .querySelectorAll(".swatch")
        .forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");
    });
  });

  // Toggle between front and back image
  mount.querySelectorAll<HTMLButtonElement>(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest<HTMLElement>(".card");
      const img = card?.querySelector<HTMLImageElement>("img[data-zoomable]");
      if (!card || !img) return;

      const view = btn.dataset.view;
      const src = view === "back" ? img.dataset.back : img.dataset.front;
      if (!src) return;

      img.src = src;
      card
        .querySelectorAll(".view-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Open lightbox when a product image is clicked
  mount
    .querySelectorAll<HTMLImageElement>("img[data-zoomable]")
    .forEach((img) => {
      img.addEventListener("click", () => openLightbox(img.src, img.alt));
    });
}
function openLightbox(src: string, alt: string): void {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById(
    "lightboxImg"
  ) as HTMLImageElement | null;
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(): void {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function setupLightbox(): void {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightboxClose");

  closeBtn?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function setupContactLinks(): void {
  const whatsappLink = document.getElementById(
    "contact-whatsapp"
  ) as HTMLAnchorElement | null;
  const instagramLink = document.getElementById(
    "contact-instagram"
  ) as HTMLAnchorElement | null;
  const floatWhatsapp = document.getElementById(
    "float-whatsapp"
  ) as HTMLAnchorElement | null;

  if (whatsappLink) {
    const message =
      "Hi NIM NOVA COLLECTIONS, I'd like to know more about your pieces.";
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }
  if (instagramLink) {
    instagramLink.href = INSTAGRAM_URL;
  }
  if (floatWhatsapp) {
    const message =
      "Hi NIM NOVA COLLECTIONS, I have a question about your products.";
    floatWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }
}

function setupCategoryTabs(): void {
  const tabs = document.querySelectorAll<HTMLButtonElement>(".tab");
  const panels: Record<Category, HTMLElement | null> = {
    men: document.getElementById("men"),
    women: document.getElementById("women"),
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target as Category | undefined;
      if (!target) return;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      (Object.keys(panels) as Category[]).forEach((key) => {
        panels[key]?.classList.toggle("hidden", key !== target);
      });
    });
  });
}

function setupMobileNav(): void {
  const navToggle = document.getElementById(
    "navToggle"
  ) as HTMLButtonElement | null;
  const navMobilePanel = document.getElementById("navMobilePanel");
  if (!navToggle || !navMobilePanel) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navMobilePanel.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobilePanel.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupShopLinks(): void {
  document
    .querySelectorAll<HTMLAnchorElement>("a[data-target]")
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.dataset.target;
        const tabButton = document.querySelector<HTMLButtonElement>(
          `.tab[data-target="${target}"]`
        );
        tabButton?.click();
        document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
      });
    });
}

function init(): void {
  renderGrid(products.men, "men-grid");
  renderGrid(products.women, "women-grid");
  setupContactLinks();
  setupCategoryTabs();
  setupMobileNav();
  setupShopLinks();
  setupLightbox();
}

init();
