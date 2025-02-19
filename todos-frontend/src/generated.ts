import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Todos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const todosAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'EMPTY_TODO',
    outputs: [
      { name: 'todoID', internalType: 'uint256', type: 'uint256' },
      { name: 'todoTitle', internalType: 'string', type: 'string' },
      { name: 'todoDescription', internalType: 'string', type: 'string' },
      { name: 'completed', internalType: 'bool', type: 'bool' },
      { name: 'todoOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 's1', internalType: 'string', type: 'string' },
      { name: 's2', internalType: 'string', type: 'string' },
    ],
    name: 'compareStringsbyBytes',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_todoTitle', internalType: 'string', type: 'string' },
      { name: '_todoDescription', internalType: 'string', type: 'string' },
    ],
    name: 'createTodo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_todoId', internalType: 'uint256', type: 'uint256' }],
    name: 'deleteTodo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_todoId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTodo',
    outputs: [
      {
        name: '',
        internalType: 'struct Todos.TodoItem',
        type: 'tuple',
        components: [
          { name: 'todoID', internalType: 'uint256', type: 'uint256' },
          { name: 'todoTitle', internalType: 'string', type: 'string' },
          { name: 'todoDescription', internalType: 'string', type: 'string' },
          { name: 'completed', internalType: 'bool', type: 'bool' },
          { name: 'todoOwner', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'getTodosByOwner',
    outputs: [
      {
        name: '',
        internalType: 'struct Todos.TodoItem[]',
        type: 'tuple[]',
        components: [
          { name: 'todoID', internalType: 'uint256', type: 'uint256' },
          { name: 'todoTitle', internalType: 'string', type: 'string' },
          { name: 'todoDescription', internalType: 'string', type: 'string' },
          { name: 'completed', internalType: 'bool', type: 'bool' },
          { name: 'todoOwner', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ownerToTodos',
    outputs: [
      { name: 'todoID', internalType: 'uint256', type: 'uint256' },
      { name: 'todoTitle', internalType: 'string', type: 'string' },
      { name: 'todoDescription', internalType: 'string', type: 'string' },
      { name: 'completed', internalType: 'bool', type: 'bool' },
      { name: 'todoOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'todoIncrement',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'todos',
    outputs: [
      { name: 'todoID', internalType: 'uint256', type: 'uint256' },
      { name: 'todoTitle', internalType: 'string', type: 'string' },
      { name: 'todoDescription', internalType: 'string', type: 'string' },
      { name: 'completed', internalType: 'bool', type: 'bool' },
      { name: 'todoOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_todoId', internalType: 'uint256', type: 'uint256' },
      { name: '_todoTitle', internalType: 'string', type: 'string' },
      { name: '_todoDescription', internalType: 'string', type: 'string' },
    ],
    name: 'updateTodo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'todoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'TodoCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'todoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'TodoDeleted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'todoId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'TodoUpdated',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3undefined = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3undefined =
  /*#__PURE__*/ createUseWriteContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3undefined =
  /*#__PURE__*/ createUseSimulateContract({ abi: iMulticall3Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__
 */
export const useReadTodosundefined = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"EMPTY_TODO"`
 */
export const useReadTodosEmptyTodo = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'EMPTY_TODO',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"compareStringsbyBytes"`
 */
export const useReadTodosCompareStringsbyBytes =
  /*#__PURE__*/ createUseReadContract({
    abi: todosAbi,
    functionName: 'compareStringsbyBytes',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"getTodo"`
 */
export const useReadTodosGetTodo = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'getTodo',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"getTodosByOwner"`
 */
export const useReadTodosGetTodosByOwner = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'getTodosByOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"ownerToTodos"`
 */
export const useReadTodosOwnerToTodos = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'ownerToTodos',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"todoIncrement"`
 */
export const useReadTodosTodoIncrement = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'todoIncrement',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"todos"`
 */
export const useReadTodosTodos = /*#__PURE__*/ createUseReadContract({
  abi: todosAbi,
  functionName: 'todos',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__
 */
export const useWriteTodosundefined = /*#__PURE__*/ createUseWriteContract({
  abi: todosAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"createTodo"`
 */
export const useWriteTodosCreateTodo = /*#__PURE__*/ createUseWriteContract({
  abi: todosAbi,
  functionName: 'createTodo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"deleteTodo"`
 */
export const useWriteTodosDeleteTodo = /*#__PURE__*/ createUseWriteContract({
  abi: todosAbi,
  functionName: 'deleteTodo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"updateTodo"`
 */
export const useWriteTodosUpdateTodo = /*#__PURE__*/ createUseWriteContract({
  abi: todosAbi,
  functionName: 'updateTodo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__
 */
export const useSimulateTodosundefined =
  /*#__PURE__*/ createUseSimulateContract({ abi: todosAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"createTodo"`
 */
export const useSimulateTodosCreateTodo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todosAbi,
    functionName: 'createTodo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"deleteTodo"`
 */
export const useSimulateTodosDeleteTodo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todosAbi,
    functionName: 'deleteTodo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todosAbi}__ and `functionName` set to `"updateTodo"`
 */
export const useSimulateTodosUpdateTodo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todosAbi,
    functionName: 'updateTodo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todosAbi}__
 */
export const useWatchTodosundefined = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: todosAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todosAbi}__ and `eventName` set to `"TodoCreated"`
 */
export const useWatchTodosTodoCreated =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: todosAbi,
    eventName: 'TodoCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todosAbi}__ and `eventName` set to `"TodoDeleted"`
 */
export const useWatchTodosTodoDeleted =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: todosAbi,
    eventName: 'TodoDeleted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todosAbi}__ and `eventName` set to `"TodoUpdated"`
 */
export const useWatchTodosTodoUpdated =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: todosAbi,
    eventName: 'TodoUpdated',
  })
