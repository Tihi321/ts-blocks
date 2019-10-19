import { Fragment } from 'react';
import Textarea from 'react-textarea-autosize';
import { TextareaControl } from '@wordpress/components';
import { Code } from '../../../components/code/components';

export const CodeEditor = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      type,
      showRender,
    },
    actions,
  } = props;


  return (<Fragment>
    {(showRender) ?
      <Code type={type} className={blockClass}>
        <pre className={type}>
          {content}
        </pre>
      </Code> :
      <div className={`${blockClass}__edit`}>
        <Textarea
          className={`${blockClass}__textarea`}
          minRows={3}
          defaultValue={content}
          onChange={(e) => actions.onChangeContent(e.target.value)}
        />
      </div>
    }
  </Fragment>
  );
};
