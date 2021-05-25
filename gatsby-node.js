const path = require('path');
const { node } = require('prop-types');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const frontmatterSlug = node.frontmatter.slug;
    createNodeField({
      node,
      name: `slug`,
      value: `projects${frontmatterSlug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panicOnBuild(`🚨 ERROR: Loading 'createPages' query`);
  }

  data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/templates/project-post-template.js`),
      context: {
        slug: node.fields.slug,
        id: node.id,
      },
    });
  });
};
