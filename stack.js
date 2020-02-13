// creates a node with the data and a reference to the next item
class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Stack {
	constructor() {
		// indicates the stack is empty
		this.top = null;
	}

	// places the data onto the top of a stack
	push(data) {
		// if the stack is empty
		if (this.top === null) {
			this.top = new _Node(data, null);
			return this.top;
		}
		// if the stack already has data, then
		// create a new node, and point the 'next' to the current top node
		const node = new _Node(data, this.top);
		// add new node to top of the stack
		this.top = node;
	}

	// removes the data from the top of the stack
	pop() {
		// create node to be removed off the top
		const node = this.top;
		// change top of stack to the node after the node being removed
		this.top = node.next;
		// return data
		return node.data;
	}

	// look at the top of the stack without removing it
	peek(stack) {
		// if stack is empty
		if (!stack.top) {
			return null;
		}
		// return the top stack's data
		return stack.top.data;
	}

	// check if the stack is empty
	isEmpty(stack) {
		if (!stack.top) {
			return true;
		}
		return false;
	}

	// display the stack
	display(stack) {
		// add var to pull results into
		let results = "";
		// start at the top node
		let currNode = stack.top;
		// if the stack is empty
		if (!currNode) {
			console.log("List is empty");
			return;
		}
		// if node is on the bottom of the stack
		if (currNode.next === null) {
			console.log(`${currNode.data} --> null`);
			return;
		}
		// iterate through the stack
		while (currNode.next !== null) {
			// add current node to results variable
			results += `${currNode.data} --> `;
			// move to next node in stack and repeat
			currNode = currNode.next;
		}
		results += `${currNode.data} --> null`;
		console.log(results);
	}
}

let starTrek = new Stack();
// console.log(starTrek.isEmpty(starTrek));
// console.log(starTrek);
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");
// console.log(starTrek);

// console.log(starTrek.peek(starTrek));
// console.log(starTrek.isEmpty(starTrek));
starTrek.display(starTrek);
