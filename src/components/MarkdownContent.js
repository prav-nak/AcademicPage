import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'; // For inline math
import MathJaxRenderer from './MathJaxRenderer'; // MathJax for LaTeX environments
import 'katex/dist/katex.min.css'; // For inline KaTeX math styling
import './MarkdownStyles.css'; // Custom styles for definition, example, exercise

// Custom block component for handling definition, example, exercise blocks
const CustomBlock = ({ type, children }) => {
  // The type corresponds to the custom class (e.g., 'definition', 'example')
  const className = type;
  return <div className={className}>{children}</div>;
};

const MarkdownContent = ({ content }) => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (answerId) => {
    setExpandedAnswers((prev) => ({ ...prev, [answerId]: !prev[answerId] }));
  };

  const renderContent = (content) => {
    if (!content) return <p>No content available.</p>;

    // Regex to detect custom blocks like {definition}, {example}, {exercise}
    const blockRegex = /```{(definition|example|exercise)}([\s\S]*?)```/g;

    // Split content to handle normal markdown and custom blocks separately
    const parts = content.split(blockRegex);

    return (
      <MathJaxRenderer>
        {parts.map((part, index) => {
          if (index % 3 === 0) {
            // Render normal markdown content, KaTeX handles inline math
            return (
              <ReactMarkdown
                key={`text-${index}`}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]} // For inline math with KaTeX
              >
                {part}
              </ReactMarkdown>
            );
          } else if (index % 3 === 1) {
            // Render custom block (definition, example, exercise)
            const type = parts[index];
            return (
              <CustomBlock key={`block-${index}`} type={type}>
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]} // For inline math within custom blocks
                >
                  {parts[index + 1]}
                </ReactMarkdown>
              </CustomBlock>
            );
          }
          return null;
        })}
      </MathJaxRenderer>
    );
  };

  return <div>{renderContent(content)}</div>;
};

export default MarkdownContent;
