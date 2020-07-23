import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import ProjectIndex from '../components/ProjectIndex'

const IndexPage = ({data}) => (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2 className="Title">1st Proejct</h2>
        <p className="korean">새내긔였던 수빈이가 무슨 짓거리들을 했으려나~</p>
      </header>


      <section className="wrapper style5">
        <div className="inner korean">
          <ProjectIndex></ProjectIndex>
            <ul>
              {data.allMarkdownRemark.edges.map(post => (
                <li>  <a href={ post.node.frontmatter.path}> {post.node.frontmatter.title}</a> </li>
              ))}
          </ul>
         </div>
        </section>
      </article>

    </Layout>
  );

export const pageQuery = graphql`
query IndexQuery1{
  allMarkdownRemark(
    limit:10
    sort: { fields : [frontmatter___title], order: ASC}
    filter: { frontmatter: {grade: {eq:"1"}}}
    ){
    edges{
      node{
        frontmatter{
          title
          path
          published
          grade
          competition

        }
      }
    }
}
}
`

export default IndexPage;
