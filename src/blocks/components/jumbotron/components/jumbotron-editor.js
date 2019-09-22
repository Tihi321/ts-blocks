import { HeadingEditor } from '../../heading/components/heading-editor';
import { ParagraphEditor } from '../../paragraph/components/paragraph-editor';
import { ButtonEditor } from '../../button/components/button-editor';

export const JumbotronEditor = (props) => {
  const {
    className = 'jumbotron',
    paragraphColor,
    paragraphContent,
    paragraphAlign,
    paragraphFamily,
    headingContent,
    headingColor,
    headingSize,
    headingWeight,
    headingType,
    headingFamily,
    callToActionTitle,
    onChangeParagraphContent,
    onChangeHeadingContent,
  } = props;

  return (
    <div className={className}>
      <HeadingEditor
        blockClass={className}
        content={headingContent}
        onChangeContent={onChangeHeadingContent}
        styleColor={headingColor}
        styleSize={headingSize}
        styleWeight={headingWeight}
        styleType={headingType}
        styleFamily={headingFamily}
      />
      <ParagraphEditor
        blockClass={className}
        content={paragraphContent}
        onChangeContent={onChangeParagraphContent}
        styleColor={paragraphColor}
        styleAlign={paragraphAlign}
        styleFanily={paragraphFamily}
      />
      <ButtonEditor
        blockClass={className}
        styleColor={'default'}
        title={callToActionTitle}
      />
    </div>
  );
};

