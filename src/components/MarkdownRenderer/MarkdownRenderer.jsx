import React from 'react';
import styles from './MarkdownRenderer.module.css';

/**
 * MarkdownRenderer Component
 * Renders markdown content with holographic styling
 */
const MarkdownRenderer = ({ content, sourceFile = '' }) => {
  // Simple markdown parsing for basic elements
  const renderContent = (text) => {
    // Split content into paragraphs
    const paragraphs = text.split('\n\n');

    return paragraphs.map((paragraph, index) => {
      // Check if it's a heading
      if (paragraph.startsWith('#')) {
        const level = paragraph.match(/^#+/)[0].length;
        const content = paragraph.replace(/^#+\s*/, '');
        const Tag = `h${Math.min(level, 6)}`;
        return <Tag key={index} className={`${styles.markdownHeading} ${styles[`heading-${level}`]}`}>{content}</Tag>;
      }

      // Check if it's a list item
      if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('* ')) {
        const items = paragraph.split('\n').filter(item => item.trim() !== '');
        return (
          <ul key={index} className={styles.markdownList}>
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className={styles.listItem}>
                {item.replace(/^- |^\* /, '')}
              </li>
            ))}
          </ul>
        );
      }

      // Regular paragraph
      return <p key={index} className={styles.markdownParagraph}>{paragraph}</p>;
    });
  };

  return (
    <div className={styles.markdownRenderer}>
      {renderContent(content)}
      {sourceFile && <div className={styles.sourceInfo}>Source: {sourceFile}</div>}
    </div>
  );
};

export default MarkdownRenderer;