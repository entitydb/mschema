var types = require('./types');

module.exports = function checkConstraint (property, constraint, expected, value, errors) {

  switch (constraint) {

    case 'type':
      if (!types[expected](value)) {
        errors.push({
          property: property,
          constraint: 'type',
          value: value,
          expected: expected,
          actual: typeof value,
          message: 'Type does not match'
        });
      }
    break;

    case 'minLength':
      if (expected > value.length) {
        errors.push({
          property: property,
          constraint: 'minLength',
          value: value,
          expected: expected,
          actual: value.length,
          message: 'Value was below minLength of property'
        });
      }
    break;

    case 'maxLength':
      if (expected <= value.length) {
        errors.push({
          property: property,
          constraint: 'maxLength',
          value: value,
          expected: expected,
          actual: value.length,
          message: 'Value exceeded maxLength of property'
        });
      }
    break;

    case 'min':
      if (expected > value) {
        errors.push({
          property: property,
          constraint: 'min',
          expected: expected,
          actual: value,
          value: value,
          message: 'Value was below min of property'
        });
      }
    break;

    case 'max':
      if (expected < value) {
        errors.push({
          property: property,
          constraint: 'max',
          expected: expected,
          actual: value,
          value: value,
          message: 'Value execeed max of property'
        });
      }
    break;

    case 'enum':
      if (expected.indexOf(value) === -1) {
        errors.push({
          property: property,
          constraint: 'enum',
          expected: expected,
          actual: value,
          value: value,
          message: 'Value is not part of enum set'
        });
      }
    break;

    default:
      // console.log('missing constraint - ' + constraint);
    break;

  }

};