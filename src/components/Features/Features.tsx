import React from 'react';
import styles from './Features.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Features = (): JSX.Element => (
  <div className="bg-secondary text-white py-4">
    <h2 className="text-center pb-4 pt-2">Application features</h2>
    <Container>
      <Row>
        <Col>
          <h3 className="text-warning">Convenient search</h3>
          <p>
            Convenient search for recipes for your favorite dishes by dish names.
          </p>
        </Col>
        <Col>
          <h3 className="text-warning">Random slides</h3>
          <p>
            Animated presentation of random cooking recipes to grab your appetite!
          </p>
        </Col>
        <Col>
          <h3 className="text-warning">Recipe categories</h3>
          <p>
            Possibility of choosing recipes for cooking dishes by category: main courses, desserts, breakfasts and others.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-warning">What's in your fridge</h3>
          <p>
            Smart search for recipes based on the ingredients you have in your fridge. A convenient solution for everyday use!
          </p>
        </Col>
        <Col>
          <h3 className="text-warning">Your personal cookbook</h3>
          <p>
            You can add any cooking recipe you like to your profile, which will collect your personal book of favorite recipes!
          </p>
        </Col>
        <Col>
          <h3 className="text-warning">Step by step cooking</h3>
          <p>
            In the recipe card, you can start preparing your dish step by step. It is very convenient!
          </p>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center my-3">
      <Link to="/search">
        <Button className="theme-button" variant="primary">Search recipes</Button>
      </Link>
    </div>
  </div>
);

export default Features;
