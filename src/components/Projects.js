import React from "react"
import TaskColumn from "./TaskColumn"

export default function Board() {
  return (
    <>
      <TaskColumn title="Build smth" subtasks="0 of 3 Subtasks" />
      <TaskColumn title="Build smth" subtasks="0 of 3 Subtasks" />
      <TaskColumn title="Build smth" subtasks="0 of 3 Subtasks" />
      <TaskColumn title="Build smth" subtasks="0 of 3 Subtasks" />
    </>
  )
}
