/**
 * A SUV can hold 40 gallons of gasoline.
 * A sedan can hold 15 gallons of gasoline.
 * 
 * Assignment
 *  - Add a "range" property to each of the vehicles in the array. 
 *  - Assigning the "range" property must be done using a function.
 *    - This property will be calculated using the vehicle's MPG and the 
 *      gallon size (listed above).
 *  - Print the vehicles array with the new "range" property to the console.
 * 
 * Brownie points:
 *  - Find the average "range" of all the vehicles and print that to the 
 *    console
 */

(function() {
  const vehicles = [
    {
      year: 2017,
      make: 'Chevrolet',
      model: 'Tahoe',
      type: 'suv',
      mpg: 23,
      // range: mpg * suv fuel capcity
    },
    {
      year: 2019,
      make: 'Subaru',
      model: 'Outback',
      type: 'sedan',
      mpg: 33,
      // range: mpg * sedan fuel capcity
    },
    {
      year: 2015,
      make: 'Toyota',
      model: 'Avalon',
      type: 'sedan',
      mpg: 30,
      // range: mpg * sedan fuel capcity
    },
    {
      year: 2020,
      make: 'Mercedes',
      model: 'GLA 250',
      type: 'suv',
      mpg: 34,
      // range: mpg * fuel capacity
    },
    {
      year: 2018,
      make: 'Mercedes',
      model: 'C 300',
      type: 'sedan',
      mpg: 25,
      // range: mpg * fuel capacity
    }
  ];

  // Write your code here
  // Set sumRange
  var avg = 0

  vehicles.forEach(element => {
    if (element.type == 'suv') {
      // SUVs can hold 40 gallons
      element.range = 40 * element.mpg;
    }
    else {
      // Sedans can hold 15 gallons
      element.range = 15 * element.mpg;
    }
    avg += element.range;
  });
  console.log(vehicles);

  avg = avg / Object(vehicles).length;
  console.log("The average range is " + avg + " miles.");
  
})();