import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input required className="form-input" {...otherProps}></input>
      {label && (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : null
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
