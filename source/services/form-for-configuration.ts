/// <reference path="../../definitions/angular.d.ts" />

module formFor {

  /**
   * This service can be used to configure default behavior for all instances of formFor within a project.
   * Note that it is a service accessible to during the run loop and not a provider accessible during config.
   */
  export class FormForConfiguration {

    private autoGenerateLabels_:boolean = false;
    private defaultDebounceDuration_:number = 500;
    private defaultSubmitComplete_:(formData:any) => void = angular.noop;
    private defaultSubmitError_:(error:any) => void = angular.noop;
    private defaultValidationFailed_:(error:any) => void = angular.noop;
    private requiredLabel_:string = null;
    private validationFailedForCustomMessage_:string = "Failed custom validation";
    private validationFailedForEmailTypeMessage_:string = "Invalid email format";
    private validationFailedForIntegerTypeMessage_:string = "Must be an integer";
    private validationFailedForMaxCollectionSizeMessage_:string = "Must be fewer than {{num}} items";
    private validationFailedForMaximumMessage_:string = "Must be no more than {{num}}";
    private validationFailedForMaxLengthMessage_:string = "Must be fewer than {{num}} characters";
    private validationFailedForMinimumMessage_:string = "Must be at least {{num}}";
    private validationFailedForMinCollectionSizeMessage_:string = "Must at least {{num}} items";
    private validationFailedForMinLengthMessage_:string = "Must be at least {{num}} characters";
    private validationFailedForNegativeTypeMessage_:string = "Must be negative";
    private validationFailedForNonNegativeTypeMessage_:string = "Must be non-negative";
    private validationFailedForNumericTypeMessage_:string = "Must be numeric";
    private validationFailedForPatternMessage_:string = "Invalid format";
    private validationFailedForPositiveTypeMessage_:string = "Must be positive";
    private validationFailedForRequiredMessage_:string = "Required field";

    // Getters and setters ///////////////////////////////////////////////////////////////////////////////////////////////

    // TODO Add better documentation

    public get autoGenerateLabels():boolean {
      return this.autoGenerateLabels_;
    }

    public get defaultDebounceDuration():number {
      return this.defaultDebounceDuration_;
    }

    public get defaultSubmitComplete():(formData:any) => void {
      return this.defaultSubmitComplete_;
    }

    public get defaultSubmitError():(error:any) => void {
      return this.defaultSubmitError_;
    }

    public get defaultValidationFailed():(error:any) => void {
      return this.defaultValidationFailed_;
    }

    public get requiredLabel():string {
      return this.requiredLabel_;
    }

    // Public methods ////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Use this method to disable auto-generated labels for formFor input fields.
     */
    public disableAutoLabels():void {
      this.autoGenerateLabels_ = false;
    }

    /**
     * Use this method to enable auto-generated labels for formFor input fields.
     * Labels will be generated based on attribute-name for fields without a label attribute present.
     * Radio fields are an exception to this rule.
     * Their names are generated from their values.
     */
    public enableAutoLabels():void {
      this.autoGenerateLabels_ = true;
    }

    /**
     * Returns the appropriate error message for the validation failure type.
     */
    public getFailedValidationMessage(failureType:ValidationFailureType):string {
      switch (failureType) {
        case ValidationFailureType.CUSTOM:
          return this.validationFailedForCustomMessage_;
        case ValidationFailureType.COLLECTION_MAX_SIZE:
          return this.validationFailedForMaxCollectionSizeMessage_;
        case ValidationFailureType.COLLECTION_MIN_SIZE:
          return this.validationFailedForMinCollectionSizeMessage_;
        case ValidationFailureType.MINIMUM:
          return this.validationFailedForMinimumMessage_;
        case ValidationFailureType.MAX_LENGTH:
          return this.validationFailedForMaxLengthMessage_;
        case ValidationFailureType.MAXIMUM:
          return this.validationFailedForMaximumMessage_;
        case ValidationFailureType.MIN_LENGTH:
          return this.validationFailedForMinLengthMessage_;
        case ValidationFailureType.PATTERN:
          return this.validationFailedForPatternMessage_;
        case ValidationFailureType.REQUIRED:
          return this.validationFailedForRequiredMessage_;
        case ValidationFailureType.TYPE_EMAIL:
          return this.validationFailedForEmailTypeMessage_;
        case ValidationFailureType.TYPE_INTEGER:
          return this.validationFailedForIntegerTypeMessage_;
        case ValidationFailureType.TYPE_NEGATIVE:
          return this.validationFailedForNegativeTypeMessage_;
        case ValidationFailureType.TYPE_NON_NEGATIVE:
          return this.validationFailedForNonNegativeTypeMessage_;
        case ValidationFailureType.TYPE_NUMERIC:
          return this.validationFailedForNumericTypeMessage_;
        case ValidationFailureType.TYPE_POSITIVE:
          return this.validationFailedForPositiveTypeMessage_;
      }
    }

    /**
     * Sets the default debounce interval (in ms) for all textField inputs.
     * This setting can be overridden on a per-input basis (see textField).
     * Defaults to 500ms.
     * To disable debounce (update only on blur) pass false.
     */
    public setDefaultDebounceDuration(value:number):void {
      this.defaultDebounceDuration_ = value;
    }

    /**
     * Sets the default submit-complete behavior for all formFor directives.
     * This setting can be overridden on a per-form basis (see formFor).
     *
     * Default handler function accepting a data parameter representing the server-response returned by the submitted form.
     * This function should accept a single parameter, the response data from the form-submit method.
     */
    public setDefaultSubmitComplete(value:(formData:any) => void):void {
      this.defaultSubmitComplete_ = value;
    }

    /**
     * Sets the default submit-error behavior for all formFor directives.
     * This setting can be overridden on a per-form basis (see formFor).
     * @memberof FormForConfiguration
     * @param {Function} method Default handler function accepting an error parameter representing the data passed to the rejected submit promise.
     * This function should accept a single parameter, the error returned by the form-submit method.
     */
    public setDefaultSubmitError(value:(error:any) => void):void {
      this.defaultSubmitError_ = value;
    }

    /**
     * Sets the default validation-failed behavior for all formFor directives.
     * This setting can be overridden on a per-form basis (see formFor).
     * @memberof FormForConfiguration
     * @param {Function} method Default function invoked when local form validation fails.
     */
    public setDefaultValidationFailed(value:(error:any) => void):void {
      this.defaultValidationFailed_ = value;
    }

    /**
     * Sets a default label to be displayed beside each text and select input for required attributes only.
     */
    public setRequiredLabel(value:string):void {
      this.requiredLabel_ = value;
    }

    /**
     * Override the default error message for failed custom validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForCustomMessage(value:string):void {
      this.validationFailedForCustomMessage_ = value;
    }

    /**
     * Override the default error message for failed max collection size validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMaxCollectionSizeMessage(value:string):void {
      this.validationFailedForMaxCollectionSizeMessage_ = value;
    }

    /**
     * Override the default error message for failed maximum validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMaximumMessage(value:string):void {
      this.validationFailedForMaximumMessage_= value;
    }

    /**
     * Override the default error message for failed maxlength validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMaxLengthMessage(value:string):void {
      this.validationFailedForMaxLengthMessage_ = value;
    }

    /**
     * Override the default error message for failed min collection size validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMinCollectionSizeMessage(value:string):void {
      this.validationFailedForMaxCollectionSizeMessage_ = value;
    }

    /**
     * Override the default error message for failed minimum validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMinimumMessage(value:string):void {
      this.validationFailedForMinimumMessage_= value;
    }

    /**
     * Override the default error message for failed minlength validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForMinLengthMessage(value:string):void {
      this.validationFailedForMinLengthMessage_ = value;
    }

    /**
     * Override the default error message for failed pattern validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForPatternMessage(value:string):void {
      this.validationFailedForPatternMessage_ = value;
    }

    /**
     * Override the default error message for failed required validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForRequiredMessage(value:string):void {
      this.validationFailedForRequiredMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'email' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForEmailTypeMessage(value:string):void {
      this.validationFailedForEmailTypeMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'integer' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForIntegerTypeMessage(value:string):void {
      this.validationFailedForIntegerTypeMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'negative' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForNegativeTypeMessage(value:string):void {
      this.validationFailedForNegativeTypeMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'nonNegative' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForNonNegativeTypeMessage(value:string):void {
      this.validationFailedForNonNegativeTypeMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'numeric' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForNumericTypeMessage(value:string):void {
      this.validationFailedForNumericTypeMessage_ = value;
    }

    /**
     * Override the default error message for failed type = 'positive' validations.
     * This setting applies to all instances of formFor unless otherwise overridden on a per-rule basis.
     */
    public setValidationFailedForPositiveTypeMessage(value:string):void {
      this.validationFailedForPositiveTypeMessage_ = value;
    }
  };

  angular.module('formFor').service('FormForConfiguration', () => new FormForConfiguration());
};