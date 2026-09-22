/**
 * Sanjay Rathod Developer Portfolio - Interactivity & Logic
 */

// --- Project Architectural Deep-Dives Data ---
const projectData = {
  mailnova: {
    title: "MailNova — SaaS Email Marketing & Automation",
    subtitle: "High-Throughput Campaign Orchestration & Transactional Mail Engine",
    description: "MailNova is an enterprise-ready email platform designed to manage high-volume customer communications, marketing drip workflows, and transactional triggers. Built to solve deliverability challenges, it incorporates intelligent batching, automated unsubscribe handling, and multi-tenant isolation.",
    architecture: [
      "Asynchronous message broker with Redis and Celery worker pools for queue management.",
      "SMTP & Amazon SES multi-provider failover routing with automatic retry algorithms.",
      "Dynamic HTML template parser with visual merge tags and responsive preview rendering.",
      "Webhook ingestion service processing delivery, open, click, and bounce status updates in real time."
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "Amazon SES", "React", "Docker"],
    highlights: "Engineered to dispatch 100,000+ emails/hour with sub-second API ingestion latency."
  },
  beesop: {
    title: "BeeSOP — SOP & Operational Compliance Manager",
    subtitle: "Enterprise Standard Operating Procedure Governance Platform",
    description: "Developed at ConfidoSoft, BeeSOP provides distributed organizations with digital standard operating procedure tracking, recurring compliance checklists, digital sign-offs, and automated audit trails. Designed for enterprise hospitality and multi-unit businesses.",
    architecture: [
      "Role-Based Access Control (RBAC) with granular department, regional, and corporate tiers.",
      "Automated task recurrence scheduler generating daily, weekly, and seasonal operational checklists.",
      "Immutable audit log records ensuring regulatory inspection readiness and historical fidelity.",
      "Real-time escalation triggers notifying managers of missed checklist items."
    ],
    tech: ["Node.js", "Express", "PostgreSQL", "JWT Authentication", "Sequelize ORM", "Docker"],
    highlights: "Deployed across enterprise hospitality brands, tracking thousands of daily operational procedures."
  },
  innrly: {
    title: "Innrly — Hospitality Effectiveness & Analytics",
    subtitle: "Real-Time Hotel Operations, Shift Handover & Revenue Intelligence",
    description: "Innrly streamlines hotel operations through unified shift management, revenue tracking, and department task distribution. It centralizes front-desk, housekeeping, and maintenance KPIs into actionable dashboards.",
    architecture: [
      "RESTful API endpoints ingesting property management system (PMS) night-audit summaries.",
      "Real-time task synchronization for housekeeping room turnaround and maintenance tickets.",
      "Responsive analytics frontend built with Next.js and optimized charts for mobile tablets.",
      "Automated PDF executive shift report generator for hotel general managers."
    ],
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "TailwindCSS", "REST APIs"],
    highlights: "Reduced morning shift handover friction by 65% across multi-property pilot deployments."
  },
  woocommerce: {
    title: "Custom WooCommerce & Payment Gateway Architecture",
    subtitle: "High-Volume E-Commerce Checkout & Custom Plugin Development",
    description: "Bespoke e-commerce architectures engineered for custom checkout experiences, international multi-currency pricing, recurring subscription management, and third-party ERP inventory synchronization.",
    architecture: [
      "Custom WooCommerce PHP plugin development with minimal external dependencies for maximum speed.",
      "Stripe Elements & PayPal REST API integrations with 3D-Secure 2 compliance.",
      "Asynchronous webhook dispatchers synchronizing order fulfillment to warehouse management APIs.",
      "Aggressive database query caching and transient optimization to handle flash sales."
    ],
    tech: ["PHP", "WordPress", "WooCommerce", "Stripe API", "MySQL", "JavaScript"],
    highlights: "Maintained 99.99% transaction reliability during high-traffic promotional sale events."
  },
  automation: {
    title: "Automated Data Ingestion & Web Scraping Engine",
    subtitle: "Distributed ETL Pipeline with Anti-Detection & Proxy Rotation",
    description: "A resilient data pipeline that extracts, parses, and normalizes unstructured marketplace data from complex web interfaces. Built to handle JS-heavy single-page apps, dynamic pagination, and high concurrency.",
    architecture: [
      "Headless browser pool orchestrated via Playwright and Asyncio.",
      "Automatic proxy rotation and smart back-off rate-limit management.",
      "Data normalization pipeline validating records with Pydantic schemas before database write.",
      "Automated alerting webhooks notifying team of structural DOM changes or extraction failures."
    ],
    tech: ["Python", "Playwright", "Asyncio", "Pandas", "PostgreSQL", "Pydantic"],
    highlights: "Extracted and structured over 2 million catalog records with 99.8% extraction fidelity."
  },
  microservices: {
    title: "Cloud Microservices & API Gateway Architecture",
    subtitle: "Low-Latency Backend Services with Centralized Authentication",
    description: "Modern microservices infrastructure featuring centralized API Gateway routing, JWT token validation, distributed rate-limiting, and comprehensive logging for decoupled service architectures.",
    architecture: [
      "FastAPI gateway performing authorization token validation prior to service forwarding.",
      "Redis sliding-window rate limiting preventing API abuse and DDoS attacks.",
      "Containerized deployment using Docker Compose and Nginx reverse proxy.",
      "Comprehensive OpenAPI (Swagger) specifications with automated client SDK generators."
    ],
    tech: ["FastAPI", "Python", "Docker", "Redis", "OAuth2 / JWT", "Nginx"],
    highlights: "Achieved average API response times under 18ms across all internal service routes."
  }
};

// --- DOM Ready Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgress();
  initNavigation();
  initProjectFilters();
  initProjectModals();
  initAnimatedCounters();
  initBackToTop();
  initEmailCopy();
});

// --- Scroll Progress Bar ---
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  });
}

// --- Navigation & Mobile Drawer ---
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
      });
    });
  }

  // Active navigation highlight on scroll
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// --- Project Filtering ---
function initProjectFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Set active tab
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = card.getAttribute("data-category") || "";
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.35s ease forwards";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// --- Project Modals ---
function initProjectModals() {
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = document.getElementById("modal-close");
  const triggers = document.querySelectorAll(".modal-trigger");

  if (!modal || !modalContent) return;

  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const projKey = btn.getAttribute("data-project");
      const data = projectData[projKey];

      if (data) {
        let techBadges = data.tech.map(t => `<span class="tag">${t}</span>`).join(" ");
        let archItems = data.architecture.map(a => `<li>${a}</li>`).join("");

        modalContent.innerHTML = `
          <h3>${data.title}</h3>
          <div class="modal-subtitle">${data.subtitle}</div>
          <p>${data.description}</p>
          
          <div class="modal-architecture-box">
            <h4>Architectural & Technical Highlights</h4>
            <ul>${archItems}</ul>
          </div>

          <div style="margin: 1.25rem 0;">
            <strong style="color: var(--text-primary); font-size: 0.9rem;">Key Impact:</strong>
            <p style="color: var(--accent-emerald); font-weight: 500; margin-top: 0.25rem;">${data.highlights}</p>
          </div>

          <div style="margin-top: 1.5rem;">
            <strong style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Technologies Employed:</strong>
            <div class="project-tech-tags">${techBadges}</div>
          </div>
        `;

        modal.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

// --- Animated Stats Counter ---
function initAnimatedCounters() {
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const duration = 1500;
          const increment = Math.ceil(target / (duration / 30));

          const updateCounter = () => {
            count += increment;
            if (count < target) {
              if (target === 99) {
                counter.innerText = "99.9%";
              } else if (target === 100) {
                counter.innerText = count + "k+";
              } else {
                counter.innerText = count + "+";
              }
              setTimeout(updateCounter, 30);
            } else {
              if (target === 99) {
                counter.innerText = "99.9%";
              } else if (target === 100) {
                counter.innerText = "100k+";
              } else {
                counter.innerText = target + "+";
              }
            }
          };

          updateCounter();
        });
        animated = true;
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) observer.observe(statsSection);
}

// --- Back To Top ---
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Copy Email to Clipboard ---
function initEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const copyText = document.getElementById("copy-text");

  if (copyBtn && copyText) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("sanjayrathodk24@gmail.com").then(() => {
        copyText.innerText = "Copied! ✓";
        copyBtn.style.background = "rgba(16, 185, 129, 0.25)";
        copyBtn.style.borderColor = "var(--accent-emerald)";

        setTimeout(() => {
          copyText.innerText = "Copy Email";
          copyBtn.style.background = "";
          copyBtn.style.borderColor = "";
        }, 2500);
      });
    });
  }
}

// --- Form Submit Handler ---
function handleFormSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("contact-form");
  const alertBox = document.getElementById("form-alert");
  const submitBtn = document.getElementById("submit-btn");

  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const subject = document.getElementById("form-subject").value;
  const message = document.getElementById("form-message").value;

  // Visual success feedback
  if (alertBox) {
    alertBox.className = "form-alert success";
    alertBox.style.display = "block";
    alertBox.innerHTML = `Thank you, <strong>${name}</strong>! Opening your email client to dispatch to <strong>sanjayrathodk24@gmail.com</strong>...`;
  }

  // Construct mailto link to guarantee delivery to sanjayrathodk24@gmail.com
  const mailtoUrl = `mailto:sanjayrathodk24@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  setTimeout(() => {
    window.location.href = mailtoUrl;
    form.reset();
  }, 1000);
}
