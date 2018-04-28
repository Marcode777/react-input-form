// setting the state back to empty again will allow the form to clear after submitting. As in:

// onSubmit = (e) => {
//     e.preventDefault();
//     console.log('onSubmit has been triggered, the new state is:', this.state);
//     this.props.onSubmit(this.state);
//     this.setState({
//       email: '', 
//       emailConfirmation: '',
//       password: '',
//     })
//   }





// so at first, we have the state as an empty object, then it gets populated onSubmit.

// now we can even take this to the next level and do this real-time by changing the onSubmit to an onChange

// as in <InputComponent onSubmit={fields => this.onSubmit(fields)}/>  becomes    <InputComponent onChange={fields => this.onChange(fields)}/>
// and also 
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('onSubmit has been triggered, the new state is:', this.state);
    //     this.props.onSubmit(this.state);
    //     this.setState({
    //       email: '', 
    //       emailConfirmation: '',
    //       password: '',
    //     })
    //   }
// becomes 
  // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('onSubmit has been triggered, the new state is:', this.state);
    //     this.props.onSubmit(this.state);
    //     this.setState({
    //       email: '', 
    //       emailConfirmation: '',
    //       password: '',
    //     })
    //   }
    //
  // and 
    // change = e => {
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //   });
    // }
  // becomes
    // change = e => {
    //   this.props.onChange({ [e.target.name]: e.target.value })
    //   this.setState({
    //     [e.target.name]: e.target.value,
    //   });
    // }
//  and also in App.js
    // state = {
    //     fields: {},
    //   }
    //   onSubmit = fields => {
    //     console.log('main root App component got:', fields);
    //     this.setState({
    //       fields: fields
    //     })
// becomes
    // onChange = updatedValue => {
    //     this.setState({
    //       fields: {
    //         ...this.state.fields,
    //         ...updatedValue,
    //       }
    //     });
    // };
// and again in input_component.js 
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('onSubmit has been triggered, the new state is:', this.state);
    //     this.setState({
    //       email: '', 
    //       emailConfirmation: '',
    //       password: '',
    //     })
    //   }
// becomes
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('onSubmit has been triggered, the new state is:', this.state);
    //     this.setState({
    //       email: '', 
    //       emailConfirmation: '',
    //       password: '',
    //     })
    //     this.props.onChange({
    //       email: '', 
    //       emailConfirmation: '',
    //       password: '',
    //     })
    //   }

