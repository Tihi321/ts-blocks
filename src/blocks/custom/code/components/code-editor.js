import { Code } from '../../../components/code/components';

export const CodeEditor = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      type,
    },
  } = props;


  return (
    <Code type={type} className={blockClass}>
      <pre className={type}>
        {content}
      </pre>
    </Code>
  );
};
