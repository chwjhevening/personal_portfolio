import React from "react";

const Home = ({ signedIn }) => {
    return (
        <div className="main_page_container">
            <header className="home-header">
                <h1>John Doe</h1>
                <p>Web Developer</p>
            </header>
            <div className="home_text_container">
                <section>
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm John Doe, a passionate web developer with a strong background in front-end and back-end web development. I love creating beautiful and functional websites that provide great user experiences.
                    </p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>
                        Email: john@example.com<br />
                        LinkedIn: <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">linkedin.com/in/johndoe</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Home;