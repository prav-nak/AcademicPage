import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { ChevronDown, ChevronRight } from 'lucide-react';

const CustomMarkdownParser = ({ content }) => {
  const [expandedAnswers, setExpandedAnswers] = useState({});

  const toggleAnswer = (answerId) => {
    setExpandedAnswers(prev => ({ ...prev, [answerId]: !prev[answerId] }));
  };

  const renderLatex = (text) => {
    if (typeof text !== 'string') return null;
    
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/);
    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <BlockMath key={index} math={part.slice(2, -2)} />;
      } else if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      } else {
        return part;
      }
    });
  };

  const renderContent = (content) => {
    if (!content) return <p>No content available.</p>;

    const answerRegex = /<answer>([\s\S]*?)<\/answer>/g;
    const parts = content.split(answerRegex);
    
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        // Regular content
        return <div key={`content-${index}`}>{renderLatex(part)}</div>;
      } else {
        // Answer content
        const answerId = `answer-${Math.floor(index / 2)}`;
        return (
          <div key={answerId} style={{
            margin: '1rem 0',
            padding: '0.5rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.375rem',
          }}>
            <button
              onClick={() => toggleAnswer(answerId)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#4a5568',
                fontWeight: 'bold',
              }}
            >
              {expandedAnswers[answerId] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              <span style={{ marginLeft: '0.5rem' }}>
                {expandedAnswers[answerId] ? 'Hide Answer' : 'Show Answer'}
              </span>
            </button>
            {expandedAnswers[answerId] && (
              <div style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                {renderLatex(part)}
              </div>
            )}
          </div>
        );
      }
    });
  };

  return (
    <div>
      {renderContent(content)}
    </div>
  );
};

export default CustomMarkdownParser;