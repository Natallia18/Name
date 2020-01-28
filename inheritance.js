class Dog{

    setName(name) {
      this.name = name;
  
    }
  
    startRunning(){
      console.log ("The dog " + this.name + " started running");
    
    }
    stopBarking(){
      console.log ("The dog " + this.name + " stopped barking");
    }
  }
  class Beagle extends Dog{
  
    topSpeed(speed){
      console.log ("Top speed for "+this.name+" is "+speed);
  
    }
  }
  let myDog = new Beagle();
  myDog.setName("Sparkie");
  myDog.startRunning();
  myDog.stopBarking();
  myDog.topSpeed(10);