import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const terranUnits = data.allCountersJson.nodes[0].units;
  const zergUnits = data.allCountersJson.nodes[1].units;
  const protossUnits = data.allCountersJson.nodes[2].units;

  return (
    <Layout>
      <div style={{ margin: '0.6rem' }}>
        <h1>Terran</h1>
        <div>
          {terranUnits.map(unit => (
            <p style={{ marginBottom: '0.6rem' }}>
              <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                {unit.id}
              </span>
              <span>: </span>
              {unit.countersId.map(counter => (
                <>
                  <span style={{ textTransform: 'capitalize' }}>{counter}</span>
                  <span>{' '}</span>
                </>
              ))}
            </p>
          ))}
        </div>
      </div>
      <div style={{ margin: '0.6rem' }}>
        <h1>Zerg</h1>
        <div>
          {zergUnits.map(unit => (
            <p style={{ marginBottom: '0.6rem' }}>
              <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                {unit.id}
              </span>
              <span>: </span>
              {unit.countersId.map(counter => (
                <>
                  <span style={{ textTransform: 'capitalize' }}>{counter}</span>
                  <span>{' '}</span>
                </>
              ))}
            </p>
          ))}
        </div>
      </div>
      <div style={{ margin: '0.6rem' }}>
        <h1>Protoss</h1>
        <div>
          {protossUnits.map(unit => (
            <p style={{ marginBottom: '0.6rem' }}>
              <span style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                {unit.id}
              </span>
              <span>: </span>
              {unit.countersId.map(counter => (
                <>
                  <span style={{ textTransform: 'capitalize' }}>{counter}</span>
                  <span>{' '}</span>
                </>
              ))}
            </p>
          ))}
        </div>
      </div>
      <SEO title="StarCraft 2 - Counters" />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({}),
};

export const query = graphql`
  query {
    allCountersJson {
      nodes {
        id
        units {
          id
          countersId
        }
      }
    }
  }
`;

export default IndexPage;
