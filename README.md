# Unresponsive Node.js Server Due to Long-Running Request Handler

This repository demonstrates a common issue in Node.js applications where a long-running operation in a request handler can make the server unresponsive to other requests.  The example uses a `setTimeout` to simulate a long-running task, but this could be any synchronous or blocking operation.

## Problem

Node.js is single-threaded. When a request handler executes a long-running synchronous operation, the entire event loop is blocked, preventing the server from handling other incoming requests. This leads to unresponsiveness and poor performance.

## Solution

The solution is to use asynchronous operations, thereby allowing the event loop to continue processing other requests while the long-running task completes in the background.  The solution utilizes promises or async/await which makes the code cleaner and more readable.