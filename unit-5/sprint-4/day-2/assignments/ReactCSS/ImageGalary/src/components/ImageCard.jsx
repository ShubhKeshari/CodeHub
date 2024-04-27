import React from "react";
import "../styles/ImageCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
const imagesLink = [
  "https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg",
  "https://img.freepik.com/premium-photo/cute-baby-panda-bear-with-big-eyes-3d-rendering-cartoon-illustration_691560-4917.jpg",
  "https://media.istockphoto.com/id/523761634/photo/cute-panda-bear-climbing-in-tree.jpg?s=612x612&w=0&k=20&c=TxsmORsbuY1LpxQsc6T8fpWJo7lBwncciYhroAr8rXI=",
  "https://www.shutterstock.com/image-photo/sleeping-giant-panda-baby-600nw-120544951.jpg",
  "https://t4.ftcdn.net/jpg/05/64/41/57/360_F_564415737_aiuBZ9KQmrzno7FB1gCgJOcZbA4sCHjC.jpg",
  "https://media.istockphoto.com/id/175009379/photo/giant-panda-bear-eating-bamboo.jpg?s=612x612&w=0&k=20&c=EYUlXKzjxe23OSXHO9jlugQhH_VWtF1-2NUaOSXsijA=",
  "https://t3.ftcdn.net/jpg/05/56/14/58/360_F_556145886_Tj5D7LLYUCsg5ep3PePd5m8R7eSZB7hy.jpg",
];
const ImageLink = () => {
  return imagesLink[Math.floor((Math.random() * 10) % imagesLink.length)];
};
const randomTitle = () => {
  let n = Math.abs(Math.ceil(Math.random() * 100 - Math.random() * 100));
  return `Random Title: ${n}`;
};
const randomPrice = () => {
  return (Math.random() * 200).toFixed(2);
};
function ImageCard() {
  return (
    <div className="card">
      <img src={ImageLink()} alt="PandaImage" />
      <h3>{randomTitle()}</h3>
      <p>
        <FontAwesomeIcon icon={faDollarSign} /> {randomPrice()}
      </p>
    </div>
  );
}

export default ImageCard;
