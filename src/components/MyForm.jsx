import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "the name is short")
    .max(30, "the name is a little bit large...")
    .required("field mandatory"),
  email: Yup.string().email("email not valid").required("field mandatory"),
});

export const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "sergi",
      email: "sergimoli@gmail.com",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>my form with formik</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <div className="error">
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : ""}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="error">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : ""}
          </div>
        </div>
        <input type="submit" value="send"></input>
      </form>
    </div>
  );
};
