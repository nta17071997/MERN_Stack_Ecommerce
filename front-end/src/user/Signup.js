import React from 'react';
import Layout from '../core/Layout';
import { API } from '../config';

const Signup = () => {
  console.log(API);
  return (
    <Layout title="Signup Page" description="Signup to React E-commerce App">
      {API}
    </Layout>
  );
};

export default Signup;
