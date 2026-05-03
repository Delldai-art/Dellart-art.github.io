(function() {
    // 回到顶部按钮
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            backToTop.classList.toggle('show', window.scrollY > 700);
        }, { passive: true });
        backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        backToTop.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
    }

    // 移动端导航
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    var navOverlay = document.getElementById('navOverlay');
    function openMenu() {
        mainNav.classList.add('open'); navToggle.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true'); navOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
        mainNav.classList.remove('open'); navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false'); navOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }
    if (navToggle) {
        navToggle.addEventListener('click', function() { mainNav.classList.contains('open') ? closeMenu() : openMenu(); });
    }
    if (navOverlay) navOverlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && mainNav && mainNav.classList.contains('open')) { closeMenu(); navToggle.focus(); } });

    // 微信二维码气泡
    var wechatLink = document.querySelector('.wechat-link');
    if (wechatLink) {
        wechatLink.addEventListener('click', function(e) {
            e.preventDefault(); this.classList.toggle('tooltip-show');
            var self = this;
            function hide(e) { if (!self.contains(e.target)) { self.classList.remove('tooltip-show'); document.removeEventListener('click', hide); } }
            if (this.classList.contains('tooltip-show')) setTimeout(function() { document.addEventListener('click', hide); }, 10);
        });
    }

    // 联系表单（仅在 contact 页面）
    var contactForm = document.getElementById('contactForm');
    var toast = document.getElementById('toast');
    function showToast(message, isError) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        toast.style.background = isError ? '#c0392b' : '#2b2b2b';
        clearTimeout(toast._timeout);
        toast._timeout = setTimeout(function() { toast.classList.remove('show'); }, 4000);
    }
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var form = this;
            var btn = form.querySelector('button');
            btn.disabled = true;
            btn.textContent = 'Sending…';

            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
            .then(function(response) {
                if (response.ok) return response.json();
                throw new Error('Network error');
            })
            .then(function(data) {
                if (data.success === "true" || data.success === true || data.message === "success") {
                    window.location.href = 'thanks.html';
                } else {
                    showToast('Failed to send. Please try again.', true);
                    btn.disabled = false;
                    btn.textContent = 'Send';
                }
            })
            .catch(function() {
                showToast('Failed to send. Please try again.', true);
                btn.disabled = false;
                btn.textContent = 'Send';
            });
        });
    }

    // 入场动画
    var fadeEls = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(function(el) { observer.observe(el); });

    // 作品项目动画
    var workItems = document.querySelectorAll('.work-item');
    var workObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); workObserver.unobserve(entry.target); }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    workItems.forEach(function(el) { workObserver.observe(el); });

    // Bio 页面专属动画
    if (document.body.classList.contains('bio-page')) {
        var aboutImage = document.querySelector('.about-image');
        var aboutText = document.querySelector('.about-text');
        var bioObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    if (entry.target === aboutImage) aboutImage.classList.add('visible');
                    if (entry.target === aboutText) aboutText.classList.add('visible');
                    bioObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        if (aboutImage) bioObserver.observe(aboutImage);
        if (aboutText) bioObserver.observe(aboutText);
    }
})();