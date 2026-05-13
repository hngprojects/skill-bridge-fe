"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Lock, Camera } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfileFormValues {
  region: string;
  education: string;
  linkedin: string;
  profileImage?: File;
}

const CompleteProfileStep = () => {
  const { register, setValue, handleSubmit } = useForm<ProfileFormValues>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("profileImage", file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-6 w-full max-w-2xl font-sans"
    >
      {/* Photo Section */}
      <div className="flex flex-row items-center gap-6">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="relative w-20 h-20 bg-border rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
        >
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Profile preview"
              fill
              className="object-cover"
            />
          ) : (
            <Camera className="w-9 h-9 text-muted-foreground" />
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="flex flex-col">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-base font-medium underline text-primary text-left"
          >
            Upload photo
          </button>
          <span className="text-sm font-light text-muted-foreground">
            Recommended size is 400 x 300
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full gap-7">
        {/* Read-Only: Full Name */}
        <div className="flex flex-col gap-1.25 w-full">
          <label className="text-base font-medium text-primary">
            Full name
          </label>
          <div className="flex flex-row justify-between items-center px-4 py-2.5 h-11 bg-background border border-border rounded-sm">
            <span className="text-muted-foreground font-normal">
              Alex Smith
            </span>
            <Lock className="w-5 h-5 text-border" />
          </div>
        </div>

        {/* Read-Only: Email */}
        <div className="flex flex-col gap-1.25 w-full">
          <label className="text-base font-medium text-primary">Email</label>
          <div className="flex flex-row justify-between items-center px-4 py-2.5 h-11 bg-background border border-border rounded-sm">
            <span className="text-muted-foreground font-normal">
              alexsmith75@gmail.com
            </span>
            <Lock className="w-5 h-5 text-border" />
          </div>
        </div>

        {/* Region Select */}
        <div className="flex flex-col gap-1.25 w-full">
          <label className="text-base font-medium text-primary">
            Select your region
          </label>
          <Select onValueChange={(val) => setValue("region", val)}>
            <SelectTrigger className="w-full h-11 px-4 border-border rounded-sm bg-background shadow-none focus:ring-1 focus:ring-primary">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="south-america">South America</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Education Select */}
        <div className="flex flex-col gap-1.25 w-full">
          <label className="text-base font-medium text-primary">
            What is your highest level of education?
          </label>
          <Select onValueChange={(val) => setValue("education", val)}>
            <SelectTrigger className="w-full h-11 px-4 border-border rounded-sm bg-background shadow-none focus:ring-1 focus:ring-primary">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high-school">High School</SelectItem>
              <SelectItem value="bachelors">Bachelor&apos;s Degree</SelectItem>
              <SelectItem value="masters">Master&apos;s Degree</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* LinkedIn Profile */}
        <div className="flex flex-col gap-1.25 w-full">
          <label className="text-base font-medium text-primary leading-5 tracking-tight">
            Connect your LinkedIn profile
          </label>
          <div className="relative flex items-center border border-border rounded-sm group focus-within:border-primary transition-colors">
            <input
              {...register("linkedin")}
              type="text"
              className="w-full bg-background outline-none text-sm text-primary placeholder:text-muted-foreground/30 px-4 py-2.5 h-11 rounded-sm pr-10"
            />
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-3 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path d="M7.5 9.5H5V19H7.5V9.5Z" fill="white" />
                <circle cx="6.25" cy="6.75" r="1.5" fill="white" />
                <path
                  d="M19 19H16.5V14C16.5 12.9 15.9 12 14.75 12C13.6 12 13 12.9 13 14V19H10.5V9.5H13V10.8C13.5 9.9 14.6 9.2 16 9.2C17.9 9.2 19 10.5 19 13V19Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CompleteProfileStep;
