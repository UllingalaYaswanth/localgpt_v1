import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { projectsTableData } from "@/data"; // Import your access_level metadata

export function Docs() {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch documents from Dropbox
  async function fetchDocuments() {
    // const accessToken = 'sl.B4dIlVv0i-32-tgCBGclXGe70nWu9p4zHzll5EavNSnTa5fO-OS_gWmIGKdWif_Cf0G_3yuPwu2z_8NUxmuAbAqnOn8Hc3l4vOj5ibR3pR9tdcsuRLjqPFXHMz1LpWDc3mIgwTXPSkNrM3mgUqUMN5o'; // Replace with your actual access token
    const dbx = axios.create({
      baseURL: 'https://api.dropboxapi.com/2',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    const paths = ['/localgpt/levelA', '/localgpt/levelB', '/localgpt/levelC'];

    try {
      const promises = paths.map(async (path) => {
        const response = await dbx.post('/files/list_folder', {
          path: path
        });

        const documentsInFolder = response.data.entries.map(entry => ({
          ...entry,
          access_level: getAccessLevel(entry.name) // Assuming getAccessLevel is a function to retrieve access level
        }));

        return documentsInFolder;
      });

      const results = await Promise.all(promises);
      const allDocuments = results.flat(); // Flatten the array of arrays

      setDocuments(allDocuments);
    } catch (error) {
      console.error('Error fetching documents from Dropbox:', error);
      // Optionally, show a user-friendly error message here
    }
  }

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Function to retrieve access level based on document name
  const getAccessLevel = (documentName) => {
    const matchedDocument = projectsTableData.find(doc => doc.name === documentName);
    return matchedDocument ? matchedDocument.access_level : 'Unknown'; // Return access level or default value
  };

  // Format timestamp function
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Function to handle document click (open in new tab)
  const handleDocumentClick = async (documentPath) => {
    try {
      // const accessToken = 'sl.B4dIlVv0i-32-tgCBGclXGe70nWu9p4zHzll5EavNSnTa5fO-OS_gWmIGKdWif_Cf0G_3yuPwu2z_8NUxmuAbAqnOn8Hc3l4vOj5ibR3pR9tdcsuRLjqPFXHMz1LpWDc3mIgwTXPSkNrM3mgUqUMN5o'; // Replace with your actual access token
      const dbx = axios.create({
        baseURL: 'https://api.dropboxapi.com/2',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      const response = await dbx.post('/files/get_temporary_link', {
        path: documentPath
      });

      const documentUrl = response.data.link;

      // Open the document in a new tab
      window.open(documentUrl, '_blank');

    } catch (error) {
      console.error('Error opening document:', error);
      // Optionally, show a user-friendly error message here
    }
  };

  // Filtered table data based on search term
  const filteredTableData = documents.filter((document) =>
    document.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                <Typography variant="h6" color="blue-gray" className="mb-1 mr-4">
                  Documents
                </Typography>
                <div className="relative ml-auto">
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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
              </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr className="items-center">
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      Document Name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      Uploaded On
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      Access Level
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      Keyword
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTableData.map((document, index) => (
                  <tr key={index} className="border-b border-blue-gray-50 cursor-pointer" onClick={() => handleDocumentClick(document.path_lower)}>
                    <td className="py-3 px-5">
                      <Typography
                        variant="small"
                        className="text-xs font-medium text-blue-gray-600 cursor-pointer"
                      >
                        {document.name}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography
                        variant="small"
                        className="text-xs font-medium text-blue-gray-600"
                      >
                        {formatDate(document.server_modified)}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography
                        variant="small"
                        className="text-xs font-medium text-blue-gray-600"
                      >
                        {document.access_level}
                      </Typography>
                    </td>
                    <td className="py-3 px-5">
                      <Typography
                        variant="small"
                        className="text-xs font-medium text-blue-gray-600"
                      >
                        {document.keyword}
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
  );
}

export default Docs;
