"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@heroui/input";
import { Textarea } from "@heroui/input";
import {Button} from "@heroui/button";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { FaArrowLeft, FaUpload } from "react-icons/fa";

const courseSchema = z.object({
  title: z.string().min(5, "Title is required"),
  language: z.string().nonempty("Language is required"),
  duration: z.string().nonempty("Duration is required"),
  description: z.string().min(10, "Description is required"),
  thumbnail: z.string(),
});

type CourseFormValues = z.infer<typeof courseSchema>;

export default function CourseForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit = (data: CourseFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <button className="flex items-center text-gray-600 mb-4">
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      <h2 className="text-xl font-bold text-gray-800 mb-4">Create a Course</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Title <span className="text-red-500">*</span>
          </label>
          <Input placeholder="Enter course title" {...register("title")} />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Language <span className="text-red-500">*</span>
          </label>
          <Select onSelectionChange={(value) => setValue("language", value as string)}>
            <SelectSection>
              <SelectItem key="English" value="English">English</SelectItem>
              <SelectItem key="Spanish" value="Spanish">Spanish</SelectItem>
              <SelectItem key="French" value="French">French</SelectItem>
            </SelectSection>
          </Select>
          {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Course Duration <span className="text-red-500">*</span>
          </label>
          <Select onSelectionChange={(value) => setValue("duration", value as string)}>
            <SelectSection>
              <SelectItem key="3 Months" value="3 Months">3 Months</SelectItem>
              <SelectItem key="6 Months" value="6 Months">6 Months</SelectItem>
              <SelectItem key="12 Months" value="12 Months">12 Months</SelectItem>
            </SelectSection>
          </Select>
          {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <Textarea placeholder="Enter course description" {...register("description")} />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Thumbnail <span className="text-red-500">*</span>
          </label>
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-600 cursor-pointer">
            <FaUpload className="text-2xl mb-2" />
            <p className="text-sm">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-500 mt-1">Aspect Ratio: 16:9 | 1024x576</p>
          </div>
          {errors.thumbnail && <p className="text-red-500 text-sm mt-1">{errors.thumbnail.message}</p>}
        </div>

        <Button type="submit" className="w-full bg-custom-green-400 hover:bg-custom-green-700 text-white font-bold py-2 rounded-lg">
          Create Course
        </Button>
      </form>
    </div>
  );
}
