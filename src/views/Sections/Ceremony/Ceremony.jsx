import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import VenueItem from "components/VenueItem";

const Ceremony = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, locationName, address1, address2, time, directionsUrl, venueUrl } = frontmatter;

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
      />
    </PageSection>
  );
};

Ceremony.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Ceremony.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Ceremony;
