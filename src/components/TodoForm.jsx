import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { databases } from "../appwrite/appwriteConfig";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "647c282a00d84e9163f4",
      "647c283464a5d972fd1a",
      uuidv4(),
      {
        todo,
      }
    );
    console.log(promise);
    promise.then(
      function (response) {
        window.location.reload();
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    e.target.reset();
  };
  return (
    <>
      <div className="max-w-7xl mx-auto mt-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center mb-10"
        >
          <label htmlFor="todo">{""}</label>
          <input
            type="text"
            name=""
            id="todo" //COMMENT:ID todo
            placeholder="What's need to be done?"
            className="border p-2 w-2/3 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:ring-offset-1"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            className="bg-yellow-600 p-2 text-white ml-2 rounded-md"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoForm;