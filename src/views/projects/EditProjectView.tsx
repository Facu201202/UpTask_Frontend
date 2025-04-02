import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectsById } from "@/api/projectApi"
import EditProjectForm from "@/components/projects/EditProjectForm"

export default function EditProjectView() {
    const params = useParams()
    const projectid = params.projectId!

    const { data, isLoading, isError } = useQuery({
        queryKey: ["editProject", projectid],
        queryFn: () => getProjectsById(projectid),
        retry: false
    })

    console.log(data)

    if (isLoading) return "Cargando..."
    if (isError) return <Navigate to={"/404"} />

    if(data) return <EditProjectForm data={data} projectId={projectid}/>
}
