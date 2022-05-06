//1.	Create a menu app as seen in this week’s video. What you create 
//is up to you as long as it meets the following requirements.
// a.	Use at least one array.
// b.	Use at least two classes.
// c.	Your menu should have the options to create, view, and delete elements.

//The menu is a draft for creating Characters and assigning cast members for a TV Show.
//To interact with the menu, you create Characters. You can then display all the 
//Characters you have created, you can delete a character or view a specific character.
//In the view section of a specific character you can assign a cast member to 
//the selected Character. You can also delete the assigned cast member and give
//the Character a new cast member. 


//Assigning Cast member attributes.

class CastMember{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    describe(){
        console.log(`Hi my name is ${this.name} and I am ${this.sex}`);
    }
}

//Assigning Character attributes.

class Character{
    constructor(fullname, occupation){
        this.fullname = fullname;
        this.occupation = occupation;
        this.castmembers = [];
    }
    addCastMember(castmembers){
        if(castmembers instanceof CastMember){
            this.castmembers.push(castmembers);
        } else {
            throw new Error(`You can only add an instance of a Cast Member. Arguement is not a castmember: ${castmembers}`)
        }
    }
    describe(){
        return `${this.fullname} can be played by ${this.castmembers.length}`;
    }
}

//creating the Prompt menu for the browser. This will allow the user to see and select the
//options on the menu. 

class Menu{
    constructor(){
        this.Characters = [];
        this.selectedCharacter = null;
        this.CastMember = [];
        this.selectedCastMember = null;
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
        1) assign castmember
        2) delete castmember
        ------------------
        ${characterinfo}
        `);
    }

    //Here are the actions that will run once a selection has been
    //made on the main menu.

    displayCharacter(){
        let characterString = " ";
        for (let i=0; i < this.Characters.length; i++){
            characterString += i + ") " + this.Characters[i].fullname + "\n";
        }
        alert(characterString);
    }
    
    createCharacter() {
         let fullname = prompt("Enter name for new Character");
         let occupation = prompt("Enter occupation of Character");
        this.Characters.push(new Character(fullname, occupation));
    }

    viewCharacter(){
        let index = prompt("Enter the index of the Character you wish to view");
        if (index > -1 && index < this.Characters.length){
            this.selectedCharacter = this.Characters[index];
            let description = `Character: ${this.selectedCharacter.fullname}, 
        Occupation: ${this.selectedCharacter.occupation}, 
            `;

            for(let i =0; i < this.selectedCharacter.castmembers.length; i++){
                description +="Cast Member:" + " " + this.selectedCharacter.castmembers[i].name + "\n";
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
    
         deleteCharacter(){
             let index = prompt("Enter the index of the Character you wish to delete:");
             if (index > -1 && index < this.Characters.length) {
            this.Characters.splice(index, 1);
            }
            return(this.showMainMenuOptions);
         }
        
         createCastMember(){
              let name = prompt("Enter the name of the Cast Member");
              let sex = prompt("Enter sex of cast member");
              this.selectedCharacter.castmembers.push(new CastMember(name, sex));
            }
    
         deleteCastMember(){
            let index = prompt("Enter the Index of the cast member you wish to delete.");
             if (index > -1 && index < this.selectedCharacter.castmembers.length){
            this.selectedCharacter.castmembers.splice(index, 1);
        }
        return(this.showMainMenuOptions);
    }
}



let menu = new Menu();
menu.start();

