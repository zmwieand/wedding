import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row, Stack } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import VenueItem from "components/VenueItem";
import "./Reception.scss"

const Reception = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, locationName, address1, address2, time, directionsUrl, venueUrl, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <VenueItem
        header={rootHeader}
        locationName={locationName}
        address1={address1}
        address2={address2}
        time={time}
        directionsUrl={directionsUrl}
        venueUrl={venueUrl}
        imageFileName={imageFileName}
      />

      <br/>
      <br/>

      <Row>
        <Col xl={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <div className="extras">
            <p>We are anticipating a 2 hour gap between the end of our Ceremony and the start of Cocktail Hour at Fox Valley. We would recommend stopping at <a href="https://www.google.com/maps/place/Brazen+Brewing/@42.944662,-78.6379194,17z/data=!3m1!4b1!4m6!3m5!1s0x89d39f6afc2632cb:0x6e79b31f32499bd7!8m2!3d42.944662!4d-78.6353445!16s%2Fg%2F11n0kgkp60?entry=ttu" target="_blank">Brazen Brewing</a> for a drink. It is located between Sacred Heart and Fox Valley on Genessee Street. They have an excellent selection of locally crafted beers, ciders, wine, and cocktails that we are certain you will enjoy!</p>
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Reception.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Reception.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Reception;
