import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.array,
};

export const query = graphql`
  query {
    allCountersJson {
      edges {
        node {
          value
        }
      }
    }
  }
`;

export default IndexPage;
