import React, { useState } from "react";
import "./styles.css";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider, { Settings } from "react-slick";
import { InfiniteMovingCards } from "./InfinityScrll";
import Footer from "./Footer";
import { Link } from "react-router-dom";

interface Card {
  title: string;
  text: string;
  image: string;
}

const settings1: Settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings2: Settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settings3: Settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home: React.FC = () => {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
  const [slider3, setSlider3] = useState<Slider | null>(null);
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  interface ImageStyle {
    borderRadius: number;
    width: string;
    height: string;
    objectFit: "fill" | "contain" | "cover" | "none" | "scale-down";
    transition: string;
  }
  const imageStyle: ImageStyle = {
    borderRadius: 20,
    width: "100%",
    height: "auto",
    objectFit: "cover",
    transition: "all 0.3s ease",
  };
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);

  const image1Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3670-06-3214.jpg?v=1711781527&width=1080";
  const image2Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3670-06-3216.jpg?v=1711781565&width=1080";
  const image3Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3654-04-3042.jpg?v=1710398515&width=900";
  const image4Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3654-04-3028.jpg?v=1710398515&width=900";
  const image5Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3583-02-325412.jpg?v=1701070757&width=900";
  const image6Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3583-02-325403.jpg?v=1701070757&width=900";
  const image7Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3653-01-3229.jpg?v=1709548178&width=900";
  const image8Src =
    "https://www.snitch.co.in/cdn/shop/files/4MSD3653-01-3232.jpg?v=1709548178&width=900";

  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  const [hovered7, setHovered7] = useState(false);
  const [hovered8, setHovered8] = useState(false);

  const image1 =
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2364-03-M39.jpg?v=1696337867&width=400";
  const image2 =
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2364-03-M42.jpg?v=1696337867&width=400";
  const image3 =
    "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2367-05-M30.jpg?v=1696337956&width=800";
  const image4 =
    "https://www.snitch.co.in/cdn/shop/files/4MSS2367-05-M23.jpg?v=1696337956&width=900";
  const image5 =
    "https://www.snitch.co.in/cdn/shop/files/4MSS2513-04-M38.jpg?v=1711023832&width=900";
  const image6 =
    "https://www.snitch.co.in/cdn/shop/files/4MSS2513-04-M36.jpg?v=1711023832&width=900";
  const image7 =
    "https://www.snitch.co.in/cdn/shop/files/4MSS2540-06-M31.jpg?v=1711347728&width=900";
  const image8 =
    "https://www.snitch.co.in/cdn/shop/files/4MSS2540-06-M50.jpg?v=1711347728&width=900";

  const [hoveredA, setHoveredA] = useState(false);
  const [hoveredB, setHoveredB] = useState(false);
  const [hoveredC, setHoveredC] = useState(false);
  const [hoveredD, setHoveredD] = useState(false);

  const imageWomen1 =
    "https://assets.ajio.com/medias/sys_master/root/20240215/9jYK/65cdf8a605ac7d77bb5b4baa/gap-pink-crew-women-brand-print-slim-fit-round-neck-t-shirt.jpg";
  const imageWomen2 =
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg";
  const imageWomen3 =
    "https://assets.ajio.com/medias/sys_master/root/20240304/MAHB/65e5e45505ac7d77bb95311e/gap-black-crew-brand-print-crew-neck-t-shirt.jpg";
  const imageWomen4 =
    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg";
  const imageWomen5 =
    "https://assets.ajio.com/medias/sys_master/root/20231024/zGdw/6537efd0afa4cf41f55b3571/deckedup-black-shrugs-women-printed-relaxed-fit-front-open-shrug.jpg";
  const imageWomen6 =
    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg";
  const imageWomen7 =
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg";
  const imageWomen8 =
    "https://assets.ajio.com/medias/sys_master/root/20230523/ELS7/646cc27f42f9e729d7a5a158/-473Wx593H-466181218-black-MODEL5.jpg";

  const [hoveredW, setHoveredw] = useState(false);
  const [hoveredX, setHoveredX] = useState(false);
  const [hoveredY, setHoveredY] = useState(false);
  const [hoveredZ, setHoveredZ] = useState(false);

  const imageKid1 =
    "https://www.onefridayworld.com/cdn/shop/files/4Z8A4404_720x.jpg?v=1711967015";
  const imageKid2 =
    "https://www.onefridayworld.com/cdn/shop/files/4Z8A4377_576x.jpg?v=1711967016";
  const imageKid3 =
    "https://www.onefridayworld.com/cdn/shop/files/2R9A7616_1100x.jpg?v=1711966981";
  const imageKid4 =
    "https://www.onefridayworld.com/cdn/shop/files/2R9A7610_1100x.jpg?v=1711966981";
  const imageKid5 =
    "https://www.onefridayworld.com/cdn/shop/files/IMG_9115_576x.jpg?v=1710842041";
  const imageKid6 =
    "https://www.onefridayworld.com/cdn/shop/files/IMG_9120_1100x.jpg?v=1710842041";
  const imageKid7 =
    "https://www.onefridayworld.com/cdn/shop/files/4Z8A4950_1100x.jpg?v=1708523712";
  const imageKid8 =
    "https://www.onefridayworld.com/cdn/shop/files/4Z8A4957_1100x.jpg?v=1708523712";

  const imageUrls = [
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20231016/kq7q/652d4ea8afa4cf41f548938a/-473Wx593H-442307005-pink-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231225/odFT/6589a721afa4cf41f5e877dd/-473Wx593H-442307004-black-MODEL4.jpg",

    "https://assets.ajio.com/medias/sys_master/root/20231024/4IOv/6537efd0afa4cf41f55b3510/-473Wx593H-466741457-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230523/8ZAp/646cc27f42f9e729d7a5a1d6/-473Wx593H-466181218-black-MODEL.jpg",
  ];

  const imageUrls2 = [
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Small-Tile-Girls-dresses.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-t-shirts.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/5_m2RBCsP.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-OFST.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/8_wPT1ARz.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Kids-Small-Tile-boys-joggers.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/3_7Tmo8Fc.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/2_dMs9qPe.jpg?format=webp&w=376&dpr=1.3",
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/1_JQtfOA6.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/7_e1YnnyD.jpg?format=webp&w=376&dpr=1.3",

    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/COLLECTION_TILES_.new.jpg?format=webp&w=376&dpr=1.3",
  ];

  const cards: Card[] = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/358-in/20/original-Celio_Pay-Day-Digital-Adapts_1920x700-103720.jpg",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Plaid-Shirts-Offer-Campaign_HomePage-Banner_1.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/358-in/36/original-Celio_Performance-Adapts-Polo-Tshirt_Website-Desktop_1920X700-103036.jpg",
    },
    // {
    //   title: "Design Projects 4",
    //   text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //   image:
    //     "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-320240203112716.jpg?format=webp&w=1500&dpr=1.3",
    // },
    {
      title: "Design Projects 4",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/358-in/55/original-Untitled_design_%286%29-122655.png",
    },
    {
      title: "Design Projects 4",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://static.thcdn.com/images/xlarge/webp/widgets/358-in/06/original-Celio_TMNT_Website_banner_1920_x_600-115406.jpg",
    },
  ];
  const cards2: Card[] = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Web-banner_25.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage-banner_16.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/7917920240202122828.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_15_7Ioswgq.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_Banner_copy_1.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/category/catban-020240326141135.jpg?format=webp&w=1500&dpr=1.3",
    },
  ];

  const cards3: Card[] = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://www.onefridayworld.com/cdn/shop/files/1_2bd480b3-56f2-46b8-8bdd-5718829b9231.jpg?v=1708092220&width=1600",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://www.onefridayworld.com/cdn/shop/files/3_ffa9c37a-f8fc-4dab-910f-1fbe44e19c05.jpg?v=1708092389&width=1600",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://www.onefridayworld.com/cdn/shop/files/6_769e5d9e-0a47-4558-b942-5ba499a4d265.jpg?v=1708092517&width=1600",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Kids_Bottoms_Homepage_Banner_New.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner_nwuMPZV.jpg?format=webp&w=1500&dpr=1.3",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-Banner_VcjaBdv.jpg?format=webp&w=1500&dpr=1.3",
    },
  ];

  return (
    <Stack spacing={20}>
      {/* <Heading textAlign={"center"}>Men</Heading> */}
      <Box
        position={"relative"}
        width={"full"}
        zIndex={0}
        height={{ base: "300px", md: "600px" }}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider1?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider1?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings1} ref={(slider) => setSlider1(slider)}>
          {cards.map((card, index) => (
            <Box
              key={index}
              height={"100%"}
              width={"100%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain" // Change this to "contain"
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size="container.lg"
                height={{ base: "300px", md: "600px" }}
                position="relative"
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                  ></Heading>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color="GrayText"
                  ></Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <Heading textAlign={"center"}>TOP SELLING 👖</Heading>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="10"
          className="flex-wrap"
        >
          {" "}
          <Link to="/men">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                New Drop
              </span>
            </button>
          </Link>
          <Link to="/men">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                Most Trending
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Box paddingX={16}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={20}
        >
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
          >
            <img
              src={hovered1 ? image2Src : image1Src}
              alt="Image 1"
              className="image-container"
            />
            <h3>City Slicker Ink Blue Boot Cut Jeans</h3>
            <p>Rs: 5050</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered2(true)}
            onMouseLeave={() => setHovered2(false)}
          >
            <img
              src={hovered2 ? image4Src : image3Src}
              alt="Image 2"
              className="image-container grid-item-image"
            />
            <h3>City Slicker Midnight Blue Boot Cut Jeans</h3>
            <p>Rs: 3000</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered3(true)}
            onMouseLeave={() => setHovered3(false)}
          >
            <img
              src={hovered3 ? image6Src : image5Src}
              alt="Image 3"
              className="image-container grid-item-image"
            />
            <h3>City Slicker Azure Blue Boot Cut Jeans</h3>
            <p>Rs: 2019</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
          >
            <img
              src={hovered4 ? image8Src : image7Src}
              alt="Image 4"
              className="image-container grid-item-image"
            />
            <h3>City Slicker Denim Blue Boot Cut Jeans</h3>
            <p>Rs: 4050</p>
            <p>Size: M</p>
          </GridItem>
        </Grid>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex minWidth="max-content" alignItems="center" gap="10">
          <Link to="/men">
            <button className="relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                view All
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Heading textAlign={"center"}>SEASONAL FAV`S🌤️</Heading>
      <Box paddingX={16}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={20}
        >
          <GridItem w="100%">
            <img
              src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_june22_0739.jpg?v=1657532764&width=600"
              alt="Image 1"
              className="image-item"
            />
          </GridItem>
          <GridItem w="100%">
            <img
              src="https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_june22_0663.jpg?v=1657527618&width=600"
              alt="Image 2"
              className="image-item"
            />
          </GridItem>
          <GridItem w="100%">
            <img
              src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2235-01-M23.jpg?v=1704366399&width=600"
              alt="Image 3"
              className="image-item"
            />
          </GridItem>
          <GridItem w="100%">
            <img
              src="https://www.snitch.co.in/cdn/shop/files/4MST2227-01-M24.jpg?v=1707395286&width=1800"
              alt="Image 4"
              className="image-item"
            />
          </GridItem>
        </Grid>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex justifyContent="center">
          {" "}
          {/* Centering the container horizontally */}
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="10"
            className="flex-wrap"
          >
            <Link to="/men">
              <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  SHIRTS
                </span>
              </button>
            </Link>
            <Link to="/men">
              <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  T_SHIRTS
                </span>
              </button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Box paddingX={16}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={20}
        >
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered5(true)}
            onMouseLeave={() => setHovered5(false)}
            className="image-item"
          >
            <img
              src={hovered5 ? image2 : image1}
              alt="Image 1"
              className="image-style"
            />
            <h3>City Slicker Ink Blue Boot Cut Jeans</h3>
            <p>Rs: 5050</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered6(true)}
            onMouseLeave={() => setHovered6(false)}
            className="image-item"
          >
            <img
              src={hovered6 ? image4 : image3}
              alt="Image 2"
              className="image-style"
            />
            <h3>City Slicker Midnight Blue Boot Cut Jeans</h3>
            <p>Rs: 3000</p>
            <p>Size: M</p>
          </GridItem>

          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered7(true)}
            onMouseLeave={() => setHovered7(false)}
            className="image-item"
          >
            <img
              src={hovered7 ? image6 : image5}
              alt="Image 3"
              className="image-style"
            />
            <h3>City Slicker Azure Blue Boot Cut Jeans</h3>
            <p>Rs: 2019</p>
            <p>Size: M</p>
          </GridItem>

          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHovered8(true)}
            onMouseLeave={() => setHovered8(false)}
            className="image-item"
          >
            <img
              src={hovered8 ? image8 : image7}
              alt="Image 4"
              className="image-style"
            />
            <h3>City Slicker Denim Blue Boot Cut Jeans</h3>
            <p>Rs: 4050</p>
            <p>Size: M</p>
          </GridItem>
        </Grid>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex minWidth="max-content" alignItems="center" gap="10">
          <Link to="/men">
            {" "}
            <button className="relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                view All
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Heading textAlign={"center"}>Girl/Women 👚</Heading>
      <Box
        position={"relative"}
        width={"full"}
        zIndex={0}
        height={{ base: "300px", md: "600px" }}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider2?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider2?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings2} ref={(slider) => setSlider2(slider)}>
          {cards2.map((card, index) => (
            <Box
              key={index}
              height={"100%"}
              width={"100%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain" // Change this to "contain"
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size="container.lg"
                height={{ base: "300px", md: "600px" }}
                position="relative"
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                  ></Heading>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color="GrayText"
                  ></Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex justifyContent="center">
          {" "}
          {/* Centering the container horizontally */}
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="10"
            className="flex-wrap"
          >
            <Link to="/women">
              <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  TREND
                </span>
              </button>
            </Link>
            <Link to="/women">
              <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                  NEW STUFF
                </span>
              </button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Heading textAlign={"center"}>Recently Added 💫</Heading>
      <Box paddingX={16}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={20}
        >
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredA(true)}
            onMouseLeave={() => setHoveredA(false)}
          >
            <img
              src={hoveredA ? imageWomen2 : imageWomen1}
              alt="Image 1"
              style={{ ...imageStyle, borderRadius: 20 }}
            />{" "}
            <h3>City Slicker Ink Blue Boot Cut Jeans</h3>
            <p>Rs: 5050</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredB(true)}
            onMouseLeave={() => setHoveredB(false)}
          >
            <img
              src={hoveredB ? imageWomen4 : imageWomen3}
              alt="Image 2"
              style={{ ...imageStyle, borderRadius: 20 }}
            />{" "}
            <h3>City Slicker Midnight Blue Boot Cut Jeans</h3>
            <p>Rs: 3000</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredC(true)}
            onMouseLeave={() => setHoveredC(false)}
          >
            <img
              src={hoveredC ? imageWomen6 : imageWomen5}
              alt="Image 3"
              style={{ ...imageStyle, borderRadius: 20 }}
            />{" "}
            <h3>City Slicker Azure Blue Boot Cut Jeans</h3>
            <p>Rs: 2019</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredD(true)}
            onMouseLeave={() => setHoveredD(false)}
          >
            <img
              src={hoveredD ? imageWomen8 : imageWomen7}
              alt="Image 4"
              style={{ ...imageStyle, borderRadius: 20 }}
            />{" "}
            <h3>City Slicker Denim Blue Boot Cut Jeans</h3>
            <p>Rs: 4050</p>
            <p>Size: M</p>
          </GridItem>
        </Grid>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="10"
          className="flex-wrap"
        >
          <Link to="/women">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                KURTIS
              </span>
            </button>
          </Link>
          <Link to="/women">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                TOPS
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={20}
      >
        <GridItem w="100%">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20231124/jIIv/655fb4e3ddf779151997f7a1/-473Wx593H-466822195-blue-MODEL.jpg"
            alt="Image 1"
            className="image-style1"
          />
        </GridItem>
        <GridItem w="100%">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20240308/kCg0/65eb149b05ac7d77bba1fbf9/-473Wx593H-467148885-coffee-MODEL.jpg"
            alt="Image 2"
            className="image-style1"
          />
        </GridItem>
        <GridItem w="100%">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20231020/sivQ/65329abfddf77915194e9091/-473Wx593H-443021424-black-MODEL.jpg"
            alt="Image 3"
            className="image-style1"
          />
        </GridItem>
        <GridItem w="100%">
          <img
            src="https://assets.ajio.com/medias/sys_master/root/20230912/4ZCu/64ff9760ddf7791519ce52e5/-473Wx593H-466558776-wine-MODEL.jpg"
            alt="Image 4"
            className="image-style1"
          />
        </GridItem>
      </Grid>
      ;
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex minWidth="max-content" alignItems="center" gap="10">
          <Link to="/women">
            <button className="relative inline-flex h-12 w-56 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                view All
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Heading textAlign={"center"}>NEW ARRIVALS 👗 </Heading>
      <InfiniteMovingCards images={imageUrls} />
      <Heading textAlign={"center"}> Kids 👶</Heading>
      <Box
        position={"relative"}
        width={"full"}
        zIndex={0}
        height={{ base: "300px", md: "600px" }}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider3?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={{ base: "40%", md: "50%" }}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider3?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        <Slider {...settings3} ref={(slider) => setSlider3(slider)}>
          {cards3.map((card, index) => (
            <Box
              key={index}
              height={"100%"}
              width={"100%"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain" // Change this to "contain"
              backgroundImage={`url(${card.image})`}
            >
              <Container
                size="container.lg"
                height={{ base: "300px", md: "600px" }}
                position="relative"
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"lg"}
                  position="absolute"
                  top="50%"
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}
                  ></Heading>
                  <Text
                    fontSize={{ base: "sm", lg: "lg" }}
                    color="GrayText"
                  ></Text>
                </Stack>
              </Container>
            </Box>
          ))}
        </Slider>
      </Box>
      <Flex justifyContent="center">
        {" "}
        {/* Centering the container horizontally */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="10"
          className="flex-wrap"
        >
          {" "}
          <Link to="/kidS">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                view All
              </span>
            </button>
          </Link>
          <Link to="/kidS">
            <button className="relative inline-flex h-12  w-full sm:w-36 md:w-full lg:w-48 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
                Most Trending
              </span>
            </button>
          </Link>
        </Flex>
      </Flex>
      <Heading textAlign={"center"}>TOP SELLING ✨</Heading>
      <Box paddingX={16}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4,1fr)",
          }}
          gap={20}
        >
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredw(true)}
            onMouseLeave={() => setHoveredw(false)}
            className="image-item"
          >
            <img
              src={hoveredW ? imageKid2 : imageKid1}
              alt="Image 1"
              className="image-style"
            />
            <h3>City Slicker Ink Blue Boot Cut Jeans</h3>
            <p>Rs: 5050</p>
            <p>Size: M</p>
          </GridItem>
          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredX(true)}
            onMouseLeave={() => setHoveredX(false)}
            className="image-item"
          >
            <img
              src={hoveredX ? imageKid4 : imageKid3}
              alt="Image 2"
              className="image-style"
            />
            <h3>City Slicker Midnight Blue Boot Cut Jeans</h3>
            <p>Rs: 3000</p>
            <p>Size: M</p>
          </GridItem>

          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredY(true)}
            onMouseLeave={() => setHoveredY(false)}
            className="image-item"
          >
            <img
              src={hoveredY ? imageKid6 : imageKid5}
              alt="Image 3"
              className="image-style"
            />
            <h3>City Slicker Azure Blue Boot Cut Jeans</h3>
            <p>Rs: 2019</p>
            <p>Size: M</p>
          </GridItem>

          <GridItem
            w="100%"
            borderRadius={10}
            position="relative"
            onMouseEnter={() => setHoveredZ(true)}
            onMouseLeave={() => setHoveredZ(false)}
            className="image-item"
          >
            <img
              src={hoveredZ ? imageKid8 : imageKid7}
              alt="Image 4"
              className="image-style"
            />
            <h3>City Slicker Denim Blue Boot Cut Jeans</h3>
            <p>Rs: 4050</p>
            <p>Size: M</p>
          </GridItem>
        </Grid>
      </Box>
      <Heading textAlign={"center"}>LATEST COLLECTION️‍🔥</Heading>
      <InfiniteMovingCards images={imageUrls2} />
      <Box>
        <hr />
        {/* <InfinityMovingCard/> */}
        <Footer/>
      </Box>
    </Stack>
  );
};

export default Home;
