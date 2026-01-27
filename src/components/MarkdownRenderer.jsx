import React from 'react';
import IndustrialContainer from './IndustrialContainer';
import styles from '../css/industrial-styles.module.css';
import colorStyles from '../css/color-palette.module.css';

/**
 * MarkdownRenderer Component
 * Renders markdown content with industrial styling
 */
const MarkdownRenderer = ({
  content = '',
  sourceFile = '',
  theme = 'dark',
  className = ''
}) => {
  const containerClasses = [
    styles.industrialContainer,
    colorStyles.bgSteelMedium,
    className
  ].filter(Boolean).join(' ');

  // Simple markdown parsing for basic elements
  const renderMarkdown = (text) => {
    if (!text) return null;

    // Split by paragraphs and process each line
    return text.split('\n').map((line, index) => {
      // Check for headings
      if (line.startsWith('# ')) {
        return (
          <h1
            key={index}
            className={`${colorStyles.copperHighlight} ${styles.holographicBlueHighlight}`}
            style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
          >
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        return (
          <h2
            key={index}
            className={colorStyles.copperHighlight}
            style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        return (
          <h3
            key={index}
            className={colorStyles.copperHighlight}
            style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
          >
            {line.substring(4)}
          </h3>
        );
      }
      // Check for bold text
      else if (line.includes('**') || line.includes('__')) {
        const parts = line.split(/(\*\*.*?\*\*|__.+?__)/g);
        return (
          <p key={index} className={colorStyles.steelText} style={{ lineHeight: '1.6' }}>
            {parts.map((part, partIndex) => {
              if ((part.startsWith('**') && part.endsWith('**')) ||
                  (part.startsWith('__') && part.endsWith('__'))) {
                const text = part.substring(2, part.length - 2);
                return <strong key={partIndex} className={colorStyles.copperHighlight}>{text}</strong>;
              }
              return part;
            })}
          </p>
        );
      }
      // Check for italic text
      else if (line.includes('*') || line.includes('_')) {
        const parts = line.split(/(\*.*?\*|_.+?_)/g);
        return (
          <p key={index} className={colorStyles.steelText} style={{ lineHeight: '1.6' }}>
            {parts.map((part, partIndex) => {
              if ((part.startsWith('*') && part.endsWith('*') && !part.startsWith('**')) ||
                  (part.startsWith('_') && part.endsWith('_') && !part.startsWith('__'))) {
                const text = part.substring(1, part.length - 1);
                return <em key={partIndex} className={colorStyles.holographicBlueLight}>{text}</em>;
              }
              return part;
            })}
          </p>
        );
      }
      // Check for lists
      else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <li key={index} className={colorStyles.steelText} style={{ marginBottom: '0.25rem' }}>
            {line.substring(2)}
          </li>
        );
      }
      // Check for numbered lists
      else if (/^\d+\.\s/.test(line.trim())) {
        return (
          <li key={index} className={colorStyles.steelText} style={{ marginBottom: '0.25rem' }}>
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      }
      // Regular paragraph
      else if (line.trim() !== '') {
        return (
          <p key={index} className={colorStyles.steelText} style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
            {line}
          </p>
        );
      }
      // Empty line
      else {
        return <br key={index} />;
      }
    });
  };

  return (
    <IndustrialContainer
      className={containerClasses}
      variant="steel"
      theme={theme}
      style={{ padding: '1.5rem', margin: '1rem 0' }}
    >
      {sourceFile && (
        <div style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--steel-light)' }}>
          <span className={colorStyles.steelText} style={{ fontSize: '0.9rem' }}>
            Source: {sourceFile}
          </span>
        </div>
      )}
      <div className="markdown-content">
        {renderMarkdown(content)}
      </div>
    </IndustrialContainer>
  );
};

export default MarkdownRenderer;