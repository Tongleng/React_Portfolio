import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="container footer-info">
                <div className="row">
                    <div className="col about-info">
                        <h2>About</h2>
                        <p>A paragraph is a series of related sentences developing a central idea, called the topic.</p>
                    </div>
                    <div className="col contact-info">
                        <h2>Contact</h2>
                            <li><a>Facebook</a></li>
                            <li><a>Youtube</a></li>
                            <li><a>Twitter</a></li>
                            <li><a>Line</a></li>
                    </div>
                    <div className="col messages-info">
                        <h2>Message</h2>
                        <li>
                            <textarea placeholder="comment"></textarea>
                        </li>
                        <li>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </li>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center pb-2">
                <li>copyrigh stromshadow version 1.0.1</li>
            </div>
        </footer>
    )
}

export default Footer
