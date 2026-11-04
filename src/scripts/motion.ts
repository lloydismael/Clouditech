// Site-wide motion: nav state, mobile menu, scroll reveals, counters, and card tilt.
// Re-initialises on every client-side navigation (astro:page-load).

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

let cleanups: (() => void)[] = [];

function initNav() {
  const header = document.getElementById('site-nav');
  const menu = document.getElementById('nav-links');
  const button = document.getElementById('menu-button');
  if (!header || !menu || !button) return;

  const mobile = window.matchMedia('(max-width: 767.98px)');

  const setMenu = (open: boolean) => {
    const show = mobile.matches && open;
    menu.hidden = mobile.matches && !show;
    menu.inert = mobile.matches && !show;
    button.setAttribute('aria-expanded', String(show));
    button.setAttribute('aria-label', show ? 'Close navigation menu' : 'Open navigation menu');
    if (show) header.dataset.hidden = 'false';
  };

  const onButton = () => setMenu(button.getAttribute('aria-expanded') !== 'true');
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      button.focus();
    }
  };
  const onDocClick = (e: MouseEvent) => {
    if (button.getAttribute('aria-expanded') === 'true' && !header.contains(e.target as Node)) setMenu(false);
  };
  const onMq = () => setMenu(false);

  let lastY = window.scrollY;
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      header.dataset.scrolled = String(y > 24);
      const menuOpen = button.getAttribute('aria-expanded') === 'true';
      // Hide on scroll down / reveal on scroll up, small screens only
      header.dataset.hidden = String(mobile.matches && !menuOpen && y > 240 && y > lastY);
      lastY = y;
      ticking = false;
    });
  };

  button.addEventListener('click', onButton);
  document.addEventListener('keydown', onKey);
  document.addEventListener('click', onDocClick);
  mobile.addEventListener('change', onMq);
  window.addEventListener('scroll', onScroll, { passive: true });
  setMenu(false);
  onScroll();

  cleanups.push(() => {
    button.removeEventListener('click', onButton);
    document.removeEventListener('keydown', onKey);
    document.removeEventListener('click', onDocClick);
    mobile.removeEventListener('change', onMq);
    window.removeEventListener('scroll', onScroll);
  });
}

function animateCount(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const decimals = Number(el.dataset.decimals ?? 0);
  const render = (v: number) => (el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`);
  if (reduceMotion()) return render(target);

  const duration = 1200;
  const start = performance.now();
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    render(target * easeOutExpo(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');

  items.forEach((el) => {
    const i = el.dataset.reveal;
    if (i) el.style.setProperty('--i', i);
  });

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const pending = new Set<HTMLElement>();
  const reveal = (el: HTMLElement) => {
    if (!pending.delete(el)) return;
    el.classList.add('is-visible');
    if (el.dataset.count) animateCount(el);
    io.unobserve(el);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Also reveal anything already above the viewport (e.g. restored scroll position)
        if (entry.isIntersecting || entry.boundingClientRect.bottom <= 0) reveal(entry.target as HTMLElement);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  // Fast jumps (End key, anchor links) can skip elements without an intersection; sweep those up.
  let sweepQueued = false;
  const onScroll = () => {
    if (sweepQueued || pending.size === 0) return;
    sweepQueued = true;
    requestAnimationFrame(() => {
      pending.forEach((el) => el.getBoundingClientRect().bottom <= 0 && reveal(el));
      sweepQueued = false;
    });
  };

  items.forEach((el) => {
    pending.add(el);
    io.observe(el);
  });
  counters.forEach((el) => {
    if (!reduceMotion()) el.textContent = `${el.dataset.prefix ?? ''}0${el.dataset.suffix ?? ''}`;
    pending.add(el);
    io.observe(el);
  });
  window.addEventListener('scroll', onScroll, { passive: true });
  cleanups.push(() => {
    io.disconnect();
    window.removeEventListener('scroll', onScroll);
  });
}

function initTilt() {
  if (reduceMotion() || !finePointer()) return;
  const MAX = 6;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX}deg) rotateY(${(x - 0.5) * MAX}deg) translateY(-4px)`;
        card.style.setProperty('--gx', `${x * 100}%`);
        card.style.setProperty('--gy', `${y * 100}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      card.style.transform = '';
    };
    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);
    cleanups.push(() => {
      card.removeEventListener('pointermove', onMove);
      card.removeEventListener('pointerleave', onLeave);
    });
  });
}

document.addEventListener('astro:after-swap', () => document.documentElement.classList.add('js'));
document.addEventListener('astro:before-swap', () => {
  cleanups.forEach((fn) => fn());
  cleanups = [];
});
document.addEventListener('astro:page-load', () => {
  initNav();
  initReveal();
  initTilt();
});
