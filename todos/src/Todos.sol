// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.20;

contract Todos {
    struct TodoItem {
        uint256 todoID;
        string todoTitle;
        string todoDescription;
        bool completed;
        address todoOwner;
    }

    // Use this as a reference when referring to an empty TODO
    TodoItem public EMPTY_TODO = TodoItem(0, "", "", false, 0x0000000000000000000000000000000000000000);
	uint256 public todoIncrement = 1;

    mapping(uint256 => TodoItem) public todos;

    constructor() {
        todos[0] = EMPTY_TODO;
    }

	event TodoCreated(uint256 indexed todoId);
	event TodoUpdated(uint256 indexed todoId);
	event TodoDeleted(uint256 indexed todoId);

	function createTodo(string memory _todoTitle, string memory _todoDescription) public {
    	uint256 todoId = todoIncrement++;
    	TodoItem memory todoItem = TodoItem(todoId, _todoTitle, _todoDescription, false, msg.sender);
    	todos[todoId] = todoItem;
    	ownerToTodos[msg.sender].push(todos[todoId]);
    	emit TodoCreated(todoId);
	}

	function updateTodo(uint256 _todoId, string memory _todoTitle, string memory _todoDescription) public {
    	require(_todoId <= todoIncrement, "Todo item does not exist!");
    	TodoItem memory todoItem = todos[_todoId];
    	todoItem.todoTitle = _todoTitle;
    	todoItem.todoDescription = _todoDescription;
    	todos[_todoId] = todoItem;
    	emit TodoUpdated(_todoId);
	}

	function deleteTodo(uint256 _todoId) public {
    	require(_todoId <= todoIncrement, "Todo item does not exist!");
    	TodoItem memory todoItem = todos[_todoId];
    	require(
        	(
            	!compareStringsbyBytes(todoItem.todoTitle, EMPTY_TODO.todoTitle)
                	&& !compareStringsbyBytes(todoItem.todoDescription, EMPTY_TODO.todoDescription)
        	),
        	"Todo is already empty."
    	);
    	todos[_todoId] = EMPTY_TODO;
    	emit TodoDeleted(_todoId);
	}

	function compareStringsbyBytes(string memory s1, string memory s2) public pure returns (bool) {
    	return keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
	}

	function getTodo(uint256 _todoId) public view returns (TodoItem memory) {
    	require(_todoId <= todoIncrement, "Todo item does not exist!");
    	TodoItem memory todoItem = todos[_todoId];
    	return todoItem;
	}

	function getTodosByOwner(address _owner) public view returns (TodoItem[] memory) {
    	TodoItem[] memory todoItems = ownerToTodos[_owner];
    	return todoItems;
	}

    mapping(address => TodoItem[]) public ownerToTodos;
}
