import React from 'react'
import styled from 'styled-components'
import { withSiteData } from 'react-static'
<<<<<<< HEAD

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default withSiteData(() => (
  <div>
    
=======
//

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
>>>>>>> background
  </div>
))
