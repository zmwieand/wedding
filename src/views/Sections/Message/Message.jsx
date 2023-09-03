import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import VenueItem from "components/VenueItem";
import "./Message.scss";

const Message = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, paragraph1, paragraph2, paragraph3, paragraph4 } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} />
      </Row>

      <Row>
        <Col xl={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }}>
          <div className='letter'>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
            <p>{paragraph4}</p>
            <p className='signoff'>With all our love and appreciation,</p>
            <p className='signature'>Jocelyn & Zachary</p>
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Message.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Message;
