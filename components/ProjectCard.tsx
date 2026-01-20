import React, { useState } from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, thumbnailImage, details, context, detailImages } = project;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:bg-gray-200/50 dark:lg:group-hover:bg-neutral-800/50"></div>
      
      {thumbnailImage && (
        <div className="z-10 sm:order-1 sm:col-span-2 sm:mt-1">
          <div className="rounded border-2 border-gray-200/10 transition group-hover:border-gray-200/30 sm:mx-0 bg-gray-800">
             <img src={thumbnailImage} alt={`${title} project thumbnail`} loading="lazy" decoding="async" className="w-full h-full object-cover rounded" />
          </div>
        </div>
      )}

      <div className="z-10 sm:order-2 sm:col-span-6">
        {context && (
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            {context}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-brand/10 text-brand dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-brand/20">
              {tag}
            </span>
          ))}
        </div>

        {details && details.length > 0 && (
          <div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="inline-flex items-center space-x-2 text-sm font-semibold text-brand hover:underline"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? '간략히 보기' : '자세히 보기'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pl-2">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              {detailImages && detailImages.length > 0 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {detailImages.map((img, index) => (
                    <div key={index} className="rounded border border-gray-200/10 bg-gray-800">
                       <img
                        src={img}
                        alt={`${title} detail image ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;