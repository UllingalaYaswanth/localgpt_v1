// import React, { useState } from 'react';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
// } from "@material-tailwind/react";
// import { authorsTableData } from "@/data";
// import { useNavigate } from 'react-router-dom';

// function AddUserForm({ isOpen, onClose }) {
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setrole] = useState('');
//   const [jobRole, setJobRole] = useState('');
//   const [online, setOnline] = useState(false);
//   const [level, setLevel] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       img: 'user.jpg',
//       firstname,
//       lastname,
//       email,
//       job: [role, jobRole],
//       online,
//       date: new Date().toLocaleDateString()
//     };

//     console.log('New User:', newUser);
//     onClose();
//   };

//   return (
//     <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
//         <h2 className="text-xl font-semibold mb-4">Add New User</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
//             <input type="text" id="name" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input type="text" id="name" value={lastname} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           {/* <div className="mb-4">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">Job Title</label>
//             <input type="text" id="role" value={role} onChange={(e) => setrole(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div> */}
//           <div className="mb-4">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">Job Title</label>
//             <input type="text" id="role" value={role} onChange={(e) => setrole(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          
//             <option value="users">User</option>
//             <option value="admin">Admin</option>
//             <option value="developer">Developer</option>
//             </div>
//           <div className="mb-4">
//             <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
//             <input type="text" id="level" value={level} onChange={(e) => setJobRole(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mt-4 flex justify-end">
//             <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Cancel</button>
//             <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export function Acc() {
//   const [isAddUserOpen, setIsAddUserOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const toggleAddUserPopup = () => {
//     setIsAddUserOpen(!isAddUserOpen);
//   };

//   const navigateToProfile = () => {
//     navigate(`/dashboard/profile`);
//   };

//   const filteredAuthors = authorsTableData.filter(author => 
//     author.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     author.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 flex items-center justify-between p-6"
//         >
//           <div className="flex items-center gap-4">
            
//             <Typography variant="h6" color="blue-gray" className="mb-1">
//               Accounts
//             </Typography>
//           </div>
//           <Typography variant="h6" color="blue-gray" className="mb-1">
//           <input 
//               type="text" 
//               placeholder="Search" 
//               value={searchQuery} 
//               onChange={(e) => setSearchQuery(e.target.value)} 
//               className="border border-gray-300 rounded-md py-1 px-4 me-5"
//             />
//             <button onClick={toggleAddUserPopup} className="p-1 rounded-md me-4">Add +</button>
//           </Typography>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["author", "function", "status", "employed", ""].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-bold uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredAuthors.map(
//                 ({ img, name, email, job, online, date, id }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === authorsTableData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                           <div>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-semibold cursor-pointer"
//                               onClick={navigateToProfile}
//                             >
//                               {name}
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {email}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {job[0]}
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {job[1]}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Chip
//                           variant="gradient"
//                           color={online ? "green" : "blue-gray"}
//                           value={online ? "online" : "offline"}
//                           className="py-0.5 px-2 text-[11px] font-medium w-fit"
//                         />
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {date}
//                         </Typography>
//                       </td>

//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//       <AddUserForm isOpen={isAddUserOpen} onClose={toggleAddUserPopup} />
//     </div>
//   );
// }

// export default Acc;


// import React, { useState } from 'react';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
//   Chip,
// } from "@material-tailwind/react";
// import { authorsTableData } from "@/data";
// import { useNavigate } from 'react-router-dom';

// function AddUserForm({ isOpen, onClose }) {
//   const [firstname, setFirstName] = useState('');
//   const [lastname, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [level, setLevel] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       img: 'user.jpg',
//       firstname,
//       lastname,
//       email,
//       job: [role],
//       online,
//       date: new Date().toLocaleDateString()
//     };

//     console.log('New User:', newUser);
//     onClose();
//   };

//   return (
//     <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
//         <h2 className="text-xl font-semibold mb-4">Add New User</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
//             <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
//             <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required>
//               <option value="">Select Role</option>
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//               <option value="developer">Developer</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
//             <input type="text" id="level" value={level} onChange={(e) => setLevel(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
//           </div>
//           <div className="mt-4 flex justify-end">
//             <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Cancel</button>
//             <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export function Acc() {
//   const [isAddUserOpen, setIsAddUserOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const toggleAddUserPopup = () => {
//     setIsAddUserOpen(!isAddUserOpen);
//   };

//   const navigateToProfile = () => {
//     navigate(`/dashboard/profile`);
//   };

//   const filteredAuthors = authorsTableData.filter(author => 
//     author.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     author.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="mt-12 mb-8 flex flex-col gap-12">
//       <Card>
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 flex items-center justify-between p-6"
//         >
//           <div className="flex items-center gap-4">
//             <Typography variant="h6" color="blue-gray" className="mb-1">
//               Accounts
//             </Typography>
//           </div>
//           <div className="flex items-center gap-4">
//             <input 
//               type="text" 
//               placeholder="Search" 
//               value={searchQuery} 
//               onChange={(e) => setSearchQuery(e.target.value)} 
//               className="border border-gray-300 rounded-md py-1 px-4"
//             />
//             <button onClick={toggleAddUserPopup} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Create</button>
//           </div>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["author", "function", "status", "employed", ""].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-bold uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {filteredAuthors.map(
//                 ({ img, name, email, job, online, date, id }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === authorsTableData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                           <div>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-semibold cursor-pointer"
//                               onClick={navigateToProfile}
//                             >
//                               {name}
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {email}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {job[0]}
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {job[1]}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Chip
//                           variant="gradient"
//                           color={online ? "green" : "blue-gray"}
//                           value={online ? "online" : "offline"}
//                           className="py-0.5 px-2 text-[11px] font-medium w-fit"
//                         />
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {date}
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//       <AddUserForm isOpen={isAddUserOpen} onClose={toggleAddUserPopup} />
//     </div>
//   );
// }

// export default Acc;


import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import { authorsTableData } from "@/data";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddUserForm({ isOpen, onClose }) {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [level, setLevel] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstName: firstname,
        lastName: lastname,
        emailAddress: email,
        password,
        role,
        level,
      });
      console.log('New User:', response.data.user);
      onClose();
    } catch (error) {
      console.error('Error registering user:', error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required>
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Level</label>
            <input type="text" id="level" value={level} onChange={(e) => setLevel(e.target.value)} className="mt-1 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 lg:text-lg" required />
          </div>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Cancel</button>
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function Acc() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const openAddUserForm = () => {
    setIsAddUserOpen(true);
  };

  const closeAddUserForm = () => {
    setIsAddUserOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = authorsTableData.filter((author) =>
    author.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (author) => {
    navigate(`/profile/${author.id}`);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <div className="flex justify-between items-center">
            <Typography variant="h6" color="white">Users Table</Typography>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="p-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                onClick={openAddUserForm}
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              >
                Create
              </button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Author", "Function", "Status", "Employed", ""].map((el) => (
                  <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    <Typography variant="small" color="blue-gray" className="font-bold opacity-70">{el}</Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((author, key) => (
                <tr key={author.name}>
                  <td className={`py-3 px-5 ${key === authorsTableData.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                    <div className="flex items-center gap-4">
                      <Avatar src={author.img} alt={author.name} size="sm" />
                      <div>
                        <Typography variant="small" color="blue-gray" className="font-semibold">{author.name}</Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">{author.email}</Typography>
                      </div>
                    </div>
                  </td>
                  <td className={`py-3 px-5 ${key === authorsTableData.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray" className="font-normal">{author.job.title}</Typography>
                      <Typography className="text-xs font-normal text-blue-gray-500">{author.job.description}</Typography>
                    </div>
                  </td>
                  <td className={`py-3 px-5 ${key === authorsTableData.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                    <div className="w-max">
                      <Chip variant="gradient" color={author.online ? "green" : "blue-gray"} value={author.online ? "online" : "offline"} className="py-0.5 px-2 text-[11px] font-medium" />
                    </div>
                  </td>
                  <td className={`py-3 px-5 ${key === authorsTableData.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                    <Typography variant="small" color="blue-gray" className="font-normal">{author.date}</Typography>
                  </td>
                  <td className={`py-3 px-5 ${key === authorsTableData.length - 1 ? "" : "border-b border-blue-gray-50"}`}>
                    <button onClick={() => handleRowClick(author)} className="text-blue-500 hover:underline">View Profile</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <AddUserForm isOpen={isAddUserOpen} onClose={closeAddUserForm} />
    </div>
  );
}

export default Acc;
