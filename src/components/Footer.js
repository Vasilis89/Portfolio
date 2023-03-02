import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div>
          Contact
          <a href="mailto:vasilismyrianth@gmail.com">
            <br></br>Email
          </a>
          <a href="https://docs.google.com/document/d/1l4MYYC5w4eI3zuijtLKQ6yoVzcr42DkXLGtAa8xKtLc/edit">
            <br></br>Resume
          </a>
          <div className="col-md-12">
            <div className="social-links">{networks}</div>

            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Copyright &copy;{" "}
                  {this.props.sharedBasicInfo
                    ? this.props.sharedBasicInfo.name
                    : "???"}
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
