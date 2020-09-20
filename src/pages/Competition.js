import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import MetaHelmet from '../components/MetaHelmet';

const IndexPage = ({data}) => (
    <Layout fullMenu>
          <MetaHelmet 
            title="수빈이 밤샘 대회들"
          />
      <article id="main">
        <header>
          <h2 className="Title">Competition</h2>
        <p className="korean">수빈이가 맘 다친 날들</p>
      </header>


      <section className="wrapper style5">
        <div className="inner korean">
          <h2>All Competitions</h2>
          <hr/>
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
query IndexQuery10{
  allMarkdownRemark(
    limit:10
    sort: { fields : [frontmatter___title], order: ASC}
    filter: { frontmatter: {competition: {eq:true}}}
    ){
    edges{
      node{
        frontmatter{
          title
          path
          grade
          cover
        }
      }
    }
}
}
`

export default IndexPage;
