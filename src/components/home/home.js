import ProfilePicture from "../profile-picture/profile-picture";
import { SiJava, SiGo, SiPython, SiJavascript, SiReact, SiAmazonaws, SiSpring, SiSpringboot, SiTwitter, SiLinkedin, SiGithub, SiStackoverflow, SiDocker, SiMailchimp, SiGmail, SiMarkdown } from "react-icons/si";

function Home(props) {

    const style = {
        fontSize : "20px",
        color: "#A3BE8C",
        paddingLeft: "5px",
        paddingRight: "5px",
    }

    const SocialStyle = {
        fontSize : "30px",
        color: "#A3BE8C",
        paddingLeft: "5px",
        paddingRight: "20px",
    }

    const twitterLink = "https://twitter.com/PanditHiren"
    const linkedInLink = "https://www.linkedin.com/in/hiren-pandit-000434bb"
    const githubLink = "https://github.com/hirenpandit"
    const stakcoverflowLink = "https://stackoverflow.com/users/5065362/hiren"

    return (
        <>
            <div className="home-detail">
                <div className="user-detail">
                    <ProfilePicture />
                    <div className="myname">
                        <pre>#Hiren_Pandit</pre>
                    </div>
                </div>
                <div className="about-me">
                    <p style={{fontSize: '18px', color:'#4C566A'}}>
                        Software Engineering Enthusiast
                        | Java <SiJava style={style} />
                        | Spring <SiSpring style={style}/>
                        | SpringBoot <SiSpringboot style={style}/>
                        | Cloud Technologies <SiAmazonaws style={style}/>
                        | Python <SiPython style={style}/>
                        | GoLang <SiGo style={style}/>
                        | JavaScript <SiJavascript style={style}/>
                        | Reactjs <SiReact style={style}/>
                        | Docker <SiDocker style={style} />
                    </p>
                </div>
            </div>
            <div className="social-links">
                <a href={twitterLink} target="_blank" rel="noreferrer">
                    <SiTwitter style={SocialStyle}/>
                </a>
                <a href={linkedInLink} target="_blank" rel="noreferrer">
                    <SiLinkedin style={SocialStyle}/>
                </a>
                <a href={githubLink} target="_blank" rel="noreferrer">
                    <SiGithub style={SocialStyle}/>
                </a>
                <a href={stakcoverflowLink} target="_blank" rel="noreferrer">
                    <SiStackoverflow style={SocialStyle}/>
                </a>
                <a href="mailto:hirenppandit@gmail.com" target="_blank" rel="noreferrer">
                    <SiGmail style={SocialStyle}/>
                </a>   
            </div>
        </>
    )
}

export default Home;