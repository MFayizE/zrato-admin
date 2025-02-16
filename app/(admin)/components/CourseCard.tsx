import { FaEllipsisV } from "react-icons/fa";

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  status: string;
  instructor: string;
  studentsEnrolled: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, duration, description, status, instructor, studentsEnrolled }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md w-[340px] border border-gray-200">

      <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <FaEllipsisV />
      </button>


      <div className={`px-3 py-1 text-sm font-semibold rounded-full w-fit ${status === "Active" ? "bg-custom-green-100 text-custom-green-700" : "bg-warning-100 text-warning-700"}`}>
        {status}
      </div>


      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{duration}</p>

      <p className="text-gray-600 mt-2 text-sm">{description}</p>

      <div className="mt-5 border-t pt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <img src="/instructor.jpg" alt="Instructor" className="w-8 h-8 rounded-full border border-gray-200" />
          <span className="font-medium">{instructor}</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex -space-x-1">
            <img className="w-7 h-7 rounded-full border border-white" src="/student1.jpg" alt="Student" />
          </div>
          <span className="text-gray-700 text-sm font-semibold">{studentsEnrolled}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
