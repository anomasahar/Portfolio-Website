"use client";

import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import about from '@/assets/about-image.png'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="pl-2">
        {/* <h3 className="font-semibold">Technical skills:</h3> */}
        <ul className="grid grid-cols-2 gap-8">
        <li>
          <span className="font-semibold">Programming Languages:</span>
          <ul className="list-disc pl-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript (including TypeScript)</li>
            <li>Modern Python Programming</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Frameworks/Libraries:</span>
          <ul className="list-disc pl-4">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>FastAPI</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Databases:</span>
          <ul className="list-disc pl-4">
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Tools and Platforms:</span>
          <ul className="list-disc pl-4">
            <li>Vercel</li>
            <li>GitHub</li>
            <li>Docker</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">AI and Machine Learning:</span>
          <ul className="list-disc pl-4">
            <li>Custom GPTs</li>
          </ul>
        </li>
      </ul>
      </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
            <li className="mb-4">
            <div className="flex justify-between">
                <div>
                <div className="font-semibold">Bachelor of Science in Computer Science</div>
                <div>Quaid e Azam University</div>
                </div>
                <span className="text-sm text-gray-400">Sep 2019 - Aug 2023</span>
            </div>
            </li>
            <li className="mb-4">
            <div className="flex justify-between">
                <div>
                <div className="font-semibold">FSC (ICS)</div>
                <div>Fazaia Intermediate College E-9, Islamabad</div>
                </div>
                <span className="text-sm text-gray-400">2017 - 2019</span>
            </div>
            </li>
            <li className="mb-4">
            <div className="flex justify-between">
                <div>
                <div className="font-semibold">Matric (Computer Science)</div>
                <div>Fazaia Intermediate College E-9, Islamabad</div>
                </div>
                <span className="text-sm text-gray-400">2015 - 2017</span>
            </div>
            </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
            <li className="mb-4">
            <div className="flex justify-between">
                <div>
                <div className="font-semibold">Certified Agentic and Robotic AI Engineer</div>
                {/* <div className="font-semibold">Agentic and Robotic AI Engineer</div> */}
                <div>PIAIC, Air University</div>
                </div>
                <span className="text-sm text-gray-400">Nov 2023 - Present</span>
            </div>
            <div className='font-semibold my-2'>Description:</div>
            <p>This certification focused on developing autonomous, AI-driven robotic systems, gaining
            skills in robotic programming, sensor integration, and machine learning for practical
            applications.</p>
            
        </li>
        </ul>
      ),
    },
  ];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id:any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src={about} alt='' width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            {/* <p className="text-base lg:text-lg">
            Passionate Modern Full Stack Developer with expertise in Next.js, TypeScript, Python, FastAPI, Docker,
            and Tailwind CSS. Adept at developing and maintaining web applications, with a strong foundation in 
            both front-end and back-end development. Eager to continue learning and contributing to innovative projects 
            in a challenging work environment.
            </p> */}
            <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}>{" "}Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>{" "}Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}>{" "}Certifications{" "}
            </TabButton>
            </div>
            <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
            </div>
        </div>
    </section>
    
  )
}
