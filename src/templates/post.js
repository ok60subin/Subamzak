import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout'

export default function Template({data}) {
  const {markdownRemark: post} = data;
  // const post = data.markdownRemark;
  return (
    <Layout fullMenu>
      <article id="main">
            <header>
                <h2 className="Title">{post.frontmatter.title}</h2>
                <p className="korean">앍! 이게뭐얅!</p>
            </header>
            <section className="wrapper style5 md">
                <div className="inner">
                    <div dangerouslySetInnerHTML={{__html: post.html}}  className="korean"/>
                </div>
            </section>
        </article>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
        published
        competition
        grade
        cover
      }
    }
  }
`