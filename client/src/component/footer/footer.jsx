import React from "react";
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="footer">
            {year} @ NOMAD STORE
        </div>
    )
}

export default Footer;