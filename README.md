# React Hook for Better Hooks Usage

## Introduction

Welcome to the React Hook repository! This repo is dedicated to demonstrating efficient use of React Hooks. Each hook is designed to solve common issues and improve code readability and maintainability.

## Key Points
UseReducer made useState(UseReducer is a state management hook)<br>
UseReduer (reducer,initialState)<br>
UseReducer newState=reducer(currentState,action)<br>
UseReducer return a pair of values [newState,dispatch]<br>

useState vs useReducer
| Scenario                         | `useState`                            | `useReducer`                             |
|----------------------------------|---------------------------------------|------------------------------------------|
| **Types of state**               | Number, string, boolean               | Object or array                          |
| **Number of state transitions**  | One or two                            | Too many (multiple state transitions)    |
| **Related state transitions**    | No                                    | Yes                                      |
| **Local vs Global**              | Local                                 | Global                                   |


## Installation

To get started with the repository, follow these steps:

```bash
git clone https://github.com/Runtime-Error3490/React_Hooks.git
cd React_Hooks
cd <hook-directory>
npm install
npm run dev


