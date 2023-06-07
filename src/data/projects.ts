import type { Project } from "../types/Section";
const PodOfCast = require("../images/podofcast.png");
const Youtube = require( '../images/youtube.png')
const MusicPlayer = require( '../images/music-player.png')
const ShoppingHub = require( '../images/shoppinghub.png')
const Engineering = require( '../images/engineering.png')
const MovieApp = require( '../images/movie-app.png')

const projectsList: Project[] = [
  {
    id: 1,
    image: MusicPlayer,
    name: "Music Player",
    summary:
      "Ladies and gentlemen, music enthusiasts, and melody mavens, brace yourselves for an extraordinary auditory experience at Music Player - the ultimate destination for music lovers!",
    tags: ["music", "typescript", "react", "redux", "tailwindcss", "shazam"],
    link: {
      web: "https://moobarrac-music-player.vercel.app/",
      github: "https://github.com/moobarrac/music-player",
    },
  },
  {
    id: 2,
    image: PodOfCast,
    name: "Pod of Cast",
    summary:
      "Attention all podcast enthusiasts! Prepare to embark on an extraordinary auditory adventure at Pod of Cast - the one-stop destination for all your podcast cravings!",
    tags: ["podcast", "react", "reduxjs", "typescript", "tailwindcss"],
    link: {
      web: "https://pod-of-cast.vercel.app/",
      github: "https://github.com/moobarrac/pod-of-cast",
    },
  },
  {
    id: 3,
    image: Youtube,
    name: "Youtube Clone",
    summary:
      "Youtube Clobe, the vivid Imaganition of Youtube",
    tags: ["youtube", "google", "react", "typescript","tailwindcss", "clone"],
    link: {
      web: "https://youtube-clobe.vercel.app/",
      github: "https://github.com/moobarrac/youtube-clobe",
    },
  },
  {
    id: 4,
    image: MovieApp,
    name: "Upcoming Movies",
    summary:
      "Lights, camera, action! The project Movie App is a delightful web application designed for movie lovers like you. It's a movie aficionado's dream come true!",
    tags: ["movie", "webdev", "next", "react", "tailwindcss"],
    link: {
      github: "https://github.com/moobarrac/movie_app",
      web: "https://upcoming-movie-app.vercel.app/",
    },
  },
  {
    id: 5,
    image: ShoppingHub,
    name: "Shopping Hub",
    summary:
      "Hold on tight, shopaholics! I've got something exciting for you. Behold, the shopping extravaganza that awaits you at Shopping Hub",
    tags: ["shopping", "javascript", "react", "css"],
    link: {
      github: "https://github.com/moobarrac/shopping-hub",
    },
  },
  {
    id: 6,
    image: Engineering,
    name: "My Engineering Help",
    summary:
      "Calling all aspiring engineering student. Prepare to be amazed by the engineering wonders and solution awaiting you at Engineering Help",
    tags: ["solution", "engineering", "react", "css", "javascript"],
  },
];

export default projectsList;