import { add, subtract } from './math';
import type { User, Status } from './types';

// Utilisation
console.log("Addition:", add(10, 5));
console.log("Soustraction:", subtract(10, 5));

const user: User = {
  id: 1,
  name: "Alice"
};

const status: Status = "active";

console.log("User:", user);
console.log("Status:", status);
