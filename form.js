class HostelBookingForm extends React.Component {
    cunstructor(props) {
        super(props);
        this.state = {
            nameValue: ' ',
            emailValue: ' ',
            phoneValue: 0,
            nameOfHotelvalue: 'fantastic Hotels',

        };

    }
    hanldeInputChange = (event) => {
        const name = event.target.name;
        var value =event.target.value;
        
        if(name == 'nameValue') {
            value = value.toUpperCase();

        }
        this.setState({
            [name]: value
        });

    
}
handleSubmit = (event) => {
    alert("Are you sure you want to proceed with the booking?" +
    this.state.nameOfHotelvalue);

    console.log('Name submitted: '+this.state.nameValue);
    console.log('Email Id submitted: '+this.state.emailValue);
    console.log('Phone Number submitted: '+this.state.phoneValue);
    console.log('Name of Hotel submitted: '+this.state.nameOfHotelValue);
    this.setState({
        nameValue: ' ',
        emailValue: ' ',
        phoneValue: 0,
        nameOfHotelValue: 'Fantastic Hotel'

    });
    event.preventDefault();

}
render () {
    return (
        <form onSubmit={this.handleSubmit} className  = "contents">
    <TextInput label = {"name : " }
               name = "nameValue"
               value = {this.state.nameValue}
               handleInputChange = {this.hanldeInputChange} />
    <TextInput label = {"Email id : " }
               name = "emailValue"
               value = {this.state.emailValue}
               handleInputChange = {this.hanldeInputChange} />
               <NumberInput label = {"Phone Number : " }
               name = "phoneValue"
               value = {this.state.phoneValue}
               handleInputChange = {this.hanldeInputChange} />
               <SelectInput label = {"Nmae of Hotel : " }
               name = "nameOfHotelValue"
               value = {this.state.nameOfHotelValue}
               option = {this.props.hotelNamesOptions}
               handleInputChange = {this.hanldeInputChange} />
               <input className = " button" type = "submit" value = "Submit" />
               </form>


    );      
               
    }
}
HostelBookingForm.defaultProps = {
    hotelNameOptions: [ 'Fantastic Hotel', 'wonderfull Hotels', 'comfortable Hotels', 'Pretentious Hotels']

};
class TextInput extends React.component {

    handleInputChange = (event) => {
        this.props.handleInputChange(event);

    }
    render() {
        return(
            <div>
            <div classNmae = "label">
                {this.props.label}
                </div>
                <input classNmae = "input" type = "text" 
                name = {this.props.name}
                value = {this.props.value}
                onChange = {this.handleInputChange} />
                </div>

        };
    }
}
class NumberInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);

    }
    render () {
        return (
            <div>
            <div className = "lable">
            {this.props.lable}
            </div>
            <input className = "input" type = "text" 
            value = {this.props.name}
            name = {this.props.name}
            onChange = {this.handleInputChange} />
            
            </div>
        );
    }
}
class SelectInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);

    }
    render () {
        return (
            <div>
            <div className = "lable">
            {this.props.lable}
            </div>
            <select value = {this.props.value}
            name = {this.props.name}
            onChange = {this.handleInputChange} >
            {
                this.props.options.map(
                    (option) => <option key = {option}
                    value = {option}>
                        {option}
                    </option>
                )
            }
            </select>
            </div>
        );
    }
}


