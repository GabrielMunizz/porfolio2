import tunesImg from '../assets/project-thumbs/trybeTunes.png';
import IBGEImg from '../assets/project-thumbs/IBGENews.png';
import byteForBite from '../assets/project-thumbs/byte-for-bite.jpeg';
import onlineStoreImg from '../assets/project-thumbs/OnlineStore.png';
import myToDoImg from '../assets/project-thumbs/todo-image.png';

export const projects = [
  {
    id: 0,
    title: 'Byte-for-Bite',
    image: byteForBite,
    categories: ['All', 'Todas', 'Full-Stack'],
    url: 'https://github.com/Wesleyhmendes/Byte-for-Bite/',
    deploy: 'https://byte-for-bite.up.railway.app/',
    descriptionEng: `Byte-for-bite is a recipe web application. The user has access to hundreds of meal and drink recipes one click away.      
      After registering, the user can start a recipe and keep track of it, step-by-step. If there's some recipe you've liked or want to try later, you can favorite it.
      Also, you can change your profile picture. If you want to know which recipes you've already done, just access the Done Recipes page`,
    descriptionPT: `Byte for Bite é uma aplicação web de receitas. Nela, o usuário tem acesso à centenas de receitas e drinks à um clique de distância.
    Depois de se registrar, o usuário pode iniciar uma receita e acompanhar o andamento passo-a-passo. Se tem alguma receita que gostou ou quer tentar fazer mais tarde, pode favorita-la.
    Além disso, você pode alterar sua foto de perfil. Se quiser saber qual receita já foi terminada, basta acessar a página Done Recipes`,
  },
  {
    id: 1,
    title: 'Online Store',
    image: onlineStoreImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/OnlineStore',
    deploy: 'https://online-store-nine-omega.vercel.app/',
    descriptionEng: `Online Store is a Front-End web application that uses Mercado Livre API products catalog.
      The objective is to simulate an e-commerce web site with shop cart, card validation and product review features.
      The application is responsive and have 90% test coverage`,
    descriptionPT: `Online Store é uma aplicação Web Front-End que consome a API de produtos do Mercado Livre.
    O objetivo da aplicação foi simular um site de e-commerce com utilização de carrinho de compras, validação de cartão e review de produtos.    
    A aplicação é responsiva e possui uma cobertura acima de 90% nos testes.`,
  },
  {
    id: 2,
    title: 'My To-do',
    image: myToDoImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/to-do',
    deploy: 'https://gabrielmunizz.github.io/to-do/',
    descriptionEng: `This is a front-end project built with Next.js and SCSS, 
      offering a simple and intuitive to-do list application. Users can add tasks, 
      delete them, and mark tasks as completed, which moves them to a dedicated 
      'completed tasks' section. The application is fully responsive, 
      ensuring an optimal experience on mobile devices.`,
    descriptionPT: ``,
  },  
  {
    id: 3,
    title: 'TrybeTunes',
    image: tunesImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/tunes',
    deploy: 'https://trybe-tunes-nine-sable.vercel.app/',
    descriptionEng: `This application in React uses the iTunes API. The user can search for 
      artists or bands, have access of all the albums infos and play music samples.
      Also, it includes a "Favorites" feature and a "My Profile" page so you can edit
      your personal profile`,
    descriptionPT: `A aplicação em React utiliza a API do iTunes. O usuário pode procurar por
    artistas ou bandas, ter acesso a todas as informações dos álbuns e escutar um sample das músicas.
    Também inclui um recurso de "Favorites"(favoritos) e uma página "My Profile"(meu perfil) onde
    pode editar o perfil pessoal`,
  },
  {
    id: 4,
    title: 'IBGE News',
    image: IBGEImg,
    categories: ['All', 'Todas', 'Front-End'],
    url: 'https://github.com/GabrielMunizz/IBGE_News',
    deploy: 'https://ibge-news-seven.vercel.app/',
    descriptionEng: `This application in React uses IBGE API. The user have access to recent news
    published in IBGE's web site. Have a "dark mode", "favorites" features and it's also possible to filter
    by "release" or "news". Also, the user can access a full version of the news or release
    by clicking in the "Leia a notícia aqui" button`,
    descriptionPT: `A aplicação em React utiliza a API do IBGE. O usuário tem acesso as notícias mais recentes
    publicadas no site do IBGE. Possui um recurso de "dark mode", "favoritos" e é possível filtrar por "notícias" e 
    "releases". O usuário também pode acessar a versão completa da notícia ou release clicando
    no botão "Leia a notícia aqui"`,
  },  
];
