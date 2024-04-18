"use client"

import { useRouter, useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}
export const ApiList: React.FC<ApiListProps> = ({
    entityName, entityIdName
}) => {

    const router = useRouter();
    const params = useParams();

    const baseUrl = `${origin}/api/${params.storeId}`

    return(
        <>
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}`}
            />
            <ApiAlert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}/${entityIdName}`}
            />
            <ApiAlert
                title="POST"
                variant="admin"
                description={`${baseUrl}/${entityName}`}
            />
             <ApiAlert
                title="PATCH"
                variant="admin"
                description={`${baseUrl}/${entityName}/${entityIdName}`}
            />
             <ApiAlert
                title="DELETE"
                variant="admin"
                description={`${baseUrl}/${entityName}/${entityIdName}`}
            />
        </>
    )
}

export default ApiList;