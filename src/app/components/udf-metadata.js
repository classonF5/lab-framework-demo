import { getUdfData } from "@/lib/data";

const UDF_DEPLOYMENT_PATH = "deployment"

/**
 * UDF component
 * @param {String} props.suffix
 * @returns {JSX.Element}
 */
export async function UdfMetadata({ suffix = "" }) {
    const data = await getUdfData(UDF_DEPLOYMENT_PATH)
    if (!data) return "Loading...";

    return (
        <div className="container mx-auto">
            <div className="max-w-fit rounded overflow-scroll shadow-2xl">
                <div className="font-bold text-xl mb-2">UDF Deployment Info: {suffix}</div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div >
    );
}
