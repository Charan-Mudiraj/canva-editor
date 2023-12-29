import "./About.css";

function AboutContent() {
  const icons = [
    {
      imgPath: "twitter.png",
      link: "https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09",
    },
    {
      imgPath: "linkedin.png",
      link: "https://www.linkedin.com/in/charan-mudiraj-868086230",
    },
    {
      imgPath: "instagram.png",
      link: "https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
    },
    {
      imgPath: "whatsapp.png",
      link: "https://wa.me/qr/H67AUKBDVVBUO1",
    },
  ];
  function Icon(props) {
    return (
      <a id="social-icon" href={props.link}>
        <img src={props.imgPath} alt="" />
      </a>
    );
  }
  return (
    <div id="a-ac">
      <div id="ac-about-card">
        <p>Made By Charan</p>
        <hr />
        <div id="ac-icons-flex">{icons.map(Icon)}</div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div id="about">
      <AboutContent />
    </div>
  );
}

export default About;
