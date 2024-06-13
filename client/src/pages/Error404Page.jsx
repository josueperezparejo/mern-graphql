import { useNavigate } from "react-router-dom";

export const Error404Page = () => {

  const navigate = useNavigate()

  return (
    <section className="flex items-center h-screen p-16 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl">Sorry, we couldn't find this page.</p>
          <button onClick={() => navigate('/', { replace: true })} className="px-8 py-4 text-xl font-semibold rounded bg-green-500 text-gray-50 hover:text-gray-200" size="lg" >Back to Nexus it</button>
        </div>
      </div>
    </section>
  )
}