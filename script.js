function getFormvalue() {
    //Write your code here
	event.preventDefault();

      // Get form reference
      const form = event.target;

      // Retrieve and trim values
      const firstName = form.fname.value.trim();
      const lastName = form.lname.value.trim();

      // Concatenate with a space
      const fullName = `${firstName} ${lastName}`.trim();

      // Handle empty input gracefully
      if (fullName === "") {
        alert("Please enter your name.");
      } else {
        alert(fullName);
      }
    

}
