import React from "react";
import ReactQuill from "react-quill";
import ImageUploader from "./ImageUploader";

const EditorSection = ({ section, content, setContent, selectedFile, handleImageSelect }) => {
  return (
    <div className="bg-[#031E11] p-3 mb-3 rounded-md">
      {section.type === "heading" && <h2 className="text-xl font-bold">Heading 1</h2>}
      {section.type === "paragraph" && <ReactQuill theme="snow" value={content} onChange={setContent} />}
      {section.type === "image" && <ImageUploader selectedFile={selectedFile} handleImageSelect={handleImageSelect} />}
      {section.type === "link" && <input type="text" placeholder="Add Link" className="p-2 bg-transparent w-full border-b" />}
    </div>
  );
};

export default EditorSection;
