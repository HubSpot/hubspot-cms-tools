const { VALIDATION_RESULT } = require('../constants');

class BaseValidator {
  getSuccess() {
    return {
      validatorKey: this.key,
      validatorName: this.name,
      result: VALIDATION_RESULT.SUCCESS,
    };
  }

  getError(errorObj, copyPlaceholders = {}) {
    return {
      validatorKey: this.key,
      validatorName: this.name,
      error: errorObj.getCopy(copyPlaceholders),
      result: errorObj.severity || VALIDATION_RESULT.FATAL,
      key: `${this.key}.${errorObj.key}`,
    };
  }
}

module.exports = BaseValidator;