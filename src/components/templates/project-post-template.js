import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const ProjectPost = ({ data }) => {
  return (
    <>
      <MDXProvider>
        <h1>This is the post template component</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      rawBody
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
  }
`;

export default ProjectPost;
