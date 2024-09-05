import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";
import demo_img_6 from "@/assets/img/menu/home-8.jpg";
import demo_img_7 from "@/assets/img/menu/home-7.jpg";
import demo_img_8 from "@/assets/img/menu/home-6.jpg";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: StaticImageData | any;
    mobile_menu?: boolean;
  }[];
}
[];
// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: false,
  },
  // {
  //   id: 2,
  //   title: "About Us",
  //   link: "/about",
  //   has_dropdown: false,
  // },

  // {
  //   id: 3,
  //   title: "Services",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/service", title: "Service" },
  //     { link: "/service-details", title: "Service Details" },
  //   ],
  // },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
  },
  // {
  //   id: 5,
  //   title: "Blog",
  //   link: "#",
  //   has_dropdown: true,
  //   sub_menus: [
  //     { link: "/blog", title: "Blog List" },
  //     { link: "/blog-sidebar", title: "Blog Sidebar" },
  //     { link: "/blog-details", title: "Blog Details" },
  //     { link: "/blog-details-2", title: "Blog Details 02" },
  //   ],
  // },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;
