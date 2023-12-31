/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useHoverStore} from "../../utils/store";

function BlogPost({ title, excerpt, date, image, link }) {

  const {setHover} = useHoverStore();
  const handleMouseEnter = () => {
    setHover("medium");
  };
  const handleMouseLeave = () => {
    setHover("small");
  };
  return (
    <div className="blog__posts-single">
      <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link}>
        <img src={image} alt="tutorial" />
        <span className="small-font blog__date">{date}</span>
        <div className="blog__posts__text">
          <h2 className="bold">{title}</h2>

          <h3 className="small-font">{excerpt}</h3>

          <span className="blog__link bold">Read more</span>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost;
