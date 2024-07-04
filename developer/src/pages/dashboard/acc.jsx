// import React, { useState, useEffect } from "react";
// import {
//   Typography,
//   Card,
//   CardHeader,
//   CardBody,
//   Avatar,
//   Tooltip,
//   Chip,
//   Progress,
// } from "@material-tailwind/react";
// import { ClockIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
// import { StatisticsCard } from "@/widgets/cards";
// import { StatisticsChart } from "@/widgets/charts";
// import {
//   statisticsCardsData,
//   statisticsChartsData,
//   projectsTableData,
//   authorsTableData,
// } from "@/data";

// export function Acc() {
//   const [expandedRow, setExpandedRow] = useState(null);
//   const [overflowingRows, setOverflowingRows] = useState([]);

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
//                 Documents
//               </Typography>
//             </div>
//           </CardHeader>
//           <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//             <table className="w-full min-w-[640px] table-auto">
//               <thead>
//                 <tr className="items-center">
//                   {["name", "uploaded On", "access level", "keyword",].map((el) => (
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
//                 {projectsTableData.map(
//                   ({name, timestamp, document,access_level }, key) => {
//                     const className = `py-3 px-5 ${
//                       key === projectsTableData.length - 1
//                         ? ""
//                         : "border-b border-blue-gray-50"
//                     }`;
//                     const isExpanded = expandedRow === key;
//                     const isOverflowing = overflowingRows.includes(key);

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
//                         <Typography
//                             variant="small"
//                             className="text-xs font-medium text-blue-gray-600"
//                           >
//                             {access_level}
//                           </Typography>
                        
//                         </td>
//                         <td className={className}>
//                         <Typography
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
//   );
// }

// export default Acc;


import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { projectsTableData } from "@/data";
import { useNavigate } from 'react-router-dom';

export function Acc() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [overflowingRows, setOverflowingRows] = useState([]);
  const [addDocumentOpen, setAddDocumentOpen] = useState(false); // State for managing popup visibility
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const navigate = useNavigate();

  // Function to toggle the popup visibility
  const toggleAddDocumentPopup = () => {
    setAddDocumentOpen(!addDocumentOpen);
  };

  // Function to navigate to the documents page
  const navigateToDocument = () => {
    navigate(`/dashboard/documents`);
  };

  // Format timestamp function
  const formatDate = (timestamp) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - parseInt(timestamp, 10));
    return date.toLocaleString();
  };

  // Calculate overflowing rows
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

  // Filtered table data based on search term
  const filteredTableData = projectsTableData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <div className="flex items-center">
              <Typography variant="h6" color="blue-gray" className="mb-1 mr-4">
                Documents
              </Typography>
              <div className="relative">
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.293 14.707a1 1 0 001.414-1.414l-2.022-2.022a5.5 5.5 0 10-1.414 1.414l2.022 2.022zm-1.717.293a7.5 7.5 0 111.414-1.414l-2.022-2.022a3.5 3.5 0 10-1.414 1.414l2.022 2.022z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Typography variant="h6" color="blue-gray" className="mb-1">
              <button onClick={toggleAddDocumentPopup} className="p-1 rounded-md me-4">Add +</button>
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className="items-center">
                  {["name", "uploaded On", "access level", "keyword"].map((el) => (
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
                {filteredTableData.map(
                  ({ name, timestamp, access_level, keyword }, key) => {
                    const className = `py-3 px-5 ${
                      key === filteredTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {name}
                          </Typography>
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
                            {keyword}
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
      {addDocumentOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-lg font-medium mb-4">Add Document</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">Document Name</label>
                <input type="text" id="documentName" name="documentName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                <input type="text" id="tags" name="tags" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <div className="mb-4">
                <label htmlFor="accessLevel" className="block text-sm font-medium text-gray-700">Access Level</label>
                <select id="accessLevel" name="accessLevel" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={toggleAddDocumentPopup} className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Cancel
                </button>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Acc;
