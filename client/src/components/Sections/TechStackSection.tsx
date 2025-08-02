"use client";

import { useState } from "react";
import { Container } from "../Layout/Container";
import { SectionTitle } from "../UI/SectionTitle";
import { TechSkillCard } from "../Cards/TechSkillCard";
import { techStack, techCategories } from "../../data/techStack";
import {
  gameSolidIcon,
  monitorIcon,
  databaseIcon,
  toolsIcon,
} from "@data/icons";

export const TechStackSection = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof techCategories>("gamedev");

  const groupedSkills = techStack.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof techStack>);

  const tabIcons = {
    gamedev: gameSolidIcon,
    frontend: monitorIcon,
    backend: databaseIcon,
    tools: toolsIcon,
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-slate-900">
      <Container>
        <SectionTitle className="dark:text-white">
          Tech Stack & Skills
        </SectionTitle>
        <p className="text-center text-gray-600 dark:text-white mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        {/* Main Container with Tabs */}
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="bg-white rounded-t-xl shadow-lg border border-gray-200 border-b-0">
            <div className="flex flex-wrap justify-center md:justify-start">
              {Object.entries(techCategories).map(([key, label]) => {
                const categoryKey = key as keyof typeof techCategories;
                const isActive = activeTab === categoryKey;
                const hasSkills = groupedSkills[categoryKey]?.length > 0;

                if (!hasSkills) return null;

                return (
                  <button
                    key={categoryKey}
                    onClick={() => setActiveTab(categoryKey)}
                    className={`
                      flex items-center gap-2 px-6 py-4 font-medium text-sm transition-all duration-200
                      border-b-2 hover:bg-gray-50
                      ${
                        isActive
                          ? "border-blue-500 text-blue-600 bg-blue-50"
                          : "border-transparent text-gray-600 hover:text-gray-800"
                      }
                    `}
                  >
                    <img
                      src={tabIcons[categoryKey]}
                      alt={label}
                      className="w-7 h-7"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-b-xl shadow-lg border border-gray-200 border-t-0 p-8 min-h-[400px]">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 text-center flex items-center justify-center gap-3">
                <img src={tabIcons[activeTab]} className="w-8 h-8" />
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
            <div className="text-center mt-8 pt-6 border-t border-gray-100">
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
