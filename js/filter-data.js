import { housingTypeFilterElement, housingGuestsFilterElement, housingRoomsFilterElement, housingPriceFilterElement, wifiFilterElement, dishwasherFilterElement, parkingFilterElement, washerFilterElement, elevatorFilterElement, conditionerFilterElement } from './dom-elements.js';
import { adsData } from './web-api.js';
import { ADS_QUANTITY_MAX, FILTERS_DICTIONARY } from './data.js';
import { clearLayers, createAdMarker } from './map-data.js';
import { debounce } from './utils.js';

const filterPrice = (data, priceElement) => {
  const priceValue = priceElement.value;
  if (priceValue === FILTERS_DICTIONARY.middlePrice.text) {
    return data >= FILTERS_DICTIONARY.middlePrice.value.min && data <= FILTERS_DICTIONARY.middlePrice.value.max;
  } else if ((priceValue === FILTERS_DICTIONARY.lowPrice.text)) {
    return data <= FILTERS_DICTIONARY.lowPrice.value;
  } else if ((priceValue === FILTERS_DICTIONARY.highPrice.text)) {
    return data >= FILTERS_DICTIONARY.highPrice.value;
  }
};

const filterFeature = (data, featureElement) => {
  if (featureElement.checked) {
    if (data === undefined) {
      return false;
    }
    return data.includes(featureElement.value);
  }
  return true;
};

const filterData = (data, element) => {
  const nodeValue = FILTERS_DICTIONARY.isNumber.test(element.value) ? Number(element.value) : element.value;
  if (nodeValue === FILTERS_DICTIONARY.pluralWord) {
    return true;
  } else if (element.id === FILTERS_DICTIONARY.priceElementId) {
    return filterPrice(data, element);
  } else if (element.name === FILTERS_DICTIONARY.featureElementsName) {
    return filterFeature(data, element);
  }
  return data === nodeValue;
};

const getMatchedAds = (data) => {
  const matchedAds = [];
  data.some((ad) => {
    if (
      filterData(ad.offer.type, housingTypeFilterElement) &&
      filterData(ad.offer.guests, housingGuestsFilterElement) &&
      filterData(ad.offer.rooms, housingRoomsFilterElement) &&
      filterData(ad.offer.price, housingPriceFilterElement) &&
      filterData(ad.offer.features, wifiFilterElement) &&
      filterData(ad.offer.features, dishwasherFilterElement) &&
      filterData(ad.offer.features, parkingFilterElement) &&
      filterData(ad.offer.features, washerFilterElement) &&
      filterData(ad.offer.features, elevatorFilterElement) &&
      filterData(ad.offer.features, conditionerFilterElement)
    ) {
      matchedAds.push(ad);
    }
    return matchedAds.length === ADS_QUANTITY_MAX;
  });
  return matchedAds;
};

const onChangeFilterElement = () => {
  clearLayers();
  const dataFiltered = getMatchedAds(adsData);
  dataFiltered.forEach((ad) => {
    createAdMarker(ad);
  });
};

const onChangeFilterElementWithDebounce = debounce(() => onChangeFilterElement(), 500);


export { onChangeFilterElement, onChangeFilterElementWithDebounce };
