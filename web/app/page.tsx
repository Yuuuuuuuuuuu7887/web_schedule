import { loginAction } from '@/actions/login.action'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Image from "next/image";

export default function Page() {
  return (
    <body className="bg-[#EEEEEE]">

      <div className="flex h-dvh items-center justify-center backgroung">
        <Card className='w-full max-w-sm p-8 shadow-md'>
          <div className="w-full flex justify-center">
            <Image
              src="/logo1.png"
              alt="logo1"
              width={221}
              height={102}
              priority
            />
          </div>

          <div className="p-4">
            <form action={loginAction} className="space-y-4">
              <div>
                <label htmlFor="uname" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  id="uname"
                  className="w-full h-[39px] border border-gray-300 rounded-15px px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
                <label htmlFor="uname" className="block mt-6 text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  className="w-full h-[39px] border border-gray-300 rounded-15px px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              
              <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <button
                    className="rounded-15px mt-6 w-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#000000] text-[#ffffff] gap-6 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-8 sm:h-10 px-4 sm:px-5"
                    // href="/"
                    type="submit"
                  >
                    LOG IN
                  </button>
              </div>
 
            </form>
          </div>


        </Card>
      </div>
    </body>
  );
}
