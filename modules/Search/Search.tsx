"use client";
import { FormEvent } from "react";

export default function SearchModule() {
  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-2">
          <label htmlFor="q" className="text-base text-slate-800">
            Enter keyword below:
          </label>
          <input
            type="text"
            name="q"
            id="q"
            className="border w-full px-2 py-1"
            autoComplete="off"
          />
        </div>
      </form>
      <div role="list" className="block w-full">
        {/* product-item must be placed here */}
      </div>
    </div>
  );
}
