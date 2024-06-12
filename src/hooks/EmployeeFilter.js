// script.js
console.log("JavaScript is enabled!");
// Add your JavaScript code here
const handleEmployeeSelect = (employee) => {
    if (employee.value === "all") {
      setSelectedEmployee(null);
      setSelectedTransaction(null);
    } else {
      setSelectedEmployee(employee);
    }
  };

  useEffect(() => {
    if (employees.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [employees]);
  