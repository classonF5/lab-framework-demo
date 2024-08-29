import { APIBase } from "@/lib/api-base"

/**
 * APICheck component
 * 
 * This component renders information about an API check, including the URL and component name.
 * It also includes the APIBase component to perform the actual API check.
 * 
 * @param {Object} props - The properties object.
 * @param {string} [props.componentName=null] - The name of the component to check.
 * @param {string} [props.path="/"] - The path to append to the URL for the API check.
 * @param {number} [props.targetStatusCode=200] - The expected HTTP status code from the API check.
 * @param {string} [props.url=null] - The URL to check.
 * @param {boolean} [props.tlsComponent=false] - If a component name is specified, use TLS (https) to connect to the component. Default is no TLS (http).
 * 
 * @returns {JSX.Element} The rendered component.
 * 
 * * @example
 *  <APICheck 
 *    componentName="ExampleComponent" 
 *    path="/example-path" 
 *    targetStatusCode={200} 
 *    url="https://api.example.com" 
 *    tlsComponent={false}
 *  />
 */
export function APICheck({
  componentName = null,
  path = "/",
  targetStatusCode = 200,
  url = null,
  tlsComponent = false
}) {
  return (
    <div className="flex flex-col border border-gray-300 p-4 rounded max-w-md">
      <span className="font-bold text-xl">API Check</span>
      <div className="mt-2 ml-4">
        {url && (
          <div className="mb-1">
            <span className="font-bold">URL:</span> <span className="font-normal">{url}</span>
          </div>
        )}
        {componentName && (
          <div className="mb-1">
            <span className="font-bold">Component Name:</span> <span className="font-normal">{componentName}</span>
          </div>
        )}
        <div className="mb-1">
          <span className="font-bold">Path:</span> <span className="font-normal">{path}</span>
        </div>
        <div className="mb-1">
          <span className="font-bold">Target Response Status Code:</span> <span className="font-normal">{targetStatusCode}</span>
        </div>
      </div>
      <div className="block m-4">
        <APIBase
          componentName={componentName}
          path={path}
          targetStatusCode={targetStatusCode}
          url={url}
          tlsComponent={tlsComponent}
        />
      </div>
    </div>
  );
}
