import * as React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

// markup
const AboutPage = ({ location }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Hero
        location={location.pathname}
        title="About"
        subtitle="This is what I do"
      />
      <section className="about mt-5">
        <p className="lead">
        I'm baby live-edge fixie food truck roof party banh mi waistcoat craft beer thundercats. Man bun microdosing kogi, pitchfork pork belly DIY normcore cred franzen. Godard banjo beard semiotics single-origin coffee pinterest VHS portland man bun knausgaard slow-carb williamsburg succulents. Plaid XOXO disrupt gochujang PBR&B gentrify brunch pour-over yuccie tote bag kitsch. Poutine marfa seitan, humblebrag ramps hexagon selfies.
        </p>
        <p className="lead">
        enmo PBR&B hashtag salvia, tilde bushwick listicle bitters seitan viral pickled yr. Four loko hexagon cray, keytar air plant PBR&B palo santo crucifix hella taiyaki cronut. Heirloom glossier cornhole synth craft beer, prism kickstarter beard cray kale chips VHS poutine hell of unicorn. Yr distillery celiac, fanny pack retro offal mumblecore XOXO direct trade listicle polaroid cronut sriracha fixie poke. Chia glossier adaptogen organic venmo subway tile.
        </p>
        <p className="lead">
        Pug keytar four dollar toast chartreuse flexitarian poke next level, offal polaroid quinoa. Activated charcoal pitchfork try-hard, cronut disrupt schlitz woke humblebrag kinfolk meh hell of. Tumeric biodiesel fashion axe drinking vinegar, literally pug paleo shaman dreamcatcher 3 wolf moon. La croix cloud bread vaporware quinoa, brunch glossier iPhone.
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
