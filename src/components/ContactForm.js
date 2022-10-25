import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";
import { validateErrors } from "../utilities/validateErrors";

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log("form values:", values);
        console.log("in JSON format:", JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                feedback: "",
            }}
            onSubmit={handleSubmit}
            validate={validateErrors}
        >
            {({ errors, touched }) => (
            <Form>
                <FormGroup row>
                    <Label htmlFor="firstName" md="3" className="text-end">First Name</Label>
                    <Col md="9">
                        <Field 
                            id="firstName" 
                            name="firstName" 
                            placeholder="First Name" 
                            className="form-control"
                            />
                        {touched.firstName && errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="lastName" md="3" className="text-end">Last Name</Label>
                    <Col md="9">
                        <Field 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                            className="form-control"
                            />
                        {touched.lastName && errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="email" md="3" className="text-end">Email</Label>
                    <Col md="9">
                        <Field 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            className="form-control"
                            />
                        {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor="feedback" md="3" className="text-end">Feedback</Label>
                    <Col md="9">
                        <Field 
                            id="feedback" 
                            name="feedback" 
                            placeholder="Let us know what you think..." 
                            as="textarea"
                            rows="12" 
                            className="form-control"
                             />
                        {touched.feedback && errors.feedback && <div className="text-danger">{errors.feedback}</div>}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col className="d-flex justify-content-center">
                        <Button type="submit" color="success" className="">Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
