declare global {
  interface Window {
    DzHaven: any
  }
}

export type TaskModel = ReturnType<typeof window.DzHaven.TaskModel>;