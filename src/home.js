import logo from './android-icon-192x192.png'

function Home() {
    return (
        <div>
            <div className="parallaxbefore"></div>
            <div className="abouthome">
                <hr />
                <img src={logo} className="logo" alt="Our Logo"></img>
                <h1>RWC - Reduce Water Contamination</h1>
                <p><i>Our main goal is to assist in reducing the quanity of malicious contaminants present in much of our current-day water utilizing our 'SortCan'. This new-age garbage can has the capability to sort the user's garbage into certain sub-cans dependent on the type of trash being disposed of with input from the user.</i></p>
                <br />
                <hr />
            </div>
            <div className="parallax"></div>
            <div className="header">
                <h2>Who we are:</h2>
                <p>We are Reduce Water Contaminants, a team which prides ourselves on innovating and designing inventions which assist in mitigating the harmful effects of water polltion.</p>
            </div>
            <div className="parallax"></div>
            <div className="header">
                <h2>What we've created:</h2>
                <p>We've led the charge on combatting the problem of water pollution on the cmsumer end by creating the SortCan. This SortCan is a new-age garbage can which allows for (with either a barcode scan or input from the user) sorting of materials into their respective recyclable categories. Check out a prototype of our designi below!</p>
                <div class="sketchfab-embed-wrapper">
                    <iframe className="threedee" title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/fbda7bbdd39c4700946ada48fa0af55a/embed?autostart=0&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Home;
