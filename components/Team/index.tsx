"use client";

import React from 'react';
import Image from "next/image";

const Team = () => {
    const teamMembers = [
        {
          name: "Austin Hunter",
          role: "LEAD DEVELOPER / CO-FOUNDER",
          bio: "Austin started developing in 2014 and immediately took to the creative process of software development. In his free time, you’ll most likely find him spending time with family or trying out the newest board game to hit his shelf.",
          linkedIn: "https://www.linkedin.com/in/austin-hunter", // Update with actual URL
          github: "https://github.com/austin-hunter", // Update with actual URL
          image: "/images/team/austin.webp"
        },
        {
          name: "Ashley Hunter",
          role: "BUSINESS ADMIN / CO-FOUNDER",
          bio: "Ashley has a background in journalism, but has been living her dream raising her two children at home since 2019. She has a love for writing, coffee, and the outdoors.",
          // No social links provided
          image: "/images/team/ashley.png"
        },
        {
          name: "Carter Williams",
          role: "JUNIOR DEVELOPER",
          bio: "Carter is currently a junior in college working toward a degree in Software. Although young, his work ethic places him highly esteemed in the development world.",
          linkedIn: "https://www.linkedin.com/in/carter-williams", // Update with actual URL
          github: "https://github.com/carter-williams", // Update with actual URL
          image: "/images/team/carter.webp"
        },
        {
          name: "Olof Holmstrom",
          role: "JUNIOR DEVELOPER",
          bio: "Olof is passionate about software development with a keen interest in open-source projects. He is always eager to learn new technologies and contribute to team success.",
          // No social links provided
          image: "/images/team/olof.webp"

        },
        {
          name: "David Qiu",
          role: "JUNIOR DEVELOPER",
          bio: "David is dedicated to learning and growing as a developer. With a strong foundation in web development, he's excited to tackle challenging projects and collaborate with his teammates.",
          // No social links provided
          image: "/images/team/david.webp"

        },
        {
            name: "Arron  Taylor",
            role: "JUNIOR DEVELOPER",
            bio: "",
            // No social links provided
            image: "/images/team/arron.jpeg"
          },
          {
            name: "Zach  Taylor",
            role: "MID-LEVEL DEVELOPER",
            bio: "",
            // No social links provided
            image: "/images/team/zach.jpeg"
          }
      ];
      

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
         <Image
                  src={member.image}
                  alt="team-image"
                style={{textAlign: 'center'}}
                   width={250}
                   height={250}  
                />
          <h2>{member.name}</h2>
          <h4>{member.role}</h4>
          <p>{member.bio}</p>
          {member.linkedIn && (
            <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </div>
      ))}
      <style jsx>{`
                .team-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    gap: 20px;
                    text-align: center;
                    margin: 50px;
                }
                .team-member {
                    width: calc(33.333% - 60px); /* Adjusted width for desktop */
                    margin: 10px;
                    padding: 20px;
                    border: 1px solid rgba(254, 254, 254, 0.32);
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .team-member h2, .team-member h4, .team-member p {
                    margin: 0 0 10px 0;
                }
                h2 {
                    color: #ccc;
                    font-size: 22px;
                }
                h4, .team-member p {
                    color: #6d7787;
                    font-size: 15px;
                }
                .team-member a {
                    display: inline-block;
                    margin-right: 10px;
                    text-decoration: none;
                    color: #0070f3;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .team-member {
                        width: calc(50% - 40px); /* 2 items per row on tablets and below */
                    }
                }

                @media (max-width: 480px) {
                    .team-member {
                        width: calc(100% - 20px); /* 1 item per row on small devices */
                    }
                }
            `}</style>
    </div>
  );
};

export default Team;