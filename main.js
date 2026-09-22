/**
 * Sanjay Rathod Developer Portfolio - Interactivity & Resume Data Logic
 */

// --- Project Architectural Deep-Dives from Resume & Portfolio ---
const projectData = {
  guru99: {
    title: "Guru99.com — Global Tech Tutorial & Review Platform",
    subtitle: "High-Traffic Custom WordPress Architecture Serving Millions of Monthly Tech Professionals",
    description: "Guru99 is one of the world's most widely visited tech education platforms, delivering free, structured tutorials across 30+ international languages. Contributed to core PHP and WordPress development, custom taxonomy structuring, and resolving critical site performance bottlenecks.",
    architecture: [
      "Engineered custom WordPress theme and modular template components with zero page-builder overhead.",
      "Optimized high-concurrency MySQL database queries and composite indices to handle massive read traffic spikes.",
      "Implemented multi-tier caching architectures (server-side object caching, HTML transient caching, and CDN asset prefetching).",
      "Integrated multilingual hreflang SEO routing and structured Schema.org markup for global discoverability.",
      "Optimized Core Web Vitals and programmatic ad scripts to maximize user retention and sub-second page rendering."
    ],
    tech: ["Custom WordPress", "PHP 8", "MySQL Tuning", "Object Caching", "Cloudflare CDN", "JavaScript", "Multilingual SEO"],
    highlights: "Maintains 99.99% availability serving millions of global visits monthly with sub-second page response times.",
    liveUrl: "https://www.guru99.com/"
  },
  leadcrm: {
    title: "LeadCRM Dashboard — Laravel & Salesforce API",
    subtitle: "Enterprise CRM with Real-Time Salesforce Data Synchronization",
    description: "Designed and led the end-to-end engineering of a mission-critical CRM platform with real-time Salesforce data synchronization. Developed scalable backend services and structured data pipelines to manage multi-source lead ingestion and pipeline tracking.",
    architecture: [
      "Built resilient RESTful API integration with Salesforce REST/Bulk APIs for bi-directional data flow.",
      "Optimized API batching and asynchronous processing pipeline, cutting data sync time by 40%.",
      "Engineered queue workers and webhook handlers with automated retry logic to guarantee data integrity.",
      "Created an intuitive analytical dashboard for sales teams to track lead velocity and conversions."
    ],
    tech: ["PHP", "Laravel", "Salesforce API", "MySQL", "Redis", "REST APIs", "AWS EC2"],
    highlights: "Cut sync time by 40% while improving system uptime and data consistency across all active sales teams."
  },
  onrole: {
    title: "OnRole — HR Management & Payroll System",
    subtitle: "Custom PHP HRMS & Automated Workflow Engine",
    description: "Architected a comprehensive HR management system powering payroll, attendance tracking, and employee management across multiple client organizations.",
    architecture: [
      "Engineered automated payroll calculation modules accounting for variable shifts, leave policies, and tax compliance.",
      "Built attendance logging modules supporting biometric API data ingestion and shift scheduling.",
      "Implemented automated reporting triggers and automated email/notification workflows, saving 40% manual HR processing time.",
      "Designed role-based access control (RBAC) ensuring data segregation and privacy across 3 distinct client organizations."
    ],
    tech: ["Custom PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Cron Schedulers", "PDF Engine"],
    highlights: "Active production usage by 200+ employees across 3 organizations; reduced manual HR overhead by 40%."
  },
  executive_advertising: {
    title: "The Executive Advertising — Web-to-Print Studio",
    subtitle: "Interactive Browser-Based Design Tool using Fabric.js & PHP",
    description: "Developed an interactive browser-based graphic customization tool that enables non-technical business users to design and order print-ready promotional materials and branded merchandise.",
    architecture: [
      "Built high-performance interactive canvas manipulation engine with Fabric.js.",
      "Optimized canvas rendering and texture caching for high-resolution graphics, slashing load times by 50%.",
      "Implemented lazy loading, SVG vector parsing, and lossy/lossless asset compression pipelines.",
      "Built backend PHP service to convert canvas JSON states into high-DPI print-ready PDF/CMYK exports."
    ],
    tech: ["Fabric.js", "PHP", "HTML5 Canvas", "JavaScript", "ImageMagick", "MySQL"],
    highlights: "Reduced canvas rendering load times by 50% for complex multi-layered print graphics."
  },
  saptraininghub: {
    title: "SAPTrainingHub.com — E-Learning & E-Commerce",
    subtitle: "WordPress & WooCommerce Course Marketplace Platform",
    description: "Engineered an e-learning platform featuring dynamic course catalogues, subscription management, student enrollment flows, and multi-currency checkout.",
    architecture: [
      "Custom WooCommerce integration tailored for digital course purchases and recurring subscriptions.",
      "Configured robust payment gateway integrations ensuring frictionless international checkout.",
      "Implemented LMS module progress tracking, course completion triggers, and automated certificates.",
      "Engineered SEO architecture and structured metadata, driving significant organic search visibility."
    ],
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Stripe Gateway", "SEO Architecture"],
    highlights: "Full-lifecycle delivery with subscription monetization, seamless course checkout, and high SEO rankings."
  },
  confidosoft_enterprise: {
    title: "Confidosoft Enterprise Laravel & AWS Architecture",
    subtitle: "Enterprise Web Applications & Cloud Deployment",
    description: "Architected and delivered scalable Laravel applications for enterprise clients at Confidosoft Solutions, driving design decisions from database schema to API layer.",
    architecture: [
      "Led full-stack application architecture from relational schema design to high-throughput REST API endpoints.",
      "Managed and mentored a dedicated engineering team of 7–10 developers with structured code reviews.",
      "Deployed and maintained production applications on AWS (EC2, S3), ensuring high availability.",
      "Collaborated directly with client stakeholders to define product roadmaps and technical trade-offs."
    ],
    tech: ["Laravel", "PHP", "AWS (EC2, S3)", "Docker", "MySQL", "PostgreSQL", "Git/CI-CD"],
    highlights: "Maintained 99.99% infrastructure reliability on AWS with zero unscheduled deployment downtime."
  },
  custom_ecommerce: {
    title: "High-Traffic E-Commerce & Custom CMS Platforms",
    subtitle: "CodeIgniter, Drupal & Custom PHP Solutions",
    description: "Developed and launched 10+ custom CMS and e-commerce platforms over 10+ years, specializing in database query optimization and performance tuning.",
    architecture: [
      "Refactored legacy database queries and implemented composite indexing strategies.",
      "Implemented server-side object caching and transient storage, cutting page load times by up to 35%.",
      "Integrated payment gateways, third-party logistics APIs, and ERP systems.",
      "Delivered 10+ client projects end-to-end from initial scoping to cloud deployment and ongoing support."
    ],
    tech: ["PHP", "CodeIgniter", "Drupal", "MySQL", "Object Caching", "REST APIs"],
    highlights: "Cut database response times by up to 35% across high-traffic e-commerce systems."
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
            <h4>Engineering & Architecture Highlights</h4>
            <ul>${archItems}</ul>
          </div>

          <div style="margin: 1.25rem 0;">
            <strong style="color: var(--text-primary); font-size: 0.9rem;">Proven Impact & Results:</strong>
            <p style="color: var(--accent-emerald); font-weight: 500; margin-top: 0.25rem;">${data.highlights}</p>
          </div>

          <div style="margin-top: 1.5rem;">
            <strong style="color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Core Technologies:</strong>
            <div class="project-tech-tags">${techBadges}</div>
          </div>

          ${data.liveUrl ? `
          <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: flex-end;">
            <a href="${data.liveUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">
              <span>Visit Live Website</span>
              <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
              </svg>
            </a>
          </div>` : ''}
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
              if (target === 35) {
                counter.innerText = count + "%";
              } else if (target === 10 && counter.innerText.includes("7-10")) {
                counter.innerText = "7-10";
              } else {
                counter.innerText = count + "+";
              }
              setTimeout(updateCounter, 30);
            } else {
              if (target === 35) {
                counter.innerText = "35%";
              } else if (target === 10 && counter.innerText.includes("7-10")) {
                counter.innerText = "7-10";
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
  }, { threshold: 0.3 });

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

  const name = document.getElementById("form-name").value;
  const email = document.getElementById("form-email").value;
  const subject = document.getElementById("form-subject").value;
  const message = document.getElementById("form-message").value;

  if (alertBox) {
    alertBox.className = "form-alert success";
    alertBox.style.display = "block";
    alertBox.innerHTML = `Thank you, <strong>${name}</strong>! Opening your email client to reach <strong>sanjayrathodk24@gmail.com</strong>...`;
  }

  const mailtoUrl = `mailto:sanjayrathodk24@gmail.com?subject=${encodeURIComponent(`[Opportunity / Inquiry] ${subject}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

  setTimeout(() => {
    window.location.href = mailtoUrl;
    form.reset();
  }, 1000);
}
