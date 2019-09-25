import React, { useRef, useEffect } from 'react';
import { hljs } from '../assets/hljs';
import { codeHooks } from '../../hooks';

export function Code({ className, children, type }) {
  const preElement = useRef(null);

  const highlightCode = () => {
    if (preElement.current) {
      const nodes = preElement.current.querySelectorAll(`.${type}`);
      nodes.forEach((node) => {
        hljs.highlightBlock(node);
      });
    }
  };

  useEffect(() => {
    codeHooks.addAction('tsb_highlight_please', 'ts-blocks', highlightCode);
  }, []);


  return (
    <div ref={preElement} className={className} >
      {children}
    </div>
  );
}
