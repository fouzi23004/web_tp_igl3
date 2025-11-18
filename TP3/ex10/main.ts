import { Library } from './services/Library';
import { ApiService } from './services/ApiService';
import { User, Admin } from './models/Person';

async function main() {
  const library = new Library();

  // Créer des utilisateurs
  const user1 = new User(1, "Alice Martin");
  const admin1 = new Admin(2, "Bob Admin");

  library.addUser(user1);
  library.addUser(admin1);

  console.log("\n=== Permissions ===");
  console.log(`${user1.name}:`, user1.getPermissions());
  console.log(`${admin1.name}:`, admin1.getPermissions());

  // Charger des livres depuis l'API
  console.log("\n=== Loading books from API ===");
  const response = await ApiService.fetchBooks();
  
  if (response.data) {
    response.data.forEach(book => library.addBook(book));
  }

  // Afficher tous les livres
  console.log("\n=== All Books ===");
  console.log(library.getAllBooks());

  // Rechercher un livre
  console.log("\n=== Search 'Harry' ===");
  console.log(library.searchBook("Harry"));

  // Emprunter et rendre un livre
  console.log("\n=== Borrow/Return ===");
  library.borrowBook(1, user1);
  library.borrowBook(1, admin1); // Déjà emprunté
  library.returnBook(1, user1);

  // Retirer un livre (Admin seulement)
  console.log("\n=== Remove Book ===");
  if (admin1.getPermissions().includes("remove")) {
    library.removeBook(3);
  }

  console.log("\n=== Final Books ===");
  console.log(library.getAllBooks());
}

main();