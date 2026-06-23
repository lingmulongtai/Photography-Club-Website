(function () {
  const data = window.KUAS_SITE_DATA;
  const root = document.documentElement;
  const flash = document.querySelector(".shutter-flash");
  const cursorLight = document.querySelector(".cursor-light");
  const quickLinks = document.querySelector("#quick-links");
  const activityTrack = document.querySelector("#activity-track");
  const formsList = document.querySelector("#forms-list");
  const galleryGrid = document.querySelector("#gallery-grid");
  const filterBar = document.querySelector("#filter-bar");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxTitle = document.querySelector("#lightbox-title");
  const lightboxExif = document.querySelector("#lightbox-exif");

  const shutter = () => {
    flash.classList.remove("is-active");
    window.requestAnimationFrame(() => flash.classList.add("is-active"));
  };

  function renderLinks() {
    quickLinks.innerHTML = data.links
      .map(
        (link) => `
          <a class="link-card ${link.priority ? "priority" : ""}" href="${link.url}" target="_blank" rel="noreferrer">
            <span class="link-tag">${link.tag}</span>
            <strong>${link.title}</strong>
            <span>${link.description}</span>
            <em>${link.type.toUpperCase()}</em>
          </a>
        `
      )
      .join("");

    quickLinks.querySelectorAll("a").forEach((card) => {
      card.addEventListener("click", shutter);
    });
  }

  function renderActivities() {
    activityTrack.innerHTML = data.activities
      .map(
        (activity) => `
          <article class="activity-card">
            <img src="${activity.image}" alt="${activity.title}" loading="lazy" />
            <div>
              <strong>${activity.title}</strong>
              <p>${activity.description}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderForms() {
    const formLinks = data.links.filter((link) => link.type === "form" || link.type === "contact");
    formsList.innerHTML = formLinks
      .map(
        (link) => `
          <a href="${link.url}" target="_blank" rel="noreferrer">
            <span>${link.tag}</span>
            <strong>${link.title}</strong>
            <em>${link.description}</em>
          </a>
        `
      )
      .join("");
  }

  function renderFilters(active = "All") {
    const categories = ["All", ...new Set(data.gallery.map((item) => item.category))];
    filterBar.innerHTML = categories
      .map(
        (category) => `
          <button class="${category === active ? "is-active" : ""}" type="button" data-category="${category}">
            ${category}
          </button>
        `
      )
      .join("");

    filterBar.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        renderFilters(button.dataset.category);
        renderGallery(button.dataset.category);
      });
    });
  }

  function renderGallery(active = "All") {
    const items = active === "All" ? data.gallery : data.gallery.filter((item) => item.category === active);
    galleryGrid.innerHTML = items
      .map(
        (item, index) => `
          <button class="gallery-card tilt-${(index % 4) + 1}" type="button" data-index="${data.gallery.indexOf(item)}">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <span>${item.category}</span>
            <strong>${item.title}</strong>
            <em>${item.exif}</em>
          </button>
        `
      )
      .join("");

    galleryGrid.querySelectorAll(".gallery-card").forEach((card) => {
      card.addEventListener("click", () => {
        const item = data.gallery[Number(card.dataset.index)];
        lightboxImage.src = item.image;
        lightboxImage.alt = item.title;
        lightboxTitle.textContent = item.title;
        lightboxExif.textContent = item.exif;
        shutter();
        lightbox.showModal();
      });
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }

  function initPointer() {
    window.addEventListener("pointermove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5).toFixed(3);
      const y = (event.clientY / window.innerHeight - 0.5).toFixed(3);
      root.style.setProperty("--px", x);
      root.style.setProperty("--py", y);
      cursorLight.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
  }

  function initLightbox() {
    document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });
  }

  function initHeader() {
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    });
  }

  renderLinks();
  renderActivities();
  renderForms();
  renderFilters();
  renderGallery();
  initReveal();
  initPointer();
  initLightbox();
  initHeader();

  window.setTimeout(shutter, 1650);
})();
