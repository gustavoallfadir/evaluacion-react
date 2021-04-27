import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  
  render() {     
    return(
        <div className="footer">
            <hr/>
            
            <div className="container">
            <p className="foot-txt">
              Gustavo Allfadir, 2021.<br/>Tata Consultancy Services
            </p>
                <img id="tcs" src="tata.png" alt="TCS"/>
            </div>
            <br/>
        </div>
    );
  }
}

export default Footer;