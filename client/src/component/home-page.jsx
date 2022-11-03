import React from 'react';
import Layout from './shared/layout';
import Hero from './hero/hero';
import FeaturedCollection from './featured-collection/featured-collection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <FeaturedCollection />
      </Layout>
    </>
  );
}

export default HomePage;