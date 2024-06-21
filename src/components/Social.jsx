import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import axios from "axios";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  social_link,
  logo_image,
}) => {
  const [instaPosts, setInstaPosts] = useState([]);

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=10&access_token=IGQWROSlQ2bzlUV0FpRXQtTkVYSVZARMGxhZAEF0Qk9ueXE5aUhpc0lmQWxJbGhQSnZADUUd3NDlfSU8ybkkwUllQT2VTUzlaS216VXB2TDNzV3duT2lhNXBMZAzlsLVIyYzFPQU1RRVp4b3ZAnZAwZDZD`
          )
          .then((resp) => {
            setInstaPosts(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [instaPosts]);

  const items = instaPosts.map((post) => (
    <div key={post.id}>
      <InstaPost {...post} />
    </div>
  ));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //set this back to instagram when its workign
  if (name === "TestInstagram") {
    return (
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="bg-tertiary pt-0 rounded-2xl sm:w-[360px] w-full sm:h-[600px] "
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div onClick={() => window.open(social_link, "_blank")}>
            {/* <img
              src={logo_image}
              alt="source code"
              className=" object-contain"
            /> */}
            <Slider {...settings}>{items}</Slider>

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
              <div className="grey-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src={logo_image}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          {/* <div className="mt-0">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div> */}
        </Tilt>
      </motion.div>
    );
  } else {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div
            className="w-full h-[230px]"
            onClick={() => window.open(social_link, "_blank")}
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(social_link, "_blank")}
                className="grey-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={logo_image}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  }
};

const InstaPost = (props) => {
  const { id, media_type, media_url, caption } = props;

  let post;

  switch (media_type) {
    case "VIDEO":
      post = (
        <div className="item">
          <video
            width="auto"
            height="auto"
            src={media_url}
            type="video/mp4"
            controls
            className="object-contain w-full h-[480px]"
          ></video>
        </div>
      );
      break;
    case "CAROUSEL_ALBUM":
      post = (
        <div className="item">
          <img
            width="auto"
            height="auto"
            id={id}
            src={media_url}
            alt={caption}
            className="object-contain w-full h-[480px]"
          />
        </div>
      );
      break;
    default:
      post = (
        <div className="item">
          <img
            width="auto"
            height="auto"
            id={id}
            src={media_url}
            alt={caption}
            className="object-contain w-full h-[480px]"
          />
        </div>
      );
  }

  return <React.Fragment>{post}</React.Fragment>;
};

const Social = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Give me a follow</p>
        <h2 className={`${styles.sectionHeadText}`}>Socials</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I don't post very regularly but if you don't want to miss out when I
          do follow me on Instagram, TikTok or Twitter (aka X)
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Social, "");
