var app = angular.module('studentApp', []);

app.factory('assign15service', [function() {
    return {
        calculateTotal: function(maths, english, science) {
            return maths + english + science;
            }
        }
    return {
        electricalTotal: function(e1, e2, e3) {
            return e1 + e2 + e3;
            }
        }
    return {
         computerTotal: function(c1, c2, c3) {
            return c1 + c2+ c3;
            }
      
        }
    return {
          mechanicalTotal: function(m1, m2, m3) {
            return m1 + m2 + m3;
            }
    }
    
}]);