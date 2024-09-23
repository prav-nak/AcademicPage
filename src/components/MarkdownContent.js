import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'; // For inline math
import MathJaxRenderer from './MathJaxRenderer'; // MathJax for LaTeX environments
import 'katex/dist/katex.min.css'; // For inline KaTeX math styling
import './MarkdownStyles.css'; // Custom styles for blocks

// Custom block component for handling definition, example, exercise blocks
const CustomBlock = ({ type, children }) => {
  const className = type;
  return <div className={className}>{children}</div>;
};

// MarkdownContent component to render markdown with LaTeX and answer toggling
const MarkdownContent = ({ content }) => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  // Toggle answer visibility
  const toggleAnswer = (answerId) => {
    setExpandedAnswers((prevState) => ({
      ...prevState,
      [answerId]: !prevState[answerId],
    }));
  };

  const renderContent = (content) => {
    if (!content) return <p>No content available.</p>;

    // Custom regex to detect <answer> tags
    const answerRegex = /<answer>([\s\S]*?)<\/answer>/g;
    const blockRegex = /```{(definition|example|exercise)}([\s\S]*?)```/g;

    // Split content based on custom blocks and answer tags
    const parts = content.split(blockRegex);

    return (
      <MathJaxRenderer>
        {parts.map((part, index) => {
          if (index % 3 === 0) {
            // Handle markdown and LaTeX content
            let answerParts = [];
            let match;
            let lastIndex = 0;

            // Identify all answer tags and split the content accordingly
            while ((match = answerRegex.exec(part)) !== null) {
              const answerId = `answer-${index}-${match.index}`;

              // Normal content before the answer
              answerParts.push(
                <ReactMarkdown
                  key={`text-${index}-before-${answerId}`}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]} // For inline math with KaTeX
                >
                  {part.slice(lastIndex, match.index)}
                </ReactMarkdown>
              );

              // Add the answer toggle button and content
              answerParts.push(
                <div
                  key={answerId}
                  style={{
                    margin: '1rem 0',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.375rem',
                    padding: '0.5rem',
                  }}
                >
                  <button
                    onClick={() => toggleAnswer(answerId)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#4a5568',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    {expandedAnswers[answerId] ? 'Hide Answer' : 'Show Answer'}
                  </button>
                  {expandedAnswers[answerId] && (
                    <div style={{ marginTop: '0.5rem' }}>
                      {/* Ensure only the answer text is passed to ReactMarkdown */}
                      <ReactMarkdown
                        key={`text-${index}-answer-${answerId}`}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      >
                        {match[1]}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              );

              lastIndex = answerRegex.lastIndex;
            }

            // Append any remaining content after the last <answer> tag
            answerParts.push(
              <ReactMarkdown
                key={`text-${index}-after`}
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]} // For inline math with KaTeX
              >
                {part.slice(lastIndex)}
              </ReactMarkdown>
            );

            return <div key={`text-container-${index}`}>{answerParts}</div>;
          } else if (index % 3 === 1) {
            // Render custom blocks (definition, example, exercise)
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
