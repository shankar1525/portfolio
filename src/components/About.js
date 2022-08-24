import React,{useState} from 'react';
import "../styles/About.css";
import user from '../images/profile_back.jpeg';

function About () {
    const staticContent = {
      Skills: [
        {
          name: "Web App Deveopment",
          desciption:
            "Deveolp web apps end to end using React Js,Node Js,Express Js,MongoDB,MySql",
        },
        {
          name: "Application Deployment",
          desciption: "Good experience in deploying application in AWS",
        },
        {
          name: "Mobile Apllication Development",
          desciption:
            "Development of both Android/IOS applications using React Native",
        },
      ],
      Experience: [
        {
          name: "Mobile Development",
          desciption: "2 year.",
        },
        {
          name: "Web App Development",
          desciption: "3.5+ years",
        },
        {
          name: "Backend/Database",
          desciption: "3.5+ years",
        },
      ],
      Education: [
        {
          name: "BTech",
          desciption: "Gitam university (2013-2017)",
        },
        {
          name: "Intermediate",
          desciption: "Narayana junior collage (2011-2013)",
        },
        {
          name: "SSC",
          desciption: "Sri Chaitanya Techno School (2011 passout)",
        },
      ],
    };
    const [activeTab,setActiveTab] = useState("Skills")
    return (
      <>
        <div id="about">
          <div className="container">
            <div className="row">
              <div className="about-col-1">
                <img src={user} />
              </div>
              <div className="about-col-2">
                <h1 className="sub-title">About Me</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='tab-titles'>
                    <p className = {`tab-links ${activeTab=='Skills'?'active-link':""}`} onClick={()=>setActiveTab("Skills")}>Skills</p>
                    <p className = {`tab-links ${activeTab=='Experience'?'active-link':""}`} onClick={()=>setActiveTab("Experience")}>Experience</p>
                    <p className = {`tab-links ${activeTab=='Education'?'active-link':""}`} onClick={()=>setActiveTab("Education")}>Education</p>
                </div>
                <div className='tab-contents'>
                    <ul>
                        {staticContent[activeTab].map((item,index)=>(
                            <li key={index}>
                            <span>{item.name}</span> <br /> {item.desciption}
                        </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About;