import React from 'react';
import { Helmet } from 'react-helmet';
import banner from '../assets/images/banner.jpg';


const MetaHelmet = ({title}) => {
    const page = {
        url: "https://subamzak.netlify.app" + "",
        image: banner,
        description: "Subin's nightmares are all here... My projects room",
        keywords: "project, blog, programming, mechanics, electronics, computer, mechatronics",
    }
	return (
		<Helmet>
            <title> {title} </title>

            <meta name="description" content={page.description} />
            <meta name="keywords" content={page.keywords}/>
            <meta name="image" content= {banner} />

            <meta property="og:title" content={page.titleAlt}/>
            <meta property="og:image" content={banner} />
            <meta property="og:site_name" content="" />
            <meta property="og:description" content={page.description} />

            <meta name="twitter:title" content={page.titleAlt} />
            <meta name="twitter:description" content={page.description} />
            <meta name="twitter:image" content={banner} />
            <meta name="twitter:card" content={page.description} /> 
		</Helmet>
	);
};
export default MetaHelmet;