const livre={
    titre:"math",
    auteur:"prof",
    annee:2004
    ,
    getinfo(){
        console.log("ce livre de nom de",this.titre,"a ete ecris par",this.auteur,"de date de sortie", this.annee);
    }
}
livre.getinfo();


class etudiant{
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }
    getmention(){
        if (this.note>=16){
            return "Tres bien";
        }
        if(this.note>=14){
            return "bien"
        }
        if(this.note>=10){
            return "passable";
        }
        return "echec"
    }
}
const etudiant1= new etudiant("ahmed",12);
const etudiant2= new etudiant("amine",18);
const etudiant3= new etudiant("asma",9);
console.log(etudiant1.getmention());
console.log(etudiant2.getmention());
console.log(etudiant3.getmention());




const notes = [12,5,17,9,20];
const moyenne = notes.reduce((acc,val) => acc +val,0)/notes.length;
console.log(moyenne);



const sorted =[...notes].sort((a,b)=>b-a);
console.log(sorted);


const filtred = notes.filter(n=> n>=10);
console.log(filtred);