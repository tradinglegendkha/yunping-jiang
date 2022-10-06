import React from 'react';
import './who.css';

let text = 'My teaching goal is to prepare my students for their future challenges in their work and life. I will not only teach my students some basic theory in mathematics but also teach them how to think and how to use the basic theory they learn in the class in their next courses and in their future work and life. I will present the concepts in the simplest, most transparent way, to ensure students become fluent and confident in their problem-solving skills, and to transmit the sense of joy and excitement I feel as the mathematical structures and possibilities unfold. The moment when a student successfully grasps a new concept is a deeply satisfying experience for me. '
let text2 = 'I have taught hundreds of undergraduate and graduate students at Queens College in the past. Most times, I will follow the textbook and, sometimes, I will teach from my notes but closely relate to materials in the textbook. In my class, every student must do their homework which I will assign every week. Usually I will give one week for my students to work on their homework and then I will spend times to explain homework problems and work together with students on homework problems. I would like my students to do the following: preview sections in the textbook before a class, take note in the class, review the note after the class, and do homework assigned in the class, and then review the homework together with me. Hard work should be rewarded. As long as a student studies, he will pass the class. To help my student to earn a good grade, I will give two midterm examinations. The record of homework will be integrated into midterm exam scores with certain percentage. I will give a final examination. In the end of a semester, my student will have two midterm exam scores and one final exam score. The final exam score will be counted twice. So my student will have four scores. I will drop one of the lowest scores and average the other three. This average is the final grade. In my classes, students must earn their grades. In the past, many my students earned their A or A+.'

const Who = () => {
  return (
    <div>
      <div className='who-container section-padding'>
        <div className='who-container-heading'>
          <h1>Self Statement</h1>
          <div className='who-container-p'>
            <p>{text}</p>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Who