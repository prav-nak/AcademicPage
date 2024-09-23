import React, { useEffect } from 'react';

const MathJaxRenderer = ({ children }) => {
  useEffect(() => {
    if (window.MathJax) {
      // Reset MathJax to ensure numbers and labels don't persist
      window.MathJax.typesetClear();
      window.MathJax.texReset();  // Reset equation numbers
      window.MathJax.typesetPromise();  // Re-render equations
    }
  }, [children]);

  return <div>{children}</div>;
};

export default MathJaxRenderer;
