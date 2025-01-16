# University Website

This project is a university website built using ReactJS. It showcases various sections, including programs offered, a gallery of campus photos, testimonials, and contact details, providing a comprehensive platform for students and visitors to explore the university.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Code Details](#code-details)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The university website offers an intuitive and user-friendly design to showcase:

- Programs offered by the university.
- A photo gallery displaying campus life.
- Testimonials from students.
- Contact information for inquiries.
- A video player to display university highlights.

## Features

- **Dynamic Components**: Each section is modularized into React components for maintainability.
- **Interactive Video Player**: Users can toggle video playback.
- **Responsive Design**: Suitable for various screen sizes.
- **Reusable Components**: Sections like Title are reused across the site.

## Technologies Used

- ReactJS
- CSS (for styling)
- JavaScript (ES6+)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/university-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd university-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Footer/
│   ├── Gallery/
│   ├── Header/
│   ├── NavBar/
│   ├── Programs/
│   ├── Testimonials/
│   ├── Title/
│   └── VideoPlayer/
├── App.js
└── index.js
```

## Code Details

Here is the main application code for reference:

```javascript
import NavBar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playVid, setPlayVid] = useState(false);

  const handlePlayingVideo = () => {
    playVid ? setPlayVid(false) : setPlayVid(true);
    console.log(playVid);
  };

  return (
    <>
      <NavBar />
      <Header />
      <div className="main-content-container">
        <Title title="Our Program" desc="What we Offer" />
        <Programs />
        <About handlePlayingVideo={handlePlayingVideo} />
        <Title title="Gallery" desc="Campus Photos" />
        <Gallery />
        <Title title="Testimonials" desc="Feedback of Students" />
        <Testimonials />
        <Title title="Contact us" desc="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVid={playVid} setPlayVid={setPlayVid} />
    </>
  );
}

export default App;
```

## Usage

1. Navigate through the sections using the navigation bar.
2. View university programs, gallery, testimonials, and contact details.
3. Play/pause the video in the "About" section by clicking the play button.

## Contributing

Contributions are welcome! If you have ideas to enhance this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
