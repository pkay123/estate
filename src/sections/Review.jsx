import "../styles/sections/Review.css";
import ReviewItem from "../components/ReviewItem";
import { BsArrowRightShort } from "react-icons/bs";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import {
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

function Review() {
  return (
    <div className="app__review">
      <div className="app__container">
        <div className="app__review-header">
          <h2 className="title">Clients Review</h2>

          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            necessitatibus aspernatur, numquam, non sit adipisci cupiditate
            repellendus nisi perspiciatis earum.
          </p>
        </div>

        <div className="app__review-grid">
          <ReviewItem
            img={user1}
            name="Richard Gyan"
            title="RG Technology, CEO"
            icon={<AiOutlineStar />}
            rate="4 / 5"
            content="It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged."
            read="Read More..."
            more="Read More"
            icon2={<BsArrowRightShort />}
            icon3={<AiOutlineHeart />}
            numb1="35"
            icon4={<AiOutlineComment />}
            numb2="25"
          />
          <ReviewItem
            img={user2}
            name="Freda Gyan"
            title="RG Technology, CEO"
            icon={<AiOutlineStar />}
            rate="4 / 5"
            content="It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged."
            read="Read More..."
            more="Read More"
            icon2={<BsArrowRightShort />}
            icon3={<AiOutlineHeart />}
            numb1="35"
            icon4={<AiOutlineComment />}
            numb2="25"
          />
          <ReviewItem
            img={user1}
            name="Richard Gyan"
            title="RG Technology, CEO"
            icon={<AiOutlineStar />}
            rate="4 / 5"
            content="It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged."
            read="Read More..."
            more="Read More"
            icon2={<BsArrowRightShort />}
            icon3={<AiOutlineHeart />}
            numb1="35"
            icon4={<AiOutlineComment />}
            numb2="25"
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
