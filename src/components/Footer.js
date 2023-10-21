import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-mint.svg";
import instagram from "../img/social/instagram.svg";
import linkedin from "../img/social/linkedin.svg";
import discord from "../img/social/discord.svg";
import whatsapp from "../img/social/whatsapp.svg";
import github from "../img/social/github.svg"

const Footer = () => {
    return (
        <footer className="footer has-background-black has-text-white-ter">
            <div className="columns is-centered">
                <img
                    src={logo}
                    alt="Aachen Blockchain Club"
                    style={{
                        width: "10rem",
                    }}
                />
            </div>
            <div className="content has-background-black has-text-centered has-text-white-ter">
                <div className="container has-background-black has-text-white-ter">
                    <div
                        style={{ maxWidth: "100vw" }}
                        className="columns"
                    >
                        <div className="column is-4">
                            <section className="menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link
                                            to="/"
                                            className="navbar-item"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar-item"
                                            to="/about"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar-item"
                                            to="/products"
                                        >
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            className="navbar-item"
                                            href="/admin/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Admin
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4">
                            <section>
                                <ul className="menu-list">
                                    <li>
                                        <Link
                                            className="navbar-item"
                                            to="/blog"
                                        >
                                            Latest Stories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="navbar-item"
                                            to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="column is-4 social">
                            <a
                                title="instagram"
                                href="https://www.instagram.com/aachen_blockchain/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={instagram}
                                    alt="Instagram"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a
                                title="linkedin"
                                href="https://www.linkedin.com/company/aachen-blockchain/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={linkedin}
                                    alt="linkedin"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a
                                title="discord"
                                href="https://discord.gg/BG2Gdg4dsD"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="fa-lg fas"
                                    src={discord}
                                    alt="discord"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a
                                title="whatsapp"
                                href="https://chat.whatsapp.com/LvDCwGq0zSsFxflcxMqUZH"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={whatsapp}
                                    alt="whatsapp"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                            <a
                                title="github"
                                href="https://github.com/aachen-blockchain-club"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={github}
                                    alt="github"
                                    style={{ width: "1em", height: "1em" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
