'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'

const MobileHeader = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="left">
      <DrawerTrigger asChild className="md:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="md:hidden flex flex-col gap-2">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-2xl font-bold text-green-800">BrainWell</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter>
          <Button
            className="bg-[#FDF2E9] w-full text-green-800 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-green-100 transition-all"
            onClick={() => router.push('/sign-in')}
          >
            Login
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileHeader
