import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  Label,
  Option,
} from "@material-tailwind/react";

function AddDocumentPopup({ isOpen, onClose, onSubmit }) {
  const [documentName, setDocumentName] = useState('');
  const [tags, setTags] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = () => {
    const newDocument = {
      name: documentName,
      tags: tags.split(',').map(tag => tag.trim()),
      level,
    };
    onSubmit(newDocument);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Add New Document</h2>
        <div className="mb-4">
          <Label htmlFor="documentName">Document Name</Label>
          <Input
            type="text"
            id="documentName"
            value={documentName}
            onChange={(e) => setDocumentName(e.target.value)}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="level">Level</Label>
          <Select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 block w-full"
          >
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
          </Select>
        </div>
        <div className="flex justify-end">
          <Button onClick={onClose} color="blue-gray" ripple="light">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="blue" ripple="light" className="ml-2">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default AddDocumentPopup;
