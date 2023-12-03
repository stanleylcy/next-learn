import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import "./index.css"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/data-table/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
