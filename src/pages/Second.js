import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

import ProjectIndex from '../components/ProjectIndex'

const IndexPage = ({data}) => (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2 className="Title">2nd Grade</h2>
        <p className="korean">헌내긔 수빈이가 무슨 짓거리들을 했으려나~</p>
      </header>


      <section className="wrapper style5">
        <div className="inner korean">
          <ProjectIndex></ProjectIndex>
          <ul className="mdcover" >
              {data.allMarkdownRemark.edges.map(post => (
                <li>  <a href={post.node.frontmatter.path}> 
                        <img src={post.node.frontmatter.cover} alt="cover"/>
                        <p>{post.node.frontmatter.title}</p>

                      </a> 
                </li>
              ))}
          </ul>
         </div>
        </section>
      </article>

    </Layout>
  );

export const pageQuery = graphql`
query IndexQuery2{
  allMarkdownRemark(
    limit:10
    sort: { fields : [frontmatter___title], order: ASC}
    filter: { frontmatter: 
      {grade : {eq:"2"},
      published: {eq:true}}
    }
    ){
    edges{
      node{
        frontmatter{
          title
          path
          published
          grade
          competition
          cover
        }
      }
    }
}
}
`

export default IndexPage;
