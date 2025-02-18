// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {Todos} from "../src/Todos.sol";

contract TodosTest is Test {
	Todos public sampleTodos;
	Todos.TodoItem public EMPTY_TODO = Todos.TodoItem(0, "", "", false, 0x0000000000000000000000000000000000000000);

	function setUp() public {
    	vm.prank(msg.sender);
    	sampleTodos = new Todos();
	}

	function testCreateTodos() public {
    	string memory todoTitle = "Todo Title";
    	string memory todoDescription = "Todo Description";
    	sampleTodos.createTodo(todoTitle, todoDescription);
    	Todos.TodoItem memory todoItem = sampleTodos.getTodo(1);
    	assert(!sampleTodos.compareStringsbyBytes(todoItem.todoTitle, EMPTY_TODO.todoTitle));
    	assert(!sampleTodos.compareStringsbyBytes(todoItem.todoDescription, EMPTY_TODO.todoDescription));
	}

	function testUpdateTodos() public {
    	string memory todoTitle = "Todo Title";
    	string memory todoDescription = "Todo Description";
    	sampleTodos.createTodo(todoTitle, todoDescription);
    	string memory newTodoTitle = "Todo Title is new";
    	string memory newTodoDescription = "Todo Description is new";
    	sampleTodos.updateTodo(1, newTodoTitle, newTodoDescription);
    	Todos.TodoItem memory todoItem = sampleTodos.getTodo(1);
    	assert(sampleTodos.compareStringsbyBytes(todoItem.todoTitle, newTodoTitle));
    	assert(sampleTodos.compareStringsbyBytes(todoItem.todoDescription, newTodoDescription));
	}

	function testDeleteTodos() public {
    	string memory todoTitle = "Todo Title";
    	string memory todoDescription = "Todo Description";
    	sampleTodos.createTodo(todoTitle, todoDescription);
    	sampleTodos.deleteTodo(1);
    	Todos.TodoItem memory todoItem = sampleTodos.getTodo(1);
    	assert(sampleTodos.compareStringsbyBytes(todoItem.todoTitle, EMPTY_TODO.todoTitle));
    	assert(sampleTodos.compareStringsbyBytes(todoItem.todoDescription, EMPTY_TODO.todoDescription));
	}
}