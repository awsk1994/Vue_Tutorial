# Vue_Tutorial

## 1_Starting_Project

This is a basic implementation using Vue Framework.

### How to Run?

Double click index.html

## Notes

### Methods vs Computed vs Watch

* Methods
    * Can use for event-binding or data-binding (though not recommended for data-binding)
    * If use for data-binding, note that method will be re-executed everytime something on the webpage changes. Thus, usually do not recommend for data-binding
* Computed
    * Use for data-binding
    * Computed properties are only re-evaluated if one of the "used values" changes
* Watch
    * Allows you to run any code in reaction to some changed data (eg. counter reaches 50)

