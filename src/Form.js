import React, {Component} from 'react'
class Form extends Component
{
    constructor(props) 
    {
        super(props);
    this.initialState={
        Name:'',
        No_of_PlacedCompanies:'',
        CompanyType:'',
        Salary_per_month:'',
    }

    this.state=this.initialState
    }
    handleChange=(event)=>{
        const {name,value}=event.target

        this.setState(
            {
                [name]:value,
            }
        )
    }
    
    submitForm=()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render()
    {
        const {Name,No_of_PlacedCompanies,CompanyType,Salary_per_month}=this.state

        return(
            <form onSubmit={this.submitForm}>
            <center>
             <label for="Name">Name</label>
             <br></br>
             <br></br>
             <input type="text" name="Name" id="Name" value={Name} onChange={this.handleChange}/>
             <br></br>
             <br></br>
             <label for="No_of_PlacedCompanies">No_of_PlacedCompanies</label>
             <br></br>
             <br></br>
             <input type="number" name="No_of_PlacedCompanies" id="No_of_PlacedCompanies" value={No_of_PlacedCompanies} onChange={this.handleChange}/>
             <br></br>
             <br></br>
             <label for="CompanyType">CompanyType</label>
             <br></br>
             <br></br>
             <input type="text" name="CompanyType" id="CompanyType" value={CompanyType} onChange={this.handleChange}/>
             <br></br>
             <br></br>
             <label for="Salary_per_month">Salary</label>
             <br></br>
             <br></br>
             <input type="number" name="Salary_per_month" id="Salary_per_month" value={Salary_per_month} onChange={this.handleChange}/>
             <br></br>
             <br></br>
             <input type="button" value="Submit" onClick={this.submitForm}/>
             </center>
            </form>
        )
    }
}

export default Form;