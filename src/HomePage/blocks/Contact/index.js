import React from 'react';
import fb from './images/FB_icon@2x.png';
import wechat from './images/Wechat_icon@2x.png';

class Contact extends React.PureComponent {

  sendEmail = (e) => {
    e.preventDefault();

    if(!this.name.value.trim()) { alert('name required!'); return; }
    if(!this.email.value.trim()) { alert('email required!'); return; }
    if(!this.subject.value.trim()) { alert('subject required!'); return; }
    if(!this.message.value.trim()) { alert('message required!'); return; }

    const data = new URLSearchParams();
    for (const pair of new FormData(this.form)) {
      console.warn(pair);
      data.append(pair[0], pair[1]);
    }

    data.append("to", "katiechoustudio@gmail.com");
    data.append("toName", "papa");

    fetch("https://sexyoung-test.000webhostapp.com/",
      {
        method: "POST",
        body: data
      })
      .then(res => res)
      .then(data => {
        alert("Email send!");
        this.name.value = "";
        this.email.value = "";
        this.subject.value = "";
        this.message.value = "";
      });
  };

  render () {
    return (
      <div id="contact" className="block contact-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title">
              Contact us
            </div>
            <div className="col-md-6 right">
              <a rel="noopener noreferrer" href="https://fb.com" target="_blank"><img src={fb} alt="fb" /></a>
              <a rel="noopener noreferrer" href="https://www.wechat.com/" target="_blank"><img src={wechat} alt="wechat" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <header>We are accepting new projects</header>
              <section>Property developers, Local and international. Scheracon connects profitable investors to award winning and property developments in Australia.</section>
              <ul>
                <li>Eddy Scheruga</li>
                <li>+61 450 542 834</li>
                <li>eddyscheruga@scheracon.com</li>
              </ul>
              <ul>
                <li>蔡宜軒</li>
                <li>+61 406 711 777</li>
                <li>eddytsai@scheracon.com</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form onSubmit={this.sendEmail} ref={elem => this.form = elem}>
                <div className="field">Name (required)</div>
                <input required type="text" ref={elem => this.name = elem} name="name"/>
                <div className="field">Email (required)</div>
                <input required type="email" ref={elem => this.email = elem} name="email"/>
                <div className="field">Subject (required)</div>
                <input required type="text" ref={elem => this.subject = elem} name="subject"/>
                <div className="field">Message (required)</div>
                <textarea required name="message" ref={elem => this.message = elem}></textarea>
                <button className="field">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
