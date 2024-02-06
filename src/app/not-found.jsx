"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
  return (
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 flex-col">
              <FileSearch size={44} className="text-[#ffc639]"/>
              <h3 className="text-[#ffc639] text-4xl font-bold">NOT FOUND</h3>
              <Link href="/" className="text-black hover:text-[#ffc639] transition-all underline">
                Kembali
              </Link>
          </div>
    </div>
  )
}

export default Page;