import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9]+$/.test(v); // Alphanumeric validation
      },
      message: props => `${props.value} is not a valid alphanumeric student ID!`
    }
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be at least 2 characters long']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email format validation
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    enum: ['Computer Science', 'Electrical', 'Mechanical', 'Civil', 'Electronics'] // Example departments
  },
  enrollmentYear: {
    type: Number,
    required: [true, 'Enrollment year is required'],
    min: [2000, 'Enrollment year must be 2000 or later'],
    max: [new Date().getFullYear(), `Enrollment year cannot be in the future`]
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
export default Student;