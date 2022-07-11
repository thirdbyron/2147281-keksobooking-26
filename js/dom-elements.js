const cardTemplate = document.querySelector('#card').content;

const adTemplate = cardTemplate.querySelector('.popup');

const messageSuccesTemplate = document.querySelector('#success').content;

const messageSuccesElement = messageSuccesTemplate.querySelector('.success');

const messageErrorTemplate = document.querySelector('#error').content;

const messageErrorElement = messageErrorTemplate.querySelector('.error');

const filterElement = document.querySelector('.map__filters');

const formElement = document.querySelector('.ad-form');

const resetButtonElement = formElement.querySelector('.ad-form__reset');

const typeSelectElement = formElement.querySelector('#type');
const typeOptionSelectedElement = typeSelectElement.querySelector('option:checked');

const roomsSelectElement = formElement.querySelector('#room_number');
const roomsOptionSelected = roomsSelectElement.querySelector('option:checked');

const capacitySelectElement = formElement.querySelector('#capacity');

const priceElement = formElement.querySelector('#price');
const priceSliderElement = formElement.querySelector('.ad-form__slider');

const timeinSelectElement = formElement.querySelector('#timein');
const timeoutSelectElement = formElement.querySelector('#timeout');

const adressElement = formElement.querySelector('#address');

const filterElements = filterElement.querySelectorAll('.map__checkbox, .map__filter');

const housingTypeFilterElement = filterElement.querySelector('#housing-type');

const housingGuestsFilterElement = filterElement.querySelector('#housing-guests');

const housingRoomsFilterElement = filterElement.querySelector('#housing-rooms');

const housingPriceFilterElement = filterElement.querySelector('#housing-price');

const wifiFilterElement = filterElement.querySelector('#filter-wifi');

const dishwasherFilterElement = filterElement.querySelector('#filter-dishwasher');

const parkingFilterElement = filterElement.querySelector('#filter-parking');

const washerFilterElement = filterElement.querySelector('#filter-washer');

const elevatorFilterElement = filterElement.querySelector('#filter-elevator');

const conditionerFilterElement = filterElement.querySelector('#filter-conditioner');

export { adTemplate, formElement, resetButtonElement, typeSelectElement, typeOptionSelectedElement, roomsOptionSelected, roomsSelectElement, capacitySelectElement, priceElement, priceSliderElement, timeinSelectElement, timeoutSelectElement, adressElement, filterElement, messageSuccesElement, messageErrorElement, filterElements, housingTypeFilterElement, housingGuestsFilterElement, housingRoomsFilterElement, housingPriceFilterElement, wifiFilterElement, dishwasherFilterElement, parkingFilterElement, washerFilterElement, elevatorFilterElement, conditionerFilterElement };
