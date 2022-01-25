// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
 var results = 0;

 _.each(numbers, function(number, index, collection) {
   if (number % 5 === 0) {
     results += 1;
   }
 });
 return results;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var result = _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    };
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
 var result = _.filter(fruits, function(fruit) {
   if (fruit[0] === letter) {
     return fruit;
   }
 })
 return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
 var result = _.filter(desserts, function(dessert) {
   if (dessert['type'] === 'cookie') {
     return dessert;
   }
 })
 return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(groceries) {
  var total = 0;
  _.reduce(groceries, function(accumulator, grocery) {
    total += parseFloat(grocery['price'].replaceAll('$', ''));
  }, 0);
  return total;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var result = {};
  _.reduce(desserts, function(accumulator, dessert) {
    if (result[dessert['type']] === undefined) {
      result[dessert['type']] = 1;
    } else {
      result[dessert['type']] += 1;
    }
  }, 0);
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var list;
  _.reduce(movies, function(accumulator, movie) {
    if (movie['releaseYear'] >= 1990 && movie['releaseYear'] <= 2000) {
      accumulator.push(movie['title']);
    }
    list = accumulator;
    return accumulator;
  }, []);
  return list;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shorter = false;
  _.reduce(movies, function(accumulator, movie) {
    if (movie['runtime'] < timeLimit) {
      shorter = true;
    }
  });
  return shorter;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
 return _.map(fruits, function(fruit) {
   return fruit.toUpperCase();
 });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    var hasGluten = false;
    _.each(dessert['ingredients'], function(ingredient) {
      ingredient === 'flour';
      hasGluten = true;
    });
    if (hasGluten === true) {
      dessert['glutenFree'] = true;
    } else {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  // map each grocery
  return _.map(groceries, function(grocery) {
    var salePrice;
    var priceInt;
    priceInt = Math.round(parseFloat(grocery['price'].replaceAll('$', '')) * 100);
    var priceOff = Math.round((priceInt * coupon));
    salePrice = (priceInt - priceOff) / 100.00;
    salePrice = '$' + salePrice;
    grocery['salePrice'] = salePrice;
    return grocery;
  });
};
