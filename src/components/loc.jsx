import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter
} from 'mdb-react-ui-kit';

export default function Locard() {
  return (
    <MDBCard border='success' background='white' shadow='0' className='mb-3'>
      <MDBCardHeader background='transparent' border='success'>
        Header
      </MDBCardHeader>
      <MDBCardBody className='text-success'>
        <MDBCardTitle>Success card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter background='transparent' border='success'>
        Footer
      </MDBCardFooter>
    </MDBCard>
  );
}