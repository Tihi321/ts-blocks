import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

export const CodeSandboxOptions = (props) => {
  const {
    attributes: {
      blockClass,
      style,
      src,
      allow,
      sandbox,
      title,
    },
    actions,
  } = props;

  return (
    <Fragment>
      <div
        className={`${blockClass}__field`}
      >
        <label
          className={`${blockClass}__label`}
          htmlFor="url"
        >
          {__('Title', 'ts-blocks')}
        </label>
        <TextControl
          value={title}
          onChange={actions.onChangeTitle}
        />
      </div>
      <div
        className={`${blockClass}__field`}
      >
        <label
          className={`${blockClass}__label`}
          htmlFor="url"
        >
          {__('Source', 'ts-blocks')}
        </label>
        <TextControl
          value={src}
          onChange={actions.onChangeSrc}
        />
      </div>
      <div
        className={`${blockClass}__field`}
      >
        <label
          className={`${blockClass}__label`}
          htmlFor="url"
        >
          {__('Style', 'ts-blocks')}
        </label>
        <TextControl
          value={style}
          onChange={actions.onChangeStyle}
        />
      </div>
      <div
        className={`${blockClass}__field`}
      >
        <label
          className={`${blockClass}__label`}
          htmlFor="url"
        >
          {__('Allow', 'ts-blocks')}
        </label>
        <TextControl
          value={allow}
          onChange={actions.onChangeAllow}
        />
      </div>
      <div
        className={`${blockClass}__field`}
      >
        <label
          className={`${blockClass}__label`}
          htmlFor="url"
        >
          {__('Sandbox', 'ts-blocks')}
        </label>
        <TextControl
          value={sandbox}
          onChange={actions.onChangeSandbox}
        />
      </div>
    </Fragment>
  );
};
