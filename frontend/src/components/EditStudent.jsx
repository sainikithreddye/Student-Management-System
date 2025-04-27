import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FaUserPlus, 
  FaIdCard, 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaGraduationCap,
  FaCalendarCheck,
  FaToggleOn 
} from 'react-icons/fa';
import { toast } from 'react-toastify';

function EditStudent() {
  const { studentId } = useParams();  // Get studentId from URL params
  const [student, setStudent] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: 'Computer Science',
    enrollmentYear: new Date().getFullYear(),
    isActive: true
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch student data by studentId when component mounts
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`https://student-management-system-19g4.onrender.com/students/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        toast.error(`Error fetching student data: ${error.message}`);
      }
    };

    if (studentId) {
      fetchStudentData();
    }
  }, [studentId]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setStudent({ 
      ...student, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://student-management-system-19g4.onrender.com/students/${studentId}`, student);
      toast.success('Student updated successfully!');
      navigate('/students');
    } catch (error) {
      toast.error(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, i) => currentYear - i
  );

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-lg">
        <div className="card-header bg-gradient-primary text-black">
          <h2 className="mb-0 d-flex align-items-center">
            <FaUser className="me-2" />
            Edit Student
          </h2>
        </div>

        <div className="card-body p-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                {/* Student ID */}
                <div className="mb-3">
                  <label htmlFor="studentId" className="form-label">
                    <FaIdCard className="me-2" />
                    Student ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    placeholder="Enter student ID"
                    value={student.studentId}
                    onChange={handleChange}
                    required
                    pattern="[a-zA-Z0-9]+"
                    title="Alphanumeric characters only"
                    disabled
                  />
                </div>

                {/* First Name */}
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    <FaUser className="me-2" />
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter first name"
                    value={student.firstName}
                    onChange={handleChange}
                    required
                    minLength="2"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="me-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={student.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Department */}
                <div className="mb-3">
                  <label htmlFor="department" className="form-label">
                    <FaGraduationCap className="me-2" />
                    Department
                  </label>
                  <select
                    className="form-select"
                    id="department"
                    name="department"
                    value={student.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Civil">Civil</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    <FaCalendarAlt className="me-2" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={student.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
                {/* Last Name */}
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    <FaUser className="me-2" />
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter last name"
                    value={student.lastName}
                    onChange={handleChange}
                    required
                    minLength="2"
                  />
                </div>

                {/* Enrollment Year */}
                <div className="mb-3">
                  <label htmlFor="enrollmentYear" className="form-label">
                    <FaCalendarCheck className="me-2" />
                    Enrollment Year
                  </label>
                  <select
                    className="form-select"
                    id="enrollmentYear"
                    name="enrollmentYear"
                    value={student.enrollmentYear}
                    onChange={handleChange}
                    required
                  >
                    {yearOptions.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Active Status */}
                <div className="mb-4 form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="isActive"
                    name="isActive"
                    checked={student.isActive}
                    onChange={handleChange}
                  />
                  <label htmlFor="isActive" className="form-check-label">
                    <FaToggleOn className="me-2" />
                    {student.isActive ? 'Active Student' : 'Inactive Student'}
                  </label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    <FaUserPlus className="me-2" />
                    Update Student
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
