import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

const shortcodes = { Link };

export default function PageTemplate({ data: { mdx } }) {
  console.log(mdx);
  return (
    <div>
      <h1>{mdx.frontmatter.title || 'Generic Title'}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

export const pageQuery = graphql`
  query ProjectPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      rawBody
      frontmatter {
        title
      }
    }
  }
`;
