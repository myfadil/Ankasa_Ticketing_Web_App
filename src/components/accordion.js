import Accordion from 'react-bootstrap/Accordion';

function AccordionC() {
  return (
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>View Details</Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionC;