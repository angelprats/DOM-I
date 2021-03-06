const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

const navItems = document.querySelectorAll('header nav a');
navItems.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${1 + index}`];
});
// console.log(navItems);

// navItems[0].textContent = siteContent['nav']['nav-item-1'];
// navItems[1].textContent = siteContent['nav']['nav-item-2'];
// navItems[2].textContent = siteContent['nav']['nav-item-3'];
// navItems[3].textContent = siteContent['nav']['nav-item-4'];
// navItems[4].textContent = siteContent['nav']['nav-item-5'];
// navItems[5].textContent = siteContent['nav']['nav-item-6'];

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const main = document.querySelectorAll('.main-content h4');
main[0].textContent = siteContent['main-content']['features-h4'];
main[1].textContent = siteContent['main-content']['about-h4'];
main[2].textContent = siteContent['main-content']['services-h4'];
main[3].textContent = siteContent['main-content']['product-h4'];
main[4].textContent = siteContent['main-content']['vision-h4'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const paragraph = document.querySelectorAll('.main-content p');
paragraph[0].textContent = siteContent['main-content']['features-content'];
paragraph[1].textContent = siteContent['main-content']['about-content'];
paragraph[2].textContent = siteContent['main-content']['services-content'];
paragraph[3].textContent = siteContent['main-content']['product-content'];
paragraph[4].textContent = siteContent['main-content']['vision-content'];

const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent.contact['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer.copyright;
// console.log(footerP)
