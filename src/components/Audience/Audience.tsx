import React from 'react';
import styles from './Audience.scss';
import FirstLogo from '@/assets/images/004-cake.png';
import SecondLogo from '@/assets/images/015-cutlery.png';
import ThirdLogo from '@/assets/images/022-pizza.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Audience = (): JSX.Element => (
  <div className="bg-secondary text-white py-4">
    <h2 className="text-center pb-4 pt-2">Target audience</h2>
    <Container>
      <Row>
        <img src={FirstLogo} className={styles['img-icon']} alt="FirstLogo" />
        <Col>
          <h3 className="text-warning">Restaurants and cafes</h3>
          <p>
            The application can be convenient for use in restaurants and cafes, for convenient search and storage of cooking recipes.
          </p>
        </Col>
      </Row>
      <Row>
        <img src={SecondLogo} className={styles['img-icon']} alt="SecondLogo" />
        <Col>
          <h3 className="text-warning">Everyone can be a cook</h3>
          <p>
            Every connoisseur of delicious food can use the book in the home kitchen so as not to keep in mind the recipes for your family's favorite dishes.
          </p>
        </Col>
      </Row>
      <Row>
        <img src={ThirdLogo} className={styles['img-icon']} alt="ThirdLogo" />
        <Col>
          <h3 className="text-warning">Kids</h3>
          <p>
            The app can be used by your kids to show you what they like to eat!
          </p>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center py-3">
      <Link to="/search">
        <Button className="theme-button" variant="primary">Search inspiration</Button>
      </Link>
    </div>
  </div>
);

export default Audience;
