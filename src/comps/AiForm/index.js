import React, { Fragment } from "react";


import './form.css';

export default function AiForm({ children, onDone = () => { }, ...props }) {
  let formRef = React.createRef();

  const resetForm = (form) => {
    if (form) {
      for (
        let el, i = 0;
        (el = form.elements[i]), i < form.elements.length; i++
      ) {
        el.removeAttribute("aria-invalid");
      }
      form.reset();
    }
  }


  const validateForm = (form) => {
    let firstInvalid = false;
    for (let el, i = 0;
      (el = form.elements[i]), i < form.elements.length; i++) {
      if (el.checkValidity()) {
        el.removeAttribute("aria-invalid");
      } else {
        if (!firstInvalid) {
          // announce error message
          if (el.nextElementSibling) {
            //this.fire('announce', el.nextElementSibling.getAttribute('error-message'));
          }
          if (el.scrollIntoViewIfNeeded) {
            // safari, chrome
            el.scrollIntoViewIfNeeded();
          } else {
            // firefox, edge, ie
            el.scrollIntoView(false);
          }
          el.focus();
          firstInvalid = true;
        }
        el.setAttribute("aria-invalid", "true");
      }
    }
    return !firstInvalid;
  }

  const getSavedForm = (form) => {
    let itemObj = {};

    for (let el, i = 0;
      (el = form.elements[i]), i < form.elements.length; i++) {
      if (el.type == "checkbox") {
        if (el.checked) {
          let chkArr = itemObj[el.name];
          if (chkArr) {
            itemObj[el.name].push(el.value);
          } else {
            itemObj[el.name] = [];
            itemObj[el.name].push(el.value);
          }
        }
      } else if (el.type == "radio") {
        if (el.checked) {
          itemObj[el.name] = el.value;
        }
      } else {
        if (el.name) {
          itemObj[el.name] = el.value ? el.value : null;
        }
      }
    }
    return itemObj;
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = formRef.current;
    if (validateForm(form)) {
      const formData = getSavedForm(form);
      onDone(formData);
    }
  };

  return (
    <form
      ref={formRef}
      autoComplete="off"
      noValidate
      action="javascript:"
      onSubmit={handleSubmit}
      {...props}
    >
      {children}
    </form>
  );
}


/* -------------------- > INPUT & TEXTAREA */
export function AiInput({ xclass = "", showLabel = true, withGroup = true, ...props }) {
  let label = props.label || props.name;
  let iType = props.type || "text";

  let ariaLabelledby = `${iType}_id_${props.name}`;
  if (iType === 'textarea') {
    return (
      <div className={`${withGroup ? 'form-group' : ''}`}>
        {showLabel ? <label className="form-label" htmlFor={ariaLabelledby}>{label}</label> : null}
        <textarea
          className={`form-input ${xclass}`}
          id={ariaLabelledby}
          {...props}
        />
      </div>
    );

  }

  return (
    <div className={`${withGroup ? 'form-group' : ''}`}>
      {showLabel ? <label className="form-label" htmlFor={ariaLabelledby}>{label}</label> : null}
      <input
        className={`form-input ${xclass}`}
        type={iType}
        id={ariaLabelledby}
        {...props}
      />
    </div>
  );
}

/* -------------------- > SELECT */
export function AiSelect({ xclass = "", showLabel = true, withGroup = true, options = [], selectedValue, onChange = () => { }, ...props }) {
  let label = props.label || props.name;
  let ariaLabelledby = `select_id_${props.name}`;

  return (
    <div className={`${withGroup ? 'form-group' : ''}`}>
      {showLabel ? <label className="form-label" htmlFor={ariaLabelledby}>{label}</label> : null}
      <select
        className={`form-input ${xclass}`}
        id={ariaLabelledby}
        {...props}
        value={selectedValue}
        onChange={onChange}
      >
        {options.map((opt, i) => {
          return (
            <option key={`select_${props.name}_${i}_${opt.value}`} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

/* -------------------- > CHECKBOX */
export function AiCheckBox({ xclass = "", showLabel = true, withGroup = true, options = [], selectedValues = [], onChange = () => { }, ...props }) {
  let label = props.label || props.name;
  //let ariaLabelledby = `select_id_${props.name}`;

  return (
    <div className={`${withGroup ? 'form-group' : ''}`}>
      {showLabel ? <label className="form-label">{label}</label> : null}

      {options.map((opt, i) => {
        let ariaLabelledby = `checkbox_id_${props.name}_${i}_${opt.value}`;
        return (
          <Fragment key={ariaLabelledby}>
            <input
              value={opt.value}
              onChange={onChange}
              type="checkbox"
              checked={selectedValues.includes(String(opt.value))}
              className={`w3-check ${xclass}`}
              id={ariaLabelledby}
              {...props}
            />
            <label className="w3-check-label" htmlFor={ariaLabelledby}>{opt.label}</label>
          </Fragment>
        );
      })}
    </div>
  );
}

