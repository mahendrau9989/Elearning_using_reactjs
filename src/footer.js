import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Elearn
              </h6>
              <p>
                Elearn is a learning platform developed to provide the free online resourses for students and professionals to develop their skills and career.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Web development</h6>
              <p>
                <a href='Html' className='text-reset'>
                  HTML
                </a>
              </p>
              <p>
                <a href='react' className='text-reset'>
                  REACTJS
                </a>
              </p>
              <p>
                <a href='css' className='text-reset'>
                  CSS
                </a>
              </p>
              <p>
                <a href='javascript' className='text-reset'>
                  JAVASCRIPT
                </a>
              </p>
              <p>
                <a href='angular' className='text-reset'>
                  ANGULAR.JS
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Artificial Intelligence</h6>
              <p>
                <a href='ml' className='text-reset'>
                  Machine Learning
                </a>
              </p>
              <p>
                <a href='dl' className='text-reset'>
                  Deep Learning
                </a>
              </p>
              <p>
                <a href='ai' className='text-reset'>
                Artificial Intelligence
                </a>
              </p>
              <p>
                <a href='blockchain' className='text-reset'>
                  Blockchain Technology
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                    Chennai, INDIA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@elearn.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 7894561231
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +040 7894 5462
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Elearning.com
        </a>
      </div>
    </MDBFooter>
  );
}
