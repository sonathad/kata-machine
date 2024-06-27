type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const curr: Node<T> = { value: item };
        this.length++;

        if (!this.tail) {
            this.tail = this.head = curr;
            return;
        }

        this.tail.next = curr;
        this.tail = curr;
    }

    deque(): T | undefined {
        if (!this.head) return;

        this.length--;

        const curr = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }

        return curr.value;

    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
