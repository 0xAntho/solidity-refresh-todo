import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useWatchTodosTodoCreated, useWatchTodosTodoDeleted, useWatchTodosTodoUpdated, useWriteTodosCreateTodo, useWriteTodosDeleteTodo, useWriteTodosUpdateTodo } from './generated.ts'
import { type FormEvent, useState } from 'react';
import { config } from './wagmi.ts';
import type { Address } from 'viem';

const contractAddress: Address = "0x4B3E4De7b04bBCd1890dd9Ae05C4ED580e9e9e05";

function CreateTodoForm() {
	useWatchTodosTodoCreated({
    	config: config,
    	address: contractAddress,
    	onLogs(logs) {
        	console.log('Event says "created a todo"', logs)
    	},
	});
	const [todoTitle, setTodoTitle] = useState<string>("");
	const [todoDescription, setTodoDescription] = useState<string>("");
	const { writeContractAsync } = useWriteTodosCreateTodo(
    	{
        	config: config
    	}
	);

	const submitCreateTodo = async (e: FormEvent
	) => {
    	e.preventDefault();

    	await writeContractAsync({
        	address: contractAddress,
        	args: [todoTitle, todoDescription]
    	});
    	setTodoTitle("");
    	setTodoDescription("");
	}

	return (<>
    	<form onSubmit={(e) => submitCreateTodo(e)}>
        	<input type="text" name="todo-title" value={todoTitle} placeholder='Todo Title' onChange={(e) => setTodoTitle(e.target.value)} />
        	<textarea
            	rows={5}
            	name="todo-description"
            	placeholder="What's on your mind?"
            	value={todoDescription}
            	onChange={(e) =>
                	setTodoDescription(e.target.value)
            	}
        	/>
        	<button type="submit">Submit New Todo</button>
    	</form>
	</>)
}

function DeleteTodoForm() {
	useWatchTodosTodoDeleted({
    	config: config,
    	address: contractAddress,
    	onLogs(logs) {
        	console.log('Event says "deleted a todo"', logs)
    	}
	})
	const [todoId, setTodoId] = useState<number>(0);
	const { writeContractAsync } = useWriteTodosDeleteTodo({
    	config: config
	})

	const submitDeleteTodo = async (e: FormEvent) => {
    	e.preventDefault();

    	await writeContractAsync(
        	{
            	address: contractAddress,
            	args: [BigInt(todoId)]
        	}
    	)
    	setTodoId(0);
	}
	return (<>
    	<form onSubmit={(e) => submitDeleteTodo(e)}>
        	<input type="number" name="todo-id" value={todoId} placeholder='Todo ID' onChange={(e) => setTodoId(Number.parseInt(e.target.value))} />
        	<button type="submit">Delete Todo By ID</button>
    	</form>
	</>)
}

function UpdateTodoForm() {
	useWatchTodosTodoUpdated({
    	config: config,
    	address: contractAddress,
    	onLogs(logs) {
        	console.log('Event says "updated a todo"', logs)
    	},
	});
	const [todoId, setTodoId] = useState<number>(0);
	const [todoTitle, setTodoTitle] = useState<string>("");
	const [todoDescription, setTodoDescription] = useState<string>("");
	const { writeContractAsync } = useWriteTodosUpdateTodo(
    	{
        	config: config
    	}
	);
	const submitUpdateTodo = async (e: FormEvent
	) => {
    	e.preventDefault();

    	await writeContractAsync({
        	address: contractAddress,
        	args: [BigInt(todoId), todoTitle, todoDescription]
    	});

    	setTodoTitle("");
    	setTodoDescription("");
    	setTodoId(0);

	}
	return (<>
    	<form onSubmit={(e) => submitUpdateTodo(e)}>
        	<input type="number" name="todo-id" value={todoId} placeholder='Todo ID' onChange={(e) => setTodoId(Number.parseInt(e.target.value))} />
        	<input type="text" name="todo-title" value={todoTitle} placeholder='Todo Title' onChange={(e) => setTodoTitle(e.target.value)} />
        	<textarea
            	rows={5}
            	name="todo-description"
            	placeholder="Update your todo here."
            	value={todoDescription}
            	onChange={(e) =>
                	setTodoDescription(e.target.value)
            	}
        	/>
        	<button type="submit">Submit Updated Todo</button>
    	</form>
	</>)
}

function App() {
	const account = useAccount()
	const { connectors, connect, status, error } = useConnect()
	const { disconnect } = useDisconnect();

	return (
    	<>
        	<div>
            	<h2>Account</h2>

            	<div>
                	status: {account.status}
                	<br />
                	addresses: {JSON.stringify(account.addresses)}
                	<br />
                	chainId: {account.chainId}
            	</div>

            	{account.status === 'connected' && (
                	<button type="button" onClick={() => disconnect()}>
                    	Disconnect
                	</button>
            	)}
        	</div>

        	<div>
            	<h2>Connect</h2>
            	{connectors.map((connector) => (
                	<button
                    	key={connector.uid}
                    	onClick={() => connect({ connector })}
                    	type="button"
                	>
                    	{connector.name}
                	</button>
            	))}
            	<div>{status}</div>
            	<div>{error?.message}</div>
            	<div className="card">
                	<CreateTodoForm />
            	</div>
            	<div className='card'>
                	<UpdateTodoForm />
            	</div>
            	<div className='card'>
                	<DeleteTodoForm />
            	</div>
        	</div>
    	</>
	)
}

export default App;