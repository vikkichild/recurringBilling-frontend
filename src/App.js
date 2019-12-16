import axios from "axios";
import React, {Component} from 'react';
import {Container, Form, Row, Col, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {

    state = {
        userData: {
            firstName: '',
            lastName: '',
            phone: '',
            fax: '',
            email: '',
            taxId: '',
            company: '',
            address: '',
            city: '',
            country: '',
            state: '',
            zip: '',
            cardNumber: '',
            cardExpDate: '',
            cardCode: '',
        },
        agreement: false,
        isShowAgreementNote: false,
        response: null,
        error: false
    };

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            userData: {
                ...this.state.userData,
                [name]: value
            }
        });
    };

    agreementChecked = () => {
        this.setState({
            ...this.state, agreement: !this.state.agreement
        });
    };

    sendUserData = async () => {
        try {
            const response = await axios.post('http://localhost:3030/subscribe', {data: this.state.userData});
            const data = await response.json();
            this.setState({
                response: data
            });
        } catch {
            this.setState({...this.state, error: true});
        }
    };

    showAgreementNote = event => {
        event.preventDefault();
        this.setState({
            ...this.state, isShowAgreementNote: true
        });
    };

    submitFormHandler = (event) => {
        this.sendUserData();
        this.setState({
            ...this.state, isShowAgreementNote: false
        });
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="app-header">
                            Subscription:
                        </h1>
                        <Form onSubmit={this.state.agreement ? this.submitFormHandler : this.showAgreementNote}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={this.state.userData.firstName}
                                        onChange={this.changeHandler}
                                        placeholder="Enter your first name"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={this.state.userData.lastName}
                                        onChange={this.changeHandler}
                                        placeholder="Enter your last name"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0000000000"
                                        name="phone"
                                        value={this.state.userData.phone}
                                        onChange={this.changeHandler}
                                        placeholder="Enter your phone number"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Fax</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        name="fax"
                                        value={this.state.userData.fax}
                                        onChange={this.changeHandler}
                                        placeholder="Enter your fax number"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={this.state.userData.email}
                                        onChange={this.changeHandler}
                                        placeholder="Email"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Tax Id</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        name="taxId"
                                        value={this.state.userData.taxId}
                                        onChange={this.changeHandler}
                                        placeholder="Enter your tax id"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="company"
                                        value={this.state.userData.company}
                                        onChange={this.changeHandler}
                                        placeholder="Company"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={this.state.userData.address}
                                        onChange={this.changeHandler}
                                        placeholder="1234 Main St"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        value={this.state.userData.city}
                                        onChange={this.changeHandler}
                                        placeholder="City"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        value={this.state.userData.country}
                                        onChange={this.changeHandler}
                                        placeholder="Country"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="state"
                                        value={this.state.userData.state}
                                        onChange={this.changeHandler}
                                        placeholder="State"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        name="zip"
                                        value={this.state.userData.zip}
                                        onChange={this.changeHandler}
                                        placeholder="Zip"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Card number</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        name="cardNumber"
                                        value={this.state.userData.cardNumber}
                                        onChange={this.changeHandler}
                                        placeholder="Card number"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Card expiration date</Form.Label>
                                    <Form.Control
                                        name="cardExpDate"
                                        value={this.state.userData.cardExpDate}
                                        onChange={this.changeHandler}
                                        placeholder="Card expiration date"/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Card code</Form.Label>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        name="cardCode"
                                        value={this.state.userData.cardCode}
                                        onChange={this.changeHandler}
                                        placeholder="Card code (CVV/CVC)"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    onChange={this.agreementChecked}
                                    label="I agree to Terms, Data Policy and Cookies Policy."/>
                            </Form.Group>
                            {this.state.isShowAgreementNote &&
                            <h3 className="agreement-note">Please, check the agreement box!</h3>
                            }
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
