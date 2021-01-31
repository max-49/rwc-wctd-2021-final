import facebook from './facebooklogo.png'
import instagram from './instagramlogo.png'
import youtube from './youtubelogo.png'
import twitter from './twitterlogo.png'
import discord from './discordlogo.png'
import twitch from './twitchlogo.png'

function Contact() {
    return (
        <div>
            <div className="parallaxbefore"></div>
            <div className="abouthome">
                <hr />
                <h1>Contact Us!</h1>
                <p><i>Press on the logos below for all the ways to keep up with our company!</i></p>
                <hr />
            </div>
            <div className="header">
                <h3>Keep In Touch!</h3>
                <a href="https://www.facebook.com/joana.doe.334" rel="noreferrer"  target="_blank">
                    <img src={facebook} className="socials" alt=""/>
                </a>
                <a href="https://www.instagram.com/rwc_2021/" target="_blank" rel="noreferrer" >
                    <img src={instagram} className="socials" alt=""/>
                </a>
                <a href="https://www.youtube.com/channel/UCSSbZRKHS72VuwhjX0-APKg" target="_blank" rel="noreferrer" >
                    <img src={youtube} className="socials" alt=""/>
                </a>
                <a href="https://twitter.com/FacultyRwc" target="_blank" rel="noreferrer" >
                    <img src={twitter} className="socials" alt=""/>
                </a>
                <a href="https://www.twitch.tv/rwclive" target="_blank" rel="noreferrer" >
                    <img src={twitch} className="socials" alt=""/>
                </a>
                <a href="https://discord.gg/tufDVXg7jb" rel="noreferrer" target="_blank" >
                    <img src={discord} className="socials" alt=""/>
                </a>
            </div>
            <form action="/mailing">
                <div className="container">
                    <h2>Subscribe to our Newsletter!</h2>
                    <p>Enter your information below to be signed up to receive news from our company straight to your inbox!</p>
                </div>

                <div className="container">
                    <input type="text" placeholder="Name" name="name" required/>
                    <input type="text" placeholder="Email address" name="mail" required/>
                </div>

                <div className="container">
                    <input type="submit" value="Subscribe"/>
                </div>
            </form>
        </div>
    );
}

export default Contact;