import { isAxiosError } from "axios";
import api from "@/lib/axios";
import { Project, Task, TaskFormData, TaskSchema } from "../types";

type TaskAPI = {
    formData: TaskFormData,
    projectId: Project["_id"],
    editTask: Task["_id"],
    status: Task["status"]
}


export async function createTask({ formData, projectId }: Pick<TaskAPI, "formData" | "projectId">) {
    try {
        const url = `/projects/${projectId}/tasks`
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getTaskById({ projectId, editTask }: Pick<TaskAPI, "projectId" | "editTask">) {
    try {
        const url = `/projects/${projectId}/tasks/${editTask}`
        const { data } = await api(url)
        const response = TaskSchema.safeParse(data)
        if(response.success){
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function updateTask({ formData, projectId, editTask }: Pick<TaskAPI, "formData" | "editTask" | "projectId">) {
    try {
        const url = `/projects/${projectId}/tasks/${editTask}`
        const { data } = await api.put<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function deleteTask({ projectId, editTask }: Pick<TaskAPI, "projectId" | "editTask">) {
    try {
        const url = `/projects/${projectId}/tasks/${editTask}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateStatus({ projectId, editTask, status }: Pick<TaskAPI, "projectId" | "editTask" | "status">) {
    try {
        const url = `/projects/${projectId}/tasks/${editTask}/status`
        const { data } = await api.post<string>(url, {status})
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
