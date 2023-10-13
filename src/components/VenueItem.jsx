import React from "react";
import PropTypes from "prop-types";

import { Button, Col, Row, Stack } from "react-bootstrap";
import Image from "components/Image";
import SectionHeader from "components/SectionHeader";
import "./VenueItem.scss";

const VenueItem = ({ header, locationName, address1, address2, time, directionsUrl, venueUrl, imageFileName }) => {
  return (
    <>
      <Row>
        <SectionHeader header={header} />
      </Row>

      <br/>

      <Row>
        <Col className="venue-photo-block" xl={{ span: 3, offset: 3 }} md={{ span: 5, offset: 1 }} sm={{ span: 12, offset: 0 }}>
          <Image className="venue-photo" fileName={imageFileName} alt="" />
        </Col>
        <Col className="venue-block" xl={{ span: 3, offset: 0 }} md={{ span: 5, offset: 0 }} sm={{ span: 12, offset: 0 }}>
          <Stack gap={1}>
            <div className="venue-info">
              <p className="location">{locationName}</p>
              <p className="address">{address1}</p>
              <p className="address">{address2}</p>
              <p className="time">{time}</p>
            </div>
            <div className="directions-block">
              <Button size="xl" className="directions-btn" href={directionsUrl} target="_blank">
                Get Directions
              </Button>
            </div>
          </Stack>
        </Col>
      </Row>
    </>
  );
}

VenueItem.propTypes = {
  header: PropTypes.string,
  locationName: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  time: PropTypes.string,
  directionsUrl: PropTypes.string,
  venueUrl: PropTypes.string,
  imageFileName: PropTypes.string,
};

VenueItem.defaultProps = {
  header: "",
  locationName: "",
  address1: "",
  address2: "",
  time: "",
  directionsUrl: "#",
  venueUrl: "#",
  imageFileName: "",
};

export default VenueItem;
