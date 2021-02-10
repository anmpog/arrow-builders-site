const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const { node } = require('prop-types');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/projects${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`🚨 ERROR: Loading 'createPages' query`);
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/templates/projects-page-layout.jsx`),
      context: { id: node.id },
    });
  });
};
