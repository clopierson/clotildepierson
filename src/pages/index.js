import * as React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import Header from "../components/header";


const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <main>
        <title>About Clotilde Pierson</title>
        <h1>Hi! I'm Clotilde.</h1>
        <p><a href="https://github.com/clopierson">GitHub</a> · <a href="https://www.linkedin.com/in/clotilde-pierson/">LinkedIn</a> · <a href="https://www.instagram.com/clopierson/">Instagram</a></p>


        <Button variant="fill" size="medium">
          About
        </Button>
        
      </main>
    </Layout>
  );
};

export default IndexPage;
