import { Fragment } from '@wordpress/element';

import { ParagraphOptions } from '../../paragraph/components/paragraph-options';

import { HeadingOptions } from '../../heading/components/heading-options';
import { ButtonOptions } from '../../button/components/button-options';

export const JubmotronOptions = (props) => {
  const {
    paragraphColor,
    paragraphFamily,
    headingColor,
    headingSize,
    headingWeight,
    headingType,
    headingFamily,
    callToActionUrl,
    callToActionTitle,
    onChangeHeadingColor,
    onChangeHeadingSize,
    onChangeHeadingType,
    onChangeHeadingWeight,
    onChangeHeadingFamily,
    onChangeParagraphColor,
    onChangeCallToActionUrl,
    onChangeParagraphFamily,
    onChangeCallToActionContent,
  } = props;

  return (
    <Fragment>
      <HeadingOptions
        styleColor={headingColor}
        onChangeStyleColor={onChangeHeadingColor}
        styleSize={headingSize}
        onChangeStyleSize={onChangeHeadingSize}
        styleWeight={headingWeight}
        onChangeStyleWeight={onChangeHeadingWeight}
        styleType={headingType}
        onChangeStyleType={onChangeHeadingType}
        styleFamily={headingFamily}
        onChangeStyleFamily={onChangeHeadingFamily}
      >
      </HeadingOptions>
      <ParagraphOptions
        styleColor={paragraphColor}
        onChangeStyleColor={onChangeParagraphColor}
        styleFamily={paragraphFamily}
        onChangeStyleFamily={onChangeParagraphFamily}
      />
      <ButtonOptions
        url={callToActionUrl}
        onChangeUrl={onChangeCallToActionUrl}
        title={callToActionTitle}
        onChangeTitle={onChangeCallToActionContent}
      />
    </Fragment>
  );
};

