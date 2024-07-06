import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { projectsTableData } from "@/data";

export function Groups() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [overflowingRows, setOverflowingRows] = useState([]);

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const formatDate = (timestamp) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - parseInt(timestamp, 10));
    return date.toLocaleString();
  };

  useEffect(() => {
    const newOverflowingRows = [];

    projectsTableData.forEach((_, index) => {
      const textElement = document.getElementById(`query-text-${index}`);
      const containerElement = document.getElementById(`query-container-${index}`);
      if (textElement && containerElement) {
        if (textElement.scrollWidth > containerElement.clientWidth) {
          newOverflowingRows.push(index);
        }
      }
    });

    setOverflowingRows(newOverflowingRows);
  }, [projectsTableData]);

  return (
    <div className="mt-12">
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
              <Button color="indigo" onClick={() => {/* Handle button click */}}>
                Add Group
              </Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className="items-center">
                  {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-6 text-left"
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
                {projectsTableData.map(
                  ({ name, timestamp, document, access_level }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
                    const isExpanded = expandedRow === key;
                    const isOverflowing = overflowingRows.includes(key);

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <Link to={`/dashboard/group/${name}`}>
                            {/* Link to navigate dynamically */}
                            <Typography
                              variant="small"
                              className="text-xs font-medium text-blue-gray-600"
                            >
                              {document}
                            </Typography>
                          </Link>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {formatDate(timestamp)}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {access_level}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {access_level}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Groups;


// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
// } from "@material-tailwind/react";
// import { projectsTableData, authorsTableData } from "@/data";

// // Assuming formatDate function remains unchanged
// const formatDate = (timestamp) => {
//   const date = new Date();
//   date.setMinutes(date.getMinutes() - parseInt(timestamp, 10));
//   return date.toLocaleString();
// };

// const Groups = () => {
//   const { groupName } = useParams(); // Access groupName parameter from URL

//   const [expandedRow, setExpandedRow] = useState(null);
//   const [overflowingRows, setOverflowingRows] = useState([]);

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

//   // Filter data based on groupName for GroupPage
//   const groupAuthorsData = authorsTableData.filter(author => author.group === groupName);
//   const groupProjectsData = projectsTableData.filter(project => project.group === groupName);

//   return (
//     <div className="mt-12">
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
//                 Groups
//               </Typography>
//             </div>
//             <div>
//               <Link to="/dashboard/group/add">
//                 {/* Link to navigate to Add Group page */}
//                 <Button color="indigo">
//                   Add Group
//                 </Button>
//               </Link>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
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
//                 {groupProjectsData.map(({ name, timestamp, access_level }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === groupProjectsData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;
//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         <Link to={`/dashboard/group/${name}`}>
//                           {/* Link to navigate dynamically */}
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {name}
//                           </Typography>
//                         </Link>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {formatDate(timestamp)}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {access_level}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {access_level}
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>

//         {/* Include GroupPage for Accounts and Documents */}
//         <GroupPage groupAuthorsData={groupAuthorsData} groupProjectsData={groupProjectsData} />
//       </div>
//     </div>
//   );
// };

// const GroupPage = ({ groupAuthorsData, groupProjectsData }) => (
//   <div className="mb-4 mt-12 grid grid-cols-1 gap-5 xl:grid-cols-1">
//     {/* Accounts Card */}
//     <Card>
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="m-0 flex items-center justify-between p-6"
//       >
//         <div>
//           <Typography variant="h6" color="blue-gray" className="mb-1">
//             Accounts
//           </Typography>
//         </div>
//       </CardHeader>
//       <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//         <table className="w-full min-w-[640px] table-auto">
//           <thead>
//             <tr>
//               {["author", "function", "status", "employed", ""].map((el) => (
//                 <th
//                   key={el}
//                   className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                 >
//                   <Typography
//                     variant="small"
//                     className="text-[11px] font-bold uppercase text-blue-gray-400"
//                   >
//                     {el}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {groupAuthorsData.map(({ img, name, email, job, online, date }, key) => (
//               <tr key={name}>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <div className="flex items-center gap-4">
//                     {/* Assuming Avatar component is imported correctly */}
//                     <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                     <div>
//                       <Typography variant="small" color="blue-gray" className="font-semibold">
//                         {name}
//                       </Typography>
//                       <Typography className="text-xs font-normal text-blue-gray-500">
//                         {email}
//                       </Typography>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <Typography className="text-xs font-semibold text-blue-gray-600">
//                     {job[0]}
//                   </Typography>
//                   <Typography className="text-xs font-normal text-blue-gray-500">
//                     {job[1]}
//                   </Typography>
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   {/* Assuming Chip component is imported correctly */}
//                   <Chip
//                     variant="gradient"
//                     color={online ? "green" : "blue-gray"}
//                     value={online ? "online" : "offline"}
//                     className="py-0.5 px-2 text-[11px] font-medium w-fit"
//                   />
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <Typography className="text-xs font-semibold text-blue-gray-600">
//                     {date}
//                   </Typography>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </CardBody>
//     </Card>

//     {/* Documents Card */}
//     <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//       <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 flex items-center justify-between p-6"
//         >
//           <div>
//             <Typography variant="h6" color="blue-gray" className="mb-1">
//               Documents
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr className="items-center">
//                 {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-medium uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {groupProjectsData.map(({ name, timestamp, access_level }, key) => (
//                 <tr key={name}>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {name}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {formatDate(timestamp)}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {access_level}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {access_level}
//                     </Typography>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </div>
//   </div>
// );

// export default Groups;



// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Button,
// } from "@material-tailwind/react";
// import { projectsTableData, authorsTableData } from "@/data";

// const formatDate = (timestamp) => {
//   const date = new Date();
//   date.setMinutes(date.getMinutes() - parseInt(timestamp, 10));
//   return date.toLocaleString();
// };

// const Groups = () => {
//   const { groupName } = useParams(); // Access groupName parameter from URL

//   const [expandedRow, setExpandedRow] = useState(null);
//   const [overflowingRows, setOverflowingRows] = useState([]);

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

//   const groupAuthorsData = authorsTableData.filter(author => author.group === groupName);
//   const groupProjectsData = projectsTableData.filter(project => project.group === groupName);

//   return (
//     <div className="mt-12">
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
//                 Groups
//               </Typography>
//             </div>
//             <div>
//               <Link to="/dashboard/group/add">
//                 <Button color="indigo">
//                   Add Group
//                 </Button>
//               </Link>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["Name", "Created On", "No.of Acc", "No.of Docs"].map((el) => (
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
//                 {groupProjectsData.map(({ name, timestamp, access_level }, key) => {
//                   const className = `py-3 px-5 ${
//                     key === groupProjectsData.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;
//                   return (
//                     <tr key={name}>
//                       <td className={className}>
//                         {/* Use anchor tags for smooth scrolling or toggle visibility */}
//                         <a href={`#${name}-accounts`}>
//                           <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {name}
//                           </Typography>
//                         </a>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {formatDate(timestamp)}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {access_level}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography
//                           variant="small"
//                           className="text-xs font-medium text-blue-gray-600"
//                         >
//                           {access_level}
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </CardBody>
//         </Card>

//         {/* Include GroupPage for Accounts and Documents */}
//         <GroupPage groupAuthorsData={groupAuthorsData} groupProjectsData={groupProjectsData} />
//       </div>
//     </div>
//   );
// };

// const GroupPage = ({ groupAuthorsData, groupProjectsData }) => (
//   <div className="mb-4 mt-12 grid grid-cols-1 gap-5 xl:grid-cols-1">
//     {/* Accounts Card */}
//     <Card id={`${groupProjectsData[0]?.name}-accounts`}> {/* Example assuming first project name is used */}
//       <CardHeader
//         floated={false}
//         shadow={false}
//         color="transparent"
//         className="m-0 flex items-center justify-between p-6"
//       >
//         <div>
//           <Typography variant="h6" color="blue-gray" className="mb-1">
//             Accounts
//           </Typography>
//         </div>
//       </CardHeader>
//       <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//         <table className="w-full min-w-[640px] table-auto">
//           <thead>
//             <tr>
//               {["author", "function", "status", "employed", ""].map((el) => (
//                 <th
//                   key={el}
//                   className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                 >
//                   <Typography
//                     variant="small"
//                     className="text-[11px] font-bold uppercase text-blue-gray-400"
//                   >
//                     {el}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {groupAuthorsData.map(({ img, name, email, job, online, date }, key) => (
//               <tr key={name}>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <div className="flex items-center gap-4">
//                     {/* Assuming Avatar component is imported correctly */}
//                     <Avatar src={img} alt={name} size="sm" variant="rounded" />
//                     <div>
//                       <Typography variant="small" color="blue-gray" className="font-semibold">
//                         {name}
//                       </Typography>
//                       <Typography className="text-xs font-normal text-blue-gray-500">
//                         {email}
//                       </Typography>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <Typography className="text-xs font-semibold text-blue-gray-600">
//                     {job[0]}
//                   </Typography>
//                   <Typography className="text-xs font-normal text-blue-gray-500">
//                     {job[1]}
//                   </Typography>
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   {/* Assuming Chip component is imported correctly */}
//                   <Chip
//                     variant="gradient"
//                     color={online ? "green" : "blue-gray"}
//                     value={online ? "online" : "offline"}
//                     className="py-0.5 px-2 text-[11px] font-medium w-fit"
//                   />
//                 </td>
//                 <td className="py-3 px-5 border-b border-blue-gray-50">
//                   <Typography className="text-xs font-semibold text-blue-gray-600">
//                     {date}
//                   </Typography>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </CardBody>
//     </Card>

//     {/* Documents Card */}
//     <div className="mb-4 grid grid-cols-1 gap-5 xl:grid-cols-1">
//       <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="m-0 flex items-center justify-between p-6"
//         >
//           <div>
//             <Typography variant="h6" color="blue-gray" className="mb-1">
//               Documents
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr className="items-center">
//                 {["name", "uploaded On", "access level", "keyword"].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-6 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-medium uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {groupProjectsData.map(({ name, timestamp, access_level }, key) => (
//                 <tr key={name}>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {name}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {formatDate(timestamp)}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {access_level}
//                     </Typography>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Typography
//                       variant="small"
//                       className="text-xs font-medium text-blue-gray-600"
//                     >
//                       {access_level}
//                     </Typography>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </div>
//   </div>
// );

// export default Groups;
