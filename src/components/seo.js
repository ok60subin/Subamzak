import * as React from "react"
import Helmet from "react-helmet"
import {StaticQuery, graphql} from "gatsby"


export const seo = ( { description, keywords, title, url, author,image}) => {
    return(
        <StaticQuery
            query = {detailQuery}
            reunder = {data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaUrl = url || data.site.siteMetadata.url
                const metaAuthor = author || data.site.siteMetadata.author
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || ["gatsby","Projects","Mechanics","Electronics","Computer","Mechatronics"]
                return (
                    <Helmet 
                    title={title}
                    meta={[
                        {
                            name:`description`,
                            content: metaDescription,
                        },
                        {
                            property:`og:title`,
                            content:metaTitle,
                        },
                        {
                            property: `og:description`,
                            content: metaDescription,
                        },
                        {
                            property: `og:url`,
                            content: metaUrl,
                        },
                        {
                            property: `og:author`,
                            content: metaAuthor,
                        },
                        {
                            property: `og:keywords`,
                            content: metaKeywords,
                        },
                        {
                            property: `og:type`,
                            content: `website`,
                        },
                        {
                            name:`twitter:card`,
                            content:metaImage,
                        },
                        {
                            name:`twitter:title`,
                            content:metaTitle,
                        },                    
                        {
                            name:`twitter:description`,
                            content:metaDescription,
                        },  
                        {
                            name:`twitter:creator`,
                            content:metaAuthor,
                        },
                        {
                            name:`twitter:image`,
                            content:metaImage,
                        },

                    ].concat(
                        metaKeywords && metaKeywords.length>0 ? 
                        {
                            name:'keywords',
                            content:metaKeywords.join(`,`),
                        }
                        :[]
                    )}
                />
            )
        }}
    />
    )
}


const detailQuery = graphql `
    query DefaultySEROQuery {
        site{
            siteMetadata{
              title
              description
              author
            }
        }
    }

`
