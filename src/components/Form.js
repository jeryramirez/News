import React, {Component} from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form name="categories">
                <select className="form-control mb-3">
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="general">General</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deportes</option>
                    <option value="technology">Tecnologia</option>
                </select>
            </form>
         );
    }
}
 
export default Form;