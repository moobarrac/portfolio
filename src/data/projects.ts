import type { Project } from "../types/Section";
const PodOfCast = require("../images/podofcast.png");
const Youtube = require("../images/youtube.png");
const MusicPlayer = require("../images/music-player.png");
const ShoppingHub = require("../images/shoppinghub.png");
const Engineering = require("../images/engineering.png");
const MovieApp = require("../images/movie-app.png");
const Foodie = require("../images/foodie.png");
const SpaceX = require("../images/spacex.png");

const projectsList: Project[] = [
  {
    id: 1,
    image: Foodie,
    name: "Foodie Place",
    summary:
      "Dive into a world of culinary delights with Foodie Place, your ultimate destination for exploring mouth-watering recipes and local eateries. Satisfy your food cravings and discover new dining experiences",
    tags: ["food", "react", "css", "restuarants"],
    link: {
      web: "https://foodie-place.netlify.app/",
      github: "https://github.com/moobarrac",
    },
  },
  {
    id: 2,
    image: SpaceX,
    name: "Space X",
    summary:
      "Embark on an interstellar journey with Space X, a cutting-edge platform where space enthusiasts can explore the rockets and capsule and information about them.",
    tags: ["space", "react", "tailwindcss", "redux", "exploration", "php"],
    link: {
      web: "https://space-x-sepia-ten.vercel.app/",
      github: "https://github.com/moobarrac/space-x",
    },
  },
  {
    id: 3,
    image: MusicPlayer,
    name: "Music Player",
    summary:
      "Elevate your music experience with Music Player, the ultimate destination for music lovers. Stream your favorite tunes, discover new artists, and curate your perfect playlist!",
    tags: ["music", "typescript", "react", "redux", "tailwindcss", "player"],
    link: {
      web: "https://moobarrac-music-player.vercel.app/",
      github: "https://github.com/moobarrac/music-player",
    },
  },
  {
    id: 4,
    image: PodOfCast,
    name: "Pod of Cast",
    summary:
      "Immerse yourself in the world of podcasts with Pod of Cast, where you can explore, discover, and listen to a vast array of podcast genres, from education to entertainment, and everything in between.",
    tags: ["podcast", "react", "reduxjs", "typescript", "tailwindcss"],
    link: {
      web: "https://pod-of-cast.vercel.app/",
      github: "https://github.com/moobarrac/pod-of-cast",
    },
  },
  {
    id: 5,
    image: Youtube,
    name: "Youtube Clone",
    summary:
      "Youtube Clone, a meticulously crafted replica that offers a familiar yet fresh video browsing and streaming experience, capturing the essence of the original Youtube platform.",
    tags: [
      "youtube",
      "video",
      "streaming",
      "react",
      "typescript",
      "tailwindcss",
      "clone",
    ],
    link: {
      web: "https://youtube-clobe.vercel.app/",
      github: "https://github.com/moobarrac/youtube-clobe",
    },
  },
  {
    id: 6,
    image: MovieApp,
    name: "Upcoming Movies",
    summary:
      "Get ready for a cinematic journey with Upcoming Movies, your go-to source for the latest and greatest in film. Discover upcoming blockbusters, watch trailers, and stay ahead of the movie curve!",
    tags: ["movie", "webdev", "next", "react", "tailwindcss"],
    link: {
      github: "https://github.com/moobarrac/movie_app",
      web: "https://upcoming-movie-app.vercel.app/",
    },
  },
  {
    id: 7,
    image: ShoppingHub,
    name: "Shopping Hub",
    summary:
      "Welcome to Shopping Hub, your ultimate online destination for a diverse shopping experience. Browse through a vast selection of products, compare prices, and find the best deals to satisfy your shopping spree!",
    tags: ["e-commerce", "shopping", "react", "javascript", "css"],
    link: {
      github: "https://github.com/moobarrac/shopping-hub",
    },
  },
  {
    id: 8,
    image: Engineering,
    name: "My Engineering Help",
    summary:
      "Unlock the world of engineering with My Engineering Help, a comprehensive platform designed for engineering students and professionals. Access a wealth of resources, tutorials, and tools to enhance your engineering knowledge and skills.",
    tags: ["engineering", "education", "react", "css", "javascript"],
  },
];

export default projectsList;
