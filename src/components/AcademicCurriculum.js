import React, { useState, useEffect } from 'react';
import { getChapters } from './markdownLoader';
//import CustomMarkdownParser from './CustomMarkdownParser';

import MarkdownContent from './MarkdownContent'; // Adjust the path as needed

import 'katex/dist/katex.min.css';

const AcademicCurriculum = () => {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const loadChapters = async () => {
      try {
        setLoading(true);
        const loadedChapters = await getChapters();

        // Clean chapter and section titles
        const cleanedChapters = loadedChapters.map(chapter => ({
          ...chapter,
          title: chapter.title.replace(/^0+/g, '').trim().replace(/\b\w/g, char => char.toUpperCase()), // Remove leading zero and capitalize
          sections: chapter.sections.map(section => ({
            ...section,
            title: section.title.replace(/^0+/g, '').trim().replace(/\b\w/g, char => char.toUpperCase()), // Remove leading zero and capitalize
            content: section.content // Ensure we are just using the content for rendering
          }))
        }));

        setChapters(cleanedChapters);

        if (cleanedChapters.length > 0) {
          setCurrentChapter(cleanedChapters[0]);
          if (cleanedChapters[0].sections.length > 0) {
            setCurrentSection(cleanedChapters[0].sections[0]);
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

  const toggleNav = () => {
    setCollapsed(prev => !prev);
  };

  const toggleSubSections = (chapterId) => {
    setOpenSections(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  if (loading) return <div style={{ padding: '2rem' }}>Loading...</div>;
  if (error) return <div style={{ padding: '2rem', color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <nav style={{ 
        width: collapsed ? '60px' : '250px',
        backgroundColor: 'white', 
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'width 0.3s',
        position: 'relative',
      }}>
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#2d3748', 
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ margin: 0, visibility: collapsed ? 'hidden' : 'visible' }}>Contents</h2>
          <div 
            style={{ cursor: 'pointer', position: 'absolute', right: '10px' }}
            onClick={toggleNav}
          >
            <div style={{ width: '25px', height: '3px', backgroundColor: '#fff', margin: '4px 0' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: '#fff', margin: '4px 0' }} />
            <div style={{ width: '25px', height: '3px', backgroundColor: '#fff', margin: '4px 0' }} />
          </div>
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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => toggleSubSections(chapter.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.5rem',
                    backgroundColor: currentChapter?.id === chapter.id ? '#e2e8f0' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: collapsed ? 'nowrap' : 'normal' }}>
                    {collapsed ? chapter.title.charAt(0) : chapter.title}
                  </span>
                  <span>{openSections[chapter.id] ? '▼' : '►'}</span>
                </button>
              </div>
              {openSections[chapter.id] && (
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
                          fontSize: '0.875rem',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: collapsed ? 'nowrap' : 'normal',
                        }}
                      >
                        {collapsed ? section.title.charAt(0) : section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
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
            {/* Remove the section title display here */}
            <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
              <MarkdownContent content={currentSection.content} />
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
