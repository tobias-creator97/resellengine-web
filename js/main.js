// =============================================================================
// ResellEngine Landing Page — Interactions
// =============================================================================

// Nav scroll effect
window.addEventListener('scroll', function () {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 32);
});

// Scroll reveal
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

// Hero reveals on load — staggered cascade
window.addEventListener('load', function () {
    var heroEls = document.querySelectorAll('.hero .reveal');
    heroEls.forEach(function (el, i) {
        el.style.transitionDelay = (0.1 + i * 0.12) + 's';
        setTimeout(function () { el.classList.add('visible'); }, 50);
    });
});

// Waitlist forms — both hero and CTA
var SUPABASE_URL = 'https://urnhfyiadnrxcbzcmzss.supabase.co';
var SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVybmhmeWlhZG5yeGNiemNtenNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyMDA0MTAsImV4cCI6MjA5MDc3NjQxMH0.-sNNDYk00rhZcKAB94PelpECFp-Qv62nFe-Au-wWT58';

function handleWaitlist(form, successEl) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var input = form.querySelector('input[type="email"]');
        var btn = form.querySelector('button');
        var email = input.value.trim();
        if (!email) return;

        btn.disabled = true;
        btn.textContent = '...';

        try {
            var res = await fetch(SUPABASE_URL + '/rest/v1/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_KEY,
                    'Authorization': 'Bearer ' + SUPABASE_KEY,
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({ email: email, source: 'landing_page' })
            });
            if (res.ok || res.status === 409) {
                form.hidden = true;
                if (successEl) successEl.hidden = false;
            } else {
                throw new Error('Request failed');
            }
        } catch (err) {
            // Fallback: store locally
            try {
                var stored = JSON.parse(localStorage.getItem('resellengine_waitlist') || '[]');
                stored.push({ email: email, ts: Date.now() });
                localStorage.setItem('resellengine_waitlist', JSON.stringify(stored));
            } catch (_) {}
            form.hidden = true;
            if (successEl) successEl.hidden = false;
        }
    });
}

// Hero form
var heroForm = document.getElementById('hero-form');
if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = heroForm.querySelector('input');
        var email = input.value.trim();
        if (!email) return;

        var btn = heroForm.querySelector('button');
        btn.disabled = true;
        btn.textContent = '...';

        fetch(SUPABASE_URL + '/rest/v1/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': SUPABASE_KEY,
                'Authorization': 'Bearer ' + SUPABASE_KEY,
                'Prefer': 'return=minimal'
            },
            body: JSON.stringify({ email: email, source: 'landing_hero' })
        }).then(function () {
            btn.textContent = 'Du bist dabei!';
            btn.style.pointerEvents = 'none';
            input.disabled = true;
            input.value = '';
            input.placeholder = 'Wir melden uns.';
        }).catch(function () {
            btn.textContent = 'Du bist dabei!';
            btn.style.pointerEvents = 'none';
        });
    });
}

// CTA form
var ctaForm = document.getElementById('cta-form');
var ctaSuccess = document.getElementById('cta-success');
if (ctaForm) handleWaitlist(ctaForm, ctaSuccess);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
