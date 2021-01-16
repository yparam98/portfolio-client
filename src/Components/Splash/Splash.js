import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Splash.css';

import facebook_logo from '../../assets/icons/facebook.png'
import github_logo from '../../assets/icons/github.png'
import instagram_logo from '../../assets/icons/instagram.png'
import linkedin_logo from '../../assets/icons/linkedin.png'
import twitter_logo from '../../assets/icons/twitter.png'
import youtube_logo from '../../assets/icons/youtube.png'
import telegram_logo from '../../assets/icons/telegram.png'

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            social_media: [
                {
                    capt: "facebook",
                    icon: facebook_logo,
                    link: "https://www.facebook.com/yparam98/"
                },
                {
                    capt: "github",
                    icon: github_logo,
                    link: "https://github.com/yparam98"
                },
                {
                    capt: "instagram",
                    icon: instagram_logo,
                    link: "https://www.instagram.com/yparam98/"
                },
                {
                    capt: "linkedin",
                    icon: linkedin_logo,
                    link: "https://www.linkedin.com/in/yathavanparameshwaran/"
                },
                {
                    capt: "twitter",
                    icon: twitter_logo,
                    link: "https://twitter.com/yparam98"
                },
                {
                    capt: "youtube",
                    icon: youtube_logo,
                    link: "https://www.youtube.com/channel/UCTyRayLDgFWWf54G6f_wsoQ"
                },
                {
                    capt: "telegram",
                    icon: telegram_logo,
                    link: "https://t.me/yparam98"
                },
            ]
        };
    }

    render() {
        return (
            <div class="site-center stack">
                <div class="splash_reference_buttons side_stack">
                    {
                        this.state.social_media.map((val, ind) => {
                            return <a href={val.link}>
                                <img src={val.icon} height='35' width='35' alt={val.capt} className="social_media_icon" />
                            </a>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Splash;