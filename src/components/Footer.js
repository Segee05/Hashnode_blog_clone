import './Footer.css'
import hashnode from "./images/hashnode.svg"
function Footer() {
    return (
        <div>

            <div className='container footer_container'>
                <ul><li><strong>Explore</strong></li>
                    <li>Community</li>
                    <li>Trending Blogs</li>
                    <li>Hashnode for Teams</li>
                    <li>Hashnode for Teams</li>
                    <li>Hashnode APIs</li>
                    <li>Hashnode APIs</li>
                    <li>Host a virtual Hackathon</li>
                    <li>Hashnode Neptune</li>
                    <li><strong>Products</strong></li>
                    <li>Rix - AI search engine built for developers</li>
                </ul>

                <ul><li><strong>Premium</strong></li>
                    <li>Hashnode Pro</li>
                    <li>Hashnode AI</li>
                    <li><strong>Company</strong></li>
                    <li>About Hashnode</li>
                    <li>Careers</li>
                    <li>Logos & Media</li>
                    <li>Changelog</li>
                    <li>Feature Requests</li>
                </ul>

                <ul><li><strong>Comparisons</strong></li>
                    <li>Hashnode vs Medium</li>
                    <li>Hashnode vs Ghost</li>
                    <li>Hashnode vs WordPress</li>
                    <li>Hashnode vs Dev.to</li>
                    <li>Hashnode vs Substack</li>
                    <li>Wordpress vs Substack vs Hashnode</li>
                    <li>Medium vs Substack vs Hashnode</li>
                </ul>

                <ul><li><strong>Support</strong></li>
                    <li>Support Docs</li>
                    <li>Contact</li>
                    <li>Join Discord</li>
                    <li>Feature Requests</li>
                </ul>
                <ul>
                    <li><strong>Official Blogs</strong></li>
                    <li>Official Blog</li>
                    <li>Engineering Blog</li>
                    <li><strong>Partner with us</strong></li>
                    <li>Host a Hackathon</li>
                </ul>
               
            </div>
            <div className='container last_footer_'>
                <p>© Hashnode 2023</p>
                <ul className='last_footer_2'>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Code of Conduct</li>
                </ul>
                <img src={hashnode} alt="hashnode" />
            </div>





































        </div>
    )
}

export default Footer;