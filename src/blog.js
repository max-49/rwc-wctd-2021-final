import shredder from './shredder.png'

function Blog() {
    return (
        <div>
            <div className="parallaxbefore"></div>
            <div className="abouthome">
                <hr />
                <h1>What's New with RWC?</h1>
                <p><i>Keep up with our blog to stay up to date with what our company is up to!</i></p>
                <hr />
            </div>
            <h2 className="blogDate">Sunday, January 31st</h2>
            <div className="header">
                <h2>Water Contamination is not Stopping; Act Now!</h2>
                <h3>1/31/2021</h3>
                <p>Everyday, millions of gallons of pollutants are dumped into our beautiful oceans, stemming from agriculture, trash and many other soures. This is bringing strife to many urban towns and cities. However, you can help stop this by buying RWC's latest product, the SortCan.</p>
                <hr/>
                <img src="https://www.weitzlux.com/wp-content/uploads/water-contamination__hero.jpg" className="blogImg" alt=""/>
            </div>
            <h2 className="blogDate">Saturday, January 30th</h2>
            <div className="header">
                <h2>The New SortCan just got Modeled!</h2>
                <h3>1/30/2021</h3>
                <p>The SortCan is a revolutionary technology that sorts trash based on type. Contains a LCD touchscreen for manual sorting. With new updates and new innovation, RWC brings you the device that will improve water quality and mitigate the eventual pollution of our oceans for many years to come.</p>
                <img src={shredder} className="blogImg" alt=""/>
            </div>
            <div className="header">
                <h2>New Release!</h2>
                <h3>1/30/2021</h3>
                <p>As said in RWC's mission statement, the SortCan is a revolutionary device designed to revolvutionize recycling and therfore, reducing the flow of pollutants into the waterways.</p>
                <hr/>
                <img src="http://wallpaperheart.com/wp-content/uploads/2018/03/high-definition-water-wallpapers-ocean-wallpapers.jpg" className="blogImg" alt="" />
            </div>
            <hr />
        </div>
    );
}

export default Blog;

/* <div className="header" background>
<h1>What's New</h1>
<hr />
<div style="background-image:url('https://domain5127290.files.wordpress.com/2021/01/bin-1.png?w=77'); text-align:center;  background-size:200px,200px; color:blue">
<div style="background-image:url('https://www.weitzlux.com/wp-content/uploads/water-contamination__hero.jpg'); text-align:center; background-size:400px,400px; color:white">
<h2>Water Contamination Is Not Stopping, Act Now!</h2>
<h3>1/31/2021</h3>
<p style="text-size: '20px';">Everyday millions of gallons of pollutants polute the water, stemming from agriculture, trash and many other soures. This is bringing strife to many urban towns and cities. However, you can halp stop this, Buy RWC's newest product, the SortCan.</p>
</div>
<h2>The New Sortcan just got Modeled</h2>
<h3>1/30/2021</h3>
<p style="text-size: '20px'">The SortCan is a revolutionary technology that sorts consumerables based on barcode. Contains a lcd screen for customization. With new updates new innovation, the RWC brings you the device that will improve water quality for many years to come.</p>
</div>
<div style="background-image:url('http://wallpaperheart.com/wp-content/uploads/2018/03/high-definition-water-wallpapers-ocean-wallpapers.jpg'); height; background-size:400px,400px">
<h2>New Release!</h2>
<h3>1/30/2021</h3>
<p style="text-size: '20px'">As said in it's mission statement, The SortCan is a revolutionary device designed to revolvutionize recycling and therfore, reducing the flow of pollutants into the waterways.</p></div>
<hr />
</div> */