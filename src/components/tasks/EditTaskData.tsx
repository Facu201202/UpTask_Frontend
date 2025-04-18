import { Navigate, useLocation, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getTaskById } from "@/api/TaskApi"
import EditTaskModal from "./EditTaskModal"

export default function EditTaskData() {
    const params = useParams()
    const projectId = params.projectId!

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const editTask = queryParams.get("editTask")!

    const { data, isError } = useQuery({
        queryKey: ["task", editTask],
        queryFn: () => getTaskById({ projectId, editTask }),
        enabled: !!editTask,
        retry: false
    })

    if (isError) return <Navigate to={"/404"} />

    if (data) return <EditTaskModal data={data} editTask={editTask} />
}
