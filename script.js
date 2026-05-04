(function() {
    var backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            backToTop.classList.toggle('show', window.scrollY > 700);
        }, { passive: true });
        backToTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        backToTop.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } });
    }

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

    var wechatLink = document.querySelector('.wechat-link');
    if (wechatLink) {
        wechatLink.addEventListener('click', function(e) {
            e.preventDefault(); this.classList.toggle('tooltip-show');
            var self = this;
            function hide(e) { if (!self.contains(e.target)) { self.classList.remove('tooltip-show'); document.removeEventListener('click', hide); } }
            if (this.classList.contains('tooltip-show')) setTimeout(function() { document.addEventListener('click', hide); }, 10);
        });
    }

    var i18n = {
        en: {
            'home': 'Home', 'works': 'Works', 'bio': 'BIO', 'store': 'Store', 'course': 'Course', 'contact': 'Contact',
            'hero-title': 'The Warmth of Form',
            'hero-subtitle': 'Figurative art · Emotional resonance',
            'hero-cta': 'Explore Works',
            'works-title': 'Selected Works',
            'works-subtitle': 'Each piece a quiet conversation',
            'work1-title': 'Mother of Ten Thousand Infants: Lin Qiaozhi',
            'work1-material': 'Sculpture',
            'work1-desc': 'She was the only female academician of the first CAS members; she was the first Chinese director of obstetrics and gynecology at Peking Union Medical College Hospital.',
            'work2-title': 'A casual piece of work',
            'work2-material': 'Sketch',
            'work2-desc': 'Just a doodle.',
            'quote-text': '"Sculpture is the art of the intelligence; it is the art of giving form to the invisible."',
            'quote-author': '— Pablo Picasso',
            'bio-title': 'BIO',
            'bio-text': 'A man on a mission.<br>For over three decades, Delldai has been a devoted participant in contemporary figurative art, seeking to capture every facet of the human experience through his work.',
            'store-title': 'Store',
            'store-subtitle': 'Digital assets & fine art prints',
            'course-title': 'Course',
            'course-subtitle': 'Coming soon',
            'contact-title': 'Stay in Touch',
            'contact-subtitle': 'For exhibitions, commissions, or a quiet conversation about art',
            'contact-note': 'Brand cooperation & others, Please fill in the form',
            'name-placeholder': 'Your name',
            'email-placeholder': 'Email',
            'message-placeholder': 'Message',
            'send-btn': 'Send',
            'footer': '© 2026 Delldai. All rights reserved.',
            'about-page-link': 'About this page',
            'view-details': 'View Details',
            'product-title': 'Lion Cub Playing',
            'product-price': '$29.00',
            'product-desc': 'This digital 3D model captures a playful lion cub in exquisite detail. Includes high-resolution textures and rigging. Perfect for your animations or render projects.',
            'buy-now': 'Buy Now',
            'add-to-cart': 'Add to Cart',
            'success-toast': 'Message sent successfully!',
            'fail-toast': 'Failed to send. Please try again.'
        },
        zh: {
            'home': '首页', 'works': '作品', 'bio': '简介', 'store': '商店', 'course': '课程', 'contact': '联系',
            'hero-title': '形式的温度',
            'hero-subtitle': '具象艺术 · 情感共鸣',
            'hero-cta': '探索作品',
            'works-title': '精选作品',
            'works-subtitle': '每一件作品都是一场安静的对话',
            'work1-title': '万婴之母：林巧稚',
            'work1-material': '雕塑',
            'work1-desc': '她是首届中科院院士中唯一的女院士；她是北京协和医院首位中国籍妇产科主任。',
            'work2-title': '一件随意的作品',
            'work2-material': '素描',
            'work2-desc': '只是一张涂鸦。',
            'quote-text': '“雕塑是智慧的艺术；是赋予无形以形式的艺术。”',
            'quote-author': '— 巴勃罗·毕加索',
            'bio-title': '简介',
            'bio-text': '一位肩负使命之人。<br>三十余年来，Delldai一直是当代具象艺术的深度参与者，通过他的作品来捕捉人类经历的各个方面。',
            'store-title': '商店',
            'store-subtitle': '数字资产与艺术微喷',
            'course-title': '课程',
            'course-subtitle': '即将推出',
            'contact-title': '保持联系',
            'contact-subtitle': '展览、委托或关于艺术的安静对话',
            'contact-note': '品牌合作及其他，请填写表格',
            'name-placeholder': '您的姓名',
            'email-placeholder': '邮箱',
            'message-placeholder': '留言',
            'send-btn': '发送',
            'footer': '© 2026 Delldai. 保留所有权利。',
            'about-page-link': '关于此页面',
            'view-details': '查看详情',
            'product-title': '玩耍的幼狮',
            'product-price': '¥199.00',
            'product-desc': '这个数字3D模型以精致的细节捕捉了一只顽皮的幼狮。包含高分辨率纹理和绑定。非常适合您的动画或渲染项目。',
            'buy-now': '立即购买',
            'add-to-cart': '加入购物车',
            'success-toast': '消息发送成功！',
            'fail-toast': '发送失败，请再试一次。'
        }
    };

    var currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key] !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = i18n[lang][key];
                } else if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = i18n[lang][key];
                } else {
                    el.textContent = i18n[lang][key];
                }
            }
        });
        var btn = document.getElementById('langSwitch');
        if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';
        localStorage.setItem('lang', lang);
        currentLang = lang;
        document.documentElement.lang = lang;
    }

    var langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', function() {
            var newLang = currentLang === 'en' ? 'zh' : 'en';
            applyLanguage(newLang);
        });
    }
    applyLanguage(currentLang);

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
            btn.textContent = i18n[currentLang]['send-btn'];

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
                    showToast(i18n[currentLang]['fail-toast'], true);
                    btn.disabled = false;
                    btn.textContent = i18n[currentLang]['send-btn'];
                }
            })
            .catch(function() {
                showToast(i18n[currentLang]['fail-toast'], true);
                btn.disabled = false;
                btn.textContent = i18n[currentLang]['send-btn'];
            });
        });
    }

    var fadeEls = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.15 });
    fadeEls.forEach(function(el) { observer.observe(el); });

    var workItems = document.querySelectorAll('.work-item');
    var workObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); workObserver.unobserve(entry.target); }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    workItems.forEach(function(el) { workObserver.observe(el); });

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