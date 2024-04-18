"use client";

import { Heading } from "@/components/organisms/header/header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams ,useRouter} from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";


interface SizeClientProps {
    data: SizeColumn[]
}

export const SizesClient: React.FC<SizeClientProps> = ({data}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
        <div className="flex items-center justify-between">
            <Heading
                title={`Sizes (${data.length})`}
                description="Manage your products sizes here."
                />
            <Button
                onClick={() => router.push(`/${params.storeId}/sizes/new`)}
            >
                <Plus className="mr-2 h-4 w-4"/>
                Add New
            </Button>
        </div>
        <Separator/>
        <DataTable columns={columns} data={data} searchKey="label"/>
        <Heading title="API" description="API Calls for Sizes"/>
        <Separator/>
        <ApiList entityName="sizes" entityIdName="sizeId"/>
        </>
    )
}
