import styles from "./Register.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MyFormValues } from "../../Services/Interfaces/userInterFace";
import { useAppSelector } from "../../Hooks/ReduxHook";
import { userMode } from "../../Redux/Slices/stateSlice";

export default function Register() {
  // const [validated, setValidated] = useState(false);
  const role = useAppSelector(userMode);
  const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("Name is required")
      .max(10, "Name is too long"),
    last_name: Yup.string()
      .required("Name is required")
      .max(10, "Name is too long"),
    phone_number: Yup.string()
      .required("Phone number is required")
      .matches(/^01[0125][0-9]{8}$/, "Phone number is invalid ")
      .max(11, "Phone must be 11  digits"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is equired")
      .max(255, "Email is too long"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password minlength is 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
        "Password is invalid"
      ),
    password_confirmation: Yup.string()
      .required("Password confirmation is required")
      .oneOf([Yup.ref("password")], "Password Fields must match"),
  });
  function handleSubmit(values: MyFormValues): any {
    console.log(values);
    // setValidated(true);
  }
  const initialValues: MyFormValues = {
    first_name: "",
    role,
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  let formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignupSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className={`${styles.bgRegister} ${role}`}>
        <Container className={styles.marTop}>
          <h2 className={`mb-5 ${styles.title}`}>Sign Up as a {role}</h2>
          <Form
            className={`${styles.widthForm} `}
            onSubmit={formik.handleSubmit}
          >
            <Row>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword1">
                  <Form.Label className={styles.LabrlSetting}>
                    First Name
                  </Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="text"
                      className={styles.inputSetting}
                      value={formik.values.first_name}
                      name="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.first_name && formik.touched.first_name ? (
                      <div className="position-absolute text-danger py-2">
                        {formik.errors.first_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label className={styles.LabrlSetting}>
                    Last Name
                  </Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="text"
                      className={styles.inputSetting}
                      value={formik.values.last_name}
                      name="last_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.last_name && formik.touched.last_name ? (
                      <div className="position-absolute text-danger">
                        {formik.errors.last_name}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label className={styles.LabrlSetting}>Email</Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="email"
                      className={styles.inputSetting}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="position-absolute text-danger">
                        {formik.errors.email}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label className={styles.LabrlSetting}>
                    Password
                  </Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="password"
                      className={styles.inputSetting}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <div className="position-absolute text-danger">
                        {formik.errors.password}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label className={styles.LabrlSetting}>
                    Phone Number
                  </Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="tel"
                      className={styles.inputSetting}
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="phone_number"
                    />
                    {formik.errors.phone_number &&
                    formik.touched.phone_number ? (
                      <div className="position-absolute text-danger">
                        {formik.errors.phone_number}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label className={styles.LabrlSetting}>
                    Confirm Password
                  </Form.Label>
                  <Col sm="10" className="position-relative">
                    <Form.Control
                      type="password"
                      className={styles.inputSetting}
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password_confirmation"
                    />
                    {formik.errors.password_confirmation &&
                    formik.touched.password_confirmation ? (
                      <div className="position-absolute text-danger">
                        {formik.errors.password_confirmation}
                      </div>
                    ) : (
                      ""
                    )}
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            <Row className={`mt-3 ${styles.Justifty}`}>
              <Col sm={2}></Col>
              <Col sm={4}>
                <button
                  type="submit"
                  className={` w-100 ${styles.btnSubmit} ${`${role}Btn`}`}
                >
                  Sign UP
                </button>
                <div className={`${styles.or} m`}>or</div>
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
}
