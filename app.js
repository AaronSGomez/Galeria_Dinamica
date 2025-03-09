const products = [
  {
    name: 'MiniPc wall mount',
    src: 'https://www.printables.com/model/1185570-minipc-wall-mount',
    image: './assets/img/2.jpg'
  },
  {
    name: 'Star Wars BD-1 Droid Kit',
    src: 'https://www.printables.com/model/241744-star-wars-bd-1-droid-kit-card-individual-parts',
    image: './assets/img/bd-1.jpg'
  }
  ,
  {
    name: 'R2 D2 aus Star Wars',
    src: 'https://www.printables.com/model/610617-r2-d2-aus-star-wars',
    image: './assets/img/4-e8362c23.jpg'
  },
  {
    name: 'Star Wars toilet sign (use the force)',
    src: 'https://www.printables.com/model/392559-star-wars-toilet-sign',
    image: './assets/img/4-7242f212.jpg'
  },
  {
    name: 'Star Wars Mandalorian Helmet',
    src: 'https://www.printables.com/model/104677-how-to-print-the-mandalorian-helmet-size-s-m-l-and',
    image: './assets/img/3-e8362c23.jpg'
  },
  {
    name: 'Star Wars The Mandalorian Full Costume/Cosplay',
    src: 'https://www.printables.com/model/527750-star-wars-the-mandalorian-full-costumecosplay-helm',
    image: './assets/img/1-e8362c23.jpg'
  },
  {
    name: 'Mandalorian Mythosaur',
    src: 'https://www.printables.com/model/456347-mandalorian-mythosaur',
    image: './assets/img/3-7242f212.jpg'
  },
  {
    name: 'Ahsoka Tano\'s Lightsabers',
    src: 'https://www.printables.com/model/421312-ahsoka-tanos-lightsabers-star-wars-the-mandalorian',
    image: './assets/img/1-7242f212.jpg'
  },
  {
    name: 'Cal Kestis\' Fallen Order Lightsaber',
    src: 'https://www.printables.com/model/199721-cal-kestis-fallen-order-lightsaber-xenopixel-compa',
    image: './assets/img/2-e8362c23.jpg'
  },
  {
    name: 'Star Wars Pot Plant',
    src: 'https://www.printables.com/model/494842-darth-vader-melted-mask-star-wars-pot-plant',
    image: './assets/img/2-7242f212.jpg'
  },
  {
    name: 'RC Formula 1',
    src: 'https://www.printables.com/model/964784-fv01-the-most-advanced-3d-printed-rc-formula-1-car',
    image: './assets/img/formula1.jpg'
  },
  {
    name: 'SM-33 Head',
    src: 'https://www.printables.com/model/1150954-sm-33-head-star-wars-skeleton-crew',
    image: './assets/img/SM-33 Head.jpg'
  },
  {
    name: 'The Goonies Magnet',
    src: 'https://www.printables.com/model/1178180-the-goonies-magnet-multi-color8x3mm-magnets',
    image: './assets/img/goo.webp'
  }
];
const gallery = document.querySelector('.modelos');
const ul= document.createElement('ul');
gallery.appendChild(ul);
ul.classList.add('gallery');
for(let product of products){
  const li= document.createElement('li');
  li.innerHTML +=`
  <img src="${product.image}"><a href="${product.src}" rel="noopener"><h4>${product.name}</h4></a>
  `;
  ul.appendChild(li);
}
/* 
<ul>
                    <li><h2>Categorias</h2></li>
                    <li><a src="#">Arquitectura</a></li>
                    <li><a src="#">Arte</a></li>
                    <li><a src="#">Robotica</a></li>
                    <li><a src="#">Electrónica</a></li>
                    <li><a src="#">Juegos</a></li>
                    <li><a src="#">Juguetes</a></li>
                    <li><a src="#">Biologia</a></li>
                    <li><a src="#">Matematicas</a></li>
                    <li><a src="#">Oficina</a></li>
                    <li><a src="#">Varios</a></li>
                </ul> */

const menuCategorias = ["Arquitectura", "Arte", "Robotica", "Electrónica", "Juegos", "Juguetes", "Biologia", "Matematicas", "Oficina", "Varios"];
const menu = document.querySelector('.navegador');
const ulMenu= document.createElement('ul');
menu.appendChild(ulMenu);
const liMenuH2=document.createElement('li');
liMenuH2.innerHTML+=`
<h2>Categorias</h2>`;
ulMenu.appendChild(liMenuH2);

for(let categoria of menuCategorias){
  const liMenu=document.createElement('li');
  liMenu.innerHTML+=`
  <a src="#">${categoria}</a>`
  ulMenu.appendChild(liMenu);
}

/* 
                <ul>
          <li><a src="#">Modelos 3D</a></li>
          <li><a src="#">Tienda</a></li>
          <li><a src="#">Educación</a></li>
          <li><a src="#">Marcas</a></li>
          <li><a src="#">Comunidad</a></li>
          <li><a src="#">Eventos</a></li>
        </ul> */
const nav= document.querySelector('nav');
const ulNav= document.createElement('ul');
nav.appendChild(ulNav);
const menuNav = ["Modelos 3D", "Tienda", "Educación", "Marcas", "Comunidad", "Eventos"];
for(let n of menuNav){
  const liNav=document.createElement('li');
  liNav.innerHTML+=`<a href="#">${n}</a>`;
  ulNav.appendChild(liNav);
}
/* 
<ul class="social">
<li><a src="#"><img src="./assets/ico/linkedin.png"></a></li>
<li><a src="#"><img src="./assets/ico/instagram.png"></a></li>
<li><a src="#"><img src="./assets/ico/facebook.png"></a></li>
</ul> */
const footer=document.querySelector('footer');
const ulSocial= document.createElement('ul');
ulSocial.className='social';
//console.log(ulSocial);
const social={
  Linkedin :{
    name: 'Linkedin',
    ico: './assets/ico/linkedin.png',
    src: 'https://www.linkedin.com/in/aaron-gomez-abella-b6667174/'
  },
  Instagram : {
    name: 'Instagram',
    ico: './assets/ico/instagram.png',
    src: 'https://www.instagram.com/pumukimak/'
  },
  Facebook :{
    name: 'Facebook',
    ico: './assets/ico/facebook.png',
    src: 'https://www.facebook.com/busktlavida'
  },
  Github :{
   name: 'Github',
   ico: './assets/ico/github-mark-white.png',
   src: 'https://github.com/AaronSGomez'
 }   
}

footer.appendChild(ulSocial);
for(let s in social){
  const liSocial=document.createElement('li');
  liSocial.innerHTML+=`
  <a href="${social[s].src}" target="_blank" rel="noopener noreferrer"><img src="${social[s].ico}"></a>`;
  ulSocial.appendChild(liSocial);
}
