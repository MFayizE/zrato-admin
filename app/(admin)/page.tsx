import Link from "next/link";
import CourseCard from "./components/CourseCard";
import { Button } from "@heroui/button";

const courses = [
  {
    title: "Full Stack Development",
    duration: "6 Months",
    description: "MERN Stack + React Comprehensive Course.",
    status: "Active",
    instructor: "Rohith Rosh",
    studentsEnrolled: 120,
  },
  {
    title: "Artificial Intelligence and ML",
    duration: "6 Months",
    description: "MERN Stack + React Comprehensive Course.",
    status: "Draft",
    instructor: "Rohith Rosh",
    studentsEnrolled: 120,
  },
];

export default function CoursesPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between">
      <h2 className="text-2xl font-bold text-gray-900">Courses</h2>
      <Link href={'/create'}>
      <Button type="submit" className="w-full bg-custom-green-400 hover:bg-custom-green-700 text-black font-bold py-2 rounded-full">
          New Course
        </Button>
      </Link>
   
      </div>
      
      <p className="text-gray-500">Create and manage courses offered by your institution.</p>

      <div className="mt-6 flex space-x-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
