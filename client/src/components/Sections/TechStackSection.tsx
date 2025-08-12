"use client";

import { useState } from "react";
import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { TechSkillCard } from "../Cards/TechSkillCard";
import { IconContext } from "react-icons";
import {
  techStack,
  techCategories,
  techCategoryIcons,
} from "../../data/techStack";

export const TechStackSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof techCategories>("frontend");

  const groupedSkills = techStack.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof techStack>);

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-slate-900 ">
      <Container className="">
        <SectionTitle className="dark:text-white">
          Tech Stack & Skills
        </SectionTitle>
        <p className="text-center text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        {/* Main Container with Tabs */}
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="bg-white dark:bg-slate-700 rounded-t-xl shadow-lg ">
            <div className="flex flex-wrap justify-center md:justify-start">
              {Object.entries(techCategories).map(([key]) => {
                const categoryKey = key as keyof typeof techCategories;
                const isActive = activeTab === categoryKey;
                const hasSkills = groupedSkills[categoryKey]?.length > 0;

                const IconComponent = techCategoryIcons[categoryKey].icon;

                if (!hasSkills) return null;

                return (
                  <button
                    key={categoryKey}
                    onClick={() => setActiveTab(categoryKey)}
                    className={` group
                      flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all duration-200
                      border-b-2 hover:dark:bg-blue-100
                      ${
                        isActive
                          ? "border-blue-500 text-blue-600 bg-blue-100"
                          : "border-transparent text-gray-600 dark:text-white hover:text-gray-800"
                      }
                    `}
                  >
                    <IconContext.Provider
                      value={{
                        className: `
                          text-2xl transition-colors duration-200
                          ${
                            isActive
                              ? "text-black dark:text-black"
                              : "text-black dark:text-white group-hover:text-gray-800 group-hover:dark:text-gray-700"
                          }
                        `,
                      }}
                    >
                      <IconComponent />
                    </IconContext.Provider>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-slate-800 rounded-b-xl shadow-lg p-8 min-h-[400px]">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 text-center flex items-center justify-center gap-3">
                {techCategories[activeTab]}
              </h3>
              <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {groupedSkills[activeTab]?.map((skill) => (
                <TechSkillCard key={skill.name} skill={skill} />
              )) || (
                <div className="col-span-full text-center text-gray-500 py-12">
                  <div className="text-4xl mb-4">🚧</div>
                  <p>Skills in this category coming soon!</p>
                </div>
              )}
            </div>

            {/* Skills Count */}
            <div className="text-center mt-8 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                {groupedSkills[activeTab]?.length || 0} skills in{" "}
                {techCategories[activeTab]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
