import { useState } from 'react';

export default function AddTask({onAddTask}) {
//   const [text, setText] = useState('');
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      company: formData.company || 'N/A', // Company หรือค่า N/A ถ้าไม่มี
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      imageUrl: 'https://via.placeholder.com/256', // Placeholder image
    };
    setPeople((prev) => [...prev, newPerson]);
    setFormData({ firstName: '', lastName: '', company: '', email: '', phoneNumber: '', message: '' }); // Reset form
  };
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
    </>
  );
}
