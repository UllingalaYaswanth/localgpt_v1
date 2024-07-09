// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar
// } from "@material-tailwind/react";
// import { projectsTableData, authorsTableData } from "@/data";

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [overflowingRows, setOverflowingRows] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(false); // Changed to boolean
//   const [showBackButton, setShowBackButton] = useState(false); // State for back button

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date();
//     date.setMinutes(date.getMinutes() - parseInt(timestamp, 10));
//     return date.toLocaleString();
//   };

//   useEffect(() => {
//     const newOverflowingRows = [];

//     projectsTableData.forEach((_, index) => {
//       const textElement = document.getElementById(`query-text-${index}`);
//       const containerElement = document.getElementById(`query-container-${index}`);
//       if (textElement && containerElement) {
//         if (textElement.scrollWidth > containerElement.clientWidth) {
//           newOverflowingRows.push(index);
//         }
//       }
//     });

//     setOverflowingRows(newOverflowingRows);
//   }, [projectsTableData]);

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup); // Toggle boolean value
//     setShowBackButton(true); // Show back button when selecting a group
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false); // Reset selectedGroup state
//     setShowBackButton(false); // Hide back button
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={() => {/* Handle button click */}}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick} // Handle click on table header
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {projectsTableData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === projectsTableData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       const isExpanded = expandedRow === key;
//                       const isOverflowing = overflowingRows.includes(key);

//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {document}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Accounts
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["author", "function", "status", "employed", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {authorsTableData.map(
//                       ({ img, name, email, job, online, date }, key) => {
//                         const className = `py-3 px-5 ${
//                           key === authorsTableData.length - 1
//                             ? ""
//                             : "border-b border-blue-gray-50"
//                         }`;

//                         return (
//                           <tr key={name}>
//                             <td className={className}>
//                               <div className="flex items-center gap-4">
//                                 {/* Replace with your Avatar component */}
//                                 <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                                 <div>
//                                   <Typography
//                                     variant="small"
//                                     color="blue-gray"
//                                     className="font-semibold"
//                                   >
//                                     {name}
//                                   </Typography>
//                                   <Typography className="text-xs font-normal text-blue-gray-500">
//                                     {email}
//                                   </Typography>
//                                 </div>
//                               </div>
//                             </td>
//                             <td className={className}>
//                               <Typography className="text-xs font-semibold text-blue-gray-600">
//                                 {job[0]}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {job[1]}
//                               </Typography>
//                             </td>
//                             <td className={className}>
//                               {/* Replace with your Chip component */}
//                               <div>{online ? 'online' : 'offline'}</div>
//                             </td>
//                             <td className={className}>
//                               <Typography className="text-xs font-semibold text-blue-gray-600">
//                                 {date}
//                               </Typography>
//                             </td>
//                             <td className={className}></td>
//                           </tr>
//                         );
//                       }
//                     )}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr className="items-center">
//                       {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-medium uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {projectsTableData.map(
//                       ({ name, timestamp, document, access_level }, key) => {
//                         const className = `py-3 px-5 ${
//                           key === projectsTableData.length - 1
//                             ? ""
//                             : "border-b border-blue-gray-50"
//                         }`;
//                         const isExpanded = expandedRow === key;
//                         const isOverflowing = overflowingRows.includes(key);
//                         return (
//                           <tr key={name}>
//                             <td className={className}>
//                               <Typography
//                                 variant="small"
//                                 className="text-xs font-medium text-blue-gray-600"
//                               >
//                                 {document}
//                               </Typography>
//                             </td>
//                             <td className={className}>
//                               <Typography
//                                 variant="small"
//                                 className="text-xs font-medium text-blue-gray-600"
//                               >
//                                 {formatDate(timestamp)}
//                               </Typography>
//                             </td>
//                             <td className={className}>
//                               <Typography
//                                 variant="small"
//                                 className="text-xs font-medium text-blue-gray-600"
//                               >
//                                 {access_level}
//                               </Typography>
//                             </td>
//                             <td className={className}>
//                               <Typography
//                                 variant="small"
//                                 className="text-xs font-medium text-blue-gray-600"
//                               >
//                                 {access_level}
//                               </Typography>
//                             </td>
//                           </tr>
//                         );
//                       }
//                     )}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,  
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter
// } from "@material-tailwind/react";

// // Manually written data
// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false); // Changed to boolean
//   const [showBackButton, setShowBackButton] = useState(false); // State for back button
//   const [group, setGroup] = useState('');
//   const [name, setName] = useState('');
//   const [document, setDocument] = useState('');
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to add new group, handle form submission
//     // Example:
//     console.log("Group Name:", group);
//     console.log("User Name:", name);
//     console.log("Document:", document);
//     // Reset form fields after submission
//     setGroup('');
//     setName('');
//     setDocument('');
//     setOpen(false); // Close dialog after submission
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup); // Toggle boolean value
//     setShowBackButton(true); // Show back button when selecting a group
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false); // Reset selectedGroup state
//     setShowBackButton(false); // Hide back button
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick} // Handle click on table header
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

// {selectedGroup && (
//     <div>
//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Accounts
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["author", "function", "status", "employed", ""].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example data, replace with your own */}
//                 <tr>
//                   <td className="py-3 px-5">
//                     <div className="flex items-center gap-4">
//                       <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                       <div>
//                         <Typography variant="small" color="blue-gray" className="font-semibold">
//                           John Doe
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           john.doe@example.com
//                         </Typography>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       Developer
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Full-time
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <div>Online</div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       {formatDate(Date.now())}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-medium uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {manuallyWrittenData.map(
//                   ({ name, timestamp, document, access_level }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === manuallyWrittenData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     return (
//                       <tr key={name}>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {formatDate(timestamp)}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   )}

//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <Input
//               type="text"
//               color="blue"
//               label="Add users"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <Input
//               type="text"
//               color="blue"
//               label="Add Documents"
//               value={document}
//               onChange={(e) => setDocument(e.target.value)}
//               required
//             />
//             <Button type="submit" color="blue">
//               Upload
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;



// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,  
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Select, // Add Select from Material Tailwind
//   Option, // Add Option from Material Tailwind
// } from "@material-tailwind/react";
// import axios from 'axios'; // Import Axios for API requests

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [name, setName] = useState('');
//   const [document, setDocument] = useState('');
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]); // State for users fetched from backend
//   const [selectedUsers, setSelectedUsers] = useState([]); // State for selected users

//   useEffect(() => {
//     // Fetch users from backend when component mounts
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users'); // Replace with your backend URL
//       setUsers(response.data); // Set fetched users to state
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Selected Users:", selectedUsers);
//     console.log("Document:", document);

//     const newGroup = {
//       name: group,
//       timestamp: Date.now(),
//       document: document,
//       access_level: "Private"
//     };
//     const updatedGroups = [...manuallyWrittenData, newGroup];
//     console.log("Updated Groups:", updatedGroups);

//     setGroup('');
//     setName('');
//     setDocument('');
//     setSelectedUsers([]);
//     setOpen(false);
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserSelect = (userId) => {
//     if (selectedUsers.includes(userId)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//     } else {
//       setSelectedUsers([...selectedUsers, userId]);
//     }
//   };

//   const handleRemoveUser = (userId) => {
//     setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

// {selectedGroup && (
//     <div>
//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Accounts
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["author", "function", "status", "employed", ""].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example data, replace with your own */}
//                 <tr>
//                   <td className="py-3 px-5">
//                     <div className="flex items-center gap-4">
//                       <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                       <div>
//                         <Typography variant="small" color="blue-gray" className="font-semibold">
//                           John Doe
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           john.doe@example.com
//                         </Typography>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       Developer
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Full-time
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <div>Online</div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       {formatDate(Date.now())}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-medium uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {manuallyWrittenData.map(
//                   ({ name, timestamp, document, access_level }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === manuallyWrittenData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     return (
//                       <tr key={name}>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {formatDate(timestamp)}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   )}

//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <div className="flex flex-col gap-2">
//               {users.map((user) => (
//                 <label key={user._id} className="flex items-center">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                     value={user._id}
//                     checked={selectedUsers.includes(user._id)}
//                     onChange={() => handleUserSelect(user._id)}
//                   />
//                   <span className="ml-2 text-sm text-blue-gray-600">
//                     {user.firstName} {user.lastName}
//                   </span>
//                 </label>
//               ))}
//             </div>
//             <Input
//               type="text"
//               color="blue"
//               label="Add Documents"
//               value={document}
//               onChange={(e) => setDocument(e.target.value)}
//               required
//             />
//             <Button type="submit" color="blue">
//               Upload
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;



// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from 'axios'; // Import Axios for API requests

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [name, setName] = useState('');
//   const [document, setDocument] = useState('');
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]); // State for users fetched from backend
//   const [selectedUsers, setSelectedUsers] = useState([]); // State for selected users
//   const [documents, setDocuments] = useState([]); // State for documents fetched from backend
//   const [selectedDocuments, setSelectedDocuments] = useState([]); // State for selected documents

//   useEffect(() => {
//     // Fetch users and documents from backend when component mounts
//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users'); // Replace with your backend URL
//       setUsers(response.data); // Set fetched users to state
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/documents'); // Replace with your backend URL
//       setDocuments(response.data); // Set fetched documents to state
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Selected Users:", selectedUsers);
//     console.log("Selected Documents:", selectedDocuments);

//     const newGroup = {
//       name: group,
//       timestamp: Date.now(),
//       documents: selectedDocuments,
//       access_level: "Private"
//     };
//     const updatedGroups = [...manuallyWrittenData, newGroup];
//     console.log("Updated Groups:", updatedGroups);

//     setGroup('');
//     setName('');
//     setDocument('');
//     setSelectedUsers([]);
//     setSelectedDocuments([]);
//     setOpen(false);
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserSelect = (userId) => {
//     if (selectedUsers.includes(userId)) {
//       setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//     } else {
//       setSelectedUsers([...selectedUsers, userId]);
//     }
//   };

//   const handleDocumentSelect = (documentId) => {
//     if (selectedDocuments.includes(documentId)) {
//       setSelectedDocuments(selectedDocuments.filter((id) => id !== documentId));
//     } else {
//       setSelectedDocuments([...selectedDocuments, documentId]);
//     }
//   };

//   const handleRemoveUser = (userId) => {
//     setSelectedUsers(selectedUsers.filter((id) => id !== userId));
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Accounts
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["author", "function", "status", "employed", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example data, replace with your own */}
//                     <tr>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray"
//                               className="font-semibold"
//                               >
//                                 John Doe
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 john.doe@example.com
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             Developer
//                           </Typography>
//                           <Typography className="text-xs font-normal text-blue-gray-500">
//                             Full-time
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <div>Online</div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             {formatDate(Date.now())}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5"></td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </CardBody>
//               </Card>
//             </div>
  
//             <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//               <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//                 <CardHeader
//                   floated={false}
//                   shadow={false}
//                   color="transparent"
//                   className="m-0 flex items-center justify-between p-6"
//                 >
//                   <div>
//                     <Typography variant="h6" color="blue-gray" className="mb-1">
//                       Documents
//                     </Typography>
//                   </div>
//                 </CardHeader>
//                 <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                   <table className="w-full min-w-[640px] table-auto">
//                     <thead>
//                       <tr className="items-center">
//                         {["Name", "Uploaded On", "Access Level", "Keyword", ""].map((el) => (
//                           <th
//                             key={el}
//                             className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                           >
//                             <Typography
//                               variant="small"
//                               className="text-[11px] font-medium uppercase text-blue-gray-400"
//                             >
//                               {el}
//                             </Typography>
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {manuallyWrittenData.map(
//                         ({ name, timestamp, document, access_level }, key) => {
//                           const className = `py-3 px-5 ${
//                             key === manuallyWrittenData.length - 1
//                               ? ""
//                               : "border-b border-blue-gray-50"
//                           }`;
//                           return (
//                             <tr key={name}>
//                               <td className={className}>
//                                 <Typography
//                                   variant="small"
//                                   className="text-xs font-medium text-blue-gray-600"
//                                 >
//                                   {document}
//                                 </Typography>
//                               </td>
//                               <td className={className}>
//                                 <Typography
//                                   variant="small"
//                                   className="text-xs font-medium text-blue-gray-600"
//                                 >
//                                   {formatDate(timestamp)}
//                                 </Typography>
//                               </td>
//                               <td className={className}>
//                                 <Typography
//                                   variant="small"
//                                   className="text-xs font-medium text-blue-gray-600"
//                                 >
//                                   {access_level}
//                                 </Typography>
//                               </td>
//                               <td className={className}>
//                                 <Typography
//                                   variant="small"
//                                   className="text-xs font-medium text-blue-gray-600"
//                                 >
//                                   {access_level}
//                                 </Typography>
//                               </td>
//                               <td className={className}>
//                                 <Button
//                                   size="sm"
//                                   color="indigo"
//                                   onClick={() => handleDocumentSelect(document._id)}
//                                 >
//                                   Select
//                                 </Button>
//                               </td>
//                             </tr>
//                           );
//                         }
//                       )}
//                     </tbody>
//                   </table>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         )}
  
//         <Dialog open={open} onClose={handleOpen}>
//           <DialogHeader>
//             <Typography variant="h5" color="blue-gray">
//               Add Group
//             </Typography>
//           </DialogHeader>
//           <DialogBody divider>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <Input
//                 type="text"
//                 color="blue"
//                 label="Group Name"
//                 value={group}
//                 onChange={(e) => setGroup(e.target.value)}
//                 required
//               />
//               <div className="flex flex-col gap-2">
//                 {users.map((user) => (
//                   <label key={user._id} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                       value={user._id}
//                       checked={selectedUsers.includes(user._id)}
//                       onChange={() => handleUserSelect(user._id)}
//                     />
//                     <span className="ml-2 text-sm text-blue-gray-600">
//                       {user.firstName} {user.lastName}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//               <div className="flex flex-col gap-2">
//                 {documents.map((document) => (
//                   <label key={document._id} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                       value={document._id}
//                       checked={selectedDocuments.includes(document._id)}
//                       onChange={() => handleDocumentSelect(document._id)}
//                     />
//                     <span className="ml-2 text-sm text-blue-gray-600">
//                       {document.name}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//               <Button type="submit" color="blue">
//                 Upload
//               </Button>
//             </form>
//           </DialogBody>
//           <DialogFooter>
//             <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//               Cancel
//             </Button>
//           </DialogFooter>
//         </Dialog>
//       </div>
//     );
//   }
  
//   export default Groups;
  

// version


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       // Assuming response.data is an array of documents with { id, name }
//       const documents = response.data.map(doc => ({ value: doc.id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     const newGroup = {
//       name: group,
//       timestamp: Date.now(),
//       documents: documents,
//       access_level: "Private"
//     };

//     const updatedGroups = [...manuallyWrittenData, newGroup];
//     console.log("Updated Groups:", updatedGroups);

//     setGroup('');
//     setDocuments([]);
//     setSelectedUsers([]);
//     setOpen(false);
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

// {selectedGroup && (
//     <div>
//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Accounts
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["author", "function", "status", "employed", ""].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example data, replace with your own */}
//                 <tr>
//                   <td className="py-3 px-5">
//                     <div className="flex items-center gap-4">
//                       <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                       <div>
//                         <Typography variant="small" color="blue-gray" className="font-semibold">
//                           John Doe
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           john.doe@example.com
//                         </Typography>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       Developer
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Full-time
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <div>Online</div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       {formatDate(Date.now())}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-medium uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {manuallyWrittenData.map(
//                   ({ name, timestamp, document, access_level }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === manuallyWrittenData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     return (
//                       <tr key={name}>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {formatDate(timestamp)}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   )}

//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <Select
//               isMulti
//               options={users.map(user => ({
//                 value: user._id,
//                 label: `${user.firstName} ${user.lastName}`
//               }))}
//               onChange={handleUserChange}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentsOptions}
//               onChange={(selectedOptions) => setDocuments(selectedOptions.map(option => option.value))}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Documents"
//             />
//             <Button type="submit" color="blue">
//               Upload
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// const Groups = () => {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//     fetchUsers();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documents = response.data.map(doc => ({ value: doc.id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       const response = await axios.post('http://localhost:5000/api/groups', {
//         name: group,
//         documents: documents,
//         selectedUsers: selectedUsers.map(user => user.value), // Assuming selectedUsers is an array of objects with a 'value' field
//         access_level: "Private"
//       });
//       const newGroup = response.data; // Assuming the response returns the newly created group object
//       console.log("New Group:", newGroup);

//       // Update UI or state as needed
//       const updatedGroups = [...manuallyWrittenData, newGroup];
//       console.log("Updated Groups:", updatedGroups);

//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);
//     } catch (error) {
//       console.error('Error adding group:', error);
//       // Handle error state or show error message to the user
//     }
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           {/* Display Accounts and Documents */}
//           {/* Your existing code for displaying Accounts and Documents */}
//         </div>
//       )}

//       {/* Add Group Dialog */}
//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <Select
//               isMulti
//               options={users.map(user => ({
//                 value: user._id,
//                 label: `${user.firstName} ${user.lastName}`
//               }))}
//               onChange={handleUserChange}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentsOptions}
//               onChange={(selectedOptions) => setDocuments(selectedOptions.map(option => option.value))}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Documents"
//             />
//             <Button type="submit" color="blue">
//               Create Group
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), documents: ["Document 1"], access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), documents: ["Document 2"], access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//     fetchGroups();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       // Assuming response.data is an array of documents with { id, name }
//       const documents = response.data.map(doc => ({ value: doc.id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/groups');
//       // Assuming response.data is an array of groups
//       // Update manuallyWrittenData or another state to hold fetched groups
//       console.log('Fetched groups:', response.data);
//     } catch (error) {
//       console.error('Error fetching groups:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       const response = await axios.post('http://localhost:5000/api/groups', {
//         name: group,
//         timestamp: Date.now(),
//         documents: documents,
//         access_level: "Private"
//       });

//       console.log('Group creation response:', response.data);

//       // Assuming response.data is the newly created group object
//       const newGroup = response.data;

//       // Update state or re-fetch groups to update UI
//       // Example: const updatedGroups = [...manuallyWrittenData, newGroup];
//       // setManuallyWrittenData(updatedGroups);

//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, documents, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {documents.length}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <Select
//               isMulti
//               options={users.map(user => ({
//                 value: user._id,
//                 label: `${user.firstName} ${user.lastName}`
//               }))}
//               onChange={handleUserChange}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentsOptions}
//               onChange={(selectedOptions) => setDocuments(selectedOptions.map(option => option.value))}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Documents"
//             />
//             <Button type="submit" color="blue">
//               Create
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;



// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       // Assuming response.data is an array of documents with { _id, name }
//       const documents = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       // Convert selected documents to an array of ObjectId strings
//       const documentIds = documents.map(doc => doc.value);

//       const response = await axios.post('http://localhost:5000/api/groups', {
//         name: group,
//         timestamp: Date.now(),
//         documents: documentIds, // Pass array of ObjectId strings
//         access_level: "Private"
//       });

//       console.log('Group creation response:', response.data);

//       // Assuming response.data is the newly created group object
//       const newGroup = response.data;

//       // Update state or re-fetch groups to update UI
//       // Example: const updatedGroups = [...manuallyWrittenData, newGroup];
//       // setManuallyWrittenData(updatedGroups);

//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//               <Button color="indigo" onClick={handleOpen}>
//                 Add Group
//               </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Accounts
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["author", "function", "status", "employed", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example data, replace with your own */}
//                     <tr>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               John Doe
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               john.doe@example.com
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           Developer
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           Full-time
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <div>Online</div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {formatDate(Date.now())}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5"></td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Document Name", "Uploaded By", "Uploaded On", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example data, replace with your own */}
//                     <tr>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="Document" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               Document 1
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               PDF
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               John Doe
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               john.doe@example.com
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {formatDate(Date.now())}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5"></td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}

//       <Dialog size="sm" active={open} toggler={() => setOpen(!open)}>
//         <DialogHeader toggler={() => setOpen(!open)}>Add Group</DialogHeader>
//         <DialogBody>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <Input
//                 type="text"
//                 color="lightBlue"
//                 placeholder="Group Name"
//                 value={group}
//                 onChange={(e) => setGroup(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <Select
//                 isMulti
//                 options={documentsOptions}
//                 onChange={(selectedOptions) => setDocuments(selectedOptions)}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 placeholder="Select Documents"
//               />
//             </div>
//             <div className="mb-4">
//               <Select
//                 isMulti
//                 options={users.map(user => ({ value: user._id, label: user.name }))}
//                 onChange={handleUserChange}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 placeholder="Select Users"
//               />
//             </div>
//             <DialogFooter>
//               <Button color="blueGray" onClick={() => setOpen(!open)}>
//                 Cancel
//               </Button>
//               <Button color="indigo" type="submit">
//                 Create
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogBody>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Avatar,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// export function Groups() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       // Assuming response.data is an array of documents with { _id, name }
//       const documents = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       // Convert selected documents to an array of ObjectId strings
//       const documentIds = documents.map(doc => doc.value);

//       const response = await axios.post('http://localhost:5000/api/groups', {
//         name: group,
//         timestamp: Date.now(),
//         documents: documentIds, // Pass array of ObjectId strings
//         access_level: "Private"
//       });

//       console.log('Group creation response:', response.data);

//       // Assuming response.data is the newly created group object
//       const newGroup = response.data;

//       // Update state or re-fetch groups to update UI
//       // Example: const updatedGroups = [...manuallyWrittenData, newGroup];
//       // setManuallyWrittenData(updatedGroups);

//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Accounts
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["author", "function", "status", "employed", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example data, replace with your own */}
//                     <tr>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               John Doe
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               john.doe@example.com
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           Developer
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           Full-time
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <div>Online</div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {formatDate(Date.now())}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5"></td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Document Name", "Uploaded By", "Uploaded On", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Example data, replace with your own */}
//                     <tr>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="Document" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               Document 1
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               PDF
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <div className="flex items-center gap-4">
//                           <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                           <div>
//                             <Typography variant="small" color="blue-gray" className="font-semibold">
//                               John Doe
//                             </Typography>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               john.doe@example.com
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography className="text-xs font-semibold text-blue-gray-600">
//                           {formatDate(Date.now())}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5"></td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}

//       <Dialog size="sm" active={open} toggler={handleOpen}>
//         <DialogHeader toggler={handleOpen}>Add Group</DialogHeader>
//         <DialogBody>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <Input
//                 type="text"
//                 color="lightBlue"
//                 placeholder="Group Name"
//                 value={group}
//                 onChange={(e) => setGroup(e.target.value)}
//               />
//             </div>
//             <div className="mb-4">
//               <Select
//                 isMulti
//                 options={documentsOptions}
//                 onChange={(selectedOptions) => setDocuments(selectedOptions)}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 placeholder="Select Documents"
//               />
//             </div>
//             <div className="mb-4">
//               <Select
//                 isMulti
//                 options={users.map(user => ({ value: user._id, label: user.name }))}
//                 onChange={handleUserChange}
//                 className="basic-multi-select"
//                 classNamePrefix="select"
//                 placeholder="Select Users"
//               />
//             </div>
//             <DialogFooter>
//               <Button color="blueGray" onClick={handleOpen}>
//                 Cancel
//               </Button>
//               <Button color="indigo" type="submit">
//                 Create
//               </Button>
//             </DialogFooter>
//           </form>
//         </DialogBody>
//       </Dialog>
//     </div>
//   );
// }

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// const Groups = () => {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(false);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//     fetchUsers();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documents = response.data.map(doc => ({ value: doc.id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', {
//         name: group,
//         documents: documents.map(doc => doc.value), // Extract ObjectId strings
//         selectedUsers: selectedUsers.map(user => user.value),
//         access_level: "Private"
//       });
//       const newGroup = response.data; // Assuming the response returns the newly created group object
//       console.log("New Group:", newGroup);

//       // Update UI or state as needed
//       const updatedGroups = [...manuallyWrittenData, newGroup];
//       console.log("Updated Groups:", updatedGroups);

//       // Clear form fields and close dialog
//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);

//       // Optionally, you can fetch updated data or update state here
//     } catch (error) {
//       console.error('Error adding group:', error);
//       // Handle error state or show error message to the user
//     }
//   };

//   const handleGroupClick = () => {
//     setSelectedGroup(!selectedGroup);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(false);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={handleGroupClick}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     ({ name, timestamp, document, access_level }, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={name} onClick={handleGroupClick}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

// {selectedGroup && (
//     <div>
//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Accounts
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["author", "function", "status", "employed", ""].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example data, replace with your own */}
//                 <tr>
//                   <td className="py-3 px-5">
//                     <div className="flex items-center gap-4">
//                       <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                       <div>
//                         <Typography variant="small" color="blue-gray" className="font-semibold">
//                           John Doe
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           john.doe@example.com
//                         </Typography>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       Developer
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Full-time
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <div>Online</div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       {formatDate(Date.now())}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5"></td>
//                 </tr>
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-medium uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {manuallyWrittenData.map(
//                   ({ name, timestamp, document, access_level }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === manuallyWrittenData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     return (
//                       <tr key={name}>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {formatDate(timestamp)}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   )}

//       {/* Add Group Dialog */}
//       <Dialog open={open} onClose={handleOpen}>
//         <DialogHeader>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody divider>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <Input
//               type="text"
//               color="blue"
//               label="Group Name"
//               value={group}
//               onChange={(e) => setGroup(e.target.value)}
//               required
//             />
//             <Select
//               isMulti
//               options={users.map(user => ({
//                 value: user._id,
//                 label: `${user.firstName} ${user.lastName}`
//               }))}
//               onChange={handleUserChange}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentsOptions}
//               onChange={(selectedOptions) => setDocuments(selectedOptions.map(option => option.value))}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               placeholder="Select Documents"
//             />
//             <Button type="submit" color="blue">
//               Create Group
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const manuallyWrittenData = [
//   { id: 1, name: "Group 1", timestamp: Date.now(), document: "Document 1", access_level: "Public" },
//   { id: 2, name: "Group 2", timestamp: Date.now(), document: "Document 2", access_level: "Private" },
//   // Add more entries as needed
// ];

// const Groups = () => {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [showBackButton, setShowBackButton] = useState(false);
//   const [group, setGroup] = useState('');
//   const [documents, setDocuments] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [documentsOptions, setDocumentsOptions] = useState([]);

//   useEffect(() => {
//     fetchDocuments();
//     fetchUsers();
//   }, []);

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documents = response.data.map(doc => ({ value: doc.id, label: doc.name }));
//       setDocumentsOptions(documents);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const toggleExpand = (index) => {
//     setExpandedRow(expandedRow === index ? null : index);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return date.toLocaleString();
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Group Name:", group);
//     console.log("Documents:", documents);
//     console.log("Selected Users:", selectedUsers);

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', {
//         name: group,
//         documents: documents.map(doc => doc.value), // Extract ObjectId strings
//         selectedUsers: selectedUsers.map(user => user.value),
//         access_level: "Private"
//       });
//       const newGroup = response.data; // Assuming the response returns the newly created group object
//       console.log("New Group:", newGroup);

//       // Update UI or state as needed
//       manuallyWrittenData.push(newGroup);

//       // Clear form fields and close dialog
//       setGroup('');
//       setDocuments([]);
//       setSelectedUsers([]);
//       setOpen(false);

//       // Optionally, you can fetch updated data or update state here
//     } catch (error) {
//       console.error('Error adding group:', error);
//       // Handle error state or show error message to the user
//     }
//   };

//   const handleGroupClick = (group) => {
//     setSelectedGroup(group);
//     setShowBackButton(true);
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(null);
//     setShowBackButton(false);
//   };

//   const handleUserChange = (selectedOptions) => {
//     setSelectedUsers(selectedOptions);
//   };

//   return (
//     <div className="mt-12">
//       {showBackButton && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                         onClick={() => handleGroupClick(el)}
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {manuallyWrittenData.map(
//                     (group, key) => {
//                       const className = `py-3 px-5 ${
//                         key === manuallyWrittenData.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={group.id} onClick={() => handleGroupClick(group)}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {formatDate(group.timestamp)}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

// {selectedGroup && (
//     <div>
//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Accounts
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["author", "function", "status", "employed", ""].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Example data, replace with your own */}
//                 <tr>
//                   <td className="py-3 px-5">
//                     <div className="flex items-center gap-4">
//                       <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                       <div>
//                         <Typography variant="small" color="blue-gray" className="font-semibold">
//                           John Doe
//                         </Typography>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           john.doe@example.com
//                         </Typography>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       Manager
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Organization
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <div className="w-max">
//                       <Typography
//                         variant="small"
//                         className="text-xs font-medium text-blue-gray-500"
//                       >
//                         Online
//                       </Typography>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Typography className="text-xs font-semibold text-blue-gray-600">
//                       23/04/18
//                     </Typography>
//                     <Typography className="text-xs font-normal text-blue-gray-500">
//                       Date
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5">
//                     <Button
//                       variant="text"
//                       color="red"
//                       className="text-xs font-medium"
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//                 {/* Add more rows as needed */}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>

//       <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//         <Card>
//           <CardHeader
//             floated={false}
//             shadow={false}
//             color="transparent"
//             className="m-0 flex items-center justify-between p-6"
//           >
//             <div>
//               <Typography variant="h6" color="blue-gray" className="mb-1">
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr>
//                   {["Name", "Created On", "Access Level"].map((el) => (
//                     <th
//                       key={el}
//                       className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                     >
//                       <Typography
//                         variant="small"
//                         className="text-[11px] font-bold uppercase text-blue-gray-400"
//                       >
//                         {el}
//                       </Typography>
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {manuallyWrittenData.map(
//                   (doc, key) => {
//                     const className = `py-3 px-5 ${
//                       key === manuallyWrittenData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     return (
//                       <tr key={doc.id}>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {doc.name}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {formatDate(doc.timestamp)}
//                           </Typography>
//                         </td>
//                         <td className={className}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {doc.access_level}
//                           </Typography>
//                         </td>
//                       </tr>
//                     );
//                   }
//                 )}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   )}
//   <Dialog open={open} handler={handleOpen}>
//     <DialogHeader>Add New Group</DialogHeader>
//     <form onSubmit={handleSubmit}>
//       <DialogBody divider>
//         <div className="mb-4">
//           <Input
//             label="Group Name"
//             value={group}
//             onChange={(e) => setGroup(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <Select
//             isMulti
//             options={documentsOptions}
//             value={documents}
//             onChange={setDocuments}
//             placeholder="Select Documents"
//           />
//         </div>
//         <div className="mb-4">
//           <Select
//             isMulti
//             options={users.map(user => ({ value: user.id, label: user.name }))}
//             value={selectedUsers}
//             onChange={handleUserChange}
//             placeholder="Select Users"
//           />
//         </div>
//       </DialogBody>
//       <DialogFooter>
//         <Button variant="text" color="red" onClick={handleOpen}>
//           Cancel
//         </Button>
//         <Button variant="gradient" color="indigo" type="submit">
//           Add
//         </Button>
//       </DialogFooter>
//     </form>
//   </Dialog>
// </div>
// );
// };

// export default Groups;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Select from 'react-select';
// import { Button, Input, Card, CardHeader, CardBody, Typography } from '@material-tailwind/react';

// const GroupDetails = ({ group }) => (
//   <div>
//     <h2>{group.name}</h2>
//     <h3>Accounts</h3>
//     <ul>
//       {group.users.map(user => (
//         <li key={user._id}>{user.firstName} {user.lastName} ({user.emailAddress})</li>
//       ))}
//     </ul>
//     <h3>Documents</h3>
//     <ul>
//       {group.documents.map(doc => (
//         <li key={doc._id}>{doc.name}</li>
//       ))}
//     </ul>
//   </div>
// );

// const Groups = () => {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [newGroup, setNewGroup] = useState({
//     name: '',
//     selectedUsers: [],
//     documents: [],
//     access_level: ''
//   });

//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/groups');
//         setGroups(response.data);
//       } catch (error) {
//         console.error('Error fetching groups:', error);
//       }
//     };

//     fetchGroups();
//   }, []);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     const fetchDocuments = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/files');
//         setDocuments(response.data);
//       } catch (error) {
//         console.error('Error fetching documents:', error);
//       }
//     };

//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const handleGroupClick = async (groupId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
//       setSelectedGroup(response.data);
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewGroup({ ...newGroup, [name]: value });
//   };

//   const handleUserSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
//   };

//   const handleDocumentSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
//       setGroups([...groups, response.data]);
//       setNewGroup({
//         name: '',
//         selectedUsers: [],
//         documents: [],
//         access_level: ''
//       });
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   const userOptions = users.map(user => ({
//     value: user._id,
//     label: `${user.firstName} ${user.lastName} (${user.emailAddress})`
//   }));

//   const documentOptions = documents.map(doc => ({
//     value: doc._id,
//     label: doc.name
//   }));

//   return (
//     <div>
//       <h1>Groups</h1>
//       <ul>
//         {groups.map(group => (
//           <li key={group._id} onClick={() => handleGroupClick(group._id)}>
//             {group.name}
//           </li>
//         ))}
//       </ul>
//       {selectedGroup && <GroupDetails group={selectedGroup} />}

//       <Card>
//         <CardHeader>
//           <Typography variant="h5">Create New Group</Typography>
//         </CardHeader>
//         <CardBody>
//           <form onSubmit={handleFormSubmit}>
//             <Input
//               type="text"
//               name="name"
//               value={newGroup.name}
//               onChange={handleInputChange}
//               placeholder="Group Name"
//               required
//             />
//             <Select
//               isMulti
//               options={userOptions}
//               onChange={handleUserSelectChange}
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentOptions}
//               onChange={handleDocumentSelectChange}
//               placeholder="Select Documents"
//             />
//             <Input
//               type="text"
//               name="access_level"
//               value={newGroup.access_level}
//               onChange={handleInputChange}
//               placeholder="Access Level"
//               required
//             />
//             <Button type="submit">Create Group</Button>
//           </form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Groups;



// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const Groups = () => {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [newGroup, setNewGroup] = useState({
//     name: '',
//     selectedUsers: [],
//     documents: [],
//     access_level: 'Private'
//   });
//   const [open, setOpen] = useState(false);
//   const [documentsOptions, setDocumentsOptions] = useState([]);
//   const [userOptions, setUserOptions] = useState([]);

//   useEffect(() => {
//     fetchGroups();
//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/admin/groups');
//       setGroups(response.data);
//     } catch (error) {
//       console.error('Error fetching groups:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       const usersData = response.data.map(user => ({ value: user._id, label: `${user.firstName} ${user.lastName} (${user.emailAddress})` }));
//       setUsers(response.data);
//       setUserOptions(usersData);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documentsData = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocuments(response.data);
//       setDocumentsOptions(documentsData);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const handleGroupClick = async (groupId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
//       setSelectedGroup(response.data);
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewGroup({ ...newGroup, [name]: value });
//   };

//   const handleUserSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
//   };

//   const handleDocumentSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
//       setGroups([...groups, response.data]);
//       setNewGroup({
//         name: '',
//         selectedUsers: [],
//         documents: [],
//         access_level: 'Private'
//       });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   return (
//     <div className="mt-12">
//       {selectedGroup && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groups.map(
//                     (group, key) => {
//                       const className = `py-3 px-5 ${
//                         key === groups.length - 1
//                           ? ""
//                           : "border-b border-blue-gray-50"
//                       }`;
//                       return (
//                         <tr key={group._id} onClick={() => handleGroupClick(group._id)}>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.name}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {new Date(group.timestamp).toLocaleString()}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.access_level}
//                             </Typography>
//                           </td>
//                           <td className={className}>
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue-gray-600 cursor-pointer"
//                             >
//                               {group.access_level}
//                             </Typography>
//                           </td>
//                         </tr>
//                       );
//                     }
//                   )}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Accounts
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Author", "Function", "Status", "Employed", ""].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.users.map(user => (
//                       <tr key={user._id}>
//                         <td className="py-3 px-5">
//                           <div className="flex items-center gap-4">
//                             <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" />
//                             <div>
//                               <Typography variant="small" color="blue-gray" className="font-semibold">
//                                 {user.firstName} {user.lastName}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {user.emailAddress}
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             Manager
//                           </Typography>
//                           <Typography className="text-xs font-normal text-blue-gray-500">
//                             Organization
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <div className="w-max">
//                             <Typography
//                               variant="small"
//                               className="text-xs font-medium text-blue
//                                           gray-600"> Active </Typography> </div> </td> <td className="py-3 px-5"> <div className="w-max"> <Typography variant="small" className="text-xs font-medium text-blue-gray-600"> Manager </Typography> <Typography variant="small" className="text-xs font-normal text-blue-gray-500"> Organization </Typography> </div> </td> <td className="py-3 px-5"> <div className="w-max"> <Typography variant="small" className="text-xs font-medium text-blue-gray-600"> Manager </Typography> <Typography variant="small" className="text-xs font-normal text-blue-gray-500"> Organization </Typography> </div> </td> </tr> ))} </tbody> </table> </CardBody> </Card> </div> <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1"> <Card> <CardHeader floated={false} shadow={false} color="transparent" className="m-0 flex items-center justify-between p-6" > <div> <Typography variant="h6" color="blue-gray" className="mb-1"> Documents </Typography> </div> </CardHeader> <CardBody className="overflow-x-scroll px-0 pt-0 pb-2"> <table className="w-full min-w-\[640px\] table-auto"> <thead> <tr> {\["Name", "Uploaded On", "Size", "Uploader", ""\].map((el) => ( <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left" > <Typography variant="small" className="text-\[11px\] font-bold uppercase text-blue-gray-400" > {el} </Typography> </th> ))} </tr> </thead> <tbody> {selectedGroup.documents.map(doc => ( <tr key={doc.\_id}> <td className="py-3 px-5"> <Typography variant="small" className="text-xs font-medium text-blue-gray-600"> {doc.name} </Typography> </td> <td className="py-3 px-5"> <Typography variant="small" className="text-xs font-medium text-blue-gray-600"> {new Date(doc.timestamp).toLocaleString()} </Typography> </td> <td className="py-3 px-5"> <Typography variant="small" className="text-xs font-medium text-blue-gray-600"> {doc.size} KB </Typography> </td> <td className="py-3 px-5"> <div className="flex items-center gap-4"> <Avatar src="https://via.placeholder.com/150" alt="User" size="sm" variant="rounded" /> <div> <Typography variant="small" color="blue-gray" className="font-semibold"> {doc.uploaderName} </Typography> <Typography className="text-xs font-normal text-blue-gray-500"> {doc.uploaderEmail} </Typography> </div> </div> </td> </tr> ))} </tbody> </table> </CardBody> </Card> </div> </div> )}

// <Dialog size="sm" active={open} toggler={handleOpen}>
//   <DialogHeader toggler={handleOpen}>Add Group</DialogHeader>
//   <DialogBody>
//     <form onSubmit={handleFormSubmit}>
//       <Input
//         type="text"
//         name="name"
//         value={newGroup.name}
//         onChange={handleInputChange}
//         placeholder="Group Name"
//         required
//         color="lightBlue"
//         size="regular"
//       />
//       <Select
//         isMulti
//         options={userOptions}
//         onChange={handleUserSelectChange}
//         placeholder="Select Users"
//       />
//       <Select
//         isMulti
//         options={documentsOptions}
//         onChange={handleDocumentSelectChange}
//         placeholder="Select Documents"
//       />
//       <Input
//         type="text"
//         name="access_level"
//         value={newGroup.access_level}
//         onChange={handleInputChange}
//         placeholder="Access Level"
//         required
//         color="lightBlue"
//         size="regular"
//       />
//     </form>
//   </DialogBody>
//   <DialogFooter>
//     <Button color="blueGray" onClick={handleOpen} ripple="light">
//       Cancel
//     </Button>
//     <Button color="lightBlue" onClick={handleFormSubmit} ripple="light">
//       Add Group
//     </Button>
//   </DialogFooter>
// </Dialog>
// </div>
// );
// };

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,

// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const Groups = () => {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [newGroup, setNewGroup] = useState({
//     name: '',
//     selectedUsers: [],
//     documents: [],
//     access_level: 'Private'
//   });
//   const [open, setOpen] = useState(false);
//   const [documentsOptions, setDocumentsOptions] = useState([]);
//   const [userOptions, setUserOptions] = useState([]);

//   useEffect(() => {
//     fetchGroups();
//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/admin/groups');
//       setGroups(response.data);
//     } catch (error) {
//       console.error('Error fetching groups:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       const usersData = response.data.map(user => ({ value: user._id, label: `${user.firstName} ${user.lastName} (${user.emailAddress})` }));
//       setUsers(response.data);
//       setUserOptions(usersData);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documentsData = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocuments(response.data);
//       setDocumentsOptions(documentsData);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const handleOpen = () => setOpen(!open);

//   const handleGroupClick = async (groupId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
//       setSelectedGroup(response.data);
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewGroup({ ...newGroup, [name]: value });
//   };

//   const handleUserSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
//   };

//   const handleDocumentSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
//       setGroups([...groups, response.data]);
//       setNewGroup({
//         name: '',
//         selectedUsers: [],
//         documents: [],
//         access_level: 'Private'
//       });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   return (
//     <div className="mt-12">
//       {selectedGroup && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No. of Users", "No. of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groups.map((group) => (
//                     <tr
//                       key={group._id}
//                       onClick={() => handleGroupClick(group._id)}
//                       className="cursor-pointer"
//                     >
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.name}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {new Date(group.timestamp).toLocaleString()}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.users.length}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.documents.length}
//                         </Typography>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Users
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "Email", "Role"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.users.map((user) => (
//                       <tr key={user._id}>
//                         <td className="py-3 px-5">
//                           <div className="flex items-center gap-4">
//                             <Avatar
//                               src="https://via.placeholder.com/150"
//                               alt="User"
//                               size="sm"
//                               variant="rounded"
//                             />
//                             <div>
//                               <Typography
//                                 variant="small"
//                                 color="blue-gray"
//                                 className="font-semibold"
//                               >
//                                 {user.firstName} {user.lastName}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {user.emailAddress}
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             {user.role}
//                           </Typography>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "Uploaded On", "Size", "Uploader"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.documents.map((doc) => (
//                       <tr key={doc._id}>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {doc.name}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {new Date(doc.timestamp).toLocaleString()}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {doc.size} KB
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <div className="flex items-center gap-4">
//                             <Avatar
//                               src="https://via.placeholder.com/150"
//                               alt="User"
//                               size="sm"
//                               variant="rounded"
//                             />
//                             <div>
//                               <Typography
//                                 variant="small"
//                                 color="blue-gray"
//                                 className="font-semibold"
//                               >
//                                 {doc.uploaderName}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {doc.uploaderEmail}
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}

//       <Dialog size="sm" active={open} toggler={handleOpen} >
//         <DialogHeader toggler={handleOpen}>Add Group</DialogHeader>
//         <DialogBody>
//           <form onSubmit={handleFormSubmit}>
//             <Input
//               type="text"
//               name="name"
//               value={newGroup.name}
//               onChange={handleInputChange}
//               placeholder="Group Name"
//               required
//               color="lightBlue"
//               size="regular"
//             />
//             <Select
//               isMulti
//               options={userOptions}
//               onChange={handleUserSelectChange}
//               placeholder="Select Users"
//             />
//             <Select
//               isMulti
//               options={documentsOptions}
//               onChange={handleDocumentSelectChange}
//               placeholder="Select Documents"
//             />
//             <Input
//               type="text"
//               name="access_level"
//               value={newGroup.access_level}
//               onChange={handleInputChange}
//               placeholder="Access Level"
//               required
//               color="lightBlue"
//               size="regular"
//             />
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button color="blueGray" onClick={handleOpen} ripple="light">
//             Cancel
//           </Button>
//           <Button color="lightBlue" onClick={handleFormSubmit} ripple="light">
//             Add Group
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default Groups;


// final code----------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const Groups = () => {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [newGroup, setNewGroup] = useState({
//     name: '',
//     selectedUsers: [],
//     documents: [],
//     access_level: 'Private'
//   });
//   const [open, setOpen] = useState(false);
//   const [documentsOptions, setDocumentsOptions] = useState([]);
//   const [userOptions, setUserOptions] = useState([]);

//   useEffect(() => {
//     fetchGroups();
//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/admin/groups');
//       setGroups(response.data);
//     } catch (error) {
//       console.error('Error fetching groups:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       const usersData = response.data.map(user => ({ value: user._id, label: `${user.firstName} ${user.lastName} (${user.emailAddress})` }));
//       setUsers(response.data);
//       setUserOptions(usersData);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documentsData = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocuments(response.data);
//       setDocumentsOptions(documentsData);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const handleOpen = () => setOpen(true);

//   const handleClose = () => setOpen(false);

//   const handleGroupClick = async (groupId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
//       setSelectedGroup(response.data);
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewGroup({ ...newGroup, [name]: value });
//   };

//   const handleUserSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
//   };

//   const handleDocumentSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
//       setGroups([...groups, response.data]);
//       setNewGroup({
//         name: '',
//         selectedUsers: [],
//         documents: [],
//         access_level: 'Private'
//       });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   return (
//     <div className="mt-12">
//       {selectedGroup && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No. of Users", "No. of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groups.map((group) => (
//                     <tr
//                       key={group._id}
//                       onClick={() => handleGroupClick(group._id)}
//                       className="cursor-pointer"
//                     >
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.name}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {new Date(group.timestamp).toLocaleString()}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.users.length}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.documents.length}
//                         </Typography>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Users
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "Email", "Role"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.users.map((user) => (
//                       <tr key={user._id}>
//                         <td className="py-3 px-5">
//                           <div className="flex items-center gap-4">
//                             <Avatar
//                               src="https://via.placeholder.com/150"
//                               alt="User"
//                               size="sm"
//                               variant="rounded"
//                             />
//                             <div>
//                               <Typography
//                                 variant="small"
//                                 color="blue-gray"
//                                 className="font-semibold"
//                               >
//                                 {user.firstName} {user.lastName}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {user.emailAddress}
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             {user.role}
//                           </Typography>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "File Type", "Uploaded On"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.documents.map((document) => (
//                       <tr key={document._id}>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document.name}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document.fileType}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {new Date(document.timestamp).toLocaleString()}
//                           </Typography>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}

//       <Dialog size="sm" active={open} toggler={handleClose}>
//         <DialogHeader toggler={handleClose}>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody>
//           <form onSubmit={handleFormSubmit}>
//             <Input
//               type="text"
//               placeholder="Group Name"
//               name="name"
//               value={newGroup.name}
//               onChange={handleInputChange}
//               required
//               className="mt-2 mb-4"
//               color="lightBlue"
//             />
//             <Select
//               options={userOptions}
//               isMulti
//               onChange={handleUserSelectChange}
//               className="mt-2 mb-4"
//               placeholder="Select Users"
//             />
//             <Select
//               options={documentsOptions}
//               isMulti
//               onChange={handleDocumentSelectChange}
//               className="mt-2 mb-4"
//               placeholder="Select Documents"
//             />
//             <Button color="indigo" type="submit">
//               Create
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button color="blue-gray" onClick={handleClose}>
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default Groups;


// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
//   Input,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   Avatar,
// } from "@material-tailwind/react";
// import axios from "axios";
// import Select from "react-select";

// const Groups = () => {
//   const [groups, setGroups] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [documents, setDocuments] = useState([]);
//   const [newGroup, setNewGroup] = useState({
//     name: '',
//     selectedUsers: [],
//     documents: [],
//     access_level: 'Private'
//   });
//   const [open, setOpen] = useState(false);
//   const [documentsOptions, setDocumentsOptions] = useState([]);
//   const [userOptions, setUserOptions] = useState([]);

//   useEffect(() => {
//     fetchGroups();
//     fetchUsers();
//     fetchDocuments();
//   }, []);

//   const fetchGroups = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/admin/groups');
//       setGroups(response.data);
//     } catch (error) {
//       console.error('Error fetching groups:', error);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/users');
//       const usersData = response.data.map(user => ({ value: user._id, label: `${user.firstName} ${user.lastName} (${user.emailAddress})` }));
//       setUsers(response.data);
//       setUserOptions(usersData);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const fetchDocuments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/files');
//       const documentsData = response.data.map(doc => ({ value: doc._id, label: doc.name }));
//       setDocuments(response.data);
//       setDocumentsOptions(documentsData);
//     } catch (error) {
//       console.error('Error fetching documents:', error);
//     }
//   };

//   const handleOpen = () => setOpen(true);

//   const handleClose = () => setOpen(false);

//   const handleGroupClick = async (groupId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
//       setSelectedGroup(response.data);
//     } catch (error) {
//       console.error('Error fetching group details:', error);
//     }
//   };

//   const handleBackClick = () => {
//     setSelectedGroup(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewGroup({ ...newGroup, [name]: value });
//   };

//   const handleUserSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
//   };

//   const handleDocumentSelectChange = (selectedOptions) => {
//     setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
//       setGroups([...groups, response.data]);
//       setNewGroup({
//         name: '',
//         selectedUsers: [],
//         documents: [],
//         access_level: 'Private'
//       });
//       setOpen(false);
//     } catch (error) {
//       console.error('Error creating group:', error);
//     }
//   };

//   return (
//     <div className="mt-12">
//       {selectedGroup && (
//         <Button
//           color="indigo"
//           onClick={handleBackClick}
//           className="mb-4"
//         >
//           Back
//         </Button>
//       )}

//       {!selectedGroup && (
//         <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//           <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//             <CardHeader
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className="m-0 flex items-center justify-between p-6"
//             >
//               <div>
//                 <Typography variant="h6" color="blue-gray" className="mb-1">
//                   Groups
//                 </Typography>
//               </div>
//               <div>
//                 <Button color="indigo" onClick={handleOpen}>
//                   Add Group
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//               <table className="w-full min-w-[640px] table-auto">
//                 <thead>
//                   <tr className="items-center">
//                     {["Name", "Created On", "No. of Users", "No. of Docs"].map((el) => (
//                       <th
//                         key={el}
//                         className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
//                       >
//                         <Typography
//                           variant="small"
//                           className="text-[11px] font-medium uppercase text-blue-gray-400"
//                         >
//                           {el}
//                         </Typography>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groups.map((group) => (
//                     <tr
//                       key={group._id}
//                       onClick={() => handleGroupClick(group._id)}
//                       className="cursor-pointer"
//                     >
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.name}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {new Date(group.timestamp).toLocaleString()}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.users.length}
//                         </Typography>
//                       </td>
//                       <td className="py-3 px-5">
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {group.documents.length}
//                         </Typography>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </CardBody>
//           </Card>
//         </div>
//       )}

//       {selectedGroup && (
//         <div>
//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Users
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "Email", "Role"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.users.map((user) => (
//                       <tr key={user._id}>
//                         <td className="py-3 px-5">
//                           <div className="flex items-center gap-4">
//                             <Avatar
//                               src="https://via.placeholder.com/150"
//                               alt="User"
//                               size="sm"
//                               variant="rounded"
//                             />
//                             <div>
//                               <Typography
//                                 variant="small"
//                                 color="blue-gray"
//                                 className="font-semibold"
//                               >
//                                 {user.firstName} {user.lastName}
//                               </Typography>
//                               <Typography className="text-xs font-normal text-blue-gray-500">
//                                 {user.emailAddress}
//                               </Typography>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography className="text-xs font-semibold text-blue-gray-600">
//                             {user.role}
//                           </Typography>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>

//           <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//             <Card>
//               <CardHeader
//                 floated={false}
//                 shadow={false}
//                 color="transparent"
//                 className="m-0 flex items-center justify-between p-6"
//               >
//                 <div>
//                   <Typography variant="h6" color="blue-gray" className="mb-1">
//                     Documents
//                   </Typography>
//                 </div>
//               </CardHeader>
//               <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//                 <table className="w-full min-w-[640px] table-auto">
//                   <thead>
//                     <tr>
//                       {["Name", "File Type", "Uploaded On"].map((el) => (
//                         <th
//                           key={el}
//                           className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                         >
//                           <Typography
//                             variant="small"
//                             className="text-[11px] font-bold uppercase text-blue-gray-400"
//                           >
//                             {el}
//                           </Typography>
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {selectedGroup.documents.map((document) => (
//                       <tr key={document._id}>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document.name}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {document.fileType}
//                           </Typography>
//                         </td>
//                         <td className="py-3 px-5">
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {new Date(document.timestamp).toLocaleString()}
//                           </Typography>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </div>
//         </div>
//       )}

//       <Dialog size="sm" active={open} toggler={handleClose}>
//         <DialogHeader toggler={handleClose}>
//           <Typography variant="h5" color="blue-gray">
//             Add Group
//           </Typography>
//         </DialogHeader>
//         <DialogBody>
//           <form onSubmit={handleFormSubmit}>
//             <Input
//               type="text"
//               placeholder="Group Name"
//               name="name"
//               value={newGroup.name}
//               onChange={handleInputChange}
//               required
//               className="mt-2 mb-4"
//               color="lightBlue"
//             />
//             <Select
//               options={userOptions}
//               isMulti
//               onChange={handleUserSelectChange}
//               className="mt-2 mb-4"
//               placeholder="Select Users"
//             />
//             <Select
//               options={documentsOptions}
//               isMulti
//               onChange={handleDocumentSelectChange}
//               className="mt-2 mb-4"
//               placeholder="Select Documents"
//             />
//             <Button color="indigo" type="submit">
//               Create
//             </Button>
//           </form>
//         </DialogBody>
//         <DialogFooter>
//           <Button color="blue-gray" onClick={handleClose}>
//             Cancel
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default Groups;


import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from "@material-tailwind/react";
import axios from "axios";
import Select from "react-select";

// UserDisplay Component
const UserDisplay = ({ user }) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar
        src="https://via.placeholder.com/150"
        alt="User"
        size="sm"
        variant="rounded"
      />
      <div>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-semibold"
        >
          {user.firstName} {user.lastName}
        </Typography>
        <Typography className="text-xs font-normal text-blue-gray-500">
          {user.emailAddress}
        </Typography>
        <Typography className="text-xs font-semibold text-blue-gray-600">
          {user.role}
        </Typography>
      </div>
    </div>
  );
};

// Groups Component
const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [users, setUsers] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [newGroup, setNewGroup] = useState({
    name: '',
    selectedUsers: [],
    documents: [],
    access_level: 'Private'
  });
  const [open, setOpen] = useState(false);
  const [documentsOptions, setDocumentsOptions] = useState([]);
  const [userOptions, setUserOptions] = useState([]);

  useEffect(() => {
    fetchGroups();
    fetchUsers();
    fetchDocuments();
  }, []);

  const fetchGroups = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/groups');
      setGroups(response.data);
    } catch (error) {
      console.error('Error fetching groups:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users');
      const usersData = response.data.map(user => ({ value: user._id, label: `${user.firstName} ${user.lastName} (${user.emailAddress})` }));
      setUsers(response.data);
      setUserOptions(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/files');
      const documentsData = response.data.map(doc => ({ value: doc._id, label: doc.name }));
      setDocuments(response.data);
      setDocumentsOptions(documentsData);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleGroupClick = async (groupId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/groups/${groupId}`);
      setSelectedGroup(response.data);
    } catch (error) {
      console.error('Error fetching group details:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedGroup(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handleUserSelectChange = (selectedOptions) => {
    setNewGroup({ ...newGroup, selectedUsers: selectedOptions.map(option => option.value) });
  };

  const handleDocumentSelectChange = (selectedOptions) => {
    setNewGroup({ ...newGroup, documents: selectedOptions.map(option => option.value) });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/admin/groups', newGroup);
      setGroups([...groups, response.data]);
      setNewGroup({
        name: '',
        selectedUsers: [],
        documents: [],
        access_level: 'Private'
      });
      setOpen(false);
    } catch (error) {
      console.error('Error creating group:', error);
    }
  };

  return (
    <div className="mt-12">
      {selectedGroup && (
        <Button
          color="indigo"
          onClick={handleBackClick}
          className="mb-4"
        >
          Back
        </Button>
      )}

      {!selectedGroup && (
        <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
          <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex items-center justify-between p-6"
            >
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  Groups
                </Typography>
              </div>
              <div>
                <Button color="indigo" onClick={handleOpen}>
                  Add Group
                </Button>
              </div>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr className="items-center">
                    {["Name", "Created On", "No. of Users", "No. of Docs"].map((el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left cursor-pointer"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {groups.map((group) => (
                    <tr
                      key={group._id}
                      onClick={() => handleGroupClick(group._id)}
                      className="cursor-pointer"
                    >
                      <td className="py-3 px-5">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {group.name}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {new Date(group.timestamp).toLocaleString()}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {group.users.length}
                        </Typography>
                      </td>
                      <td className="py-3 px-5">
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {group.documents.length}
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      )}

      {selectedGroup && (
        <div>
          <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    Users
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Name", "Email", "Role"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-5 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedGroup.users.map((user) => (
                      <tr key={user._id}>
                        <td className="py-3 px-5">
                          <UserDisplay user={user} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 flex items-center justify-between p-6"
              >
                <div>
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    Documents
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto">
                  <thead>
                    <tr>
                      {["Name", "Uploaded By", "Timestamp"].map((el) => (
                        <th
                          key={el}
                          className="border-b border-blue-gray-50 py-3 px-5 text-left"
                        >
                          <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                          >
                            {el}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedGroup.documents.map((document) => (
                      <tr key={document._id}>
                        <td className="py-3 px-5">
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {document.name}
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {document.uploadedBy}
                          </Typography>
                        </td>
                        <td className="py-3 px-5">
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {new Date(document.timestamp).toLocaleString()}
                          </Typography>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogHeader>Add New Group</DialogHeader>
        <DialogBody divider>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <Input
              label="Group Name"
              name="name"
              value={newGroup.name}
              onChange={handleInputChange}
              required
            />
            <Select
              isMulti
              name="users"
              options={userOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleUserSelectChange}
              placeholder="Select Users"
            />
            <Select
              isMulti
              name="documents"
              options={documentsOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleDocumentSelectChange}
              placeholder="Select Documents"
            />
            <Input
              type="text"
              label="Access Level"
              name="access_level"
              value={newGroup.access_level}
              onChange={handleInputChange}
              required
            />
            <div className="flex justify-end space-x-4">
              <Button variant="text" color="red" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" color="green">
                Save
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default Groups;
