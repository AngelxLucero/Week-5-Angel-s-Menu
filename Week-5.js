//1.	Create a menu app as seen in this week’s video. What you create 
//is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.

class CastMember{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    describe(){
        console.log(`Hi my name is ${this.name} and I am ${this.sex}`);
    }
}
 let actress = new CastMember ("Christen Bell", "Female");

class Character{
    constructor(fullname, occupation, weakness){
        this.fullname = fullname;
        this.occupation = occupation;
        this.weakness = weakness;
    }
    describe(){
        console.log(`The character's name is ${this.fullname}, their occupation is ${this.occupation}, and their weekenss is ${this.weakness}`);
    }
}
let char1 = new Character ("Elenor Shellstrop", "Con-Artist", "Selfishness");

class Movie{
    constructor(title, director){
        this.title = title;
        this.director = director;
        this.characters = [];
        this.castmembers = [];
    }
    addCharacter(character){
        if(character instanceof Character){
            this.characters.push(character);
        } else {
            throw new Error(`You can only add an instance of Character. Arguement is not a player; ${Character}`)
        }
    }
    describe(){
        return `${this.title} needs ${characters.lenght} characters`;
    }
}

class Menu{
    constructor(){
        this.Character = [];
        this.selectedCharacter = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createCharacter();
                    break;
                case "2":
                    this.viewCharacter();
                    break;
                case "3":
                    this.deleteCharacter();
                    break;
                case "4":
                    this.displayCharacter();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }
showMainMenuOptions(){
    return prompt(`
        0) exit
        1) create new character
        2) view character
        3) delete character
        4) display all characters 
    `);
    }

    showCharacterMenuOptions(characterinfo){
        return prompt(`
        0) back
        1) create castmember
        2) delete castmember
        ------------------
        ${characterinfo}
        `);
    }

    displayCharacter(){
        let characterString = " ";
        for (let i=0; i < this.Character.length; i++){
            characterString += i + ") " + this.Character[i].name + "\n";
        }
        alert(characterString);
    }
    createCharacter(){
        let fullname = prompt("Enter name for new Character");
        let occupation = prompt("Enter occupation of Character");
        let weakness = prompt("Enter weakness of new Character");
        this.Character.push(new Character(fullname, occupation, weakness));
    }
    viewCharacter(){
        let index = prompt("Enter the index of the Character you wish to view");
        if (index > -1 && index < this.Character.length){
            this.selectedCharacter = this.Character[index];
            let description = "Character Name: " + this.selectedCharacter.fullname + "\n";

            for(let i =0; i < this.selectedCharacter.castmembers.length; i++){
                description += i + ") " + this.selectedCharacter.castmembers[i].name 
                + " - " + this.selectedCharacter.castmembers[i].position + "\n";
            }
            let selection = this.showCharacterMenuOptions(description);
            switch(selection){
                case "1":
                    this.createCastMember();
                    break;
                case "2":
                    this.deleteCastMember();
            }
        }
    }
    createCastMember(){
        let name = prompt("Enter name for new Cast Member");
        let sex = prompt("Enter sex of new Cast Member");
        this.selectedCharacter.castmembers.push(new CastMember(name, sex));
    }
    deleteCastMember(){

    }
}

let menu = new Menu();
menu.start();