export default function bfs(head: BinaryNode<number> | null, needle: number): boolean {
    const q: Array<BinaryNode<number> | null> = [head];

    while (q.length) {
        const next = q.shift() as BinaryNode<number>;
        if (next.value === needle) {
            return true;
        }
        if (next.left) {
            q.push(next.left)
        }

        if (next.right) {
            q.push(next.right);
        }
    }

    return false;
}
