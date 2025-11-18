export class Repository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index > -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  getAll(): T[] {
    return [...this.items];
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }
}