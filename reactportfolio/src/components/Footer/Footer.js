import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <h2>Contact Info</h2>

            <ul>
                <li><strong>Email:</strong> <a>thomps9012@gmail.com</a></li>
                <li><strong>Phone:</strong> <a>216.970.1203</a></li>
                <li><strong>Github:</strong> <a href="https://github.com/thomps9012?tab=repositories">Link to my Code
                Repositories</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/samuel-joseph-thompson/">LinkedIn
                Profile</a></li>
            </ul>

        </footer>
    );
}

export default Footer;
