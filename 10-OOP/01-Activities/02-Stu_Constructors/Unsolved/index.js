// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log("Hi, I'm " + this.name + " and I work in " + this.tech + ".")
    }
}
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const newDeveloper = new Developer('Rachel', 'Cybersecurity');
// TODO: Call the 'introduction()' method on the new object
newDeveloper.introduction();
