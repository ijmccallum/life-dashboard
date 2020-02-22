import ViewSetup from './ui-components/View/View.js';
import TextSetup from './ui-components/Text/Text.js';

export const UISetup = ({ViewPrimitive, TextPrimitive}) => {
  return {
    View: ViewSetup({ViewPrimitive}),
    Text: TextSetup({TextPrimitive})
  }
}