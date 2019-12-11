import React, { Component } from 'react'

const Form = (Cmp, initialState, shema) => {
    return class extends Component {
        state = {
            form: initialState,
            errors: null
        };

        changeHandlerFactory = path => e => {
            const newValue = e.target.value;
            this.setState(({ form }) => {
                return { form: {...form, [path]: newValue }}
            })
        }

        getFormState = () => {
            return this.state.form;
        }

        render() {
            return <Cmp {...this.props} changeHandlerFactory={this.changeHandlerFactory} getFormState={this.getFormState}></Cmp>
        }
    }
}

export default Form;