import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaEdit, FaTrashAlt, FaIdCard, FaEnvelope, FaBirthdayCake, FaSchool, FaCalendarAlt, FaToggleOn, FaUserPlus, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

function StudentListTable() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Color scheme
  const colors = {
    primary: '#4a6fa5',    // Muted blue
    secondary: '#6b8cae',  // Lighter blue
    accent: '#ff7e5f',     // Coral accent
    light: '#f8f9fa',      // Off-white
    dark: '#343a40',       // Dark gray
    text: '#495057',       // Gray text
    success: '#28a745',    // Green
    danger: '#dc3545'      // Red
  };

  const fetchStudents = async () => {
    try {
      const res = await axios.get('https://student-management-system-19g4.onrender.com/students');
      if (res.data && Array.isArray(res.data)) {
        setStudents(res.data);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
      toast.error(`Error loading students: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`https://student-management-system-19g4.onrender.com/students/${id}`);
      toast.success('Student deleted successfully');
      fetchStudents();
    } catch (err) {
      toast.error(`Error deleting student: ${err.message}`);
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <FaSpinner 
          size={32} 
          color={colors.primary} 
          style={{ animation: 'spin 1s linear infinite' }} 
        />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        backgroundColor: `${colors.danger}20`,
        color: colors.danger,
        padding: '1rem',
        margin: '1rem',
        borderRadius: '5px',
        borderLeft: `4px solid ${colors.danger}`
      }}>
        Error loading students: {error}
      </div>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div style={{ 
        maxWidth: '600px', 
        margin: '2rem auto', 
        textAlign: 'center' 
      }}>
        <h3 style={{ color: colors.text }}>No student records found</h3>
        <Link 
          to="/add" 
          style={{ 
            padding: '0.5rem 1rem',
            backgroundColor: colors.accent,
            color: 'white',
            borderRadius: '5px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaUserPlus style={{ marginRight: '0.5rem' }} />
          Add First Student
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: colors.primary }}>
          <FaUserGraduate style={{ marginRight: '0.5rem' }} />
          Student Records
        </h2>
        <Link 
          to="/add" 
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: colors.accent,
            color: 'white',
            borderRadius: '5px',
            fontWeight: '600',
            textDecoration: 'none'
          }}
        >
          <FaUserGraduate style={{ marginRight: '0.5rem' }} />
          Add Student
        </Link>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>DOB</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Department</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Enrolled</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>
                {student.firstName} {student.lastName}
              </td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.studentId}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.email}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>
                {formatDate(student.dob)}
              </td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.department}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>{student.enrollmentYear}</td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd' }}>
                <span style={{
                  backgroundColor: student.isActive ? `${colors.success}20` : `${colors.text}20`,
                  color: student.isActive ? colors.success : colors.text,
                  padding: '0.25rem 0.5rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem'
                }}>
                  {student.isActive ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td style={{ padding: '0.75rem', border: '1px solid #ddd', textAlign: 'center' }}>
                <Link
                  to={`/edit/${student._id}`}
                  style={{ padding: '0.5rem', backgroundColor: `${colors.primary}20`, color: colors.primary, borderRadius: '5px', fontWeight: '600', textDecoration: 'none' }}
                >
                  <FaEdit style={{ marginRight: '0.5rem' }} />
                  Edit
                </Link>
                <button
                  onClick={() => {
                    if (window.confirm('Delete this student?')) {
                      deleteStudent(student._id);
                    }
                  }}
                  style={{ padding: '0.5rem', backgroundColor: `${colors.danger}20`, color: colors.danger, borderRadius: '5px', fontWeight: '600', cursor: 'pointer', marginLeft: '0.5rem' }}
                >
                  <FaTrashAlt style={{ marginRight: '0.5rem' }} />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentListTable;
