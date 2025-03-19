class Employee {
  int id;
  String name;
  double salary;

  public Employee(int id, String name, double salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
  }

  public void displayDetails() {
      System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
  }
}

class Main {
  public static void main(String[] args) {
      Employee emp1 = new Employee(1, "Surendra Sriramula", 15000);
      Employee emp2 = new Employee(2, "Harsha Raj", 23000);
      Employee emp3 = new Employee(3, "Jitendra Mannuru", 27000);

      Employee[] employees = { emp1, emp2, emp3 };

      for (Employee emp : employees) {
          emp.displayDetails();
      }
  }
}
