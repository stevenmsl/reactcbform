import { FormEventHandler } from "react";
import useInput from "../hooks/use-input";
const isRequired = (val: string) => val.trim() !== "";
const isEmail = (val: string) => val.includes("@");

const BasicForm: React.FC = () => {
  const [
    fName,
    fNameIsValid,
    fNameHasError,
    fNameChangeHandler,
    fNameBlurHandler,
    fNameReset,
  ] = useInput(isRequired);
  const [
    lName,
    lNameIsValid,
    lNameHasError,
    lNameChangeHandler,
    lNameBlurHandler,
    lNameReset,
  ] = useInput(isRequired);

  const [
    email,
    emailIsValid,
    emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    emaiReset,
  ] = useInput(isEmail);

  const isFormValid = fNameIsValid && lNameIsValid && emailIsValid;

  const fNameClasses = fNameHasError ? "form-control invalid" : "form-control";
  const lNameClasses = lNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    console.log("Submit:", fName, lName, email);
    fNameReset();
    lNameReset();
    emaiReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={fNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fName}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={lNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lName}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
