/**
 * Simple function to retrieve our dataset fresh from the employees JSON. Useful if you've previously manipulated the dataSet and need the original back
 *
 */
 function getDataSet() {
    dataSet = employeeJSON.employees;
  
    return dataSet;
  }
  
  /**
   * Renders a HTML table from a JSON dataset
   *
   * @param {*} dataSet
   */
  function renderTable(dataSet) {
    // Get our column headings
    var columnHeadings = [];
  
    for (var i = 0; i < dataSet.length; i++) {
      for (var key in dataSet[i]) {
        if (columnHeadings.indexOf(key) === -1) {
          columnHeadings.push(key);
        }
      }
    }
  
    // Create our <table> DOM element
    var table = document.createElement("table");
  
    // Create our first <tr> DOM element for our column headings
    var tr = table.insertRow(-1);
  
    // Populate our headings
    for (
      var currentColumn = 0;
      currentColumn < columnHeadings.length;
      currentColumn++
    ) {
      // Create a new <th> DOM element
      var th = document.createElement("th");
      th.innerHTML = columnHeadings[currentColumn];
      tr.appendChild(th);
    }
  
    // Go through each row and populate
    for (var currentRow = 0; currentRow < dataSet.length; currentRow++) {
      tr = table.insertRow(-1);
  
      // Go through each cell in the row and populate
      for (
        var currentCell = 0;
        currentCell < columnHeadings.length;
        currentCell++
      ) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = dataSet[currentRow][columnHeadings[currentCell]];
      }
    }
  
    // Grab the element in which our new table needs to go
    var divContainer = document.getElementById("employee-results");
  
    // Clear any old content
    divContainer.innerHTML = "";
  
    // Insert our new table into the DOM
    divContainer.appendChild(table);
  }
  
  /**
   * Callback filter function to search for names
   *
   * @param {*} employee
   * @return {*} 
   */
  function filterByName(employee) {
      console.table(employee);
  
      // Get our seaarch term
      var searchField = document.getElementById("search");
  
      // Change our search term to lowercase to ignore case differences
      var searchTerm = searchField.value.toLowerCase();
  
      // Check to see if the search term appears in first or last name (whilst converting to lower case)
      if ( (employee.firstname.toLowerCase().indexOf(searchTerm) > -1) || (employee.lastname.toLowerCase().indexOf(searchTerm) > -1) ){
          return 1;
      }
      else {
          return 0;
      }
  }
  /**
   * Callback filter function to filter by employment status
   *
   * @param {*} employee
   * @return {*} 
   */
  function filterByStatus(employee) {
    return employee.employed;
  }
  
  function filterByStartDate(startDate) {
    return dataSet;
  }
  
  function sortByName(name) {}
  
  function sortByStatus(status) {}
  
  function sortByStartDate(startDate) {}
  
  
  
  // Add search functionality by binding a click event to the saerch button
  document
    .getElementById("submit-search")
    .addEventListener("click", function (event) {
      // Stop the form submission
      event.preventDefault();
  
      // Get a fresh dataset
      dataSet = getDataSet();
  
      // Filter our dataset
      dataSet = dataSet.filter(filterByName);
  
      // Look at our dataset in the console log
      console.table(dataSet);
  
      // Render our new table
      renderTable(dataSet);
    });
  
  var dataSet = [];
  
  dataSet = getDataSet();
  
  // Gives us a view of the dataset in the console.
  console.table(dataSet);
  
  // Render our initial table
  renderTable(dataSet);
  