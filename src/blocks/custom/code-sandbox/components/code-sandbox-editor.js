export const CodeSandboxEditor = (props) => {
  const {
    attributes: {
      blockClass,
      src,
      allow,
      sandbox,
      title,
    },
  } = props;


  return (
    <div className={blockClass}>
      <iframe
        title={title}
        className={`${blockClass}__iframe`}
        src={src}
        allow={allow}
        sandbox={sandbox}
      >
      </iframe>
    </div>
  );
};
