(function () {
  const data = window.KUAS_SITE_DATA;
  const root = document.documentElement;
  const flash = document.querySelector(".shutter-flash");
  const cursorLight = document.querySelector(".cursor-light");
  const opening = document.querySelector(".opening");
  const quickLinks = document.querySelector("#quick-links");
  const activityTrack = document.querySelector("#activity-track");
  const formsList = document.querySelector("#forms-list");
  const galleryGrid = document.querySelector("#gallery-grid");
  const filterBar = document.querySelector("#filter-bar");
  const lightbox = document.querySelector("#lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxTitle = document.querySelector("#lightbox-title");
  const lightboxExif = document.querySelector("#lightbox-exif");
  const threeCanvas = document.querySelector("#three-camera");

  const shutter = () => {
    flash.classList.remove("is-active");
    window.requestAnimationFrame(() => flash.classList.add("is-active"));
  };

  function renderLinks() {
    quickLinks.innerHTML = data.links
      .map(
        (link) => `
          <a class="link-card ${link.priority ? "priority" : ""}" style="--link-image: url('${link.image}')" href="${link.url}" target="_blank" rel="noreferrer">
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

  function initThreeCameraScene() {
    const THREE = window.THREE;
    if (!threeCanvas || !THREE) {
      return;
    }

    const viewport = threeCanvas.parentElement;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030407, 0.055);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 120);
    camera.position.set(0, 1.15, 8.4);

    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance"
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputEncoding = THREE.sRGBEncoding;
    window.KUAS_WEBGL_CONTEXT = renderer.getContext();
    viewport.classList.add("is-webgl");

    const rig = new THREE.Group();
    scene.add(rig);

    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x161b20,
      metalness: 0.74,
      roughness: 0.34
    });
    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a323a,
      metalness: 0.86,
      roughness: 0.22
    });
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0b1b2d,
      metalness: 0.08,
      roughness: 0.08,
      transmission: 0.34,
      thickness: 1.4,
      transparent: true,
      opacity: 0.82,
      clearcoat: 1,
      clearcoatRoughness: 0.05
    });
    const cyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x67d8ff,
      transparent: true,
      opacity: 0.42
    });
    const warmMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9d43,
      transparent: true,
      opacity: 0.5
    });

    const body = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.35, 1.18), bodyMaterial);
    body.position.set(-0.38, 0, 0);
    body.castShadow = true;
    rig.add(body);

    const topPlate = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.58, 1.02), edgeMaterial);
    topPlate.position.set(-1.2, 1.42, 0.03);
    rig.add(topPlate);

    const grip = new THREE.Mesh(new THREE.BoxGeometry(0.78, 2.12, 1.46), edgeMaterial);
    grip.position.set(2.1, -0.1, 0.08);
    rig.add(grip);

    const viewfinder = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.56, 0.16), glassMaterial);
    viewfinder.position.set(1.15, 0.56, 0.66);
    rig.add(viewfinder);

    const lensGroup = new THREE.Group();
    lensGroup.position.set(-0.36, -0.05, 0.72);
    rig.add(lensGroup);

    const lensBarrel = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.42, 1.78, 96, 1, false), edgeMaterial);
    lensBarrel.rotation.x = Math.PI / 2;
    lensGroup.add(lensBarrel);

    const frontRing = new THREE.Mesh(new THREE.TorusGeometry(1.48, 0.1, 18, 112), bodyMaterial);
    frontRing.position.z = 0.98;
    lensGroup.add(frontRing);

    const focusRing = new THREE.Mesh(new THREE.TorusGeometry(1.16, 0.035, 12, 112), cyanMaterial);
    focusRing.position.z = 1.08;
    lensGroup.add(focusRing);

    const innerGlass = new THREE.Mesh(new THREE.SphereGeometry(0.96, 64, 32), glassMaterial);
    innerGlass.scale.set(1, 1, 0.24);
    innerGlass.position.z = 1.1;
    lensGroup.add(innerGlass);

    const aperture = new THREE.Mesh(new THREE.CircleGeometry(0.58, 7), new THREE.MeshBasicMaterial({
      color: 0x010203,
      transparent: true,
      opacity: 0.82
    }));
    aperture.position.z = 1.23;
    lensGroup.add(aperture);

    const flare = new THREE.Mesh(new THREE.RingGeometry(2.05, 2.08, 128), warmMaterial);
    flare.position.z = 1.3;
    lensGroup.add(flare);

    const photoGroup = new THREE.Group();
    scene.add(photoGroup);
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    data.gallery.slice(0, 7).forEach((item, index) => {
      const texture = loader.load(item.image);
      texture.encoding = THREE.sRGBEncoding;
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(1.55, 2.08),
        new THREE.MeshBasicMaterial({ color: 0xf7f2e8 })
      );
      const photo = new THREE.Mesh(
        new THREE.PlaneGeometry(1.38, 1.72),
        new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      );
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(1.38, 0.18),
        new THREE.MeshBasicMaterial({ color: 0x050607, transparent: true, opacity: 0.78 })
      );

      const card = new THREE.Group();
      const angle = (index / 7) * Math.PI * 2;
      const radius = 4.4 + (index % 2) * 0.78;
      card.position.set(Math.cos(angle) * radius, -0.35 + (index % 3) * 0.88, -2.2 + Math.sin(angle) * 2.7);
      card.rotation.set((index % 2 ? 0.08 : -0.08), -angle + Math.PI / 2, (index - 3) * 0.045);
      card.userData = {
        baseY: card.position.y,
        speed: 0.6 + index * 0.06,
        angle
      };
      photo.position.z = 0.012;
      photo.position.y = 0.11;
      label.position.set(0, -0.84, 0.018);
      card.add(frame, photo, label);
      photoGroup.add(card);
    });

    const particlesCount = 420;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.45) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xbfd8e8,
        size: 0.022,
        transparent: true,
        opacity: 0.54,
        depthWrite: false
      })
    );
    scene.add(particles);

    const keyLight = new THREE.PointLight(0x67d8ff, 2.4, 18);
    keyLight.position.set(-3.8, 3.6, 5.2);
    scene.add(keyLight);

    const warmLight = new THREE.PointLight(0xff9d43, 1.6, 18);
    warmLight.position.set(4.2, -1.6, 4.2);
    scene.add(warmLight);

    scene.add(new THREE.AmbientLight(0x7f96ad, 0.52));

    let targetX = 0;
    let targetY = 0;
    let actualX = 0;
    let actualY = 0;
    const clock = new THREE.Clock();

    function resize() {
      const rect = viewport.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = width < 700 ? 48 : 38;
      camera.position.z = width < 700 ? 9.2 : 8.4;
      camera.updateProjectionMatrix();
    }

    function animate() {
      const time = clock.getElapsedTime();
      const scroll = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      actualX += (targetX - actualX) * 0.045;
      actualY += (targetY - actualY) * 0.045;

      rig.rotation.y = actualX * 0.36 + Math.sin(time * 0.26) * 0.08 + scroll * 0.34;
      rig.rotation.x = actualY * -0.18 + Math.sin(time * 0.37) * 0.035;
      rig.rotation.z = Math.sin(time * 0.21) * 0.025;
      lensGroup.rotation.z = time * 0.18 + scroll * 1.2;
      focusRing.scale.setScalar(1 + Math.sin(time * 1.8) * 0.018);
      flare.rotation.z = -time * 0.32;

      photoGroup.rotation.y = time * 0.055 + actualX * 0.08;
      photoGroup.children.forEach((card, index) => {
        card.position.y = card.userData.baseY + Math.sin(time * card.userData.speed + index) * 0.18;
        card.rotation.z += Math.sin(time * 0.4 + index) * 0.0006;
      });

      particles.rotation.y = time * 0.018;
      keyLight.position.x = -3.8 + actualX * 2.5;
      keyLight.position.y = 3.6 + actualY * 1.4;
      warmLight.intensity = 1.2 + Math.sin(time * 0.9) * 0.3;

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", (event) => {
      targetX = event.clientX / window.innerWidth - 0.5;
      targetY = event.clientY / window.innerHeight - 0.5;
    });

    window.addEventListener("resize", resize);
    resize();
    animate();
  }

  renderLinks();
  renderActivities();
  renderForms();
  renderFilters();
  renderGallery();
  initThreeCameraScene();
  initReveal();
  initPointer();
  initLightbox();
  initHeader();

  window.setTimeout(shutter, 1650);
  window.setTimeout(() => opening?.remove(), 4600);
})();
