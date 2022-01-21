import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">         

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                  <blockquote class="twitter-tweet" data-theme="dark">
                    <p lang="und" dir="ltr">
                      <a href="https://twitter.com/hashtag/MSAL?src=hash&amp;ref_src=twsrc%5Etfw">#MSAL</a> 
                      <a href="https://twitter.com/hashtag/Azure?src=hash&amp;ref_src=twsrc%5Etfw">#Azure</a>
                       <a href="https://t.co/u1Dt5pkkzu">https://t.co/u1Dt5pkkzu</a></p>
                       &mdash; Jayraj Nimbalkar (@NimbalkarJayraj) <a href="https://twitter.com/NimbalkarJayraj/status/1409174316038696963?ref_src=twsrc%5Etfw">June 27, 2021</a></blockquote>                       
                  </li>                 
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
