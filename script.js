// ===== SCROLL HEADER =====
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// ===== MOBILE MENU =====
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector('.nav__link[href*=' + sectionId + ']');

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}
window.addEventListener('scroll', scrollActive);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== AOS ANIMATION LIBRARY =====
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// ===== GALERIA FILTER =====
const filterButtons = document.querySelectorAll('.filter__btn');
const galeriaItems = document.querySelectorAll('.galeria__item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galeriaItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (filterValue === 'todos' || itemCategory === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== GALERIA MODAL =====
const galeriaButtons = document.querySelectorAll('.galeria__btn');

galeriaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = button.closest('.galeria__item');
        const img = item.querySelector('img');
        const title = item.querySelector('h4').textContent;
        
        // Criar modal
        const modal = document.createElement('div');
        modal.className = 'modal-galeria';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img src="${img.src}" alt="${title}">
                <h3>${title}</h3>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Animar entrada
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
        
        // Fechar modal
        const closeModal = () => {
            modal.style.opacity = '0';
            modal.querySelector('.modal-content').style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(modal);
                document.body.style.overflow = 'auto';
            }, 300);
        };
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        // Fechar com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.querySelector('.modal-galeria')) {
                closeModal();
            }
        });
    });
});

// Adicionar estilos do modal dinamicamente
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .modal-galeria {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    }
    
    .modal-content {
        position: relative;
        max-width: 900px;
        width: 100%;
        background: white;
        border-radius: 20px;
        padding: 30px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        border-radius: 15px;
        margin-bottom: 20px;
    }
    
    .modal-content h3 {
        font-family: 'Playfair Display', serif;
        font-size: 28px;
        color: #2c2c2c;
        text-align: center;
    }
    
    .modal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 35px;
        color: #d4af37;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.1);
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(212, 175, 55, 0.2);
        transform: rotate(90deg);
    }
    
    @media screen and (max-width: 576px) {
        .modal-content {
            padding: 20px;
        }
        
        .modal-content h3 {
            font-size: 22px;
        }
    }
`;
document.head.appendChild(modalStyles);

// ===== FORM VALIDATION & SUBMISSION =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Pegar valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const interesse = document.getElementById('interesse').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Validações básicas
        if (!nome || !email || !telefone || !interesse || !mensagem) {
            showNotification('Por favor, preencha todos os campos!', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showNotification('Por favor, insira um e-mail válido!', 'error');
            return;
        }
        
        // Criar mensagem para WhatsApp
        const whatsappMessage = `
*Nova Mensagem do Site*

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Interesse:* ${interesse}
*Mensagem:* ${mensagem}
        `.trim();
        
        const whatsappUrl = `https://wa.me/5527999999999?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Mostrar notificação de sucesso
        showNotification('Redirecionando para WhatsApp...', 'success');
        
        // Limpar formulário
        contactForm.reset();
    });
}

// Função para validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remover após 4 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Adicionar estilos da notificação
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 20px 25px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 9999;
        opacity: 0;
        transform: translateX(400px);
        transition: all 0.3s ease;
        max-width: 350px;
    }
    
    .notification-success {
        border-left: 4px solid #4caf50;
    }
    
    .notification-success i {
        color: #4caf50;
        font-size: 24px;
    }
    
    .notification-error {
        border-left: 4px solid #f44336;
    }
    
    .notification-error i {
        color: #f44336;
        font-size: 24px;
    }
    
    .notification span {
        font-weight: 500;
        color: #1a1a1a;
    }
    
    @media screen and (max-width: 576px) {
        .notification {
            left: 20px;
            right: 20px;
            max-width: none;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat__number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPlus = target.includes('+');
        const isPercent = target.includes('%');
        const numericValue = parseInt(target.replace(/\D/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPlus) displayValue += '+';
            if (isPercent) displayValue += '%';
            
            counter.textContent = displayValue;
        }, 30);
    });
}

// Executar animação quando a seção hero estiver visível
const heroSection = document.querySelector('.hero');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (heroSection) {
    observer.observe(heroSection);
}

// ===== SCROLL REVEAL ANIMATION =====
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.servico__card, .depoimento__card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Aplicar estilos iniciais
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.servico__card, .depoimento__card');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

// ===== LAZY LOADING IMAGES =====
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===== PREVENT FORM RESUBMISSION =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== SCROLL TO TOP BUTTON (OPCIONAL) =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('title', 'Voltar ao topo');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Estilos do botão scroll to top
const scrollTopStyles = document.createElement('style');
scrollTopStyles.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #d4af37 0%, #f0d977 100%);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
    }
    
    @media screen and (max-width: 576px) {
        .scroll-top-btn {
            width: 45px;
            height: 45px;
            font-size: 18px;
            bottom: 90px;
            right: 20px;
        }
    }
`;
document.head.appendChild(scrollTopStyles);

// ===== TELEFONE MASK =====
const telefoneInput = document.getElementById('telefone');

if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = value.replace(/(\d{0,2})/, '($1');
            } else if (value.length <= 7) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
        } else {
            value = value.substring(0, 11);
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        
        e.target.value = value;
    });
}

// ===== CONSOLE MESSAGE =====
console.log('%c✨ Camila Brito Lash Designer ✨', 'font-size: 20px; font-weight: bold; background: linear-gradient(135deg, #d4af37 0%, #f0d977 100%); color: white; padding: 10px 20px; border-radius: 5px;');
console.log('%cDesenvolvido com 💛 para realçar sua beleza!', 'font-size: 14px; color: #d4af37;');
