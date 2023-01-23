import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                qui blanditiis mollitia debitis, labore, odit veritatis harum
                beatae ipsam perferendis accusantium animi vero? Autem, tempore?
                Praesentium temporibus vel nam et!
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda id repellat pariatur molestiae quas minus repellendus
                iure provident vero placeat consequatur ab iste, voluptate nisi.
                Necessitatibus, deserunt soluta! A, impedit?
            </p>
        </div>
    );
};

export default About;
