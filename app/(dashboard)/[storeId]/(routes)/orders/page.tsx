import prismadb from "@/lib/prismadb";

import { SizesClient } from "./components/client";
import { OrderColumn } from "./components/columns";
import {format} from "date-fns";
import { formatter } from "@/lib/utils";

const OrderPage = async ({
    params
}: {
    params:{storeId: string}
}) => {
    const orders = await prismadb.order.findMany({
        where:{
            storeId: params.storeId
        },
        include: {
            orderItems: {
                include: {
                    product: true
                }
            }
        },

        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedOrder: OrderColumn[] = orders.map((item) => ({
        id: item.id,
        phone: item.phone,
        address:item.address,
        product: item.orderItems.map((item) => item.product.name).join(", "),
        totalPrice: formatter.format(item.orderItems.reduce((total,item) => {
            return total + Number(item.product.price)
        }, 0)),
        isPaid: item.isPaid,
        createdAt: format(item.createdAt, "MMMM do, yyyy")

    }))

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizesClient data={formattedOrder}/>
            </div>
        </div>
    )
}

export default OrderPage;