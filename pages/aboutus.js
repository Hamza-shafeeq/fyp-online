import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Waseem",
      position: "Founder Hash Hives",
      images: images.founder1,
    },
    {
      name: "Hamza",
      position: "Co-founder",
      images: images.founder2,
    }
  ];

  const factsArray = [
    {
      title: "10+Projects",
      info: "Projects that are live for different enterprises",
    },
    {
      title: "1.6K+Members",
      info: "Registered Users with us",
    },
    {
      title: "30+Sessions",
      info: "Successfully organized GDSC and Hash Hives sessions (as of May,2023)",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re Muhammad Waseem and Hamza the creators, and every day we create
              distinctive, world-class solutions and content which inform,
              educate and entertain millions of people in the around the world.
              This is our Final Year Project for Khwaja Fareed University Rahimyarkhan.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founders</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content for our community.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re developers working on different projects,
            organize sessions and create content on Youtube.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Brand /> */}
    </div>
  );
};

export default aboutus;
