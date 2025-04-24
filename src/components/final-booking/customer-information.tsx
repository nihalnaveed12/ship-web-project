"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CustomerInformationForm() {
  const [transfer, setTransfer] = useState("yes")

  return (
    <div className="shadow-md rounded-[14px]">
      <div className="p-6 pb-0">
        <h1 className="text-2xl font-bold mb-4">Customer Information</h1>
        <div className="h-1.5 bg-blue-600 mb-4"></div>

        <h2 className="text-lg font-medium mb-6">Main Contact</h2>
      </div>

      <form className="p-6 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="font-medium">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input id="fullName" className="border border-gray-300 h-10 rounded" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-medium">
              Your Email <span className="text-red-500">*</span>
            </Label>
            <Input id="email" type="email" className="border border-gray-300 h-10 rounded" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="font-medium">
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input id="phone" type="tel" className="border border-gray-300 h-10 rounded" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="font-medium">
              Address <span className="text-red-500">*</span>
            </Label>
            <Input id="address" className="border border-gray-300 h-10 rounded" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="font-medium">
              Country <span className="text-red-500">*</span>
            </Label>
            <Input id="country" className="border border-gray-300 h-10 rounded" defaultValue="Cyprus" required />
          </div>

          <div className="col-span-1"></div>

          <div className="space-y-2">
            <Label htmlFor="hotel" className="font-medium">
              1. Hotel <span className="text-red-500">*</span>
            </Label>
            <Input id="hotel" className="border border-gray-300 h-10 rounded" required />
          </div>

          <div className="space-y-2">
            <Label className="font-medium">
              2. Transfer <span className="text-red-500">*</span>
            </Label>
            <RadioGroup value={transfer} onValueChange={setTransfer} className="flex items-center gap-4 pt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" className="text-blue-600" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </form>
    </div>
  )
}
