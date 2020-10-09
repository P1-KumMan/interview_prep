class queue {
  constructor() {
    this._size = 0;
    this.head = this.tail = null;
  }
  size() {
    return this._size;
  }
  enqueue(data) {
    const node = {
      e: data,
      next: null,
    };
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    ++this._size;
  }
  dequeue() {
    if (this.size == 0) {
      return null;
    } else {
      const item = this.head.e;
      this.head = this.head.next;
      --this.size;
      if (!this.size) {
        this.tail = null;
      }
    }
  }
  peek() {
    if (this.size == 0) {
      return null;
    }
    return this.head.data;
  }
}
