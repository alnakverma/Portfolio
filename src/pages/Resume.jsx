import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";


const Resume = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            Anuj Kumar Verma
          </span>{" "}
          👋
        </h1>
  
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Software Engineer, specializing in technical
            education through hands-on learning and building applications.
          </p>
        </div>

         
        <div class="flex h-[30vh] items-center blue-gradient_text font-semibold drop-shadow">
        <h1 class="mx-auto head-text btn" >
        <a href='https://drive.google.com/file/d/11B-kpDA0Sssinb2a6iEKNYWHisy7Bcn2/view?usp=sharing'> View Resume </a>
        </h1>
        </div>
  
     
  
        <CTA />
    </section>
    
  )
}

export default Resume