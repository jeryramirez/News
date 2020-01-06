import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Form extends Component {
    state = { 
        category: 'general'
    }

    handleCategory = e =>{
        /*this.setState({
            category: e.target.value

            //this is a callback
        }, () => {
            this.props.callNewsApi(this.state.category)
        });*/

        this.setState({
            category: e.target.value
            
            //this is a callback
        }, () => {
            this.props.callNewsApi(this.state.category)
        });
        
    }

    render() { 
        return ( 
            <div  className="col-xs-12 p-0">
                <h4 className="font-weight-bold">Search News by Category</h4>
                <form>
                <select className="form-control mb-3 "
                    onChange={this.handleCategory}
                >
                    <option value="general">General</option>
                    <option value="business">Business</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="science">Science</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                </select>
            </form>
            </div>
            
         );
    }
}
 
Form.propTypes = {
    callNewsApi: PropTypes.func.isRequired
}

export default Form;