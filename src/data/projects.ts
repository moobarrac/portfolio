import type { Project } from "../types/Section";
import PodOfCast from "../images/podofcast.png";
import MusicPlayer from "../images/music-player.png";
import ShoppingHub from "../images/shoppinghub.png";
import HorizonApp from "../images/horizon.png";
import Engineering from "../images/engineering.png";
import MovieApp from "../images/movie-app.png";
import CarePlusApp from "../images/health.png";
import Foodie from "../images/foodie.png";
import SpaceX from "../images/spacex.png";

const projectsList: Project[] = [
  {
    id: 1,
    image: HorizonApp,
    name: "Horizon",
    summary:
      "A modern banking application that enables users to manage multiple bank accounts, view transaction history, and connect with financial institutions using Plaid and Upright APIs. Built with Next.js, React, and Tailwind CSS for a seamless user experience.",
    tags: [
      "banking",
      "typescript",
      "nextjs",
      "react",
      "tailwindcss",
      "plaid",
      "appwrite",
    ],
    link: {
      github: "https://github.com/moobarrac/horizon",
      web: "https://horizon-moon.vercel.app/",
    },
  },
  {
    id: 2,
    image: CarePlusApp,
    name: "CarePulse",
    summary:
      "A healthcare management system that enables users to book appointments with doctors by filling out necessary information. Doctors can review these requests, accept appointments, and schedule sessions with patients at convenient times. The application provides a seamless experience for both patients and healthcare providers.",
    tags: ["healthcare", "typescript", "nextjs", "react", "tailwindcss"],
    link: {
      github: "https://github.com/moobarrac/health_mg",
      web: "https://health-mg.vercel.app/",
    },
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    image: Engineering,
    name: "My Engineering Help",
    summary:
      "Unlock the world of engineering with My Engineering Help, a comprehensive platform designed for engineering students and professionals. Access a wealth of resources, tutorials, and tools to enhance your engineering knowledge and skills.",
    tags: ["engineering", "education", "react", "css", "javascript"],
  },
];

export default projectsList;
