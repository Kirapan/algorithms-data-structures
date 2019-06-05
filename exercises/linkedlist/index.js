// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}
	insertFirst(data) {
		// this.head = new Node(data, this.head);
		this.insertAt(data, 0);
	}
	size() {
		let next = this.head;
		let count = 0;
		while (next) {
			next = next.next;
			count++;
		}
		return count;
	}
	getFirst() {
		// return this.head;
		return this.getAt(0);
	}
	getLast() {
		// if(!this.head) return null;
		// let node = this.head;
		// while (node.next) {
		// 	node = node.next;
		// }
		// return node;
		return this.getAt(this.size() - 1)
	}
	clear() {
		this.head = null;
	}
	removeFirst() {
		if (!this. head) return;
		// this.head = this.head.next;
		this.head = this.getAt(0).next;
	}
	removeLast() {
		if(!this.head) return;
		if(!this.head.next) {
			this.head = null;
			return;
		}
		// let previous = this.head;
		// let node = this.head.next;
		// while (node.next) {
		// 	previous = node;
		// 	node = node.next;
		// }
		// previous.next = null;
		this.getAt(this.size() - 2).next = null;
	}
	insertLast(data) {
		const last = this.getLast()
		if(!last) {
			this.head = new Node(data);
		} else {
			// last.next = new Node(data);
			this.getAt(this.size() - 1).next = new Node(data);
		}
	}
	getAt(index) {
		let counter = 0;
		let node = this.head;
		while(node && counter < index) {
			node = node.next;
			counter++;
		}
		return node;
	}
	removeAt(index) {
		if(!this.head) return;
		if(index === 0) this.head = this.head.next;
		let previous = this.getAt(index - 1);
		if(previous.next) previous.next = previous.next.next;
		return;
	}
	insertAt(data, index) {
		if(!this.head) {
			this.head = new Node(data);
			return;
		}
		if(index === 0) {
			this.head = new Node(data, this.head)
			return;
		}
		let previous =  this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next)
	}
	forEach() {
		if(!this.head) return;
		let counter = 0;
		let node = this.head;
		while(node) {
			node.data += 10
			node = node.next;
		}
	}
	*[Symbol.iterator]() {
		let node = this.head
		while(node) {
			yield node;
			node = node.next;
		}
	}
	
}

module.exports = { Node, LinkedList };
