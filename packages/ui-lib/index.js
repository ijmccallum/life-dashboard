import ViewSetup from './ui-components/View/View.js';
import TextSetup from './ui-components/Text/Text.js';

/**
 * Platform specific UI Primitives are passed in by the ...
 * @param {*} param0 
 */
export const UISetup = ({ViewPrimitive, TextPrimitive}) => {
  return {
    View: ViewSetup({ViewPrimitive}),
    Text: TextSetup({TextPrimitive})
  }
}