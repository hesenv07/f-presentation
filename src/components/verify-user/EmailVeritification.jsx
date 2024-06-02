'use client'
export default function EmailVeritification({ email}) {
    return (
      <div className="bg-white h-screen ">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Check your email
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            To protect your account, we've sent a verification email to <span className="font-semibold">{email}</span> Please click the link in that email to verify your identity
            </p>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Didn't receive an email? Check your spam folder, or <span onClick={()=>null} className="font-semibold cursor-pointer">send again</span> 
            </p>
          </div>
        </div>
      </div>
    )
  }
  