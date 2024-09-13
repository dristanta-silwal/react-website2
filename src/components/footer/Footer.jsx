import React from "react";
// import { NavLink } from "react-router-dom";

import '../footer/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">This is a portfolio website of <b><i>Dristanta Silwal </i></b>, which is a way of showcasing the projects created.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Popular</h6>
                            <ul className="footer-links">
                                <li><a target={"_blank"} rel={"noreferrer"} href="https://dristanta-silwal.github.io/TypingGame">Typing Game</a></li>
                                <li><a target={"_blank"} rel={"noreferrer"} href="https://dristanta-silwal.github.io/markdown-previewer/">Markdown Previewer</a></li>
                                <li><a target={"_blank"} rel={"noreferrer"} href="https://dristanta-silwal.github.io/react-calculator/">Calculator</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="https://www.facebook.com/dristanta.silwal" target={"_blank"} rel={"noreferrer"}>Contribute</a></li>
                                <li><a href="https://dristantasilwal.hashnode.dev/" target={"_blank"} rel={"noreferrer"}>My blogs</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                                <a href="/home" style={{textDecoration:"none", color:"whitesmoke"}}> Dristanta</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" target={"_blank"} rel={"noreferrer"} href="https://www.facebook.com/dristanta.silwal"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" target={"_blank"} rel={"noreferrer"} href="https://twitter.com/DristantaSilwal"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="github" target={"_blank"} rel={"noreferrer"} href="http://github.com/dristanta-silwal"><i className="fa fa-github"></i></a></li>
                                <li><a className="linkedin" target={"_blank"} rel={"noreferrer"} href="https://www.linkedin.com/in/dristantasilwal/"><i className="fa fa-linkedin"></i></a></li>
                                <li><a className="hashnode" target={"_blank"} rel={"noreferrer"} href="https://hashnode.com/@Dristanta"><i className="fa fa-hashtag"></i></a></li>
                            </ul>   
                        </div>
                    </div>  
                </div>
            </footer>
        </>
    )
}

export default Footer