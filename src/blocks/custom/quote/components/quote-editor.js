export const QuoteEditor = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      color,
      author,
    },
  } = props;


  return (
    <div className={`${blockClass} ${blockClass}--${color}`}>
      <span className={`${blockClass}__content`}>
        {content}
      </span>
      {(author) && <span className={`${blockClass}__author`}>
        {author}
      </span>}
    </div>
  );
};
