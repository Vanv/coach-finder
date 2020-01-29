import React, {Component} from 'react';


const footerStyle = {
  backgroundColor: "#01233f",
  fontSize: "15px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  padding: "20px",

  left: "0",
  height: "60px",
  marginTop: "50px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footerdiv({ children }) {
  return (
    <div>

      <div style={footerStyle}>{children}</div>
    </div>
  );
}

class Footer extends Component {
  render(){
    return(

      <Footerdiv className="mt-5">
      <div className="container">
        <span className="text-white">
          Copyright Coach Finder 2020. All rights reserved.
        </span>
      </div>
    </Footerdiv>
    )
  }

}

export default Footer;
