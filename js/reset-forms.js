import { mainPinMarker, map } from './map-data.js';
import { MAP_VIEW } from './data.js';
import { filterElement, priceElement, priceSliderElement } from './dom-elements.js';
import { minPriceDefault } from './form-validation.js';
import { onChangeFilterElementWithDebounce } from './filter-data.js';

const resetForms = (form) => {
  filterElement.reset();
  onChangeFilterElementWithDebounce();
  form.reset();
  map.closePopup();
  mainPinMarker.setLatLng(MAP_VIEW);
  priceElement.min = minPriceDefault;
  priceElement.placeholder = minPriceDefault;
  priceSliderElement.noUiSlider.updateOptions({
    range: {
      min: minPriceDefault,
      max: Number(priceElement.max),
    },
    start: minPriceDefault,
  });
};

export { resetForms };
