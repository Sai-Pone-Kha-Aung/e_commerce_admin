import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { SettingForm } from "@/app/(dashboard)/[storeId]/(routes)/settings/components/setting-form";

interface SettingPageProps {
    params: {
        storeId: string
    }
}

const SettingPage: React.FC<SettingPageProps> = async({
    params
}) => {

    const { userId } = auth();

    if(!userId){
        redirect('./sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId: userId
        }
    })

    if(!store){
        redirect('./');
    }

    return (
        <div className="flex-col">
            <div>
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <SettingForm initialData={store}/>
                </div>
            </div>

        </div>
    );
}

export default SettingPage;