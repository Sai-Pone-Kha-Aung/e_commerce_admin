"use client";

import { Heading } from "@/components/organisms/header/header";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
    data: OrderColumn[]
}

export const SizesClient: React.FC<OrderClientProps> = ({data}) => {


    return (
        <>
        <Heading
            title={`Orders (${data.length})`}
            description="Manage your order here."
            />
        <Separator/>
        <DataTable columns={columns} data={data} searchKey="products"/>
        </>
    )
}
