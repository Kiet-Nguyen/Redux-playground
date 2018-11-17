import React, { Component } from 'react';

import classes from './Inputs.module.css';
import Input from '../../components/UI/Input/Input';

class Inputs extends Component {
  state = {
    contactForm: {
      firstName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First name',
        },
        value: '',
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
      lastName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Last name',
        },
        value: '',
        validation: {
          require: true,
        },
        valid: false,
        touched: false,
      },
    }
  }

  render() {
    const {
      contactForm,
    } = this.state;

    // Array of contactForm keys
    let formElements = [];
    for (let key in contactForm) {
      formElements.push({
        id: key,
        config: contactForm[key],
      });
    }

    // Contact form
    const form = (
      <form>
        {
          formElements.map(formElement => {
            return (
              <Input
                key={formElement.id}
                inputType={formElement.config.elementType}
                placeholder={formElement.config.placeholder}
              />
            );
          })
        }
      </form>
    );

    return (
      <div className={classes.ContactForm}>
        {form}
      </div>
    );
  }
}

export default Inputs;
