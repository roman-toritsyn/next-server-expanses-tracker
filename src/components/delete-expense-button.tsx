"use client";

import { deleteExpense } from "@/actions/actions";

type DeleteExpenseButtonProps = {
  id: number;
};

export default function DeleteExpenseButton({ id }: DeleteExpenseButtonProps) {
  return (
    <button
      onClick={async () => {
        await deleteExpense(id);
      }}
      className="text-[10px] h-[20px] w-[20px] bg-red-500 text-white rounded hover:bg-red-600 duration-300"
    >
      X
    </button>
  );
}
