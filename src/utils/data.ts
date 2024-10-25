import img1 from '@/assets/project/ecommerce.png'
import img2 from '@/assets/project/portfolio.png'
import img3 from '@/assets/project/3.png'
import img4 from '@/assets/project/4.png'
import img5 from '@/assets/project/5.png'
import img6 from '@/assets/project/6.png'
import { StaticImageData } from 'next/image'

export type ProjectData = {
    id:number,
    title: string,
    description: string,
    image:StaticImageData,
    gitUrl: string,
    previewUrl: string,
}

export const projectdata:ProjectData[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "To showcase my skills and projects in web development using Next.js and Tailwind CSS",
      image: img2,
      gitUrl: "https://github.com/anomasahar/Portfolio-Website",
      previewUrl: "https://anoma-sahar.vercel.app/",
    },
    {
      id: 2,
      title: "Ecommerce Website",
      description: "Built a single-product eCommerce Website to showcase and sell handmade bags",
      image: img1,
      gitUrl: "https://github.com/anomasahar/Ecommerce-Project-Using-Nextjs-and-TailwindCSS",
      previewUrl: "https://midnight-essence.vercel.app/",
    },
    
    // {
    //   id: 3,
    //   title: "E-commerce Application",
    //   description: "Project 3 description",
    //   image: img3,
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 4,
    //   title: "Food Ordering Application",
    //   description: "Project 4 description",
    //   image: img4,
    //   tag: ["All", "Mobile"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 5,
    //   title: "React Firebase Template",
    //   description: "Authentication and CRUD operations",
    //   image: img5,
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
    // {
    //   id: 6,
    //   title: "Full-stack Roadmap",
    //   description: "Project 5 description",
    //   image: img6,
    //   tag: ["All", "Web"],
    //   gitUrl: "/",
    //   previewUrl: "/",
    // },
];