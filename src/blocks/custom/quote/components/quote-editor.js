export const QuoteEditor = (props) => {
  const {
    attributes: {
      blockClass,
      content,
      color,
    },
  } = props;


  return (
    <div className={`${blockClass} ${blockClass}--${color}`}>
      {content}
    </div>
  );
};
