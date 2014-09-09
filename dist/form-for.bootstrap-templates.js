angular.module("formFor.bootstrapTemplates", []).run(["$templateCache", function($templateCache) {$templateCache.put("form-for/templates/checkbox-field.html","<div  class=\"field checkbox-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error error=\"model.error\" left-aligned=\"true\"></field-error>\n\n  <label>\n    <input  type=\"checkbox\"\n            tabindex=\"{{tabIndex}}\"\n            ng-model=\"model.bindable\"\n            ng-disabled=\"disable || model.disabled\">\n\n    <field-label  ng-if=\"label\"\n                  label=\"{{label}}\"\n                  help=\"{{help}}\"\n                  ng-click=\"toggle()\">\n    </field-label>\n  </label>\n</div>\n");
$templateCache.put("form-for/templates/collection-label.html","<div class=\"collection-label\" ng-class=\"{\'text-danger\': model.error}\">\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <small ng-if=\"model.error\" class=\"text-danger\" ng-bind=\"model.error\"></small>\n</div>\n");
$templateCache.put("form-for/templates/field-error.html","<p ng-if=\"error\" class=\"text-danger\" ng-bind=\"error\"></p>\n");
$templateCache.put("form-for/templates/field-label.html","<label  popover=\"{{help}}\"\n        popover-trigger=\"mouseenter\"\n        popover-placement=\"right\">\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n\n  <span ng-if=\"help\" class=\"fa-stack\">\n    <i class=\"fa fa-stack-2x fa-circle\"></i>\n    <i class=\"fa fa-stack-1x fa-inverse fa-question\"></i>\n  </span>\n\n  <span class=\"label label-default\" ng-if=\"requiredLabel\" ng-bind=\"requiredLabel\"></span>\n</label>\n");
$templateCache.put("form-for/templates/radio-field.html","<span class=\"field radio-field\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-error ng-if=\"!hideErrorMessage\" error=\"model.error\" left-aligned=\"true\"></field-error>\n\n  <label>\n    <input  type=\"radio\"\n            tabindex=\"{{tabIndex}}\"\n            ng-model=\"model.bindable\"\n            ng-value=\"value\"\n            ng-checked=\"checked\"\n            ng-disabled=\"disable || model.disabled\">\n\n    <field-label  ng-if=\"label\"\n                  label=\"{{label}}\"\n                  help=\"{{help}}\"\n                  ng-click=\"click()\">\n    </field-label>\n  </label>\n</span>\n");
$templateCache.put("form-for/templates/select-field-loading-indicator.html","<i class=\"fa fa-circle-o-notch fa-spin\"></i>\nLoading...\n");
$templateCache.put("form-for/templates/select-field.html","<div  class=\"form-group\"\n      ng-class=\"{ \'disabled\': disable || model.disabled,\n                  \'has-error\': model.error }\">\n\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error error=\"model.error\"></field-error>\n\n  <!-- Filtered dropdowns use a type-ahead style component -->\n  <div ng-show=\"enableFiltering\" class=\"input-group\">\n    <input  type=\"text\" class=\"form-control filter-text-input\"\n            tabindex=\"{{tabIndex}}\"\n            placeholder=\"{{placeholder}}\"\n            ng-model=\"filter\"\n            ng-blur=\"close()\"\n            ng-focus=\"open()\"\n            ng-keydown=\"keyDown($event)\">\n\n    <ul class=\"dropdown-menu\" ng-class=\"{show: isOpen}\">\n      <li ng-repeat=\"option in filteredOptions\"\n          ng-class=\"{active: option === selectedOption || $index === mouseOverIndex}\">\n\n        <a  ng-bind=\"option[labelAttribute]\"\n            ng-click=\"selectOption(option)\"\n            ng-mouseenter=\"mouseOver($index)\">\n        </a>\n      </li>\n    </ul>\n\n    <span class=\"input-group-addon\" toggle-button>\n      <i class=\"caret\"></i>\n    </span>\n  </div>\n\n  <!-- Unfiltered dropdowns use a regular [Bootstrap] select -->\n  <select ng-if=\"!enableFiltering && filteredOptions.length\"\n          class=\"form-control\"\n          tabindex=\"{{tabIndex}}\"\n          ng-disabled=\"disable || model.disabled\"\n          ng-model=\"model.bindable\"\n          ng-options=\"option[valueAttribute] as option[labelAttribute] for option in filteredOptions\">\n  </select>\n</div>\n");
$templateCache.put("form-for/templates/submit-button.html","<button ng-class=\"buttonClass || \'btn btn-default\'\"\n        ng-disabled=\"disable || model.disabled\"\n        tabindex=\"{{tabIndex}}\">\n\n  <i ng-if=\"icon\" ng-class=\"icon\"></i>\n\n  <span ng-bind-html=\"bindableLabel\"></span>\n</button>\n");
$templateCache.put("form-for/templates/text-field.html","<div  class=\"form-group\"\n      ng-class=\"{disabled: disable || model.disabled, \'has-error\': model.error}\">\n\n  <field-label  ng-if=\"label\"\n                label=\"{{label}}\"\n                help=\"{{help}}\"\n                required=\"{{model.required}}\">\n  </field-label>\n\n  <field-error error=\"model.error\"></field-error>\n\n  <div ng-class=\"{\'input-group\': iconBefore || iconAfter}\">\n    <span ng-if=\"iconBefore\" class=\"input-group-addon\"\n          ng-click=\"onIconBeforeClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconBefore\"></i>\n    </span>\n\n    <input  ng-if=\"!multiline\"\n            type=\"{{type}}\"\n            tabindex=\"{{tabIndex}}\"\n            class=\"form-control\"\n            ng-disabled=\"disable || model.disabled\"\n            placeholder=\"{{placeholder}}\"\n            ng-model=\"model.bindable\"\n            form-for-debounce=\"{{debounce}}\"\n            ng-click=\"onFocus()\" />\n\n    <textarea ng-if=\"multiline\"\n              tabindex=\"{{tabIndex}}\"\n              class=\"form-control\"\n              ng-disabled=\"disable || model.disabled\"\n              placeholder=\"{{placeholder}}\"\n              ng-model=\"model.bindable\"\n              form-for-debounce=\"{{debounce}}\"\n              ng-click=\"onFocus()\">\n    </textarea>\n\n    <span ng-if=\"iconAfter\" class=\"input-group-addon\"\n          ng-click=\"onIconAfterClick()\">\n      <i class=\"text-field-icon\" ng-class=\"iconAfter\"></i>\n    </span>\n  </div>\n</div>\n");}]);