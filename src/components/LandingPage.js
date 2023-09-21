import './LandingPage.css'
import img1 from './images/img1.avif'
import img2 from './images/img2.avif'
import img3 from './images/img3.avif'
import img4 from './images/img4.jpg'
import i1 from './images/i1.avif'
import i2 from './images/i2.avif'
import i3 from './images/i3.avif'
import i4 from './images/i4.avif'
import i5 from './images/i5.avif'
import i6 from './images/i6.avif'
import i7 from './images/i7.avif'
import i8 from './images/i8.avif'
import fast from './images/fast.avif'
import own from './images/own.avif'
import auto from './images/auto.avif'
import effort from './images/effort.avif'



function LandingPage() {
    return (
        <div className='container-xxl over_all_contain'>
            <div className='landingpage-container'>
                <div className='banner-text'>
                    <h1>Where developer blogs meet <br /> community power!</h1>
                    <p>Create and grow your developer blog, newsletter, or team engineering blog effortlessly with <br /> Hashnode. Level up your writing using powerful <strong>AI features!</strong></p>
                    <div className='gap-4 button-container'>
                        <button className='btn-login'>Log in</button>
                        <button className='btn-getstarted'>Get started</button>
                    </div>
                </div>
                <div>
                    <div className='banner-icons-side'>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='banner-images'>
                        <img src={img2} alt="img2" className='img2' />
                        <img src={img4} alt="img4" className='img4' />
                        <img src={img3} alt="img3" className='img3' />
                    </div>

                </div>

                <div className='leading-com'>
                    <p>The go-to platform for top developers from leading companies.</p>
                    <div className='brand-logo'>
                        <img src={i1} alt="i1" />
                        <img src={i2} alt="i2" />
                        <img src={i3} alt="i3" />
                        <img src={i4} alt="i4" />
                        <img src={i5} alt="i5" />
                        <img src={i6} alt="i6" />
                        <img src={i7} alt="i7" />
                        <img src={i8} alt="i8" />
                    </div>

                    <h1><span>Blogging platform</span> optimized for software developers and technical writers.</h1>
                </div>

            </div>
            <div className='super-fast-container'>
                <div>
                    <div className='super-fast-col1'>
                        <p><strong>Super-fast and SEO-optimized blogs built for <br /> developers and tech enthusiasts.</strong><br /><br />
                            Hashnode blogs are fast, up-to-date with SEO techniques, and score above 90 on all Lighthouse parameters. They're simple, elegant, and user-friendly.</p>
                    </div>
                    <div>
                        <img src={fast} alt="" />
                        <div className='rolling_body'>
                            <div className="spinner-border text-success" role="status">
                             
                                <span className="visually-hidden">loading</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='own-container'>
                <div>
                    <div className='own-col1'>
                        <p><strong>Own your traffic. Blog for free on a custom domain!</strong><br /><br />
                            Don't blog on rented URLs. Map your custom domain to your Hashnode blog for free and own your traffic. True content ownership.</p>
                    </div>
                    <div>
                        <img src={own} alt="own" />
                    </div>
                </div>

            </div>
            <div className='container-lxx auto-effort'>
                <div className='auto_side'>
                    <p><strong>Automatic GitHub backup and publishing.</strong><br /><br /> Publish articles from your GitHub repository to your Hashnode <br /> blog and backup your Hashnode articles to GitHub like a pro.</p>
                    <img src={auto} alt="auto" />

                </div>
                <div className='effort-side'>
                    <p><strong>Write effortlessly with Markdown-first WYSIWYG editor.</strong><br /><br /> Use Hashnode's Markdown-based WYSIWYG editor for code blocks, <br /> syntax highlighting, and web embeds.</p>
                    <img src={effort} alt="effort" />

                </div>
            </div>

        </div>
    )
}

export default LandingPage;