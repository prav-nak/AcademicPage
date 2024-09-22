import React, { useState, useEffect } from 'react';
import { getChapters } from './markdownLoader';
import CustomMarkdownParser from './CustomMarkdownParser';
import 'katex/dist/katex.min.css';

const AcademicCurriculum = () => {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChapters = async () => {
      try {
        setLoading(true);
        const loadedChapters = await getChapters();
        setChapters(loadedChapters);
        if (loadedChapters.length > 0) {
          setCurrentChapter(loadedChapters[0]);
          if (loadedChapters[0].sections.length > 0) {
            setCurrentSection(loadedChapters[0].sections[0]);
          }
        }
      } catch (err) {
        console.error('Error loading chapters:', err);
        setError('Failed to load curriculum. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadChapters();
  }, []);

  const handleSectionClick = (chapter, section) => {
    setCurrentChapter(chapter);
    setCurrentSection(section);
  };

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <nav style={{ 
        width: '250px', 
        backgroundColor: 'white', 
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}>
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#2d3748', 
          color: 'white'
        }}>
          <h2 style={{ margin: 0 }}>Contents</h2>
        </div>
        <ul style={{ 
          listStyle: 'none', 
          padding: '1rem', 
          margin: 0,
          flexGrow: 1,
          overflowY: 'auto'
        }}>
          {chapters.map((chapter) => (
            <li key={chapter.id} style={{ marginBottom: '0.5rem' }}>
              <button
                onClick={() => handleSectionClick(chapter, chapter.sections[0])}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem',
                  backgroundColor: currentChapter?.id === chapter.id ? '#e2e8f0' : 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {chapter.title}
              </button>
              <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
                {chapter.sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(chapter, section)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '0.25rem 0.5rem',
                        backgroundColor: currentSection?.id === section.id ? '#edf2f7' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.875rem'
                      }}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ 
        flexGrow: 1, 
        padding: '2rem',
        overflowY: 'auto',
        backgroundColor: '#f7fafc'
      }}>
        {currentSection ? (
          <>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>{currentChapter?.title}</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'semibold', marginBottom: '1.5rem' }}>{currentSection.title}</h2>
            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
              <CustomMarkdownParser content={currentSection.content} />
            </div>
          </>
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#4a5568' }}>
            Select a section from the navigation panel to view content.
          </p>
        )}
      </main>
    </div>
  );
};

export default AcademicCurriculum;