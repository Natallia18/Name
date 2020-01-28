class Person{
    setPersDetails(name,age) {
        this.name = name;
        this.age = age;
    }
    getPersName() {
      return this.name;
    }
    getPersAge() {
      return this.age;
    }
  }
  let pers1 = new Person();
  pers1.setPersDetails("Galina, 37");
  console.log (pers1.getPersName());
  console.log (pers1.getPersAge());