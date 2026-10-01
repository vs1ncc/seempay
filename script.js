/* =========================================================
   SEEMPAY+
   Frontend SPA
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const ADMIN_EMAIL = "yosoycastello@gmail.com";

const STORAGE_KEYS = {
  user: "seempay_user",
  releases: "seempay_releases",
  saved: "seempay_saved",
  settings: "seempay_settings",
  transactions: "seempay_transactions"
};


/* =========================================================
   INITIAL DATA
========================================================= */

const defaultMovies = [

  {
    id: "douglas-formula",
    title: "The Douglas Formula",
    year: 2027,
    genre: "Sci-Fi / Thriller",
    releaseDate: "2027-08-18",
    rating: 8.7,
    status: "upcoming",
    duration: "2h 14m",

    description:
      "A brilliant mathematician discovers a hidden formula capable of predicting human decisions — and becomes the target of the organization that created it.",

    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "midnight-city",
    title: "Midnight City",
    year: 2026,
    genre: "Drama / Crime",
    releaseDate: "2026-09-21",
    rating: 9.1,
    status: "released",
    duration: "1h 58m",

    description:
      "One night. Three strangers. One decision that changes everything.",

    poster:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "zero-hour",
    title: "Zero Hour",
    year: 2026,
    genre: "Action / Sci-Fi",
    releaseDate: "2026-08-14",
    rating: 8.8,
    status: "released",
    duration: "2h 08m",

    description:
      "When a global system fails, an ex-agent gets sixty minutes to prevent a catastrophic chain reaction.",

    poster:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "after-light",
    title: "After Light",
    year: 2026,
    genre: "Drama",
    releaseDate: "2026-07-03",
    rating: 8.4,
    status: "released",
    duration: "1h 46m",

    description:
      "After a mysterious solar event, a photographer searches for his missing sister.",

    poster:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "neon-run",
    title: "Neon Run",
    year: 2026,
    genre: "Action / Crime",
    releaseDate: "2026-06-19",
    rating: 8.2,
    status: "released",
    duration: "1h 52m",

    description:
      "A courier discovers that the package he is carrying could expose the entire underground economy of the city.",

    poster:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "the-last-signal",
    title: "The Last Signal",
    year: 2027,
    genre: "Mystery / Sci-Fi",
    releaseDate: "2027-02-11",
    rating: 8.9,
    status: "upcoming",
    duration: "2h 03m",

    description:
      "A radio astronomer receives a signal that appears to have been sent from Earth — fifty years in the future.",

    poster:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "dark-water",
    title: "Dark Water",
    year: 2026,
    genre: "Thriller",
    releaseDate: "2026-05-22",
    rating: 8.1,
    status: "released",
    duration: "1h 49m",

    description:
      "A diver finds something beneath the sea that was never meant to be discovered.",

    poster:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  },

  {
    id: "orbit",
    title: "Orbit",
    year: 2027,
    genre: "Sci-Fi",
    releaseDate: "2027-11-04",
    rating: 9.0,
    status: "upcoming",
    duration: "2h 20m",

    description:
      "A crew on the edge of known space discovers a planet that should not exist.",

    poster:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=700&q=85",

    backdrop:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1600&q=85",

    trailer: "#"
  }
];


/* =========================================================
   STATE
========================================================= */

let currentPage = "trending";

let profileTab = "saved";

let currentUser =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.user)) || null;

let releases =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.releases)) ||
  defaultMovies;

let savedMovies =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.saved)) ||
  ["midnight-city", "douglas-formula"];

let settings =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.settings)) || {
    notifications: true,
    autoplay: true,
    quality: "Auto"
  };

let transactions =
  JSON.parse(localStorage.getItem(STORAGE_KEYS.transactions)) || [
    {
      id: "TX-10091",
      date: "2026-09-30",
      amount: 799,
      user: "alex@example.com",
      status: "success"
    },
    {
      id: "TX-10090",
      date: "2026-09-29",
      amount: 799,
      user: "maria@example.com",
      status: "success"
    },
    {
      id: "TX-10089",
      date: "2026-09-28",
      amount: 799,
      user: "daniel@example.com",
      status: "success"
    },
    {
      id: "TX-10088",
      date: "2026-09-27",
      amount: 799,
      user: "sophie@example.com",
      status: "pending"
    },
    {
      id: "TX-10087",
      date: "2026-09-26",
      amount: 799,
      user: "mike@example.com",
      status: "success"
    }
  ];


/* =========================================================
   HELPERS
========================================================= */

function saveState() {

  localStorage.setItem(
    STORAGE_KEYS.user,
    JSON.stringify(currentUser)
  );

  localStorage.setItem(
    STORAGE_KEYS.releases,
    JSON.stringify(releases)
  );

  localStorage.setItem(
    STORAGE_KEYS.saved,
    JSON.stringify(savedMovies)
  );

  localStorage.setItem(
    STORAGE_KEYS.settings,
    JSON.stringify(settings)
  );

  localStorage.setItem(
    STORAGE_KEYS.transactions,
    JSON.stringify(transactions)
  );
}


function formatDate(dateString) {

  if (!dateString) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(dateString));
}


function formatMoney(amount) {

  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  }).format(amount);
}


function escapeHTML(value) {

  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function isAdmin() {

  return (
    currentUser &&
    currentUser.email.toLowerCase() ===
      ADMIN_EMAIL.toLowerCase()
  );
}


function getMovie(id) {

  return releases.find(movie => movie.id === id);
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  navigate("trending");

  updateHeader();

  refreshIcons();

});


/* =========================================================
   NAVIGATION
========================================================= */

function navigate(page) {

  if (page === "admin" && !isAdmin()) {

    showToast(
      "Access is restricted to the main administrator"
    );

    return;
  }

  currentPage = page;

  updateNavigation();

  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  refreshIcons();
}


function updateNavigation() {

  document
    .querySelectorAll("[data-page]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === currentPage
      );

    });
}


/* =========================================================
   RENDER PAGE
========================================================= */

function renderPage() {

  const container =
    document.getElementById("mainContent");

  if (currentPage === "trending") {

    container.innerHTML =
      renderTrending();

  }

  else if (currentPage === "releases") {

    container.innerHTML =
      renderReleases();

  }

  else if (currentPage === "profile") {

    container.innerHTML =
      renderProfile();

  }

  else if (currentPage === "admin") {

    container.innerHTML =
      renderAdmin();

  }

  refreshIcons();
}


/* =========================================================
   TRENDING
========================================================= */

function renderTrending() {

  const featured =
    releases
      .filter(movie => movie.status === "released")
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);

  const popular =
    [...releases]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 6);

  const newest =
    [...releases]
      .sort(
        (a, b) =>
          new Date(b.releaseDate) -
          new Date(a.releaseDate)
      )
      .slice(0, 6);

  return `

    <section class="hero">

      <div class="hero-content">

        <div class="hero-kicker">
          <i data-lucide="sparkles"></i>
          Seempay+ Original
        </div>

        <h1>
          Cinema<br>
          <span>redefined.</span>
        </h1>

        <p>
          Explore movies, series, and exclusive releases
          in one premium cinema ecosystem.
        </p>

        <div class="hero-actions">

          <button
            class="primary-button"
            onclick="openMovie('${featured[0]?.id || "douglas-formula"}')"
          >
            <i data-lucide="play"></i>
            Watch now
          </button>

          <button
            class="secondary-button"
            onclick="navigate('releases')"
          >
            All releases
            <i data-lucide="arrow-right"></i>
          </button>

        </div>

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>
          <h2>Popular right now</h2>
          <p>
            What everyone is watching right now
          </p>
        </div>

        <button
          class="text-button"
          onclick="navigate('releases')"
        >
          View all →
        </button>

      </div>

      <div class="featured-grid">

        ${featured.map((movie, index) => `

          <article
            class="featured-card ${index === 0 ? "large" : ""}"
            onclick="openMovie('${movie.id}')"
          >

            <img
              src="${movie.backdrop || movie.poster}"
              alt="${escapeHTML(movie.title)}"
            />

            <div class="featured-overlay">

              <div class="featured-content">

                <h3>
                  ${escapeHTML(movie.title)}
                </h3>

                <p>
                  ★ ${movie.rating}
                  &nbsp; · &nbsp;
                  ${escapeHTML(movie.genre)}
                </p>

              </div>

            </div>

          </article>

        `).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>
          <h2>Trending</h2>
          <p>
            The most talked-about movies on the platform
          </p>
        </div>

      </div>

      <div class="movie-grid">

        ${popular.map(renderMovieCard).join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-heading">

        <div>
          <h2>Latest releases</h2>
          <p>
            New movies and upcoming premieres
          </p>
        </div>

      </div>

      <div class="movie-grid">

        ${newest.map(renderMovieCard).join("")}

      </div>

    </section>

  `;
}


/* =========================================================
   MOVIE CARD
========================================================= */

function renderMovieCard(movie) {

  const saved =
    savedMovies.includes(movie.id);

  return `

    <article
      class="movie-card"
      onclick="openMovie('${movie.id}')"
    >

      <div class="movie-poster">

        <img
          src="${movie.poster}"
          alt="${escapeHTML(movie.title)}"
          loading="lazy"
        />

        <div class="movie-rating">
          <i data-lucide="star"></i>
          ${movie.rating}
        </div>

      </div>

      <div class="movie-info">

        <h3 class="movie-title">
          ${escapeHTML(movie.title)}
        </h3>

        <div class="movie-meta">

          ${movie.year}
          ·
          ${escapeHTML(movie.genre.split("/")[0])}

          ${saved ? " · ♥" : ""}

        </div>

      </div>

    </article>

  `;
}


/* =========================================================
   RELEASES
========================================================= */

function renderReleases() {

  const sorted =
    [...releases].sort(
      (a, b) =>
        new Date(a.releaseDate) -
        new Date(b.releaseDate)
    );

  return `

    <div>

      <div class="section-heading">

        <div>

          <h2>Releases</h2>

          <p>
            Seempay+ premieres and upcoming projects
          </p>

        </div>

        <span class="plan-badge">
          ${releases.length} projects
        </span>

      </div>


      <div class="release-list">

        ${sorted.map(movie => `

          <article
            class="release-row"
            onclick="openMovie('${movie.id}')"
          >

            <img
              class="release-poster"
              src="${movie.poster}"
              alt="${escapeHTML(movie.title)}"
            />

            <div class="release-info">

              <h3>
                ${escapeHTML(movie.title)}
              </h3>

              <p>
                ${escapeHTML(movie.description)}
              </p>

              <p style="margin-top:7px;">
                ${movie.year}
                ·
                ${escapeHTML(movie.genre)}
                ·
                ★ ${movie.rating}
              </p>

            </div>

            <div class="release-date">

              ${
                movie.status === "released"
                  ? `<span class="status success">RELEASED</span>`
                  : `<span class="status pending">PREMIERE</span>`
              }

              <div style="margin-top:7px;">
                ${formatDate(movie.releaseDate)}
              </div>

            </div>

          </article>

        `).join("")}

      </div>

    </div>

  `;
}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

  if (!currentUser) {

    return `

      <div style="
        max-width:500px;
        margin:80px auto;
      ">

        <div class="glass-card" style="padding:35px;text-align:center;">

          <div class="auth-logo">
            <span class="brand-mark">
              <span></span>
            </span>
          </div>

          <h2 style="margin:0 0 8px;">
            Your profile
          </h2>

          <p style="
            color:var(--muted);
            font-size:13px;
            line-height:1.6;
            margin-bottom:22px;
          ">
            Sign in to save movies,
            manage your subscription, and use
            Seempay+ personalized features.
          </p>

          <button
            class="primary-button full-width"
            onclick="openAuth()"
          >
            Sign in
          </button>

        </div>

      </div>

    `;
  }


  return `

    <div class="profile-layout">

      <aside class="profile-sidebar">

        <div class="profile-avatar-large">
          ${getInitials(currentUser.name || currentUser.email)}
        </div>

        <div>

          <h2>
            ${escapeHTML(currentUser.name || "User")}
          </h2>

          <p class="profile-email">
            ${escapeHTML(currentUser.email)}
          </p>

        </div>


        <div class="profile-menu">

          <button
            class="${profileTab === "saved" ? "active" : ""}"
            onclick="switchProfileTab('saved')"
          >
            <i data-lucide="bookmark"></i>
            Saved
          </button>

          <button
            class="${profileTab === "settings" ? "active" : ""}"
            onclick="switchProfileTab('settings')"
          >
            <i data-lucide="settings-2"></i>
            Settings
          </button>

          <button
            class="${profileTab === "payments" ? "active" : ""}"
            onclick="switchProfileTab('payments')"
          >
            <i data-lucide="credit-card"></i>
            Payment Methods
          </button>

          <button
            class="${profileTab === "support" ? "active" : ""}"
            onclick="switchProfileTab('support')"
          >
            <i data-lucide="life-buoy"></i>
            Support
          </button>

          <button onclick="logout()">
            <i data-lucide="log-out"></i>
            Log out
          </button>

        </div>


        ${
          isAdmin()
            ? `

              <div class="admin-access">

                <h3>
                  Administrator
                </h3>

                <p>
                  Manage the platform,
                  releases, and analytics.
                </p>

                <button
                  class="primary-button full-width"
                  onclick="navigate('admin')"
                >
                  <i data-lucide="shield"></i>
                  Admin Panel
                </button>

              </div>

            `
            : ""
        }

      </aside>


      <section class="profile-content">

        ${renderProfileTab()}

      </section>

    </div>

  `;
}


/* =========================================================
   PROFILE TABS
========================================================= */

function switchProfileTab(tab) {

  profileTab = tab;

  renderPage();

}


function renderProfileTab() {

  if (profileTab === "saved") {

    return renderSaved();

  }

  if (profileTab === "settings") {

    return renderSettings();

  }

  if (profileTab === "payments") {

    return renderPayments();

  }

  if (profileTab === "support") {

    return renderSupport();

  }

  return "";
}


/* =========================================================
   SAVED
========================================================= */

function renderSaved() {

  const movies =
    savedMovies
      .map(getMovie)
      .filter(Boolean);

  return `

    <div>

      <div class="section-heading">

        <div>

          <h2>Saved</h2>

          <p>
            Your watchlist
          </p>

        </div>

      </div>


      ${
        movies.length
          ? `

            <div class="movie-grid">

              ${movies.map(renderMovieCard).join("")}

            </div>

          `
          : `

            <div class="glass-card" style="
              padding:45px;
              text-align:center;
            ">

              <i
                data-lucide="bookmark"
                style="
                  width:35px;
                  color:var(--purple-light);
                  margin-bottom:15px;
                "
              ></i>

              <h3 style="margin:0 0 7px;">
                Nothing here yet
              </h3>

              <p style="
                margin:0;
                color:var(--muted);
                font-size:12px;
              ">
                Add movies to your saved list
                to come back to them later.
              </p>

            </div>

          `
      }

    </div>

  `;
}


/* =========================================================
   SETTINGS
========================================================= */

function renderSettings() {

  return `

    <div>

      <div class="section-heading">

        <div>

          <h2>Settings</h2>

          <p>
            Manage your account settings
          </p>

        </div>

      </div>


      <div class="glass-card" style="padding:22px;">

        <div class="settings-list">

          ${renderToggleSetting(
            "notifications",
            "Notifications",
            "News, premieres, and personalized recommendations."
          )}

          ${renderToggleSetting(
            "autoplay",
            "Autoplay",
            "Automatically play the next episode."
          )}


          <div class="setting-row">

            <div>

              <p class="setting-title">
                Video Quality
              </p>

              <p class="setting-description">
                Choose your preferred quality.
              </p>

            </div>

            <select
              onchange="changeQuality(this.value)"
              style="
                background:#141018;
                color:white;
                border:1px solid rgba(255,255,255,.1);
                border-radius:9px;
                padding:8px;
                outline:none;
                font-size:11px;
              "
            >

              ${["Auto", "1080p", "720p", "480p"]
                .map(q => `
                  <option
                    value="${q}"
                    ${settings.quality === q ? "selected" : ""}
                  >
                    ${q}
                  </option>
                `)
                .join("")}

            </select>

          </div>

        </div>

      </div>

    </div>

  `;
}


function renderToggleSetting(
  key,
  title,
  description
) {

  return `

    <div class="setting-row">

      <div>

        <p class="setting-title">
          ${title}
        </p>

        <p class="setting-description">
          ${description}
        </p>

      </div>

      <button
        class="toggle ${settings[key] ? "active" : ""}"
        onclick="toggleSetting('${key}')"
      >
        <span></span>
      </button>

    </div>

  `;
}


function toggleSetting(key) {

  settings[key] = !settings[key];

  saveState();

  renderPage();

  showToast(
    settings[key]
      ? "Setting enabled"
      : "Setting disabled"
  );

}


function changeQuality(value) {

  settings.quality = value;

  saveState();

  showToast(
    `Quality: ${value}`
  );

}


/* =========================================================
   PAYMENTS
========================================================= */

function renderPayments() {

  return `

    <div>

      <div class="section-heading">

        <div>

          <h2>Payment Methods</h2>

          <p>
            Manage your subscription payment methods
          </p>

        </div>

      </div>


      <div style="
        display:grid;
        gap:10px;
      ">

        <div class="payment-method">

          <div class="payment-left">

            <div class="payment-icon">
              <i data-lucide="smartphone"></i>
            </div>

            <div>

              <div class="payment-name">
                Apple Pay
              </div>

              <div class="payment-detail">
                Demo connection
              </div>

            </div>

          </div>

          <button
            class="secondary-button"
            onclick="simulatePayment('Apple Pay')"
          >
            Connect
          </button>

        </div>


        <div class="payment-method">

          <div class="payment-left">

            <div class="payment-icon">
              <i data-lucide="credit-card"></i>
            </div>

            <div>

              <div class="payment-name">
                Bank Card
              </div>

              <div class="payment-detail">
                Visa / Mastercard
              </div>

            </div>

          </div>

          <button
            class="secondary-button"
            onclick="simulatePayment('Bank Card')"
          >
            Add
          </button>

        </div>


        <div class="glass-card subscription-card">

          <div class="subscription-header">

            <div>

              <span class="plan-badge">
                Seempay+ Premium
              </span>

              <h2>
                799 ₽ / month
              </h2>

              <p>
                Ad-free · 4K · personalized recommendations
              </p>

            </div>

            <i
              data-lucide="crown"
              style="
                color:var(--purple-light);
                width:28px;
              "
            ></i>

          </div>

          <button
            class="primary-button"
            style="margin-top:20px;"
            onclick="simulateSubscription()"
          >
            Subscribe
          </button>

        </div>

      </div>

    </div>

  `;
}


/* =========================================================
   SUPPORT
========================================================= */

function renderSupport() {

  return `

    <div>

      <div class="section-heading">

        <div>

          <h2>Support</h2>

          <p>
            We're here to help
          </p>

        </div>

      </div>


      <div class="glass-card" style="padding:25px;">

        <div style="
          display:grid;
          gap:20px;
        ">

          <div>

            <div style="
              display:flex;
              gap:10px;
              align-items:center;
              margin-bottom:8px;
            ">

              <div class="payment-icon">
                <i data-lucide="message-circle"></i>
              </div>

              <strong>
                Contact Support
              </strong>

            </div>

            <p style="
              color:var(--muted);
              font-size:12px;
              line-height:1.6;
            ">
              If you have questions about your subscription,
              payment, or watching content, send us a message.
            </p>

            <button
              class="primary-button"
              onclick="contactSupport()"
            >
              Contact us
            </button>

          </div>


          <div style="
            padding-top:18px;
            border-top:1px solid rgba(255,255,255,.06);
          ">

            <strong>
              Frequently Asked Questions
            </strong>

            <div style="
              display:grid;
              gap:8px;
              margin-top:12px;
            ">

              <button
                class="secondary-button"
                style="justify-content:space-between;"
                onclick="showToast('Subscription section opened')"
              >
                How does the subscription work?
                <i data-lucide="chevron-right"></i>
              </button>

              <button
                class="secondary-button"
                style="justify-content:space-between;"
                onclick="showToast('Payment section opened')"
              >
                How do I change my card?
                <i data-lucide="chevron-right"></i>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  `;
}


/* =========================================================
   ADMIN
========================================================= */

function renderAdmin() {

  if (!isAdmin()) {

    return `

      <div style="
        padding:100px 20px;
        text-align:center;
      ">

        <i
          data-lucide="lock"
          style="
            width:40px;
            color:var(--red);
            margin-bottom:15px;
          "
        ></i>

        <h2>
          Access denied
        </h2>

        <p style="color:var(--muted);">
          This section is available only to the main administrator.
        </p>

        <button
          class="secondary-button"
          onclick="navigate('profile')"
        >
          Go back
        </button>

      </div>

    `;
  }


  const successful =
    transactions.filter(
      transaction =>
        transaction.status === "success"
    );

  const revenue =
    successful.reduce(
      (sum, transaction) =>
        sum + Number(transaction.amount),
      0
    );

  const activeSubscribers =
    Math.max(
      0,
      new Set(
        successful.map(
          transaction => transaction.user
        )
      ).size
    );


  return `

    <div class="admin-page">

      <div class="admin-header">

        <div>

          <div class="admin-label">

            <i data-lucide="shield-check"></i>

            Main Administrator

          </div>

          <h1>
            Admin Panel
          </h1>

          <p>
            Manage content, users
            and Seempay+ financial metrics.
          </p>

        </div>

        <button
          class="secondary-button"
          onclick="navigate('profile')"
        >
          <i data-lucide="arrow-left"></i>
          Profile
        </button>

      </div>


      <div class="analytics-grid">

        <div class="metric-card">

          <div class="metric-top">

            <span class="metric-label">
              Active Subscribers
            </span>

            <div class="metric-icon">
              <i data-lucide="users"></i>
            </div>

          </div>

          <div class="metric-value">
            ${activeSubscribers}
          </div>

        </div>


        <div class="metric-card">

          <div class="metric-top">

            <span class="metric-label">
              Revenue
            </span>

            <div class="metric-icon">
              <i data-lucide="wallet"></i>
            </div>

          </div>

          <div class="metric-value">
            ${formatMoney(revenue)}
          </div>

        </div>


        <div class="metric-card">

          <div class="metric-top">

            <span class="metric-label">
              Transactions
            </span>

            <div class="metric-icon">
              <i data-lucide="receipt"></i>
            </div>

          </div>

          <div class="metric-value">
            ${transactions.length}
          </div>

        </div>

      </div>


      <div class="admin-columns">

        <!-- RELEASE FORM -->

        <section class="admin-card">

          <div class="admin-card-header">

            <h2>
              Add релиз
            </h2>

            <span>
              IMDb-style metadata
            </span>

          </div>


          <form
            onsubmit="addRelease(event)"
          >

            <div class="form-grid">

              <div class="form-group">

                <label>
                  Title *
                </label>

                <input
                  id="releaseTitle"
                  required
                  placeholder="Movie title"
                />

              </div>


              <div class="form-group">

                <label>
                  Release Date *
                </label>

                <input
                  id="releaseDate"
                  required
                  type="date"
                />

              </div>


              <div class="form-group">

                <label>
                  Year
                </label>

                <input
                  id="releaseYear"
                  type="number"
                  min="1900"
                  max="2100"
                  placeholder="2027"
                />

              </div>


              <div class="form-group">

                <label>
                  Genre
                </label>

                <input
                  id="releaseGenre"
                  placeholder="Sci-Fi / Thriller"
                />

              </div>


              <div class="form-group">

                <label>
                  Rating
                </label>

                <input
                  id="releaseRating"
                  type="number"
                  min="0"
                  max="10"
                  step="0.1"
                  value="8.0"
                />

              </div>


              <div class="form-group">

                <label>
                  Duration
                </label>

                <input
                  id="releaseDuration"
                  placeholder="2h 10m"
                />

              </div>


              <div class="form-group full">

                <label>
                  Description
                </label>

                <textarea
                  id="releaseDescription"
                  placeholder="Short movie description..."
                ></textarea>

              </div>


              <div class="form-group full">

                <label>
                  Poster URL
                </label>

                <input
                  id="releasePoster"
                  type="url"
                  placeholder="https://..."
                />

              </div>


              <div class="form-group full">

                <label>
                  Background Image URL
                </label>

                <input
                  id="releaseBackdrop"
                  type="url"
                  placeholder="https://..."
                />

              </div>


              <div class="form-group full">

                <label>
                  Trailer URL
                </label>

                <input
                  id="releaseTrailer"
                  type="url"
                  placeholder="https://youtube.com/..."
                />

              </div>


              <div class="form-group">

                <label>
                  Status
                </label>

                <select id="releaseStatus">

                  <option value="upcoming">
                    Scheduled
                  </option>

                  <option value="released">
                    Released
                  </option>

                </select>

              </div>


              <div
                class="form-group"
                style="
                  display:flex;
                  align-items:end;
                "
              >

                <button
                  class="primary-button full-width"
                  type="submit"
                >
                  <i data-lucide="plus"></i>
                  Add релиз
                </button>

              </div>

            </div>

          </form>

        </section>


        <!-- TRANSACTIONS -->

        <section class="admin-card">

          <div class="admin-card-header">

            <h2>
              Latest Transactions
            </h2>

            <span>
              ${transactions.length} records
            </span>

          </div>


          <div style="overflow-x:auto;">

            <table class="transaction-table">

              <thead>

                <tr>

                  <th>Date</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                ${transactions.map(transaction => `

                  <tr>

                    <td>
                      ${formatDate(transaction.date)}
                    </td>

                    <td>
                      ${escapeHTML(transaction.user)}
                    </td>

                    <td>
                      ${formatMoney(transaction.amount)}
                    </td>

                    <td>

                      <span
                        class="status ${
                          transaction.status
                        }"
                      >
                        ${
                          transaction.status === "success"
                            ? "Paid"
                            : transaction.status === "pending"
                              ? "Pending"
                              : "Failed"
                        }
                      </span>

                    </td>

                  </tr>

                `).join("")}

              </tbody>

            </table>

          </div>

        </section>

      </div>


      <section class="admin-card" style="margin-top:20px;">

        <div class="admin-card-header">

          <h2>
            Release Library
          </h2>

          <span>
            ${releases.length} projects
          </span>

        </div>


        <div class="release-list">

          ${releases.map(movie => `

            <div class="release-row">

              <img
                class="release-poster"
                src="${movie.poster}"
                alt=""
              />

              <div class="release-info">

                <h3>
                  ${escapeHTML(movie.title)}
                </h3>

                <p>
                  ${formatDate(movie.releaseDate)}
                  ·
                  ${escapeHTML(movie.genre)}
                </p>

              </div>

              <button
                class="secondary-button"
                onclick="deleteRelease('${movie.id}')"
                title="Delete"
              >
                <i data-lucide="trash-2"></i>
              </button>

            </div>

          `).join("")}

        </div>

      </section>

    </div>

  `;
}


/* =========================================================
   ADD RELEASE
========================================================= */

function addRelease(event) {

  event.preventDefault();

  if (!isAdmin()) {

    showToast("Access denied");

    return;
  }


  const title =
    document.getElementById("releaseTitle").value.trim();

  const releaseDate =
    document.getElementById("releaseDate").value;

  const year =
    Number(
      document.getElementById("releaseYear").value
    ) ||
    new Date(releaseDate).getFullYear();

  const genre =
    document.getElementById("releaseGenre").value.trim() ||
    "Drama";

  const rating =
    Number(
      document.getElementById("releaseRating").value
    ) || 0;

  const duration =
    document.getElementById("releaseDuration").value.trim() ||
    "2h";

  const description =
    document.getElementById("releaseDescription").value.trim() ||
    "Description пока не добавлено.";

  const poster =
    document.getElementById("releasePoster").value.trim() ||
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=85";

  const backdrop =
    document.getElementById("releaseBackdrop").value.trim() ||
    poster;

  const trailer =
    document.getElementById("releaseTrailer").value.trim() ||
    "#";

  const status =
    document.getElementById("releaseStatus").value;


  const newMovie = {

    id:
      slugify(title) +
      "-" +
      Date.now(),

    title,
    year,
    genre,
    releaseDate,
    rating,
    status,
    duration,
    description,
    poster,
    backdrop,
    trailer

  };


  releases.unshift(newMovie);

  saveState();

  showToast(
    `«${title}» has been added to the library`
  );

  event.target.reset();

  renderPage();

}


/* =========================================================
   DELETE RELEASE
========================================================= */

function deleteRelease(id) {

  if (!isAdmin()) return;

  const movie = getMovie(id);

  if (!movie) return;

  const confirmed =
    confirm(
      `Delete «${movie.title}»?`
    );

  if (!confirmed) return;

  releases =
    releases.filter(
      item => item.id !== id
    );

  savedMovies =
    savedMovies.filter(
      item => item !== id
    );

  saveState();

  renderPage();

  showToast("Release deleted");

}


/* =========================================================
   AUTH
========================================================= */

function openAuth() {

  document
    .getElementById("authModal")
    .classList.remove("hidden");

  setTimeout(() => {

    document
      .getElementById("authEmail")
      ?.focus();

  }, 100);

}


function closeAuth() {

  document
    .getElementById("authModal")
    .classList.add("hidden");

}


function handleLogin(event) {

  event.preventDefault();

  const email =
    document
      .getElementById("authEmail")
      .value
      .trim()
      .toLowerCase();

  if (!email) return;


  currentUser = {

    email,

    name:
      email === ADMIN_EMAIL
        ? "Sergio Castello"
        : email
            .split("@")[0]
            .replace(/[._-]/g, " ")

  };


  saveState();

  closeAuth();

  updateHeader();

  navigate("profile");

  showToast(
    isAdmin()
      ? "You are signed in as the main administrator"
      : "Welcome to Seempay+"
  );

}


function logout() {

  currentUser = null;

  localStorage.removeItem(
    STORAGE_KEYS.user
  );

  updateHeader();

  navigate("trending");

  showToast("You have been signed out");

}


/* =========================================================
   HEADER
========================================================= */

function updateHeader() {

  const avatar =
    document.getElementById("headerAvatar");

  if (!avatar) return;


  if (currentUser) {

    avatar.textContent =
      getInitials(
        currentUser.name ||
        currentUser.email
      );

  } else {

    avatar.textContent = "S";

  }

}


function getInitials(value) {

  if (!value) return "S";

  const parts =
    String(value)
      .trim()
      .split(/\s+/);

  if (parts.length === 1) {

    return parts[0]
      .slice(0, 2)
      .toUpperCase();

  }

  return (
    parts[0][0] +
    parts[1][0]
  ).toUpperCase();

}


/* =========================================================
   MOVIE MODAL
========================================================= */

function openMovie(id) {

  const movie = getMovie(id);

  if (!movie) return;


  const isSaved =
    savedMovies.includes(movie.id);


  const modal =
    document.getElementById("movieModal");

  const content =
    document.getElementById("movieModalContent");


  content.innerHTML = `

    <div
      class="movie-modal-hero"
      style="
        background-image:
          url('${movie.backdrop || movie.poster}');
      "
    >

      <div class="movie-modal-info">

        <span class="plan-badge">

          ${
            movie.status === "released"
              ? "Available now"
              : `Premiere · ${formatDate(movie.releaseDate)}`
          }

        </span>

        <h1>
          ${escapeHTML(movie.title)}
        </h1>

        <p>

          ${movie.year}
          ·
          ${escapeHTML(movie.genre)}
          ·
          ${movie.duration}
          ·
          ★ ${movie.rating}

        </p>

        <p style="margin-top:13px;">

          ${escapeHTML(movie.description)}

        </p>


        <div class="movie-modal-actions">

          <button
            class="primary-button"
            onclick="simulateWatch('${movie.id}')"
          >
            <i data-lucide="play"></i>
            ${
              movie.status === "released"
                ? "Watch"
                : "Trailer"
            }
          </button>

          <button
            class="secondary-button"
            onclick="toggleSaved('${movie.id}')"
          >

            <i data-lucide="${
              isSaved
                ? "bookmark-check"
                : "bookmark"
            }"></i>

            ${
              isSaved
                ? "Saved"
                : "Save"
            }

          </button>

        </div>

      </div>

    </div>

  `;


  modal.classList.remove("hidden");

  refreshIcons();

}


function closeMovie() {

  document
    .getElementById("movieModal")
    .classList.add("hidden");

}


/* =========================================================
   SAVED
========================================================= */

function toggleSaved(id) {

  if (!currentUser) {

    closeMovie();

    openAuth();

    showToast(
      "Sign in to save movies"
    );

    return;
  }


  if (savedMovies.includes(id)) {

    savedMovies =
      savedMovies.filter(
        movieId => movieId !== id
      );

    showToast("Removed from saved");

  } else {

    savedMovies.push(id);

    showToast("Added to saved");

  }


  saveState();

  closeMovie();

  if (currentPage === "profile") {

    renderPage();

  }

}


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

  document
    .getElementById("searchModal")
    .classList.remove("hidden");

  document
    .getElementById("searchInput")
    .value = "";

  document
    .getElementById("searchResults")
    .innerHTML = `
      <div class="empty-search">
        Начните вводить название
      </div>
    `;

  setTimeout(() => {

    document
      .getElementById("searchInput")
      .focus();

  }, 100);

}


function closeSearch() {

  document
    .getElementById("searchModal")
    .classList.add("hidden");

}


function performSearch() {

  const query =
    document
      .getElementById("searchInput")
      .value
      .trim()
      .toLowerCase();


  const resultsContainer =
    document.getElementById("searchResults");


  if (!query) {

    resultsContainer.innerHTML = `
      <div class="empty-search">
        Начните вводить название
      </div>
    `;

    return;
  }


  const results =
    releases.filter(movie =>
      [
        movie.title,
        movie.genre,
        movie.description
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );


  if (!results.length) {

    resultsContainer.innerHTML = `
      <div class="empty-search">
        Nothing found
      </div>
    `;

    return;
  }


  resultsContainer.innerHTML =
    results.map(movie => `

      <div
        class="search-result"
        onclick="
          closeSearch();
          openMovie('${movie.id}');
        "
      >

        <img
          src="${movie.poster}"
          alt=""
        />

        <div>

          <h4>
            ${escapeHTML(movie.title)}
          </h4>

          <p>
            ${movie.year}
            ·
            ${escapeHTML(movie.genre)}
            ·
            ★ ${movie.rating}
          </p>

        </div>

      </div>

    `).join("");

}


/* =========================================================
   PAYMENTS
========================================================= */

function simulatePayment(method) {

  if (!currentUser) {

    openAuth();

    return;
  }

  showToast(
    `${method}: demo connection`
  );

}


function simulateSubscription() {

  if (!currentUser) {

    openAuth();

    return;
  }


  const transaction = {

    id:
      "TX-" +
      Math.floor(
        10000 + Math.random() * 89999
      ),

    date:
      new Date()
        .toISOString()
        .split("T")[0],

    amount: 799,

    user: currentUser.email,

    status: "success"

  };


  transactions.unshift(transaction);

  saveState();

  showToast(
    "Subscription activated — demo"
  );

}


/* =========================================================
   SUPPORT
========================================================= */

function contactSupport() {

  showToast(
    "Support form will be connected to the backend"
  );

}


/* =========================================================
   WATCH
========================================================= */

function simulateWatch(id) {

  const movie = getMovie(id);

  if (!movie) return;


  if (movie.status !== "released") {

    showToast(
      `Trailer: ${movie.title}`
    );

    return;
  }


  showToast(
    `Starting playback: ${movie.title}`
  );

}


/* =========================================================
   UTILS
========================================================= */

function slugify(text) {

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u0400-\u04FF-]+/g, "")
    .replace(/--+/g, "-");
}


function showToast(message) {

  const container =
    document.getElementById(
      "toastContainer"
    );

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.innerHTML = `

    <i data-lucide="sparkles"></i>

    <span>
      ${escapeHTML(message)}
    </span>

  `;

  container.appendChild(toast);

  refreshIcons();


  setTimeout(() => {

    toast.style.opacity = "0";
    toast.style.transform =
      "translateY(8px)";

    setTimeout(
      () => toast.remove(),
      250
    );

  }, 2800);

}


function refreshIcons() {

  if (
    typeof lucide !== "undefined"
  ) {

    lucide.createIcons();

  }

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "/" &&
      document.activeElement.tagName !== "INPUT" &&
      document.activeElement.tagName !== "TEXTAREA"
    ) {

      event.preventDefault();

      openSearch();

    }


    if (event.key === "Escape") {

      closeSearch();
      closeAuth();
      closeMovie();

    }

  }
);


/* =========================================================
   DEMO ADMIN HELPER
=========================================================

   To access the admin panel:

   Email:
   yosoycastello@gmail.com

   A password is intentionally not used
   in this frontend version.

========================================================= */