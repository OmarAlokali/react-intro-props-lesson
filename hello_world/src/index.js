import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const marc = {
  firstName: "Marc",
  lastName: "Wright",
  favoriteShows: [
    { title: "Game Of Thrones", genre: "Fantasy", img:  "https://pmcvariety.files.wordpress.com/2019/02/game-of-thrones-season-8-1.jpeg?crop=0px%2C48px%2C1400px%2C789px&resize=700%2C393" },
    { title: "Friends", genre: "Comedy", img: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/friends-poster-big-with-words.jpg?itok=fG0og4uf" },
    { title: "Prison Break", genre: "Drama", img: "https://m.media-amazon.com/images/M/MV5BNDFmMzM3NzctZGE0MC00NGVmLTljZmUtYTNiZjA2ZTE4NjQwXkEyXkFqcGdeQXVyNzg3MDUyMzc@._V1_.jpg" }
  ]
}

ReactDOM.render(<App marc={marc}/>, document.getElementById('root'));
