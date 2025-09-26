import Style from "../styles/Contacto.module.css";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Contacto = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Ingrese su nombre";
    } else if (values.name.trim().replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "").length < 2) {
      errors.name = "El nombre debe tener por lo menos dos caracteres";
    }
    if (!values.subname) {
      errors.subname = "Ingrese su apellido";
    } else if (values.subname.trim().replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "").length < 2) {
      errors.subname = "El apellido debe tener por lo menos dos caracteres";
    }
    if (!values.mail) {
      errors.mail = "Ingrese su mail";
    } else if (!/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
      errors.mail = "Ingrese un mail válido";
    }
    if (!values.phone) {
      errors.phone = "Ingrese su teléfono";
    } else if (!/^\+?\d{6,15}$/.test(values.phone.replace(/[^\d+]/g, ""))) {
      errors.phone = "Ingrese un teléfono válido";
    }
    if (!values.subject) {
      errors.subject = "Ingrese un asunto";
    } else if (values.subject.trim().replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?-]/g, "").length < 10) {
      errors.subject = "El asunto debe tener por lo menos diez caracteres";
    }
    if (!values.message) {
      errors.message = "Ingrese un mensaje";
    } else if (values.message.trim().replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?()¿¡:;'"-]/g, "").length < 20) {
      errors.message = "El mensaje debe tener por lo menos veinte caracteres";
    }
    return errors;
  };
  const enviar = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      Swal.fire("Mensaje enviado", "Estaremos en contacto pronto", "success")
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <section id={Style.contacto}>
      <h1>
        Contacto <span>intergaláctico</span>
      </h1>
      <Formik
        initialValues={{
          name: "",
          subname: "",
          mail: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validate={validate}
        onSubmit={enviar}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && <output>{errors.name}</output>}
            </fieldset>
            <fieldset>
              <label htmlFor="subname">Apellido:</label>
              <input
                type="text"
                id="subname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subname}
              />
              {errors.subname && touched.subname && (
                <output>{errors.subname}</output>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="mail">Mail:</label>
              <input
                type="email"
                id="mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mail}
              />
              {errors.mail && touched.mail && <output>{errors.mail}</output>}
            </fieldset>
            <fieldset>
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="tel"
                id="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone && <output>{errors.phone}</output>}
            </fieldset>
            <fieldset>
              <label htmlFor="subject">Asunto:</label>
              <input
                type="text"
                id="subject"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              {errors.subject && touched.subject && (
                <output>{errors.subject}</output>
              )}
            </fieldset>
            <fieldset>
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              {errors.message && touched.message && (
                <output>{errors.message}</output>
              )}
            </fieldset>
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default Contacto;
