import prismadb from "@/lib/prismadb";

export const getStocksCount = async (storeId:string) => {
    const stocksCount = await prismadb.product.count({
        where: {
            storeId: storeId,
            isArchived: false,
        },

    })

    return stocksCount;
}