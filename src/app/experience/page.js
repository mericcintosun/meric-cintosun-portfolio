"use client";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('softitoTitle'),
      subtitle: t('softitoSubtitle'),
      date: t('softitoDate'),
      description: t('softitoDesc'),
    },
    {
      title: t('medyanesTitle'),
      subtitle: t('medyanesSubtitle'),
      date: t('medyanesDate'),
      description: t('medyanesDesc'),
    },
    {
      title: t('flalingoTitle'),
      subtitle: t('flalingoSubtitle'),
      date: t('flalingoDate'),
      description: t('flalingoDesc'),
    },
    {
      title: t('viviencyTitle'),
      subtitle: t('viviencySubtitle'),
      date: t('viviencyDate'),
      description: t('viviencyDesc'),
    },
    {
      title: t('ituTitle'),
      subtitle: t('ituSubtitle'),
      date: t('ituDate'),
      description: t('ituDesc'),
    },
    {
      title: t('yetgenTitle'),
      subtitle: t('yetgenSubtitle'),
      date: t('yetgenDate'),
      description: t('yetgenDesc'),
    },
    {
      title: t('studioPMTitle'),
      subtitle: t('studioPMSubtitle'),
      date: t('studioPMDate'),
      description: t('studioPMDesc'),
    },
    {
      title: t('universityTitle'),
      subtitle: t('universitySubtitle'),
      date: t('universityDate'),
      description: t('universityDesc'),
    },
    {
      title: t('extraTitle'),
      subtitle: t('extraSubtitle'),
      date: t('extraDate'),
      description: t('extraDesc'),
    },
  ];

  return (
    <section className="py-8 px-4 bg-[#0f172a] bg-opacity-70 rounded-xl mb-6">
      <h2 className="text-center mb-8 text-[#6B46C1] text-4xl font-bold">
        {t('myExperiences')}
      </h2>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.date}
            icon={<FaLaptopCode />}
            iconClassName="bg-[#3e276c] text-[#6B46C1]"
            contentArrowStyle={{ borderRight: "7px solid #1f1f38" }}
          >
            <h3 className="vertical-timeline-element-title mt-0 text-[#6B46C1] text-lg font-semibold">
              {exp.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-normal text-[#6B46C1] text-base">
              {exp.title === t('extraTitle') ? (
                <a 
                  href="https://www.linkedin.com/in/meric-cintosun/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#9d74ff] transition-colors duration-300 cursor-pointer"
                >
                  {exp.subtitle}
                </a>
              ) : (
                exp.subtitle
              )}
            </h4>
            <p className="whitespace-pre-line leading-6 text-[#6B46C1]">
              {exp.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
